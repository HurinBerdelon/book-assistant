import Link from "next/link";

export function HomePageHeader() {
  return (
    <header className="pt-2 max-w-[800px]">
      <h1 className="text-xl font-semibold text-center">
        Book Assistant for Harry Potter and the Chamber of Secrets
      </h1>
      <div className="py-2">
        <p className="italic text-sm text-justify">
          This project was developed to showcase an AI integration to answer
          questions based on a PDF loaded. The books was parsed and saved as{" "}
          <Link
            className="underline"
            href="https://platform.openai.com/docs/guides/embeddings"
          >
            embeddings
          </Link>{" "}
          in a vector database. The questions made are queried in this database
          based on a mathematical similarity search and the response is given to
          a generative AI model to formulate the answer for the question.
        </p>
        <p className="pt-2">
          Try it now! Ask a question related to Harry Potter and the Chamber of
          Secrets!
        </p>
      </div>
    </header>
  );
}
