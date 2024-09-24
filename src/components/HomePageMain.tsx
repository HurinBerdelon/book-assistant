"use client";

import Image from "next/image";

import { ChatBot } from "./ChatBot";

export function HomePageMain() {
  return (
    <main className="flex flex-col items-center gap-8 flex-1 w-full max-w-[800px] justify-start md:flex-row ">
      <div className="flex flex-col gap-4 items-center md:w-1/2">
        <Image
          className=""
          src="/images/HarryPotter_and_the_chamber_of_secrets.jpg"
          alt="Harry potter and the chamber of secrets book cover"
          width={280}
          height={38}
          priority
        />
      </div>
      <div className="md:w-1/2">
        <ChatBot />
      </div>
    </main>
  );
}
