import Breadcrumb from "@/components/navigation/breadcrumb";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function Academic() {
    const links = [
        {
            label: "Learn",
            slug: "dashboard/learn"
        },
        {
            label: "Academic Path",
            slug: "academic"
        },
    ]
    return (
        <div className="w-full flex flex-col items-start justify-cneter gap-6">
            {/* Lesson Layout Header */}
            <header className="flex-shrink-0 w-full">
                <div className="flex flex-col items-start justify-start gap-0 px-4 col-span-2">
                    <Breadcrumb links={links} />
                    <h1 className="font-sans font-semibold text-2xl leading-tight">
                        Academic Path
                    </h1>
                </div>
            </header>
            {/* Main Lesson Layout Content */}
            <main className="w-full grid grid-cols-1 md:grid-cols-2">
                <Link className="ml-6" href={`/dashboard/learn/academic/beginner`}>
                    <div className="w-full h-fit p-[3px] hover:bg-eloq-purple/25 rounded-xl transition-all duration-300">
                    <Card className="relative flex flex-col items-start justify-start gap-6 py-4 pb-8 px-8 bg-foreground rounded-lg hover:shadow-eloq-purple/25 hover:shadow-xl transition-all duration-300">
                        <h2 className="flex flex-wrap items-center tracking-wide justify-start w-full text-xl font-medium pb-1 border-b-[1px] border-zinc-300">
                            Beginner Level
                            <span className="block font-bold text-2xl text-green-700 mr-2">
                                
                            </span>
                        </h2>
                        <div className="py-2 px-4 bg-green-700/15 border border-green-700/35 rounded-xl">
                            <div className="font-medium text-sm">
                                A1
                            </div>
                        </div>
                        <div className="absolute left-0 right-0 bottom-0  w-full h-2 bg-green-700"></div>
                    </Card>
                    </div>
                </Link>
                    
                
            </main> 
        </div>
    )
}