import { Card } from "@/components/ui/card";
import DashboardHeader from '@/components/dashboard/dashboardHeader'
import BottomMobileNav from '@/components/dashboard/bottomMobileNav'
import DesktopAside from '@/components/dashboard/desktopAside'
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarProvider } from "@/components/ui/sidebar";
import { BookOpen, Bot, Brain, BrainIcon, Earth, FireExtinguisher, Flame, Grid2x2, Home, HomeIcon, KanbanSquare, Layers2, LayoutDashboardIcon, LayoutGrid, LayoutList, Rocket, Settings, SidebarIcon, User, UserCircle, Search } from "lucide-react";
import Link from "next/link";

const links =  [
    {
      title: "Home",
      slug: "home",
      href: "/dashboard",
      icon: <HomeIcon size={24} strokeWidth={1.9}  />
    },
    {
      title: "Learn",
      slug: "learn",
      href: "/dashboard/learn",
      icon: <BookOpen size={24} fill={''} />
    },
    {
      title: "Practice",
      slug: "practice",
      href: "/dashboard/practice",
      icon: <BrainIcon size={24} />
    },
    {
      title: "ELOQHub",
      slug: "eloqhub",
      href: "/dashboard/eloqhub",
      icon:  <Earth size={24} />
    },
    {
      title: "AI Chat",
      slug: "ai-chat",
      href: "/dashboard/ai-chat",
      icon: <Bot size={24} />
    },
    /*{
      title: "Settings",
      slug: "settings",
      href: "/dashboard/settings",
      icon:  <Settings size={18} />
    },*/
  ];

export default function DashboardLayout({
    children,
}:{
    children: React.ReactNode,
}) {
  return (
    <div 
      className="flex flex-col items-center justify-stretch w-full h-screen overflow-hidden text-base" 
      id="dashboard-container"
    >
      <DashboardHeader />
      <main className="lg:flex lg:items-stretch lg:justify-start w-full h-[calc(100vh-64px)]">
        <DesktopAside links={links} />
        <BottomMobileNav links={links} />
        <section className="w-full h-full py-4 px-6 overflow-x-hidden overflow-y-auto lg:overflow-hidden bg-black scrollbar-none lg:scrollbar">
          {children}
        </section>
      </main>    
    </div>      
  )
}