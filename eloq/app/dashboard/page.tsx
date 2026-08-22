import { createClient } from "@/lib/supabase/server";
import { UserCard } from "@/features/profile";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BookOpen,
  Flame,
  Info,
} from "lucide-react";

import ContinueLearningCard from "@/components/learning/ContinueLearningCard";
import { fetchContinueLearning } from "@/features/learning";

const DashboardHome = async () => {
  const supabase = await createClient();

  const { data } = await supabase.auth.getUser();
  const user = data?.user;

  // الاسم
  const fullName = user?.user_metadata?.full_name;
  const firstName = fullName
    ? fullName.split(" ")[0]
    : "Learner";

  // الطالب
  //
  // عدّل هذا إذا كان student_id محفوظًا في مكان مختلف
  // في مشروعك.
  const { data: student } = await supabase
    .from("students")
    .select("id")
    .eq("user_id", user?.id ?? "")
    .single();

  const continueResult = student?.id
    ? await fetchContinueLearning(student.id, "beginner")
    : null;

  const learningData =
    continueResult?.ok && continueResult.data
      ? continueResult.data
      : null;

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-6 sm:px-6 lg:px-8">

      {/* Header */}
      <header className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Welcome Back,{" "}
          <span className="text-eloq-purple">
            {firstName}
          </span>{" "}
          👋
        </h1>

        <p className="flex items-center gap-2 text-sm italic text-muted">
          <Flame className="h-4 w-4 fill-orange-500 text-orange-500" />

          <span>
            Ready to continue your learning journey?
          </span>
        </p>
      </header>

      {/* Main Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-start">

        {/* User Card */}
        <div className="w-full lg:col-span-1">
          <div className="rounded-2xl border border-border-subtle bg-card p-4 shadow-soft transition-all duration-300 hover:border-eloq-purple/30">
            <UserCard />
          </div>
        </div>

        {/* Continue Learning */}
        <section className="flex flex-col gap-4 lg:col-span-2">

          {/* Section Header */}
         {/* <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-foreground">
              <BookOpen className="h-5 w-5 text-eloq-purple" />

              <h2 className="text-lg font-semibold">
                Continue Learning
              </h2>
            </div>

            <button
              type="button"
              className="text-muted transition-colors hover:text-foreground"
              title="Learning information"
            >
              <Info className="h-4 w-4" />
            </button>
          </div>*/}

          {/* Dynamic Learning Card */}
                      <ContinueLearningCard data={learningData} />
          {/*{learningData ? (

          ) : (
            <div className="rounded-2xl border border-border-subtle bg-card p-6 shadow-soft">
              <p className="text-sm text-muted">
                We couldn't load your next lesson.
              </p>
            </div>
          )}*/}

        </section>
      </div>
    </div>
  );
};

export default DashboardHome;