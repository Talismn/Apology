"use client";

import { useState } from "react";

export default function Home() {
  const [opened, setOpened] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#0d080b] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(130,40,70,0.22),transparent_45%)]" />

      <div className="relative flex min-h-screen items-center justify-center px-6">
        <div
          className={`w-full max-w-3xl text-center transition-all duration-1000 ${
            opened
              ? "scale-95 opacity-0 pointer-events-none"
              : "scale-100 opacity-100"
          }`}
        >
          <p className="mb-8 text-sm uppercase tracking-[0.45em] text-white/45">
            Buttercup
          </p>

          <h1 className="font-serif text-5xl leading-tight tracking-tight sm:text-7xl">
            I owe you
            <br />
            <span className="italic text-rose-200">an apology.</span>
          </h1>

          <p className="mx-auto mt-8 max-w-lg text-base leading-8 text-white/60 sm:text-lg">
            I could have just said sorry.
            <br />
            But i need you to know i mean it.
          </p>

          <button
            onClick={() => setOpened(true)}
            className="mt-12 rounded-full border border-white/15 bg-white/[0.06] px-8 py-4 text-sm tracking-[0.2em] text-white transition-all duration-300 hover:border-white/30 hover:bg-white/10"
          >
            OPEN THIS
          </button>
        </div>

        <div
          className={`absolute inset-0 flex items-center justify-center px-6 transition-all duration-1000 ${
            opened
              ? "translate-y-0 opacity-100"
              : "pointer-events-none translate-y-8 opacity-0"
          }`}
        >
          <div className="max-w-2xl text-center">
            <p className="mb-8 text-sm uppercase tracking-[0.4em] text-rose-200/60">
              Before anything else
            </p>

            <h2 className="font-serif text-4xl leading-tight sm:text-6xl">
              You deserve
              <br />
              <span className="italic text-rose-200">my LOVE and ATTENTION.</span>
            </h2>

            <p className="mx-auto mt-8 max-w-xl text-base leading-8 text-white/60 sm:text-lg">
              I know there have been moments when i've Fucked up and I should have been there, and instead I wasn't. I don't want to brush that off
              with a casual apology.
              You deserve more than that.
            </p>

            <button
              onClick={() => {
                window.location.href = "/story";
              }}
              className="mt-10 rounded-full bg-white px-8 py-4 text-sm font-medium tracking-[0.15em] text-[#0d080b] transition-transform duration-300 hover:scale-105"
            >
              KEEP READING →
            </button>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-6 left-0 right-0 text-center text-xs tracking-[0.25em] text-white/20">
        From BUBBA to BUTTERCUP
      </div>
    </main>
  );
}
