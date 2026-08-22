"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Home, Shield, FlaskConical, LayoutDashboard } from "lucide-react";

import { useAuth } from "@/features/auth";
import { useProfile, UserAvatar } from "@/features/profile";

export default function DevNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const { user, isLoading } = useAuth();
  const { avatar_url, full_name } = useProfile();

  return (
    <>
      {/* Toggle button */}
      <button
        type="button"
        aria-label={isOpen ? "Close developer navigation" : "Open developer navigation"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((previous) => !previous)}
        className={`
          fixed left-0 top-1/2 z-[1100]
          flex h-10 w-7 -translate-y-1/2
          items-center justify-center
          rounded-r-xl
          border border-l-0 border-border
          bg-card text-muted-foreground
          shadow-md
          transition-all duration-300
          hover:w-9 hover:text-foreground
        `}
      >
        <ChevronRight
          size={17}
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Navigation panel */}
      <aside
        className={`
          fixed left-0 top-0 z-[1090]
          flex h-dvh w-64 flex-col
          border-r border-border
          bg-card
          shadow-xl
          transition-transform duration-300
          ease-[cubic-bezier(0.22,1,0.36,1)]
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Header */}
        <div className="flex h-16 shrink-0 items-center border-b border-border px-5">
          <div>
            <p className="font-display text-lg font-bold tracking-tight text-foreground">
              ELOQ
            </p>

            <p className="text-[11px] text-muted-foreground">
              Development navigation
            </p>
          </div>
        </div>

        {/* User */}
        <div className="border-b border-border p-4">
          {isLoading ? (
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 animate-pulse rounded-full bg-muted" />

              <div className="space-y-2">
                <div className="h-3 w-20 animate-pulse rounded bg-muted" />
                <div className="h-2 w-14 animate-pulse rounded bg-muted" />
              </div>
            </div>
          ) : user ? (
            <div className="flex items-center gap-3">
              {avatar_url ? (
                <UserAvatar avatarUrl={avatar_url} />
              ) : (
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {full_name?.charAt(0)?.toUpperCase() ?? "U"}
                </div>
              )}

              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-foreground">
                  {full_name || "User"}
                </p>

                <p className="text-xs text-muted-foreground">
                  Signed in
                </p>
              </div>
            </div>
          ) : (
            <div>
              <p className="text-sm font-medium text-foreground">
                Not signed in
              </p>

              <p className="mt-1 text-xs text-muted-foreground">
                Authentication status
              </p>
            </div>
          )}
        </div>

        {/* Links */}
        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-3">
          <DevLink
            href="/"
            label="Home"
            icon={<Home size={18} />}
          />

          <DevLink
            href="/dashboard"
            label="Dashboard"
            icon={<LayoutDashboard size={18} />}
          />

          <DevLink
            href="/admin"
            label="Admin"
            icon={<Shield size={18} />}
          />

          <DevLink
            href="/test"
            label="Test"
            icon={<FlaskConical size={18} />}
          />

          <div className="my-3 border-t border-border" />

          <p className="px-3 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
            Development
          </p>
        </nav>

        {/* Footer */}
        <div className="shrink-0 border-t border-border p-4">
          <p className="text-[11px] leading-4 text-muted-foreground">
            Temporary navigation for development.
          </p>
        </div>
      </aside>
    </>
  );
}

interface DevLinkProps {
  href: string;
  label: string;
  icon: React.ReactNode;
}

function DevLink({ href, label, icon }: DevLinkProps) {
  return (
    <Link
      href={href}
      className="
        flex items-center gap-3
        rounded-xl px-3 py-3
        text-sm font-medium
        text-muted-foreground
        transition-all duration-200
        hover:bg-muted
        hover:text-foreground
        active:scale-[0.98]
      "
    >
      {icon}

      <span>{label}</span>
    </Link>
  );
}