'use server';

import { LangChainStream, StreamingTextResponse } from "ai";
import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate, PromptTemplate } from "@langchain/core/prompts"
import { createStuffDocumentsChain } from "langchain/chains/combine_documents";
import { getVectorStore } from "@/src/libs/astradb";
import { createRetrievalChain } from "langchain/chains/retrieval";


export async function POST(req: Request) {
    
    try {
        const body = await req.json();
        const messages = body.messages;

        const currentMessageContent = messages[messages.length - 1].content;

        const {stream, handlers} = LangChainStream(); 

        const chatModel = new ChatOpenAI({
            apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
            modelName: 'gpt-3.5-turbo',
            streaming: true,
            callbacks: [handlers],
            verbose: true,
        });

        const prompt = ChatPromptTemplate.fromMessages([
            [
                "system",
                "You are a chatbot for a personal portfolio website. You impersonate the website's owner. " +
                "Answer the user's questions based on the below context. " +
                "Whenever it makes sense, provide links to pages that contain more information about the topic from the given context. " +
                "Format your messages in markdown format.\n\n" +
                "Context:\n{context}",
            ],
            [
                "user", "{input}"
            ]
        ])

        const combineDocsChain = await createStuffDocumentsChain({
            llm: chatModel,
            prompt,
            documentPrompt: PromptTemplate.fromTemplate(
                "Page URL: {url}\n\nPage content:\n{page_content}"
            ),
            documentSeparator: "\n-------------\n"
        })
        
        const retriever = (await getVectorStore()).asRetriever();

        const retrievalChain = await createRetrievalChain({
            combineDocsChain,
            retriever,
        });

        // Retrieval chain takes user input, turns it into a vector. It's then used in a similarity search in our
        // astraDB vector store to find docs similar to user input. It will then pass all these documents to the
        // createstuffdocumentchain which takes them and puts them into the context field of our prompt

        retrievalChain.invoke({
            input: currentMessageContent
        })

        
        return new StreamingTextResponse(stream)

        } catch (error) {
            console.error('Error: ', error);
            return Response.json({ error: "Internal server error" }, { status: 500 });
        }
    }