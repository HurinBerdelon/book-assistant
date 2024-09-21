"use client";

import { askQuestion } from "@/services/database/askQuestion";
import { ChangeEvent, FormEvent, useState } from "react";

export function QuestionComponent() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setQuestion(event.target.value);
  }

  async function handleAskQuestion(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const answer = await askQuestion(question);
    setAnswer(answer as string);
  }

  return (
    <div>
      <form onSubmit={handleAskQuestion}>
        <textarea
          className="text-black"
          value={question}
          onChange={handleChange}
        />
        <button type="submit">Enviar</button>
      </form>

      {answer ? <div>{answer}</div> : null}
    </div>
  );
}
