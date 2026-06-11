import { units } from "@/data/curriculum/beginner-a1/beginner-a1";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { randomUUID } from "crypto";
import Breadcrumb from "@/components/navigation/breadcrumb";

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
        slug: "units"
    },
]

export default function UnitsPage() {
    return (
        <div className="w-full h-full">
            <header className="">
                <Breadcrumb links={links} />
                <h1 className="text-2xl font-semibold mb-8">
                    Units
                </h1>
            </header>
            <main className="w-full grid grid-cols-1 md:grid-cols-2">
                {
                    units.map((unit) => (
                        <Link key={unit.id} className="ml-6" href={`/dashboard/learn/academic/beginner/units/${unit.slug}`}>
                            <div className="w-full h-fit p-[3px] hover:bg-eloq-purple/25 rounded-xl transition-all duration-300">
                            <Card className="relative flex flex-col items-start justify-start gap-6 py-4 pb-8 px-8 bg-foreground rounded-lg hover:shadow-eloq-purple/25 hover:shadow-xl transition-all duration-300">
                                <h2 className="flex flex-wrap items-center tracking-wide justify-start w-full text-xl font-medium pb-1 border-b-[1px] border-zinc-300">
                                    <span className="block font-bold text-2xl text-green-700 mr-2">Unit {unit.id}</span>{unit.title}
                                </h2>
                                <div className="py-2 px-4 bg-green-700/15 border border-green-700/35 rounded-xl">
                                    <div className="font-medium text-sm">
                                        {unit.goals.map(goal => (
                                            <div key={crypto.randomUUID()}>
                                                <span>{goal}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="absolute left-0 right-0 bottom-0  w-full h-2 bg-green-700"></div>
                            </Card>
                            </div>
                        </Link>
                    ))
                }
            </main> 
        </div>
    )
}

