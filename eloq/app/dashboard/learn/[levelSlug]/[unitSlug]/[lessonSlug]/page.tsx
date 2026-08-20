import { units } from "@/data/curriculum/beginner-a1/beginner-a1";
import {
  fetchLevelBySlug,
  fetchUnitBySlug,
  fetchLessonBySlug,
  fetchBlocks
} from "@/features/learning";
import SectionRenderer from "@/components/learning/section-renderer";
import type { Lesson } from "@/types/learning"
import Breadcrumb from "@/components/navigation/breadcrumb";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import { Unit } from "@/types/learning";

// LessonPage.tsx
export default async function LessonPage({
    params
}:{
    params: Promise<{unitSlug: string; lessonSlug: string;}>
}) {
    const { 
      levelSlug, 
      unitSlug, 
      lessonSlug 
    } = await params;

    const {
      data:{
        id:levelId
      }
    } = await fetchLevelBySlug(levelSlug);
    
    const {
      data: {
        id: unitId
      }, 
      data: unitData
    } = await fetchUnitBySlug(
      unitSlug, 
      levelId
    );

    const { data:lessonData } = await fetchLessonBySlug(
      lessonSlug, 
      unitId
    );
    // change the name to dbLesson
    const { data:dbBlocks } = await fetchBlocks(lessonData.id)
    
    /*
     Lesson {
  id: string;
  title: LocalizedText;
  slug: string;
  description?: LocalizedText;
  rules?: LessonRules;
  rewards?: LessonRewards;
  blocks: Block[];
}
    */
    /*
    BaseBlock<T extends BlockType, D> = {
  id: string;
  type: T;
  purpose?: string;
  // -- TODO: Rename `data` to `content` in a future schema revision.
  data: D;
  interactions?: Record<string, unknown>;
  extensions?: ExtensionType;
  media?: ImageContent[];
  span?: string;
  style?: StyleConfig;
  isActive?: boolean;
};
    */
    const lesson: Lesson = {
      id: lessonData.id,
      unitId,
      levelId,
      title: {
        en: lessonData.title_en,
      },
      slug: lessonData.slug,
      blocks: [
        ...(dbBlocks.map(block => ({
            id: block.id,
            type: block.type,
            data: block.content,
            extensions: block.extensions,
            isActive: block.is_active,
          })
        )),
      ],
    };
    const links = [
        { label: "Learn", slug: "dashboard/learn" },
        { label: "Beginner Level", slug: "beginner" },
        { 
            label: unitData?.title_en ?? "Unit", 
            slug: unitData?.slug ?? "unit" 
        },
        { 
            label: lesson?.title.en ?? "Lesson", 
            slug: lesson?.slug ?? "lesson" 
        },
    ];

    return (
        <div className="flex flex-col h-full w-full overflow-hidden bg-background px-[10px] ">
             
            {/* الهيدر */}
            <header className="flex-shrink-0 w-full pt-4">
                <Breadcrumb links={links} />

                <h1 className="font-sans font-bold text-xl lg:text-2xl text-base mt-1 hidden lg:block">
                    {lesson?.title.en}   
                </h1>
            </header>

            {/* Main Content */}
            <div className="relative flex-1 min-h-0 overflow-hidden mt-2">
                
                {/* Top Shadow  */}
                <div className="pointer-events-none absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-background to-transparent z-10" />

                <main className="h-full overflow-y-auto pt-4 pb-50 scrollbar-none md:scrollbar-default">
                    <Card className="flex flex-col items-stretch justify-start gap-5 w-full text-yellow/-500/25 bg-foreground shadow-lg pr-4 p-3 lg:p-10 text-[18px] leading-8 tracking-[-0.01px] rounded-xl border-none sm:border">
                        {
                            lesson && <SectionRenderer lesson={lesson} />
                        }
                    </Card>  
                </main>

                {/* Bottom Shadow  */}
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-background to-transparent z-10" />

            </div>
        </div>
    )
}