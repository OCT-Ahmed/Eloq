import DashboardHeader from "@/components/dashboard/dashboardHeader";
import BottomMobileNav from "@/components/dashboard/bottomMobileNav";
import DesktopAside from "@/components/dashboard/desktopAside";

import { HomeIcon, GraduationCap, Sparkles, Dumbbell, Users, ChevronRight } from "lucide-react";

import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito",
});

export type DashboardNavItem = {
  title: string;
  slug: string;
  href: string;
  icon: React.ReactNode;
};

const links: DashboardNavItem[] = [
  {
    title: "Home",
    slug: "home",
    href: "/dashboard",
    icon: <HomeIcon size={22} strokeWidth={1.9} />,
  },
  {
    title: "Learn",
    slug: "learn",
    href: "/dashboard/learn",
    icon: <GraduationCap size={22} strokeWidth={1.9} />,
  },
    {
    title: "AI Chat",
    slug: "ai-chat",
    href: "/dashboard/ai-chat",
    icon: <Sparkles size={22} strokeWidth={1.9} />,
  },
  {
    title: "Practice",
    slug: "practice",
    href: "/dashboard/practice",
    icon: <Dumbbell size={22} strokeWidth={1.9} />,
  },
  {
    title: "ELOQHub",
    slug: "eloqhub",
    href: "/dashboard/eloqhub",
    icon: <Users size={22} strokeWidth={1.9} />,
  },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      id="dashboard-container"
      className={`${nunito.variable} flex h-dvh min-h-0 w-full flex-col overflow-hidden bg-background text-foreground`}
    >
      <DashboardHeader />

      <div className="flex min-h-0 flex-1 w-full">
        <DesktopAside links={links} />

        <main className="min-h-0 min-w-0 flex-1 overflow-y-auto overflow-x-hidden bg-background pb-24 lg:pb-0">
          <div className="mx-auto min-h-full w-full max-w-[1600px] px-4 py-4 sm:px-6 lg:px-8 lg:py-6">
            {children}
          </div>
        </main>
      </div>

      <BottomMobileNav links={links} />
    </div>
  );
}