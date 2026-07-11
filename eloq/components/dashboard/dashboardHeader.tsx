'use client'
import AsideMenu from '@/components/dashboard/menu'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Search, Menu, AlignJustify, MoreVertical, MoreHorizantal } from 'lucide-react'

export default function DashboardHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const currentSection = 
    pathname === "/dashboard" ? "ELOQ" : 
    pathname.includes("/dashboard/learn") ? "Learn" : 
    pathname.includes("/dashboard/practice") ? "Practice" : 
    pathname.includes("/dashboard/qhub") ? "ELOQHub" : 
    pathname.includes("/dashboard/ai") ? "Ai" :
    "";
    
    const showMenu = () => {
      setIsOpen(s => !s);
    }
  return (
    <header className="flex items-center justify-between gap-2 lg:items-center lg:gap-6 text-base h-18 w-full px-5 py-4 bg-foreground border-b border-border-subtle shadow-sm">
                  
                <AlignJustify size={24} onClick={showMenu} className="cursor-pointer text-base" />
              <AnimatePresence>
                {isOpen && (
                <>
                <motion.div
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  exit={{opacity: 0}}
                  className="fixed inset-0 z-1001 bg-background/75 backdrop-blur-sm"
                  onClick={() => setIsOpen(false)}
                ></motion.div>
                  <AsideMenu showMenu={showMenu} />
                </>
                )}
              </AnimatePresence>
              <div className="flex flex-col items-center justify-center gap-0 lg:flex-row">
                <span onClick={showMenu} className="lg:hidden font-semibold text-xl tracking-[1.2px] text-base cursor-pointer">
                  { currentSection }
                </span>
                <Link className="hidden lg:block text-muted hover:text-base p-2 hover:bg-background/50 rounded-lg transition-all duration-300" href="/dashboard">Dashboard</Link>
              </div>
              <div className="flex items-center gap-4">
                  <Search onClick={() => alert('Hi')} size={24} className="cursor-pointer text-muted hover:text-base" />
                  
                <div className="hidden lg:block lg:w-80">
                    <input className="hidden lg:block text-sm p-4 rounded-xl w-full h-8 bg-background border border-border-subtle text-base placeholder:text-muted focus:outline-none" type="text" placeholder="Search for a word, lesson or .." />
                </div>
              </div>
            </header>
  )
}
