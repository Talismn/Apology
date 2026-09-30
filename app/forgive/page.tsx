
"use client";

import { useState } from "react";

export default function ForgivePage() {
  const [showThankYou, setShowThankYou] = useState(false);
  const [noClicked, setNoClicked] = useState(false);

  const handleNo = () => {
    setNoClicked(true);
  };

  const handleYes = () => {
    setShowThankYou(true);
  };

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
            ONE LAST THING
          </span>
        </header>

        {/* Main */}
        <section className="flex flex-1 items-center justify-center py-20">
          <div
            key={noClicked ? "moved" : "initial"}
            className="w-full max-w-2xl text-center animate-[fadeIn_0.6s_ease-out]"
          >
            <p className="mb-6 text-sm uppercase tracking-[0.4em] text-rose-200/50">
              I have one question
            </p>

            <h1 className="font-serif text-5xl leading-[1.05] sm:text-7xl">
              Forgive
              <br />
              <span className="italic text-rose-200">Me?</span>
            </h1>

            <div className="mt-16 flex flex-col items-center justify-center gap-5 sm:flex-row">
              <button
                onClick={handleYes}
                className={`rounded-full bg-rose-200 px-10 py-4 text-xs tracking-[0.25em] text-[#0d080b] transition duration-300 hover:scale-105 ${
                  noClicked ? "order-first" : ""
                }`}
              >
                YES
              </button>

              {!noClicked && (
                <button
                  onClick={handleNo}
                  className="rounded-full border border-white/10 px-10 py-4 text-xs tracking-[0.25em] text-white/50 transition duration-300 hover:border-white/25 hover:text-white"
                >
                  NO
                </button>
              )}
            </div>

            {noClicked && (
              <p className="mt-8 animate-[fadeIn_0.5s_ease-out] text-sm text-white/30">
                Maybe give me another chance? ♡
              </p>
            )}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/5 pt-6 text-center text-xs text-white/20">
          I hope your answer is yes.
        </footer>
      </div>

      {/* Thank You Popup */}
      {showThankYou && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6 backdrop-blur-sm">
          <div className="w-full max-w-md animate-[fadeIn_0.5s_ease-out] rounded-3xl border border-white/10 bg-[#160d11] px-8 py-12 text-center shadow-2xl">
            <p className="font-serif text-4xl italic text-rose-200 sm:text-5xl">
              Thank you Buttercup.
            </p>

            <p className="mt-5 text-lg text-white/60">
              I love you ❤️
            </p>

            <button
              onClick={() => setShowThankYou(false)}
              className="mt-8 rounded-full border border-white/10 px-6 py-3 text-xs tracking-[0.2em] text-white/40 transition hover:border-white/25 hover:text-white"
            >
              CLOSE
            </button>
          </div>
        </div>
      )}

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

