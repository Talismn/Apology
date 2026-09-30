"use client";

import { useState } from "react";

const moments = [
  {
    number: "01",
    title: "I should have been present.",
    text: "I shouldn't have slept off, We were having such an intimate moment that sleeping off was such an insensitive thing to do. I acknowledge my mistake Buttercup, And i am deeply sorry i hurt you like this.",
  },
  {
    number: "02",
    title: "I understand why that hurt you.",
    text: "You have been nothing than an amazing and beautiful person to me in this relationship. I  would never ever take that for granted as i cherish and love you wholeheartedly. Circumstances has played some part in this but i have nothing but myself to blame. I know you love me cause you show me. I WANT TO SHOW MY LOVE TO YOU TOO .",
  },
  {
    number: "03",
    title: "I'm not going to hide behind an excuse.",
    text: "Being on cough syrup may explain what happened, but it doesn't erase the fact that I could have handled the situation better. I could have told you i felt drowsy. I could have waited till afterwards to take my drug. Im sorry I didnt take the smarter routes. Im sorry i let you down.",
  },
];

export default function StoryPage() {
  const [current, setCurrent] = useState(0);

  const moment = moments[current];

  return (
    <main className="min-h-screen bg-[#0d080b] text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-6 py-10 sm:px-10">
        {/* Header */}
        <header className="flex items-center justify-between">
          <button
            onClick={() => (window.location.href = "/")}
            className="text-sm text-white/40 transition hover:text-white"
          >
            ← BACK
          </button>

          <span className="text-xs tracking-[0.35em] text-white/25">
            01 / 04
          </span>
        </header>

        {/* Main */}
        <section className="flex flex-1 items-center py-20">
          <div className="w-full">
            <p className="mb-6 text-sm uppercase tracking-[0.4em] text-rose-200/50">
             I want to talk about it
            </p>

            <h1 className="max-w-3xl font-serif text-5xl leading-[1.05] sm:text-7xl">
              No room for
              <br />
              <span className="italic text-rose-200">making excuses.</span>
            </h1>

            <div className="mt-16 grid gap-12 md:grid-cols-[120px_1fr]">
              {/* Progress */}
              <div className="flex gap-3 md:flex-col">
                {moments.map((item, index) => (
                  <button
                    key={item.number}
                    onClick={() => setCurrent(index)}
                    className={`text-left text-sm transition ${
                      index === current
                        ? "text-rose-200"
                        : "text-white/20 hover:text-white/50"
                    }`}
                  >
                    {item.number}
                  </button>
                ))}
              </div>

              {/* Content */}
              <div className="max-w-2xl">
                <div
                  key={moment.number}
                  className="animate-[fadeIn_0.5s_ease-out]"
                >
                  <p className="mb-5 text-sm tracking-[0.25em] text-white/25">
                    {moment.number}
                  </p>

                  <h2 className="font-serif text-3xl leading-tight sm:text-4xl">
                    {moment.title}
                  </h2>

                  <p className="mt-7 text-base leading-8 text-white/55 sm:text-lg">
                    {moment.text}
                  </p>
                </div>

                {/* Navigation */}
                <div className="mt-12 flex items-center gap-4">
                  {current > 0 && (
                    <button
                      onClick={() => setCurrent(current - 1)}
                      className="rounded-full border border-white/10 px-6 py-3 text-xs tracking-[0.2em] text-white/50 transition hover:border-white/25 hover:text-white"
                    >
                      ← PREVIOUS
                    </button>
                  )}

                  {current < moments.length - 1 ? (
                    <button
                      onClick={() => setCurrent(current + 1)}
                      className="rounded-full bg-white px-6 py-3 text-xs tracking-[0.2em] text-[#0d080b] transition hover:scale-105"
                    >
                      NEXT →
                    </button>
                  ) : (
                    <button
                      onClick={() => (window.location.href = "/letter")}
                      className="rounded-full bg-rose-200 px-6 py-3 text-xs tracking-[0.2em] text-[#0d080b] transition hover:scale-105"
                    >
                      My Apology letter →
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/5 pt-6 text-xs text-white/20">
          Actions speak louder than any sorry.
        </footer>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}