import { createClient } from "@/lib/supabase/server";
import { UserCard } from "@/features/profile";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, BookOpen, Flame, Info } from "lucide-react";
import Link from "next/link";

const DashboardHome = async () => {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();

  // استخراج الاسم الأول بأمان
  const fullName = data?.user?.user_metadata?.full_name;
  const firstName = fullName ? fullName.split(" ")[0] : "Learner";

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-6 sm:px-6 lg:px-8">
      {/* Header Section */}
      <header className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Welcome Back, <span className="text-eloq-purple">{firstName}</span> 👋
        </h1>
        <p className="flex items-center gap-2 text-sm italic text-muted">
          <Flame className="h-4 w-4 fill-orange-500 text-orange-500" />
          <span>Ready for day 12 of your streak?</span>
        </p>
      </header>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-start">
        {/* User Card Wrapper */}
        <div className="w-full lg:col-span-1">
          <div className="rounded-2xl border border-border-subtle bg-card p-4 shadow-soft transition-all duration-300 hover:border-eloq-purple/30">
            <UserCard />
          </div>
        </div>

        {/* Continue Progress Section */}
        <section className="flex flex-col gap-4 lg:col-span-2">
          {/* Section Title */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-foreground">
              <BookOpen className="h-5 w-5 text-eloq-purple" />
              <h2 className="text-lg font-semibold">Continue Where You Left Off</h2>
            </div>
            <button
              type="button"
              className="text-muted transition-colors hover:text-foreground"
              title="Lesson Info"
            >
              <Info className="h-4 w-4" />
            </button>
          </div>

          {/* Interactive Lesson Card */}
          <Link
            href="/dashboard/learn/beginner/unit-1"
            className="group relative block overflow-hidden rounded-2xl border border-border-subtle bg-card p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-eloq-purple/50 hover:shadow-float"
          >
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-eloq-purple">
                  Unit 1
                </span>
                <h3 className="mt-1 text-lg font-bold text-foreground transition-colors group-hover:text-eloq-purple sm:text-xl">
                  Greetings & Introductions
                </h3>
                <p className="text-sm text-muted">Lesson 2 of 5</p>
              </div>

              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-eloq-purple/10 text-eloq-purple transition-all group-hover:bg-eloq-purple group-hover:text-white">
                <ArrowRight className="h-5 w-5" />
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-6 space-y-2">
              <div className="flex justify-between text-xs font-semibold text-muted">
                <span>Progress</span>
                <span className="text-foreground">67%</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-border-subtle/60">
                <div
                  className="h-full rounded-full bg-eloq-purple transition-all duration-500"
                  style={{ width: "67%" }}
                />
              </div>
            </div>

            {/* Action Button */}
            <div className="mt-6 flex justify-end">
              <Button className="w-full bg-eloq-purple text-white hover:bg-eloq-purple/90 sm:w-auto">
                <span>Go to Lessons</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Bottom Accent Bar */}
            <div className="absolute inset-x-0 bottom-0 h-1 bg-eloq-green" />
          </Link>
        </section>
      </div>
    </div>
  );
};

export default DashboardHome;
