'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { ChevronUp } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface NavLink {
  title: string;
  slug: string;
  href: string;
  icon: React.ReactNode;
}

interface BottomMobileNavProps {
  links: NavLink[];
}

export default function BottomMobileNav({ links }: BottomMobileNavProps) {
  const pathname = usePathname();
  const [peek, setPeek] = useState(false);

  // التعرف على صفحة الدرس لإخفاء الشريط فيها تلقائياً
  const isLessonPage = pathname?.includes('/lesson') ?? false;

  useEffect(() => {
    setPeek(false);
  }, [pathname]);

  const isHidden = isLessonPage && !peek;

  return (
    <>
      {/* 1. زر الـ Chevron داخل الدرس عند اختفاء الشريط */}
      {isLessonPage && !peek && (
        <button
          type="button"
          aria-label="إظهار شريط التنقل"
          onClick={() => setPeek(true)}
          className="fixed bottom-3 left-1/2 -translate-x-1/2 z-40 flex items-center gap-1.5 rounded-full border border-border/60 bg-background/90 px-3.5 py-1.5 text-xs font-semibold text-muted-foreground shadow-lg backdrop-blur-md transition-all active:scale-95 hover:text-foreground"
        >
          <ChevronUp size={16} />
          <span>التنقل</span>
        </button>
      )}

      {/* 2. خلفية شفافة لإغلاق الشريط أثناء المعاينة */}
      {isLessonPage && peek && (
        <div
          aria-hidden="true"
          onClick={() => setPeek(false)}
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-xs"
        />
      )}

      {/* 3. شريط التنقل السفلي */}
      <aside
        className={cn(
          "fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around w-full bg-background/95 backdrop-blur-xl border-t border-border/60 px-2 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] transition-transform duration-300 ease-in-out lg:hidden",
          isHidden ? "translate-y-full" : "translate-y-0"
        )}
      >
        {links?.map((link) => {
          // التحقق مما إذا كان الرابط هو الجذر أو الرئيسية الخاصة بالداشبورد
          const isHomeLink = link.href === '/' || link.href === '/dashboard';

          // مطابقة دقيقة للرئيسية، ومطابقة بادئة نصوص المسارات للأقسام الأخرى
          const isActive = isHomeLink
            ? pathname === link.href
            : pathname === link.href || pathname?.startsWith(`${link.href}/`);

          return (
            <Link
              key={link.slug}
              href={link.href}
              onClick={() => setPeek(false)}
              className={cn(
                "flex flex-col items-center justify-center gap-1 px-3 py-1.5 rounded-xl transition-all duration-300 active:scale-95",
                isActive
                  ? "bg-eloq-purple/10 text-eloq-purple font-bold shadow-xs"
                  : "text-muted hover:bg-background/50 hover:text-foreground"
              )}
            >
              <div className="size-5 flex items-center justify-center">
                {link.icon}
              </div>
              <span className="text-[10px] font-medium leading-none">
                {link.title}
              </span>
            </Link>
          );
        })}
      </aside>
    </>
  );
}
