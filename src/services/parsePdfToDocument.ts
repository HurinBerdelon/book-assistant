import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

export async function parsePdfToDocument(path: string) {
  const loader = new PDFLoader(path, {
    splitPages: false,
  });

  const docs = await loader.load();

  const splitter = new RecursiveCharacterTextSplitter({
    separators: [`. \n`],
  });

  const splittedDocs = await splitter.splitDocuments(docs);

  return splittedDocs;
}
