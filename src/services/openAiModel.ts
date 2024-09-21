import { ChatOpenAI } from "@langchain/openai";
export const openAiModel = new ChatOpenAI({
  model: "gpt-3.5-turbo",
});
