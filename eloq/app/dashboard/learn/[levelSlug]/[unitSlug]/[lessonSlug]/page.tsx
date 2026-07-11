import { units } from "@/data/curriculum/beginner-a1/beginner-a1";
import SectionRenderer from "@/components/learning /section-renderer";
import Breadcrumb from "@/components/navigation/breadcrumb";
import { Card } from "@/components/ui/card"; 
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import { SectionType, UnitType } from "@/types/learning";

// LessonPage.tsx
export default async function LessonPage({
    params
}:{
    params: Promise<{unitSlug: string; lessonSlug: string;}>
}) {
    const { unitSlug, lessonSlug } = await params;
    const unit = units.find(u => u.slug === unitSlug);
    const section = unit?.sections?.find(sec => sec.slug === lessonSlug)
    
    const links = [
        { label: "Learn", slug: "dashboard/learn" },
        { label: "Beginner Level", slug: "beginner" },
        { label: unit?.title ?? "Unit", slug: unit?.slug ?? "unit" },
        { label: section?.title ?? "Section", slug: section?.slug ?? "section" },
    ];

     return (
        <div className="flex flex-col h-full w-full overflow-hidden bg-background px-[10px] ">
             
            {/* الهيدر */}
            <header className="flex-shrink-0 w-full pt-4">
                <Breadcrumb links={links} />
                <h1 className="font-sans font-bold text-xl lg:text-2xl text-base mt-1 hidden lg:block">
                    {section?.title}   
                </h1>
            </header>
            {/* Main Content */}
            <div className="relative flex-1 min-h-0 overflow-hidden mt-2">
                
                {/* Top Shadow  */}
                <div className="pointer-events-none absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-background to-transparent z-10" />

                <main className="h-full overflow-y-auto pt-4 pb-24 scrollbar-none md:scrollbar-default">
                    <Card className="flex flex-col items-stretch justify-start gap-5 w-full text-yellow/-500/25 bg-foreground shadow-lg pr-4 p-3 lg:p-10 text-[18px] leading-8 tracking-[-0.01px] rounded-xl border-none sm:border">
                        {
                           section && <SectionRenderer section={section} />
                        }
                    </Card>  
                </main>

                {/*  Bottom Shadow  */}
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-background to-transparent z-10" />

            </div>
        </div>
    )
  }