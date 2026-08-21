import { fetchLevelBySlug, fetchUnits } from "@/features/learning";
import Breadcrumb from "@/components/navigation/breadcrumb";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, BookOpen, Info, Layers } from "lucide-react";

export default async function LevelPage({
  params,
}: {
  params: Promise<{ levelSlug: string }>;
}) {
  const { levelSlug } = await params;
  const { data: levelData } = await fetchLevelBySlug(levelSlug);

  const result = await fetchUnits(levelData.id);
  if (result.error) {
    throw result.error.message;
  }
  const levelUnits = result?.data ?? [];

  const levelTitle = levelData?.name ?? levelSlug;

  const links = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Learn", href: "/dashboard/learn" },
    { label: levelTitle, href: `/dashboard/learn/${levelSlug}` },
  ];

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-4 pt-1 pb-12 sm:px-6">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="pt-1">
        <Breadcrumb links={links} />
      </nav>

      {/* Main Content Layout */}
      <main className="flex w-full flex-col gap-6">
        {/* Level Header Banner */}
        <header className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-eloq-purple">
            <Layers className="h-5 w-5" />
            <span className="text-xs font-bold uppercase tracking-wider">
              Level Overview
            </span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl capitalize">
            {levelTitle}
          </h1>
        </header>

        {/* Debug Result Object (Kept commented out so it won't break the UI layout) */}
        {/* <div className="text-xs font-mono text-muted bg-card p-3 rounded-xl border border-border-subtle">{JSON.stringify(result)}</div> */}

        {/* Units Section */}
        <section className="flex flex-col gap-4">
          {/* Section Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-foreground">
              <BookOpen className="h-5 w-5 text-eloq-purple" />
              <h2 className="text-lg font-semibold">Units</h2>
            </div>
            <span
              className="text-muted transition-colors hover:text-foreground cursor-pointer"
              title="Complete units sequentially to master this level"
            >
              <Info className="h-4 w-4" />
            </span>
          </div>

          {/* Units Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {levelUnits.map((unit) => {
              const unitNum =
                typeof unit.order_idx === "number"
                  ? unit.order_idx / 10
                  : unit.order_idx;

              return (
                <Link
                  key={unit.id}
                  href={`/dashboard/learn/${levelSlug}/${unit.slug}`}
                  className="group relative block overflow-hidden rounded-2xl border border-border-subtle bg-card p-5 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-eloq-purple/50 hover:shadow-float"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex flex-col gap-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-eloq-purple">
                        Unit {unitNum}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-foreground transition-colors group-hover:text-eloq-purple">
                        {unit.title_en ?? "Unit Title"}
                      </h3>
                    </div>

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-eloq-purple/10 text-eloq-purple transition-all group-hover:bg-eloq-purple group-hover:text-white">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>

                  {/* Accent Bottom Bar */}
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-eloq-green opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </Link>
              );
            })}
          </div>
        </section>

        {/* Hidden Path Levels Section (Temporarily commented out as requested) */}
        {/*
        <section className="flex flex-col gap-4 pt-4">
          <div className="flex items-center gap-1 text-muted">
            <h2 className="text-lg font-medium">Levels</h2>
            <ArrowRight size={18} />
          </div>
          <div className="flex items-center gap-4 overflow-x-auto scrollbar-none pb-2">
            {[1, 2, 3, 4, 5].map((level) => (
              <Card
                key={level}
                className="min-w-36 h-16 flex-shrink-0 flex items-center justify-center p-4 bg-card border border-border-subtle rounded-xl text-sm font-semibold"
              >
                Beginner {level}
              </Card>
            ))}
          </div>
        </section>
        */}
      </main>
    </div>
  );
}