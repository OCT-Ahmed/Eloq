import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, User, Flame, Info } from "lucide-react";
import Link from "next/link";

const DashboardHome = () => {
    return (
        <div className="w-full h-full flex flex-col items-stretch">
            <h1 className="text-2xl font-semibold ">
                Welcome Back, Ahmed
            </h1>
           <p className="mb-6 text-white/45 italic">Ready for day 12 of your streak?</p>
           <div className=" w-full lg:w-fit lg:h-fit lg:p-[3px] hover:bg-eloq-purple/25 rounded-xl transition-all duration-300">
                                 <header className="flex items-start justify-start gap-2 pb-4 border-b border-primary/15 mb-6">
                        {/* <Rocket color="purple" /> */}
                        <div className="bg-purple-500 p-2 h-10 w-10 rounded-full">
                           <User color="none" /> 
                        </div>

                        <div>
                            <div className="flex items-center gap-1">

                                <h1 className="font-semibold">
                                    Ahmed Khyr
                                </h1>
                                <div className="relative flex"> 
                                    <Flame fill="darkorange" color="orange" size={15} strokeWidth={1} />
                                    <span className="font-mono font-semibold text-[10px]">12</span>
                                </div>
                            </div>
                            <span className="text-[11px] bg-white/25 filter-blur-xl rounded-full p-1 px-2 font-mono">
                                Intermediate
                            </span>
                        </div>

                        {/* add sidebar links array */}
                    </header>
                {/* Continue Progress Section */}
          <section className="flex flex-col w-full items-stretch justify-start gap-5 md:gap-5 lg:gap-8">
              {/* Title*/}
              <div className="relative w-full flex items-center justify-start gap-1 text-muted">
                <h1 className="text-lg lg:font-medium">
                  Continue Where You Left Off
                </h1>
                <ArrowRight size={18} />
                <Info 
                      size={18} 
                      className="absolute right-1 top-1 text-muted"
                    />
              </div>
              <Link className="dark:bg-white/75 rounded-[15px]" href="/dashboard/learn/beginner/units">
                    <Card className="bg-foreground gap-0 w-full border border-muted/25 h-fit p-4 rounded-xl">
                        <h2 className="font-semibold">Unit 1 | Greetings</h2>
                      <p className="text-white/45 mb-2">
                        Lesson 2 of 5
                      </p>
                      {/* Progress */}
                      <div className="flex items-center gap-1">
                      <div className="w-full h-2 bg-eloq-purple rounded-full"></div>
                      <span className="text-white/45">67%</span>
                      </div>
                    </Card>
                    <Button className="hidden lg:block w-full bg-primary text-white  cursor-pointer ">
                            Go to A1 Lessons
                            <ArrowRight />
                        </Button>
                   
                    <div className="absolute left-0 right-0 bottom-0  w-full h-2 bg-green-700"></div>
                
              </Link> 
          </section>    
                </div>
           
        </div>
    )
}

export default DashboardHome;