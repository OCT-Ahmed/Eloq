"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlignJustify,
  Search,
  ChevronDown,
} from "lucide-react";

import AsideMenu from "@/components/dashboard/menu";

export default function DashboardHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const currentSection =
    pathname === "/dashboard"
    ? "ELOQ"
    : pathname.startsWith("/dashboard/learn")
    ? "Learn"
    : pathname.startsWith("/dashboard/practice")
    ? "Practice"
    : pathname.startsWith("/dashboard/eloqhub")
    ? "ELOQHub"
    : pathname.startsWith("/dashboard/ai-chat")
    ? "AI"
    : "ELOQ";

  const toggleMenu = () => {
    setIsMenuOpen((previous) => !previous);
  };

  return (
    <>
      <header className="sticky top-0 z-40 flex h-16 shrink-0 items-center justify-between gap-4 border-b border-border-subtle bg-background/95 px-4 backdrop-blur-xl sm:px-5 lg:h-[68px] lg:px-6">
        {/* Left */}
        <div className="flex min-w-0 items-center gap-2">
          <button
            type="button"
            onClick={toggleMenu}
            aria-label="Open menu"
            className="flex h-10 w-10 items-center justify-center rounded-xl text-muted transition-colors hover:bg-background hover:text-base"
          >
            <AlignJustify size={22} strokeWidth={1.8} />
          </button>

          <div className="flex min-w-0 items-center">
            <Link
              href="/dashboard"
              className="hidden rounded-lg px-2 py-1 text-sm font-semibold text-base transition-colors hover:bg-background lg:block"
            >
              Dashboard
            </Link>

            <button
              type="button"
              onClick={toggleMenu}
              className="flex items-center gap-1 rounded-lg px-2 py-1 text-lg font-bold tracking-tight text-base transition-colors hover:bg-background lg:hidden"
            >
              <span className="truncate">{currentSection}</span>
              <ChevronDown size={16} />
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            aria-label="Search"
            onClick={() => alert("Search")}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-muted transition-colors hover:bg-background hover:text-base"
          >
            <Search size={21} strokeWidth={1.8} />
          </button>

          <div className="hidden w-64 xl:block">
            <input
              type="search"
              placeholder="Search for a word, lesson..."
              className="h-9 w-full rounded-xl border border-border-subtle bg-background px-3 text-sm text-base outline-none transition-all placeholder:text-muted focus:border-ring focus:ring-2 focus:ring-ring/20"
            />
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-[1000] cursor-default bg-background/70 backdrop-blur-sm"
            />

            <AsideMenu
              showMenu={() => setIsMenuOpen(false)}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
}