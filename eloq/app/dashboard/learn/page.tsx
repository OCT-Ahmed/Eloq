import { fetchLevels } from "@/features/learning";
import Breadcrumb from "@/components/navigation/breadcrumb";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, Compass, Layers, Sparkles, TestTube } from "lucide-react";

// نصوص محفزة ومحددة لكل مستوى تساعد الطالب على تحديد مستواه
const LEVEL_META: Record<string, { desc: string }> = {
  a1: {
    desc: "Start from scratch! Build confidence with everyday phrases & core grammar.",
  },
  a2: {
    desc: "Speak with ease! Express routine ideas, ask questions, and travel freely.",
  },
  b1: {
    desc: "Unlock real fluency! Discuss topics, share opinions, and speak comfortably.",
  },
  b2: {
    desc: "Master debates & work! Express complex ideas with natural spontaneity.",
  },
  c1: {
    desc: "Near-native precision! Craft nuanced arguments and excel professionally.",
  },
};

const DEFAULT_LEVEL_META = {
  desc: "Master practical skills with step-by-step guided lessons tailored for you.",
};

export default async function Learn() {
  const links = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Learn", href: "/dashboard/learn" },
  ];

  const result = await fetchLevels();
  if (!result.ok) {
    console.error(result.error);
  }
  const levels = result.data ?? [];

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-4 pt-1 pb-8 sm:px-6">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="pt-1">
        <Breadcrumb items={links} />
      </nav>

      <main className="flex w-full flex-col gap-6">
        {/* Section 1: Learning Paths */}
        <section className="flex flex-col gap-3">
          <div className="flex items-center gap-2 text-foreground">
            <Compass className="h-5 w-5 text-eloq-purple" />
            <h1 className="text-xl font-bold tracking-tight">Learning Paths</h1>
          </div>

          {/* Compact Enticing General Path Card */}
          <Link
            href="/dashboard/learn/general"
            className="group relative block overflow-hidden rounded-2xl border border-border-subtle bg-card p-4 sm:p-5 shadow-soft transition-all duration-300 hover:border-eloq-purple/50 hover:shadow-float"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              {/* Badge & Enticing Single Phrase */}
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded-md bg-eloq-green/10 px-2.5 py-0.5 text-xs font-bold text-eloq-green">
                    <Sparkles className="h-3 w-3" />
                    General Track
                  </span>
                </div>
                <h2 className="text-lg font-bold text-foreground transition-colors group-hover:text-eloq-purple sm:text-xl">
                  General English
                </h2>
                <p className="text-xs sm:text-sm font-medium text-muted">
                   Your all-in-one path to confidence—master everyday English effortlessly!
                </p>
              </div>

              {/* Action CTA */}
              <div className="mt-1 sm:mt-0 flex shrink-0 items-center gap-1.5 text-xs sm:text-sm font-bold text-eloq-purple transition-all group-hover:translate-x-1">
                <span>Explore Path</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>

            {/* Bottom Accent Bar */}
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-eloq-purple via-eloq-green to-eloq-purple opacity-90" />
          </Link>
        </section>

        {/* Section 2: Path Levels */}
        <section className="flex flex-col gap-3">
          <div className="flex items-center gap-2 text-foreground">
            <Layers className="h-5 w-5 text-eloq-purple" />
            <h2 className="text-lg font-semibold">Available Levels</h2>
          </div>

          {/* Scrollable Container with exact padding prevents clipping */}
          <div className="-mx-2 px-2 py-2 overflow-x-auto scrollbar-none">
            <div className="flex items-stretch gap-4 w-max px-1 py-1">
              {levels.length > 0 ? (
                levels.map((level) => {
                  const key = (level.cefr || level.slug || "").toLowerCase();
                  const meta = LEVEL_META[key] || DEFAULT_LEVEL_META;

                  return (
                    <Link
                      key={level.slug}
                      href={`/dashboard/learn/${level.slug}`}
                      className="group block shrink-0"
                    >
                      <Card className="relative flex h-full w-72 flex-col justify-between border border-border-subtle bg-card p-4 rounded-2xl shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-eloq-purple/50 hover:shadow-float">
                        {/* Header & Level Info */}
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-base font-bold text-foreground transition-colors group-hover:text-eloq-purple">
                              {level?.name ?? "Level"}
                            </span>
                            {level.cefr && (
                              <span className="rounded-full bg-eloq-purple/10 px-2.5 py-0.5 text-xs font-bold text-eloq-purple border border-eloq-purple/20">
                                {level.cefr}
                              </span>
                            )}
                          </div>

                          {/* Level Hook / Summary */}
                          <p className="text-xs text-muted leading-relaxed">
                            {meta.desc}
                          </p>
                        </div>

                        {/* Card Footer CTA */}
                        <div className="mt-4 flex items-center justify-between border-t border-border-subtle/50 pt-3 text-xs font-semibold text-muted transition-colors group-hover:text-eloq-purple">
                          <span>Start Learning</span>
                          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                        </div>
                      </Card>
                    </Link>
                  );
                })
              ) : (
                <div className="text-sm text-muted py-2">No levels available.</div>
              )}
            </div>
          </div>
        </section>

        {/* Section 3: Tests */}
        <section className="flex flex-col gap-3">
          <div className="flex items-center gap-2 text-foreground">
            <TestTube className="h-5 w-5 text-eloq-purple" />
            <h2 className="text-lg font-semibold">Placement & Tests</h2>
          </div>

          <div className="-mx-2 px-2 py-2 overflow-x-auto scrollbar-none">
            <div className="flex items-center gap-4 w-max px-1 py-1">
              <Card className="flex h-20 min-w-[220px] flex-col justify-center rounded-2xl border border-dashed border-border-subtle bg-card/40 p-4 opacity-70">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted">Placement Test</span>
                <span className="text-sm font-bold text-muted">Coming Soon</span>
              </Card>

              <Card className="flex h-20 min-w-[220px] flex-col justify-center rounded-2xl border border-dashed border-border-subtle bg-card/40 p-4 opacity-70">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted">Certificates</span>
                <span className="text-sm font-bold text-muted">Coming Soon</span>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}