import { StreamingTextResponse } from "ai";
import { ChatCompletionMessageParam } from "ai/prompts";
// import OpenAI from "openai";
import { openai, createOpenAI } from '@ai-sdk/openai';

export async function POST(req: Request) {
    
    try {
        const body = await req.json();
        const messages = body.messages;

        // const openai = new OpenAI();
        const ai = openai({
            apiKey: process.env.OPENAI_API_KEY,
          });

        const systemMessage: ChatCompletionMessageParam = {
            role: 'system',
            // These are instructions for the chatbot, which is why the role is system and the content is the instruction
            content: 'You are a sarcasm bot. You answer all user questions in a sarcastic way.'
        }

        const response = await createOpenAI({
            model: "gpt-3.5-turbo",
            stream: true,
            messages: [systemMessage, ...messages]
        })

        const stream = OpenAIS(response);
        return new StreamingTextResponse(stream);

    } catch (error) {
        return Response.json({error: "Internal server error"})
    }

}