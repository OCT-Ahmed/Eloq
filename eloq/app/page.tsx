import { ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-dvh items-center justify-center px-5 py-16">
      <section className="w-full max-w-xl text-center">
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-card shadow-sm">
          <BookOpen className="h-7 w-7 text-primary" />
        </div>

        <p className="mb-2 text-sm font-semibold tracking-wide text-primary">
          ELOQ
        </p>

        <h1 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Learn English. Practice it. Live it.
        </h1>

        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-muted-foreground sm:text-base">
          You are visiting the early version of ELOQ.
          <br />
          Explore the learning experience and help us shape what comes next.
        </p>

        <div className="mx-auto mt-9 grid w-full max-w-md gap-3 sm:grid-cols-2">
          <Link
            href="/dashboard"
            className="
              group flex min-h-14 items-center justify-center gap-3
              rounded-xl border border-primary
              bg-primary px-5 py-3
              text-sm font-semibold
              text-primary-foreground
              shadow-sm
              transition-all duration-200
              hover:-translate-y-0.5
              hover:shadow-lg
              active:translate-y-0
            "
          >
            Go to Dashboard

            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>

          <Link
            href="/dashboard/learn/academic/beginner/units"
            className="
              group flex min-h-14 items-center justify-center gap-3
              rounded-xl border border-border
              bg-card px-5 py-3
              text-sm font-semibold
              text-foreground
              shadow-sm
              transition-all duration-200
              hover:-translate-y-0.5
              hover:border-primary/40
              hover:bg-muted
              hover:shadow-md
              active:translate-y-0
            "
          >
            Explore A1 Lessons

            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>

        <p className="mt-8 text-xs text-muted-foreground">
          Early preview · Built for learning through active practice
        </p>
      </section>
    </main>
  );
}