import { units } from "@/data/curriculum/beginner-a1/beginner-a1";
import Breadcrumb from "@/components/navigation/breadcrumb";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, Info } from 'lucide-react'

export default async function LevelPage({
  params
}:{
    params: Promise<{levelSlug: string}>
}) {
    const { levelSlug } = await params;
    
    const links = [
        {
            label: "Learn",
            slug: "dashboard/learn"
        },
    ]
    return (
        <div className="w-full flex flex-col items-start justify-cneter gap-8 py-4 px-6">
          {/* Main Lesson Layout Content */}
          <main className="w-full flex flex-col items-start justify-start gap-8">
            <section className="flex flex-col w-full items-stretch justify-start gap-5 md:gap-5 lg:gap-8">
                {/* Title*/}
                <div className="relative w-full flex items-center justify-start gap-1 text-muted">
                  <h1 className="text-xl font-md">
                    Units
                  </h1>
                  <ArrowRight size={18} />
                  <Info 
                        size={18} 
                        className="absolute right-1 top-1 text-muted"
                      />
                </div>
                {/* Items */}
              
                { units.map(unit => (
                <Link 
                  key={unit.id}
                  className="" 
                  href={`/dashboard/learn/${levelSlug}/${unit.slug}`}
                >
                    <div className="w-full md:w-fit h-fit p-[3px] hover:bg-eloq-purple/25 bg-purple-700 rounded-[10px] lg:rounded-xl transition-all duration-300">
                    <Card className="relative flex flex-col items-start justify-start gap-2 py-4 l px-8 bg-foreground backdrop-blur-lg rounded-lg lg:rounded-lg hover:shadow-eloq-purple/25 hover:shadow-xl transition-all duration-300 cursor-default">
                        <h2 className="flex flex-wrap items-center tracking-wide justify-start w-full text-xl font-medium">
                            Unit {unit.id}
                            <span className="block font-bold text-2xl text-green-700 mr-2 ml-2">{unit.title}</span>
                        </h2>
                        <div className="hidden py-2 px-4 bg-green-700/15 border border-green-700/35 rounded-xl">
                            <div className="hidden font-medium text-sm tracking-wide">
                                Original learning proccess taking you from any point to a place higher, improving your overall-skills.
                            </div>
                        </div>
                        <div className=" hidden absolute left-0 right-0 bottom-0  w-full h-2 bg-green-700"></div>
                    </Card>
                    </div>
                  </Link>))}
              
              </section>
              {/* Path Levels */} 
              <section className="hidden flex flex-col items-start justify-start gap-5 md:gap-5 lg:gap-8">
                {/* Title*/}
                <div className="flex items-center justify-center gap-1 text-muted">
                  <h1 className="text-xl font-md">
                    Levels 
                  </h1>
                  <ArrowRight size={18} />
                </div>
                {/* Items */}
                <div className="flex items-center justify-start gap-4 md:gap-6 lg:gap-8 pr-10 lg:pb-2 overflow-x-auto w-screen scrollbar-none">
                  {
                    [1,2,3,4,5].map(level => (
                      <Card key={level} className="min-w-36 h-16 flex-shrink-0 flex flex-col items-start justify-start p-4 bg-purple-300/10 backdrop-blur-lg border border-purple-300/10 rounded-xl">
                        <h1>
                          Beginner {level}    </h1>
                      </Card>
                    ))
                  }
                  </div>
              </section>
            </main> 
        </div>
    )
}