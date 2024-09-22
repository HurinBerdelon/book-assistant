"use client";

import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from "react";

import { askQuestion } from "@/services/database/askQuestion";
import { Message } from "@/types/Message";
import { LoadingIcon } from "./LoadingIcon";

interface QuestionComponentProps {
  setMessages: Dispatch<SetStateAction<Message[]>>;
}

export function QuestionComponent({
  setMessages,
}: Readonly<QuestionComponentProps>) {
  const [question, setQuestion] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setQuestion(event.target.value);
  }

  async function handleAskQuestion(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "user", content: question },
    ]);
    const answer = await askQuestion(question);
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "system", content: answer as string },
    ]);
    setQuestion("");
    setIsLoading(false);
  }

  return (
    <div>
      <form
        onSubmit={handleAskQuestion}
        className="flex flex-col gap-4 items-center"
      >
        <textarea
          className="text-zinc-300 bg-black rounded-sm w-80 h-20 border-[1px] border-transparent outline-none focus:border-zinc-800 ring-0 p-1 resize-none"
          value={question}
          onChange={handleChange}
        />
        <button
          className="flex justify-center border-[1px] w-52 text-zinc-300 rounded-sm border-zinc-300 outline-none focus:border-zinc-400 focus:text-zinc-400 hover:border-zinc-400 hover:text-zinc-400"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? <LoadingIcon /> : "Enviar"}
        </button>
      </form>
    </div>
  );
}
