import { Card } from "@/components/ui/card";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarProvider } from "@/components/ui/sidebar";
import { BookOpen, Bot, Brain, BrainIcon, Earth, FireExtinguisher, Flame, Grid2x2, Home, KanbanSquare, Layers2, LayoutDashboardIcon, LayoutGrid, LayoutList, Rocket, Settings, SidebarIcon, User, UserCircle } from "lucide-react";
import Link from "next/link";

export default function DashboardLayout({
    children,
}:{
    children: React.ReactNode,
}) {
    return (
        <div className="max-h-full flex flex-col items-start justify-stretch h-screen" id="dashboard-container">
            <header className="flex items-center justify-start gap-6 text-white h-18 w-full px-5 py-2 bg-primary shadow-b shadow-2xl">
                <Link className="mr-50 cursor-default" href="/">
                    <h1 className="text-xl font-semibold">ELOQ</h1>
                </Link> 
                <Link className="text-white/75 hover:text-white p-2 hover:bg-white/5 rounded-lg transition-all duration-300" href="dashboard">Dashboard</Link>

                <div className="w-80">
                    <input className="text-sm p-4 rounded-xl w-full h-8 bg-white/15 backdrop-blur-xl active:border active:border-white/25 actie:border-none focusborder-none" type="text" placeholder="Search for a word, lesson or .." />
                </div>
                {/* Add header links array */}
            </header>

            <main className="flex items-stretch justify-start h-full w-full ">
            
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
                <aside className="flex flex-col items-stretch justify-stretch gap-4 bg-purple-300 px-4 pt-5 pb-3 w-64 h-full border-r border-black/15 shadow-2xl text-regular">
                    <header className="flex items-start justify-start gap-2 pb-4 border-b border-primary/15">
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

                    <main className="flex flex-1 flex-col gap-1 pb-4 border-b border-primary/15">
                        <Link className="flex gap-2 p-2 hover: bg-white/35 text-sm rounded-lg transition-colors duration-300" href="/dashboard">
                            <LayoutDashboardIcon color="purple" size={18} strokeWidth={1.9} />
                            Dashboard
                        </Link>
                        <Link className="flex gap-2 p-2  text-sm rounded-lg hover:bg-white/35 transition-colors duration-300" href="/dashboard/a1">
                            <BookOpen size={18} />
                            Learn
                        </Link>
                        <Link className="flex gap-2 p-2 hover:bg-white/35 text-sm rounded-lg transition-colors duration-300" href="/dashboard">
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
                        </Link>
                    </main>
                    <footer className="flex flex-col gap-2">
                        <Link className="flex gap-2 p-2  text-sm rounded-lg hover:bg-white/35 transition-colors duration-300" href="/dashboard">
                            <Settings size={18} />
                            Settings
                        </Link>
                    </footer>
                </aside>
            
                <section className="w-full flex-1 py-4 px-6">
                    {children}
                </section>
            </main>    
        </div>      
    )
}