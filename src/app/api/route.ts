import { vectorStore } from "@/services/database/vectorStore";
import { parsePdfToDocument } from "@/utils/parsePdfToDocument";
import { NextRequest } from "next/server";
import { join } from "path";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const token = searchParams.get("token");

  if (token === process.env.POPULATE_DATABASE_TOKEN) {
    const path = join(__dirname, "../../../../public/books/book2.pdf");
    const documents = await parsePdfToDocument(path);

    await vectorStore.addDocuments(documents);

    return Response.json("Saved", { status: 201 });
  }

  return Response.json("Invalid Token", { status: 401 });
}
