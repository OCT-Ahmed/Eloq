import { Card } from "@/components/ui/card";
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarProvider } from "@/components/ui/sidebar";
import { BookOpen, Bot, Brain, BrainIcon, Earth, Home, Rocket, Settings, SidebarIcon } from "lucide-react";
import Link from "next/link";

export default function DashboardLayout({
    children,
}:{
    children: React.ReactNode,
}) {
    return (
        <div className="max-h-full flex flex-col items-start justify-stretch h-screen" id="dashboard-container">
            <header className="flex items-center justify-start gap-6 text-white h-18 w-full px-5 py-2 bg-primary">
                <Link className="mr-51 cursor-default" href="/"><p>ELOQ</p></Link> 
                <Link className="text-sm" href="dashboard">Dashboard</Link>
                {/* Add header links array */}
            </header>

            <main className="flex items-stretch justify-start h-full w-full border">
            
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
                <aside className="flex flex-col gap-4 bg-purple-300 px-4 py-5 w-64 h-full border-r border-base/15 shadow-2xl text-regular">
                    <header className="flex gap-2 pb-4 border-b border-primary/15">
                        <Rocket color="purple" />
                        <h1 className="font-semibold">
                            My Dashboard
                        </h1>
                        {/* add sidebar links array */}
                    </header>

                    <main className="flex flex-1 flex-col gap-1 pb-4 border-b border-primary/15">
                        <Link className="flex gap-2 p-2 hover:bg-white/35 text-sm rounded-lg transition-colors duration-300" href="/dashboard">
                            <Home size={18} />
                            Home
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
            
                <div className="w-full flex-1">
                    {children}
                </div>
            </main>    
        </div>      
    )
}