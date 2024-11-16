"use client";

import HomePage from "./Home";


export default function Home() {

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="container mx-auto p-8">
          <h1 className="text-3x1 font-bold mb-6">Search of Vehicles</h1>
          <HomePage />
        </div>
      </main>
    </div>
  );
}
