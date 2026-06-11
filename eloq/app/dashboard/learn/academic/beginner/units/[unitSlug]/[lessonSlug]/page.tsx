import { units } from "@/data/curriculum/beginner-a1/beginner-a1";
import SectionRenderer from "@/components/learning /section-renderer";
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
    const section = unit?.sections?.find(sec => sec.slug === lessonSlug)

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
        <div className="flex flex-col gap-4 text-base h-full w-full overflow-hidden relative">
             
            {/* Lesson Layout Header */}
            <header className="flex-shrink-0 w-full">
                <div className="flex flex-col items-start justify-start gap-0 px-4 col-span-2">
                    <Breadcrumb links={links} />
                    <h1 className="font-sans font-semibold text-2xl leading-tight">
                        {section?.title}   
                    </h1>
                </div>
            </header>
            {/* Main Lesson Layout Content */}
            <main className="flex-1 overflow-y-auto  pr-1 py-2 relative rounded-lg">
               
                <Card className="flex flex-col items-stretch justify-start gap-4 w-full bg-white shadow-lg p-10 text-[18px] leading-8 tracking-[-0.01px] ">
                    {
                       section && <SectionRenderer section={section} />
                    }
                   
                </Card>  
            </main>
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

/* <div className="flex flex-col items-start justify-start gap-0">
                        <h1 className="font-sans font-semibold text-2xl leading-tight">
                            {unit1.unit_title}
                        </h1>
                        <p className="tracking-wide">
                            Learn greetings and introductions.
                        </p>
                    </div>
                    <h1 className="font-semibold text-xl">
                        Conversation 
                    </h1>
                    {/* Conversation Content 
                    <div className="bg-background p-4 rounded rounded-lg" id="conversation-content">
                        <p>Adam: Hi, I'm Adam.</p>
                        <p>Sarah: Hello Adam! I'm Sarah.</p>
                    </div>
                    {/* Grammer Spot */
                    // <div className="bg-purple-500/15 p-2 rounded rounded-xl" id="conversation-content">
                    //     <h2 className="font-semibold text-lg">Grammer Spot</h2>
                    //     <p>I'm = I am</p>
                    // </div>
                    // /* Choose The Correct Answer */
                    // <div className="flex flex-col items-start justify-center gap-2" id="conversation-content">
                    //     <h2 className="font-semibold text-lg">
                    //         Choose the correct sentence
                    //     </h2>
                    //     {/* Content */
                    //     <div className="flex items-start justify-start gap-2">
                    //         <span className="px-3 py-2 hover:text-white text-center border border-purple-800 hover:bg-purple-800  w-auto h-auto rounded rounded-xl cursor-pointer transition-all duration-300">
                    //             I am Ahmed
                    //         </span>
                    //         <span className="px-3 py-2 hover:text-white text-center border border-purple-800 hover:bg-purple-800 w-auto h-auto rounded rounded-xl cursor-pointer transition-colors duration-200">
                    //             Im Ahmed
                    //         </span>
                    //     </div>
                    // </div>

                    // <div className="flex flex-col bg-green-200 p-8 rounded-lg">
                    //     {
                    //         <>
                    //             <p>{unit1.unitQuiz.title}</p>
                    //             <p>{unit1.unitQuiz.description}</p>
                    //             <p>Total questions: {unit1.unitQuiz.total_questions}</p>
                    //             <p>Passing scores: {unit1.unitQuiz.passing_score}</p>
                    //             <p>{unit1.unitQuiz.questions.map((q) => (
                    //                     <>
                    //                         <div>
                    //                             <p>q{q.id}: {q.type}</p>
                    //                             <p>{q.question}</p>
                    //                             {   
                    //                                 q.pairs &&
                    //                                 q.pairs?.map(p => (
                    //                                     <div>
                    //                                         {p.arabic}
                    //                                         {p.english}
                    //                                     </div>
                    //                                 ))
                    //                             }
                    //                             <div className="flex gap-3 p-4 rounded-lg bg-blue-600/15">{q.options?.map(op => (<span>{op}</span>))}</div>
                    //                         </div>
                    //                         <p>{q.correct_answer}</p>
                    //                     </>
                    //                 ))}
                    //             </p>
                    //         </>
                    //     }
                    // </div> */}