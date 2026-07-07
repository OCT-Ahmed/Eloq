'use client'
import AsideMenu from '@/components/dashboard/menu'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Search, Menu, AlignJustify, MoreVertical, MoreHorizantal } from 'lucide-react'

export default function DashboardHeader() {
  {/* States */}
  const [isOpen, setIsOpen] = useState(false);
  {/* Variables */}
  const pathname = usePathname();
  const currentSection = 
    pathname === "/dashboard" ? "ELOQ" : 
    pathname.includes("/dashboard/learn") ? "Learn" : 
    pathname.includes("/dashboard/practice") ? "Practice" : 
    pathname.includes("/dashboard/qhub") ? "ELOQHub" : 
    pathname.includes("/dashboard/ai") ? "Ai" :
    "";
    
    {/* Handlers */}
    const showMenu = () => {
      setIsOpen(s => !s);
    }
  return (
    <header className="flex items-center justify-between gap-2 lg:items-center lg:gap-6 text-white h-18 w-full px-5 py-4 bg-primary shadow-b shadow-2xl dark:bg-black">
                  
              {/* LEFT */}
             
                <AlignJustify size={24} onClick={showMenu} />
              <AnimatePresence>
                {isOpen && (
                <>
                <motion.div
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  exit={{opacity: 0}}
                  className="fixed inset-0 z-1001 dark:bg-black/75"
                  onClick={() => setIsOpen(false)}
                ></motion.div>
                  <AsideMenu showMenu={showMenu} />
                </>
                )}
              </AnimatePresence>
              {/* CENTER */}
              <div className="flex flex-col items-center justify-center gap-0 lg:flex-row">
                <span onClick={showMenu} className={`lg:hidden font-semibold ${ pathname === "/dashboard" ? "" : ""  } text-xl tracking-[1.2px] lg:hidden`}>
                  { currentSection }
                </span>
                <Link className="hidden lg:block text-white/75 hover:text-white p-2 hover:bg-white/5 rounded-lg transition-all duration-300" href="/dashboard">Dashboard</Link>
              </div>
              {/* RIGHT */}
              <div>
                  <Search onClick={() => alert('Hi')} size={24} />
                  
                <div className="hidden lg:block lg:w-80">
                    <input className="hidden lg:block text-sm p-4 rounded-xl w-full h-8 bg-white/15 backdrop-blur-xl active:border active:border-white/25 actie:border-none focusborder-none" type="text" placeholder="Search for a word, lesson or .." />
                </div>
                {/* Add header links array */}
              </div>
            </header>
  )
}