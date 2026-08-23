"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserCard } from "@/features/profile"
import { Flame, Settings, User } from "lucide-react";
import type { DashboardNavItem } from "@/app/dashboard/layout";
import { playUISound } from "@/lib/uiSounds";

export default function DesktopAside({
  links,
}: {
  links: DashboardNavItem[];
}) {
  const pathname = usePathname();

  return (
    <aside className="hidden w-64 shrink-0 border-r border-border-subtle bg-foreground lg:flex lg:h-full lg:flex-col">
      {/* Profile */}
      <header className="border-b border-border-subtle px-5 py-5">
        <UserCard />
      </header>

      {/* Navigation */}
      <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-4">
        {links.map((link) => {
          const isActive =
            pathname === link.href ||
            (link.href !== "/dashboard" &&
              pathname.startsWith(`${link.href}/`));

          return (
            <Link
              key={link.slug}
              href={link.href}
              onClick={() => playUISound("click")}
              className={[
                "group flex items-center gap-3 rounded-xl px-3 py-2.5",
                "text-sm font-medium transition-all duration-200",
                "hover:bg-background hover:text-base",
                isActive
                  ? "bg-eloq-soft-purple text-eloq-purple shadow-soft"
                  : "text-muted",
              ].join(" ")}
            >
              <span
                className={
                  isActive
                    ? "text-eloq-purple"
                    : "text-muted group-hover:text-eloq-purple"
                }
              >
                {link.icon}
              </span>

              <span>{link.title}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <footer className="border-t border-border-subtle p-3">
        <Link
          href="/dashboard/settings"
          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-muted transition-colors duration-200 hover:bg-background hover:text-base"
        >
          <Settings size={20} strokeWidth={1.8} />
          Settings
        </Link>
      </footer>
    </aside>
  );
}