import { createClient } from "@/lib/supabase/server"
import { useAuth } from "@/features/auth"
import { UserCard } from "@/features/profile"
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, User, Flame, Info } from "lucide-react";
import Link from "next/link";

const DashboardHome = async () => {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();
    return (
        <div className="w-full h-full flex flex-col items-stretch py-4 px-6">
            <h1 className="text-2xl font-semibold text-base">
                Welcome Back, {data?.user ? data?.user?.user_metadata?.full_name.split(" ")[0] : ""}
            </h1>
              {/*}<pre>
    {JSON.stringify({ data, error }, null, 2)}
  </pre>*/}
           <p className="mb-6 text-muted italic">Ready for day 12 of your streak?</p>
           <div className="w-full lg:w-fit lg:h-fit lg:p-[3px] hover:bg-eloq-purple/25 rounded-xl transition-all duration-300">
                                 <header className="w-full flex items-start justify-start mb-6">
                      <UserCard />
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
