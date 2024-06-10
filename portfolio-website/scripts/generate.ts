import { DirectoryLoader } from "langchain/document_loaders/fs/directory";
import { TextLoader } from "langchain/document_loaders/fs/text";
import { DocumentInterface } from "@langchain/core/documents"
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

async function generateEmbeddings() {
    const loader = new DirectoryLoader(
        "app/", 
        {
            // load the .tsx file (this only takes file extensions) aka all the pages of the website, as a string
            ".tsx": (path) => new TextLoader(path)
        },
        true
    )

    const docs = (await loader.load())
    .filter(doc => doc.metadata.source.endsWith("page.tsx"))
    .map((doc): DocumentInterface => {
        // This changes the metadata path in my file to the url extension that brings to this page
        const url = doc.metadata.source
            .split("/app")[1]
            .split("/page.")[0] || "/"

        const pageContentTrimmed = doc.pageContent
            .replace(/^import.*$/gm, "") // remove all import statements
            .replace(/ className=(["']).*?\1| className{.*?}/g, "") // Remove all className props
            .replace(/^\s*[\r]/gm, "") // remove empty lines
            .trim();

            return {
                pageContent: pageContentTrimmed,
                metadata: { url }
            };
    });

    const splitter = RecursiveCharacterTextSplitter.fromLanguage("html");

    const splitDocs = await splitter.splitDocuments(docs)

    console.log(splitDocs)
}

generateEmbeddings();