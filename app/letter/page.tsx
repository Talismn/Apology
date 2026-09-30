
"use client";

export default function StoryPage() {
  return (
    <main className="min-h-screen bg-[#0d080b] text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-6 py-10 sm:px-10">
        {/* Header */}
        <header className="flex items-center justify-between">
          <button
            onClick={() => (window.location.href = "/story")}
            className="text-sm text-white/40 transition hover:text-white"
          >
            ← BACK
          </button>

          <span className="text-xs tracking-[0.35em] text-white/25">
            FOR YOU
          </span>
        </header>

        {/* Main */}
        <section className="flex flex-1 items-center py-20">
          <div className="w-full max-w-3xl">
            <p className="mb-6 text-sm uppercase tracking-[0.4em] text-rose-200/50">
              I want to say this in a way I know how to.
            </p>

            <h1 className="font-serif text-5xl leading-[1.05] sm:text-7xl">
              I'm truly
              <br />
              <span className="italic text-rose-200">sorry, Buttercup.</span>
            </h1>

            {/* Apology */}
            <div className="mt-14 max-w-2xl">
              <p className="text-base leading-8 text-white/60 sm:text-lg">
                I want to start by saying that I would never take your love for granted EVER.
              </p>

              <p className="mt-6 text-base leading-8 text-white/60 sm:text-lg">
                I should have never fallen asleep. We were sharing such an
                intimate and meaningful moment, and I understand how hurtful
                and insensitive it must have felt for me to suddenly stop replying just to find out i had slept
                off. You deserved my presence, my attention, and my LOVE in
                that moment.
              </p>

              <p className="mt-6 text-base leading-8 text-white/60 sm:text-lg">
                You have been nothing but an amazing and beautiful person to
                me, and I would never want you to feel like I take that for
                granted. I cherish you, I love you wholeheartedly, and I know
                you love me because you constantly show and teach me how to Love. I want to make
                sure that I show that same love to you too in ten fold.
              </p>

              <p className="mt-6 text-base leading-8 text-white/60 sm:text-lg">
                It has always been US against the world. You've kept on saving me from self destructing, even at your own expenses.
                I'd never take that for Granted. I'm forever in debted to you for helping me and giving me a listening ear where no-one would.
                I LOVE YOU MAMA.
              </p>

              <p className="mt-6 text-base leading-8 text-white/60 sm:text-lg">
                I'm sorry that sometimes i do't think about how my actions would make
                you feel. I'm sorry that I let you down. Most importantly, I'm
                sorry that I made someone I love feel hurt and unimportant,
                even if that was never my intention.
              </p>

              <p className="mt-6 text-base leading-8 text-white/60 sm:text-lg">
                I don't want this to just be an apology written on a screen.
                I want you to know that I understand what I did wrong, and I
                want my actions going forward to show you that I mean what I'm
                saying.
              </p>

              <p className="mt-8 font-serif text-2xl italic text-rose-200/80">
                I'm really, really sorry.
              </p>
            </div>

            {/* Navigation */}
            <div className="mt-12">
              <button
                onClick={() => (window.location.href = "/forgive")}
                className="rounded-full bg-rose-200 px-6 py-3 text-xs tracking-[0.2em] text-[#0d080b] transition hover:scale-105"
              >
                FORGIVE ME →
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/5 pt-6 text-xs text-white/20">
          Some things deserve to be said properly.
        </footer>
      </div>
    </main>
  );
}

