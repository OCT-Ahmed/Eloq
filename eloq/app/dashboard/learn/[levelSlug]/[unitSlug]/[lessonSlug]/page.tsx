import {
  fetchLevelBySlug,
  fetchUnitBySlug,
  fetchLessonBySlug,
  fetchBlocks,
} from "@/features/learning";
import SectionRenderer from "@/components/learning/section-renderer";
import type { ExtensionType, Lesson } from "@/types/learning";
import Breadcrumb from "@/components/navigation/breadcrumb";
import { Card } from "@/components/ui/card";

function normalizeExtensions(value: unknown): ExtensionType | undefined {
  if (!value) return undefined;

  if (typeof value === "string") {
    try {
      return normalizeExtensions(JSON.parse(value));
    } catch {
      return undefined;
    }
  }

  return typeof value === "object" ? (value as ExtensionType) : undefined;
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{
    levelSlug: string;
    unitSlug: string;
    lessonSlug: string;
  }>;
}) {
  const { levelSlug, unitSlug, lessonSlug } = await params;

  const {
    data: { id: levelId },
  } = await fetchLevelBySlug(levelSlug);

  const {
    data: { id: unitId },
    data: unitData,
  } = await fetchUnitBySlug(unitSlug, levelId);

  const { data: lessonData } = await fetchLessonBySlug(lessonSlug, unitId);

  const { data: dbBlocks } = await fetchBlocks(lessonData.id);

  const lesson: Lesson = {
    id: lessonData.id,
    unitId,
    levelId,
    title: {
      en: lessonData.title_en,
    },
    slug: lessonData.slug,
    blocks: [
      ...dbBlocks.map((block) => ({
        id: block.id,
        type: block.type,
        data: block.content,
        extensions: normalizeExtensions(block.extensions),
        isActive: block.is_active,
      })),
    ],
  };

  const links = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Learn", href: "/dashboard/learn" },
    { label: levelSlug, href: `/dashboard/learn/${levelSlug}` },
    {
      label: unitData?.title_en ?? "Unit",
      href: `/dashboard/learn/${levelSlug}/${unitData?.slug}`,
    },
    {
      label: lesson?.title.en ?? "Lesson",
      href: `/dashboard/learn/${levelSlug}/${unitData?.slug}/${lesson?.slug}`,
    },
  ];

  return (
    <div className="mx-auto flex h-full w-full max-w-4xl flex-col overflow-hidden bg-background px-3 sm:px-6">
      {/* Header & Navigation */}
      <header className="flex-shrink-0 w-full pt-3 pb-2">
        <Breadcrumb links={links} />
        <h1 className="mt-2 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
          {lesson?.title.en}
        </h1>
      </header>

      {/* Main Content Area */}
      <div className="relative flex-1 min-h-0 overflow-hidden mt-1">
        {/* Top Fade Gradient */}
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-background to-transparent z-10" />

        <main className="h-full overflow-y-auto pt-2 pb-24 scrollbar-none sm:scrollbar-default">
          <Card className="flex flex-col items-stretch justify-start gap-6 w-full bg-card p-4 sm:p-8 lg:p-10 rounded-2xl border border-border-subtle shadow-soft">
            {lesson && <SectionRenderer lesson={lesson} />}
          </Card>
        </main>

        {/* Bottom Fade Gradient */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-background to-transparent z-10" />
      </div>
    </div>
  );
}
