"use client";

import Image from "next/image";
import { useState } from "react";

import { QuestionComponent } from "./QuestionComponent";
import { Message } from "@/types/Message";
import { ChatHistory } from "./ChatHistory";

export function HomePageMain() {
  const [messages, setMessages] = useState<Message[]>([]);

  return (
    <main className="flex gap-8 flex-1 w-full max-w-[800px] justify-start">
      <div className="flex flex-col gap-4 items-center w-1/2">
        <Image
          className=""
          src="/images/HarryPotter_and_the_chamber_of_secrets.jpg"
          alt="Harry potter and the chamber of secrets book cover"
          width={208}
          height={38}
          priority
        />
        <QuestionComponent setMessages={setMessages} />
      </div>
      <div className="w-1/2">
        <ChatHistory messages={messages} />
      </div>
    </main>
  );
}
