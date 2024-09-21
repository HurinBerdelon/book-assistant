"use server";

import { vectorStore } from "@/services/database/vectorStore";
import { openAiModel } from "@/services/openAiModel";
import { ChatPromptTemplate } from "@langchain/core/prompts";

export async function askQuestion(question: string) {
  const retriever = vectorStore.asRetriever({
    k: 4,
  });

  const results = await retriever._getRelevantDocuments(question);

  const resultDocs = results.map((result) => result.pageContent);

  const template = ChatPromptTemplate.fromMessages([
    [
      "system",
      "Answer the users question with based in the following context: {context}. For all other questions that are out of the scope of these context, please respond politely that the question is out of your scope. In this case, do not answer it.",
    ],

    ["user", "{input}"],
  ]);

  const chain = template.pipe(openAiModel);

  const response = await chain.invoke({
    input: question,
    context: resultDocs,
  });

  return response.content;
}
