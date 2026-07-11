import { units } from "@/data/curriculum/beginner-a1/beginner-a1";
import SectionRenderer from "@/components/learning /section-renderer";
import Breadcrumb from "@/components/navigation/breadcrumb";
import { Card } from "@/components/ui/card";
import { unit_1 } from "@/data/curriculum/beginner-a1/units/unit-1";
import Link from "next/link";

export default async function UnitPage({
    params
}:{
    params: Promise<{unitSlug: string}>
}) {

    const { unitSlug } = await params;
    const unit = units.find(u => u.slug === unitSlug);
const links = [
    {
        label: "Learn",
        slug: "dashboard/learn"
    },
    {
        label: "Beginner Level",
        slug: "beginner"
    },
    {
        label: unit?.title ?? "Unit",
        slug: unit?.slug ?? "unit",
    },
]
    return (
        <div className="flex flex-col items-start justify-start gap-8 w-full h-full py-4 px-6">

            {/* Lesson Layout Header */}
            <header className="flex-shrink-0">
                <div className="flex flex-col items-start justify-start gap-0 px-4 ">
                    {links && <Breadcrumb links={links} />}
                    <h1 className="font-sans font-semibold text-2xl leading-tight">
                        Lessons
                    </h1>
                </div>
            </header>
            {/* Main Lesson Layout Content */}
            <main className="w-full grid grid-cols-1 md:grid-cols-3 md:gap-4 tracking-wide pb-28">
                {
                    unit?.sections?.map((section) => (
                        <Link key={section.id} className="" href={`/dashboard/learn/beginner/${unit.slug}/${section.slug}`}>
                            <div className="w-full h-fit p-[3px] hover:bg-eloq-purple/25 rounded-xl transition-all duration-300">
                            <Card className="relative flex flex-col items-start justify-start gap-2 py-4 pb-8 px-8 md:min-h-50 bg-foreground rounded-lg hover:shadow-eloq-purple/25 hover:shadow-xl transition-all duration-300">
                                <div className="z-100 w-full">
                                <h2 className="tracking-wide w-full text-xl font-medium pb-1 mb-3 border-b-[1px] border-zinc-300">
                                    {section.title ?? ""}
                                </h2>
                                <p className="font-medium text-md text-primary/75 mb-1">{section.lesson ?? ""}</p>
                                <div className="z-100 tracking-wide w-fit py-[1px] px-2 bg-green-700/15 border border-green-700/35 rounded-full">
                                <p className="font-medium text-xs">
                                    {section.type}
                                </p>
                                </div>
                                </div>
                                <div className="absolute z-10 -left-20 -top-25  w-50 h-50 bg-green-500 rounded-full"></div>
                            </Card>
                            </div>
                        </Link>
                    ))
                }
            </main> 
        </div>
    )
}