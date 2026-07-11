import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, User, Flame, Info } from "lucide-react";
import Link from "next/link";

const DashboardHome = () => {
    return (
        <div className="w-full h-full flex flex-col items-stretch py-4 px-6">
            <h1 className="text-2xl font-semibold text-base">
                Welcome Back, Ahmed
            </h1>
           <p className="mb-6 text-muted italic">Ready for day 12 of your streak?</p>
           <div className=" w-full lg:w-fit lg:h-fit lg:p-[3px] hover:bg-eloq-purple/25 rounded-xl transition-all duration-300">
                                 <header className="flex items-start justify-start gap-2 pb-4 border-b border-border-subtle mb-6">
                        {/* <Rocket color="purple" /> */}
                        <div className="bg-eloq-purple p-2 h-10 w-10 rounded-full">
                           <User color="none" /> 
                        </div>

                        <div>
                            <div className="flex items-center gap-1">

                                <h1 className="font-semibold text-base">
                                    Ahmed Khyr
                                </h1>
                                <div className="relative flex"> 
                                    <Flame fill="darkorange" color="orange" size={15} strokeWidth={1} />
                                    <span className="font-mono font-semibold text-[10px] text-base">12</span>
                                </div>
                            </div>
                            <span className="text-[11px] bg-background border border-border-subtle rounded-full p-1 px-2 font-mono text-muted">
                                Intermediate
                            </span>
                        </div>

                        {/* add sidebar links array */}
                    </header>
                {/* Continue Progress Section */}
          <section className="flex flex-col w-full items-stretch justify-start gap-5 md:gap-5 lg:gap-8">
              {/* Title*/}
              <div className="relative w-full flex items-center justify-start gap-1 text-muted">
                <h1 className="text-lg lg:font-medium text-base">
                  Continue Where You Left Off
                </h1>
                <ArrowRight size={18} />
                <Info 
                      size={18} 
                      className="absolute right-1 top-1 text-muted"
                    />
              </div>
              <Link className="rounded-[15px]" href="/dashboard/learn/beginner/unit-1">
                    <Card className="bg-foreground gap-0 w-full border border-border-subtle h-fit p-4 rounded-xl">
                        <h2 className="font-semibold text-base">Unit 1 | Greetings</h2>
                      <p className="text-muted mb-2">
                        Lesson 2 of 5
                      </p>
                      {/* Progress */}
                      <div className="flex items-center gap-1">
                      <div className="w-full h-2 bg-eloq-purple rounded-full"></div>
                      <span className="text-muted">67%</span>
                      </div>
                    </Card>
                    <Button className="hidden lg:block w-full bg-primary text-white  cursor-pointer ">
                            Go to A1 Lessons
                            <ArrowRight />
                        </Button>
                   
                    <div className="absolute left-0 right-0 bottom-0  w-full h-2 bg-eloq-green"></div>
                
              </Link> 
          </section>    
                </div>
           
        </div>
    )
}

export default DashboardHome;
