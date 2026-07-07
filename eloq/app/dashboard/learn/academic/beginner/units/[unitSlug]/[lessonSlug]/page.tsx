import { units } from "@/data/curriculum/beginner-a1/beginner-a1";
import SectionRenderer from "@/components/learning/section-renderer";
import Breadcrumb from "@/components/navigation/breadcrumb";
import { Card } from "@/components/ui/card"; 
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import { SectionType, UnitType } from "@/types/learning";

export default async function LessonPage({
    params
}:{
    params: Promise<{unitSlug: string; lessonSlug: string;}>
}) {
    
    const { unitSlug, lessonSlug } = await params;
    const unit = units.find(u => u.slug === unitSlug);
    const lesson = unit?.sections?.find(sec => sec.slug === lessonSlug)

    const links = [
    {
        label: "Learn",
        slug: "dashboard/learn"
    },
    {
        label: "Academic Path",
        slug: "academic"
    },
    {
        label: "Beginner Level",
        slug: "beginner"
    },
    {
        label: "Units",
        slug: "units",
    },
    {
        label: unit?.title ?? "Unit",
        slug: unit?.slug ?? "unit",
    },
    {
        label: section?.title ?? "Section",
        slug: section?.slug ?? "section",
    },
]

    return (
        <div className="flex flex-col gap-4 text-base h-full w-full overflow-hidden relative bg-purple-800">
             
            {/* Lesson Layout Header */}
            <header className="flex-shrink-0 w-full">
                <div className="flex flex-col items-start justify-start gap-3 px-4 col-span-2">
                    <Breadcrumb links={links} />
                   
                </div>
            </header>
            {/* Main Lesson Layout Content */}
            <main className="flex-1 w-full overflow-y-auto flex-shrink-0 pr-1 py-2 relative rounded-lg scrollbar-none border-4 border-purple-800 bg-purple-800 pb-10">
               
                <div className="flex flex-col items-stretch justify-start lg:gap-4 w-full bg-purple-800 lg:shadow-lg lg:p-10 lg:text-[18px] leading-8 tracking-[-0.01px] border-2 border-purple-800 p-0">
                    {
                       lesson && <SectionRenderer section={lesson} />
                    }
                   
                </div>  
            </main>
            {/**/}
            {/* Lesson Layout Footer */}
            {/* <footer className="flex-shrink-0">
                <div className="flex items-center justify-between ">
                    <Button className="text-white bg-eloq-black p-2 rounded rounded-xl flex gap-1">
                        <ArrowLeft />
                        Previous
                    </Button>
                    {/* RIGHT BUTTON //
                    <Button className="text-white bg-eloq-black p-2 rounded rounded-xl flex gap-1">
                        Next 
                        <ArrowRight />
                    </Button>
                </div>
            </footer> */}
        </div>
    )
}
