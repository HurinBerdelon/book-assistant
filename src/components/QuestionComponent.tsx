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
import { LoadingIcon } from "./Icons/LoadingIcon";
import { SendIcon } from "./Icons/SendIcon";

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
    try {
      const answer = await askQuestion(question);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "system", content: answer as string },
      ]);
      setQuestion("");
    } catch (error) {
      console.error(error);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          sender: "system",
          content:
            "Something went wrong with your question, can you please try again?",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      <form
        onSubmit={handleAskQuestion}
        className="flex items-center bg-black border-2 border-zinc-800 m-1 h-20"
      >
        <textarea
          className="text-zinc-300 bg-black rounded-sm w-80 h-full border-[1px] border-t-0 border-zinc-800 outline-none focus:border-zinc-800 ring-0 p-1 resize-none flex-1"
          value={question}
          onChange={handleChange}
        />
        <button
          className="outline-none px-4 h-full hover:bg-neutral-900 focus:bg-neutral-900"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? <LoadingIcon /> : <SendIcon className="fill-zinc-300" />}
        </button>
      </form>
    </div>
  );
}
