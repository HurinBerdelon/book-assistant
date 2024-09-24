import { Message } from "@/types/Message";
import { useEffect, useState } from "react";

import { QuestionComponent } from "./QuestionComponent";

export function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const element = document.getElementById("messages-ordered-list");
    if (element) {
      element.scrollTop = element.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="flex flex-col border-[1px] rounded-sm w-full h-[416px] border-zinc-300">
      <h4 className="bg-zinc-300 text-zinc-800 text-center font-semibold text-sm">
        Chat History
      </h4>
      <ol
        id="messages-ordered-list"
        className="flex flex-col gap-2 flex-1 py-1 px-2 overflow-auto"
      >
        {messages.map((message) => (
          <li
            key={message.content.slice(8)}
            className={`
            ${
              message.sender === "system"
                ? "text-start pr-8 italic"
                : "text-end pl-8"
            }
            leading-5
            `}
          >
            {message.content}
          </li>
        ))}
      </ol>
      <div>
        <QuestionComponent setMessages={setMessages} />
      </div>
    </div>
  );
}
