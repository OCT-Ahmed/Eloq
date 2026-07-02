import { Card } from "@/components/ui/card";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarProvider } from "@/components/ui/sidebar";
import { BookOpen, Bot, Brain, BrainIcon, Earth, FireExtinguisher, Flame, Grid2x2, Home, HomeIcon, KanbanSquare, Layers2, LayoutDashboardIcon, LayoutGrid, LayoutList, Rocket, Settings, SidebarIcon, User, UserCircle } from "lucide-react";
import Link from "next/link";

const links =  [
    {
      title: "Home",
      slug: "home",
      href: "/dashboard",
      icon: <HomeIcon className="text-purple-700"  size={24} strokeWidth={1.9} />
    },
    {
      title: "Learn",
      slug: "learn",
      href: "/dashboard/learn",
      icon: <BookOpen size={24} />
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
        <div className="flex flex-col items-start justify-stretch w-full h-screen overflow-hidden" id="dashboard-container">
            <header className="flex items-start justify-between gap-2 lg:items-center lg:gap-6 text-white h-18 w-full px-5 py-4 bg-primary shadow-b shadow-2xl">
                <Link className="mr-50 cursor-default" href="/">
                    <h1 className="text-xl font-semibold">ELOQ</h1>
                </Link> 
                <Link className="text-white/75 hover:text-white p-2 hover:bg-white/5 rounded-lg transition-all duration-300" href="/dashboard">Dashboard</Link>

                <div className="w-4 lg:w-80">
                    <input className=" text-sm p-4 rounded-xl w-full h-8 bg-white/15 backdrop-blur-xl active:border active:border-white/25 actie:border-none focusborder-none" type="text" placeholder="Search for a word, lesson or .." />
                </div>
                {/* Add header links array */}
            </header>

            <main className="lg:flex lg:items-stretch lg:justify-start w-full h-[calc(100vh-64px)]">
            
                {/* 
                <SidebarProvider className="h-full" >
                    <Sidebar className="bg-purple-300">
                            <SidebarIcon /> 
                        <SidebarHeader className="border-b border-gray-300">This is the Sidebar</SidebarHeader>
                        <SidebarContent className="border-b border-gray-300">Content</SidebarContent>
                        <SidebarFooter className="border-b border-gray-300">Footer</SidebarFooter>
                    </Sidebar>
                </SidebarProvider> 
                */} 
                <aside className="z-100 absolute bottom-0 left-0 right-0 flex items-stretch justify-between w-full bg-black/95 filter-blur-xl lg:h-10 lg:flex-shrink-0 lg:flex lg:flex-col lg:items-stretch lg:justify-stretch lg:gap-4 lg:bg-purple-300 px-4 pt-5 pb-3 lg:w-64 lg:h-full border-t lg:border-r border-white/15 lg:border-black/15 lg:shadow-2xl text-regular">
                    <header className="hidden flex items-start justify-start gap-2 pb-4 border-b border-primary/15">
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

                    {/*}<main className="sm:flex sm: lg:flex-col sm:gap-1 pb-4 border-b border-primary/15">*/}
                      {
                        links.map(link => (
                          <Link key={link.slug} className={`flex gap-2 p-4 bg-black hover:bg-white/35 text-sm dark:text-white/85 rounded-full lg:rounded-lg ${link.slug === "home" ? "dark:shadow-md dark:shadow-purple-700" : "" } transition-colors duration-300`} href={link.href}>
                            {link.icon}
                        </Link>
                        ))
                      }
                      {/*}  <Link className="flex gap-2 p-2 hover: bg-white/35 text-sm rounded-lg transition-colors duration-300" href="/dashboard">
                            <HomeIcon color="purple" size={18} strokeWidth={1.9} />
                            Home
                        </Link>
                        <Link className="flex gap-2 p-2  text-sm rounded-lg hover:bg-white/35 transition-colors duration-300" href="/dashboard/learn">
                            <BookOpen size={18} />
                            Learn
                        </Link>
                        <Link className="hidden flex gap-2 p-2 hover:bg-white/35 text-sm rounded-lg transition-colors duration-300" href="/dashboard">
                            <BrainIcon size={18} />
                                Practice
                        </Link>
                        <Link className="flex gap-2 p-2 hover:bg-white/35 text-sm rounded-lg transition-colors duration-300" href="/dashboard">
                            <Earth size={18} />
                            QHub
                        </Link>
                        <Link className="flex gap-2 p-2  text-sm rounded-lg hover:bg-white/35 transition-colors duration-300" href="/dashboard">
                            <Bot size={18} />
                            AI Chat
                        </Link> */}
                    {/*</main>*/}
                    <footer className="hidden lg:flex lg:flex-col lg:gap-2">
                        <Link className="flex gap-2 p-2  text-sm rounded-lg hover:bg-white/35 transition-colors duration-300" href="/dashboard">
                            <Settings size={18} />
                            Settings
                        </Link>
                    </footer>
                </aside>
            
                <section className="w-full h-full py-4 px-6 overflow-hidden">
                    {children}
                </section>
            </main>    
        </div>      
    )
}