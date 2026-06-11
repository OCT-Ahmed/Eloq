import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const DashboardHome = () => {
    return (
        <div className="w-full h-full flex flex-col">
            <h1 className="text-2xl font-semibold mb-8 mt-5">
                My Dashboard
            </h1>
           
           <div className="w-fit h-fit p-[3px] hover:bg-eloq-purple/25 rounded-xl transition-all duration-300">
                <Card className="relative w-80 h-30 py-4 px-8 flex flex-col items-start justify-between gap-1 bg-foreground rounded-lg hover:shadow-eloq-purple/25 hover:shadow-xl transition-all duration-300">
                    <h2 className="text-xl font-medium">
                        Beginner Level
                    </h2>
                    <Link href="/dashboard/learn/academic/beginner/units">
                        <Button className="w-full bg-primary text-white  cursor-pointer">
                            Go to A1 Lessons
                            <ArrowRight />
                        </Button>
                    </Link>
                    <div className="absolute left-0 right-0 bottom-0  w-full h-2 bg-green-700"></div>
                </Card>
                </div>
           
        </div>
    )
}

export default DashboardHome;