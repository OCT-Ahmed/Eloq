import {
  fetchLevelBySlug,
  fetchUnitBySlug,
  fetchLessons,
} from "@/features/learning";
import Breadcrumb from "@/components/navigation/breadcrumb";
import InteractiveUnitPath from "@/components/learning/InteractiveUnitPath";
import { BookOpen } from "lucide-react";

export default async function UnitPage({
  params,
}: {
  params: Promise<{
    levelSlug: string;
    unitSlug: string;
  }>;
}) {
  const { unitSlug, levelSlug } = await params;

  const {
    data: { id: levelId },
  } = await fetchLevelBySlug(levelSlug);

  const { data: unitData } = await fetchUnitBySlug(unitSlug, levelId);
  if (!unitData) {
    throw new Error("Check fetchUnitBySlug function");
  }

  const result = await fetchLessons(unitData?.id);
  const unitLessons = result?.data ?? [];

  const unitTitle = unitData?.title_en ?? "Unit Lessons";

  const links = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Learn", href: "/dashboard/learn" },
    { label: levelSlug, href: `/dashboard/learn/${levelSlug}` },
    { label: unitTitle, href: `/dashboard/learn/${levelSlug}/${unitData?.slug}` },
  ];

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-4 pt-1 pb-16 sm:px-6">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="pt-1">
        <Breadcrumb links={links} />
      </nav>

      {/* Header */}
      <header className="flex flex-col gap-1 text-center items-center">
        <div className="flex items-center gap-2 text-eloq-purple">
          <BookOpen className="h-5 w-5" />
          <span className="text-xs font-bold uppercase tracking-wider">
            Learning Path
          </span>
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          {unitTitle}
        </h1>
        <p className="text-xs sm:text-sm text-muted">
          Tap a node on the path to open lesson details and start.
        </p>
      </header>

      {/* Dynamic Interactive Path */}
      <main className="w-full pt-4">
        <InteractiveUnitPath
          lessons={unitLessons}
          levelSlug={levelSlug}
          unitSlug={unitData.slug}
        />
      </main>
    </div>
  );
}
