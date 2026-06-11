import Breadcrumb from "@/components/navigation/breadcrumb";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function BeginnerPage() {

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
]    

    return (
        <div className="w-full h-full">
            <Breadcrumb links={links} />
            <h1 className="text-2xl font-semibold mb-8">
                Beginner
            </h1>
            <div className="flex  w-full">
                <Link className="ml-6" href="/dashboard/learn/academic/beginner/units">
                    <div className="w-fit h-fit p-[3px] hover:bg-eloq-purple/25 rounded-xl transition-all duration-300">
                    <Card className="relative w-fit py-4 px-8 flex items-start justify-left gap-1 bg-foreground rounded-lg hover:shadow-eloq-purple/25 hover:shadow-xl transition-all duration-300">
                        <h2 className="text-xl font-medium">
                            Level Units
                        </h2>
                        <p className="text-sm">14 unit</p>
                        <div className="absolute left-0 right-0 bottom-0  w-full h-2 bg-green-700"></div>
                    </Card>
                    </div>
                </Link>
                <Link className="ml-6" href="/dashboard/learn/academic/beginner/level-test">
                    <div className="w-fit h-fit p-[3px] hover:bg-eloq-purple/25 rounded-xl transition-all duration-300">
                    <Card className="relative w-fit py-4 px-8 flex items-start justify-left gap-1 bg-foreground rounded-lg hover:shadow-eloq-purple/25 hover:shadow-xl transition-all duration-300">
                        <h2 className="text-xl font-medium">
                            Level Test
                        </h2>
                        <p className="text-sm">1 hour - 3 sessions</p>
                        <div className="absolute left-0 right-0 bottom-0  w-full h-2 bg-green-700"></div>
                    </Card>
                    </div>
                </Link>
            </div>
        </div>
    )
}

