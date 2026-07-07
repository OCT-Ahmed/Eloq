'use client'
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
        className="fixed z-10001 left-0 top-0 bottom-0 flex flex-col items-stretch justify-start gap-8 w-[75%] md:w-[35%] lg:hidden dark:bg-black/20 px-6 py-[24px] backdrop-blur-lg h-full"
      >
        <AlignJustify size={24} onClick={showMenu} className="col-span-2" />
        {/* PROFILE */}
        <div className="flex items-center gap-3 border-b border-white/10 pb-8 mb-0 col-span-full">
          <div className="bg-purple-600 p-2 h-12 w-12 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/30">
            <User color="white" size={24} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-semibold dark:text-white">Ahmed Khyr</h1>
              <div className="flex items-center bg-orange-500/20 px-1.5 py-0.5 rounded-md gap-0.5"> 
                <Flame fill="darkorange" color="orange" size={14} strokeWidth={1.5} />
                <span className="font-mono font-bold text-[11px] text-orange-400">12</span>
              </div>
            </div>
            <span className="inline-block mt-1 text-[10px] bg-white/10 text-zinc-300 rounded-full px-2.5 py-0.5 font-mono border border-white/5">
              Intermediate
            </span>
          </div>
        </div>
        {/* LINKS GRID */}
        <div className="grid grid-cols-2 gap-3 flex-1 content-start">
          {menuItems.map((item, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-start gap-2 p-3 pt-4 h-fit rounded-xl bg-white/5 border border-white/5 cursor-pointer transition-colors"
              >
              <item.icon size={18} className="text-purple-400 mb-1" />
              <span className="text-xs font-medium text-zinc-200">{item.text}</span>
            </motion.div>
            ))}
          </div>
        {/* LOG OUT SECTION */}
        <div className="border-t border-white/10 pt-4">
          <motion.div 
            whileHover={{ x: 5 }}
            className="flex items-center gap-2 text-red-400 hover:text-red-300 cursor-pointer text-sm p-2 rounded-lg"
          >
            <LogOut size={18} />
            <span>Log Out</span>
          </motion.div>
        </div>
      </motion.aside>
  )
}