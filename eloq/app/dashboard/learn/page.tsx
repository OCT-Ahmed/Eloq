import Breadcrumb from "@/components/navigation/breadcrumb";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, Info } from 'lucide-react'

export default function Learn() {
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
                  <h1 className="text-lg lg:font-medium">
                    Paths
                  </h1>
                  <ArrowRight size={18} />
                  <Info 
                        size={18} 
                        className="absolute right-1 top-1 text-muted"
                      />
                </div>
                {/* Items */}
                {/*<Link className="" href={`/dashboard/learn/academic/beginner`}>*/}
                    <div className="w-full md:w-fit h-fit p-[3px] hover:bg-eloq-purple/25 bg-eloq-purple rounded-[10px] lg:rounded-xl transition-all duration-300">
                    <Card className="relative flex flex-col items-start justify-start gap-2 py-4 l px-8 bg-foreground backdrop-blur-lg rounded-lg lg:rounded-lg hover:shadow-eloq-purple/25 hover:shadow-xl transition-all duration-300 cursor-default border-border-subtle">
                        <h2 className="flex flex-wrap items-center tracking-wide justify-start w-full text-xl font-medium">
                            
                            <span className="block font-bold text-2xl text-eloq-green mr-2">General</span>
                        </h2>
                        <div className="hidden py-2 px-4 bg-eloq-green/15 border border-eloq-green/35 rounded-xl">
                            <div className="hidden font-medium text-sm tracking-wide">
                                Original learning proccess taking you from any point to a place higher, improving your overall-skills.
                            </div>
                        </div>
                        <div className=" hidden absolute left-0 right-0 bottom-0  w-full h-2 bg-eloq-green"></div>
                    </Card>
                    </div>
                {/*</Link>*/}
              </section>
              {/* Path Levels */} 
              <section className="flex flex-col items-start justify-start gap-5 md:gap-5 lg:gap-8">
                {/* Title*/}
                <div className="flex items-center justify-center gap-1 text-muted">
                  <h1 className="text-lg lg:font-medium">
                    Levels 
                  </h1>
                  <ArrowRight size={18} />
                </div>
                {/* Items */}
                <Link href="/dashboard/learn/beginner" className="">
                <div className="flex items-center justify-start gap-4 md:gap-6 lg:gap-8 pr-10 lg:pb-2 overflow-x-auto w-screen scrollbar-none">
                  {
                    ["Beginner"].map(level => (
                      <Card key={level} className="min-w-36 h-16 flex-shrink-0 flex flex-col items-start justify-start p-4 bg-foreground border border-border-subtle rounded-xl shadow-sm">
                        <h1 className="text-base font-semibold">
                          Beginner     
                        </h1>
                      </Card>
                    ))
                  }
                  </div>
                  </Link>
              </section>
              <section className="flex flex-col items-start justify-start gap-5 md:gap-5 lg:gap-8">
                {/* Title*/}
                <div className="flex items-center justify-center gap-1 text-muted">
                  <h1 className="text-lg lg:font-medium">
                    Tests
                  </h1>
                  <ArrowRight size={18} />
                </div>
                {/* Items */}
                {/*}<Link href="/dashboard/learn/beginner" className="">*/}
                <div className="flex items-center justify-start gap-4 md:gap-6 lg:gap-8 pr-10 lg:pb-2 overflow-x-auto w-screen scrollbar-none">
                  {
                    ["tests"].map(level => (
                      <Card key={level} className="min-w-36 h-16 flex-shrink-0 flex flex-col items-start justify-start p-4 bg-foreground border border-border-subtle rounded-xl shadow-sm opacity-60">
                        <h1 className="text-lg font-semibold text-muted">
                          Soon    
                        </h1>
                      </Card>
                    ))
                  }
                  </div>
                  {/*</Link>*/}
              </section>
            </main> 
        </div>
    )
}
