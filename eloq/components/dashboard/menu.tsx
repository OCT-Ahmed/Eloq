'use client'
import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"
import { useAuth } from "@/features/auth"
import { useProfile } from "@/features/profile"
import { logout } from "@/features/auth/actions/logout"
import { UserCard } from "@/features/profile"
import { AnimatePresence, motion} from 'framer-motion'
import Link from 'next/link'
import { AlignJustify, User, Flame, Home, Layout, HelpCircle, Trophy, Mail, MessageSquare, Users, Settings, LogOut } from 'lucide-react'

const menuItems = [
  { icon: Home, text: "Home" },
  { icon: Layout, text: "AI" },
  { icon: HelpCircle, text: "QHub" },
  { icon: Trophy, text: "Rank" },
  { icon: Mail, text: "Mail" },
  { icon: MessageSquare, text: "Messages" },
  { icon: Users, text: "Family" },
  { icon: Settings, text: "Settings" },
]

export default function AsideMenu({
  showMenu
}: {
  showMenu: () => {},
}) {
  // •• Hooks
  const router = useRouter()
  // •• States
  const { user, isLoading } = useAuth()

  
  return (
      <motion.aside 
        initial={{x: -300, opacity:0.8}}
        animate={{x:0, opacity:1}}
        exit={{x:-300, opacity: 0.8,}}
        transition={{
          type: "spring",
          stiffness: 280,
          damping: 35,
          duration: 0.4,
        }}
        className="fixed z-10001 left-0 top-0 bottom-0 flex flex-col items-stretch justify-start gap-8 w-[75%] md:w-[35%] lg:hidden bg-foreground/95 px-6 py-[24px] backdrop-blur-lg h-full border-r border-border-subtle"
      >
        <AlignJustify size={24} onClick={showMenu} className="col-span-2 text-base cursor-pointer" />

      <UserCard />

        <div className="grid grid-cols-2 gap-3 flex-1 content-start">
          {menuItems.map((item, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-start gap-2 p-3 pt-4 h-fit rounded-xl bg-background/50 border border-border-subtle cursor-pointer transition-colors"
              >
              <item.icon size={18} className="text-eloq-purple mb-1" />
              <span className="text-xs font-medium text-base">{item.text}</span>
            </motion.div>
            ))}
          </div>
        
        <div className="border-t border-border-subtle pt-4">
          <motion.button 
            whileHover={{ x: 5 }}
            className="flex items-center gap-2 text-red-500 hover:text-red-400 cursor-pointer text-sm p-2 rounded-lg"
            onClick={async () => {
              try {
                await logout()
                router.replace("/")
              } catch (error) {
                console.error(error)
              }
            }}
          >
            <LogOut size={18} />
            <span>Log Out</span>
          </motion.button>
        </div>
      </motion.aside>
  )
}
