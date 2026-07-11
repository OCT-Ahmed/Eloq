'use client'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { User, Flame, HomeIcon, Settings } from 'lucide-react'

export default function DesktopAside({
  links 
  }:{
    links:{
      title: string;
      slug: string;
      href: string;
      icon: any;
    }[]
  }) {
  
  const pathname = usePathname();
  
  return (
                <aside className="hidden lg:flex-shrink-0 lg:flex lg:flex-col lg:items-stretch lg:justify-stretch lg:gap-4 bg-purple-300 px-4 pt-5 pb-3 w-64 h-full border-r border-black/15 shadow-2xl text-regular">
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
                        <Link className="flex gap-2 p-2 hover:bg-white/35 text-sm rounded-lg transition-colors duration-300" href="/dashboard">
                            <HomeIcon color="purple" size={18} strokeWidth={1.9} />
                            Home
                        </Link>
                         {
                        links.map(link => (
                          <Link key={link.slug} className={` lg:flex lg:gap-2 p-2 hover:bg-white/35 text-sm lg:rounded-lg ${link.href === pathname ? "dark:text-purple-700 dark:shadow-md dark:shadow-purple-700" : "dark:text-white/85" } transition-colors duration-300`} href={link.href}>
                            {link.icon}
                            {link.title}
                        </Link>
                        ))
                      }
                    </main>
                    <footer className="flex flex-col gap-2">
                        <Link className="flex gap-2 p-2  text-sm rounded-lg hover:bg-white/35 transition-colors duration-300" href="/dashboard">
                            <Settings size={18} />
                            Settings
                        </Link>
                    </footer>
                </aside>
    )
}

