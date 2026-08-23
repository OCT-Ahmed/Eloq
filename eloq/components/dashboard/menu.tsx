"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { playUISound } from "@/lib/uiSounds";


import {
  AlignJustify,
  Bot,
  HelpCircle,
  Home,
  LogOut,
  Mail,
  MessageSquare,
  Settings,
  Trophy,
  Users,
} from "lucide-react";

import { UserCard } from "@/features/profile";
import { logout } from "@/features/auth/actions/logout";

const menuItems = [
  {
    href: "/dashboard",
    icon: Home,
    text: "Home",
  },
  {
    href: "/dashboard/ai-chat",
    icon: Bot,
    text: "AI",
  },
  {
    href: "/dashboard/eloqhub",
    icon: HelpCircle,
    text: "ELOQHub",
  },
  {
    href: "/dashboard/rank",
    icon: Trophy,
    text: "Rank",
  },
  {
    href: "/dashboard/mail",
    icon: Mail,
    text: "Mail",
  },
  {
    href: "/dashboard/messages",
    icon: MessageSquare,
    text: "Messages",
  },
  {
    href: "/dashboard/family",
    icon: Users,
    text: "Family",
  },
  {
    href: "/dashboard/settings",
    icon: Settings,
    text: "Settings",
  },
];

export default function AsideMenu({
  showMenu,
}: {
  showMenu: () => void;
}) {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logout();
      router.replace("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <motion.aside
      initial={{ x: -320, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -320, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 280,
        damping: 32,
      }}
      className="fixed inset-y-0 left-0 z-[1001] flex w-[82%] max-w-[380px] flex-col border-r border-border-subtle bg-background/95 px-5 py-5 shadow-float backdrop-blur-xl sm:w-[360px]"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={() => (playUISound("eloqClick"), showMenu())}
          aria-label="Close menu"
          className="flex h-10 w-10 items-center justify-center rounded-xl text-eloq-purple transition-colors hover:bg-background hover:text-base"
        >
          <AlignJustify size={22} strokeWidth={1.8} />
        </button>

        <span className="text-sm font-bold tracking-[0.18em] text-eloq-purple">
          ELOQ
        </span>
      </div>

      {/* Profile */}
      <Link className="mt-6"
      href="/dashboard/profile"
      >
        <UserCard />
      </Link>
      {/* Menu */}
      <div className="mt-6 grid flex-1 content-start grid-cols-2 gap-3 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => (playUISound("eloqClick"), showMenu)}
              className="group flex items-center justify-start gap-2 rounded-2xl border border-border-subtle bg-background/60 p-3 transition-all duration-200 hover:-translate-y-0.5 hover:bg-background hover:shadow-soft"
            >
              <Icon
                size={19}
                strokeWidth={1.8}
                className="text-eloq-purple transition-transform duration-200 group-hover:scale-105"
              />

              <span className="mt-0 block text-xs font-semibold text-base">
                {item.text}
              </span>
            </Link>
          );
        })}
      </div>

      {/* Logout */}
      <div className="mt-5 border-t border-border-subtle pt-4">
        <motion.button
          type="button"
          whileTap={{ scale: 0.97 }}
          onClick={handleLogout}
          className="flex w-full items-center gap-2 rounded-xl p-3 text-sm font-medium text-danger transition-colors hover:bg-danger/10"
        >
          <LogOut size={18} />
          <span>Log Out</span>
        </motion.button>
      </div>
    </motion.aside>
  );
}
