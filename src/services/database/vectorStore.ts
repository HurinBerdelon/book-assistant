import { PineconeStore } from "@langchain/pinecone";
import { OpenAIEmbeddings } from "@langchain/openai";
import { Pinecone as PineconeClient } from "@pinecone-database/pinecone";

const pinecone = new PineconeClient();

const pineconeIndex = pinecone.Index(process.env.PINECONE_INDEX!);

const embeddings = new OpenAIEmbeddings({
  model: "text-embedding-3-small",
});

export const vectorStore = new PineconeStore(embeddings, {
  pineconeIndex,
});
