import { ChevronRight } from "lucide-react";
import Link from "next/link";

export type BreadcrumbItem = {
  label: string;
  slug?: string;
  href?: string;
};

interface BreadcrumbProps {
  links: BreadcrumbItem[];
}

export default function Breadcrumb({ links = [] }: BreadcrumbProps) {
  if (!links.length) return null;

  // بناء المسارات بشكل آمن بدون Side-effects داخل Render
  let accumulatedPath = "";

  return (
    <nav aria-label="Breadcrumb" className="flex items-center">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm text-muted">
        {links.map((link, index) => {
          const isLast = index === links.length - 1;

          // تحديث المسار بأمان (يدعم href المباشر أو slug التراكمي)
          if (link.href) {
            accumulatedPath = link.href;
          } else if (link.slug) {
            const cleanSlug = link.slug.replace(/^\//, "");
            accumulatedPath += `/${cleanSlug}`;
          }

          return (
            <li key={index} className="inline-flex items-center gap-1.5">
              {isLast ? (
                // الصفحة الحالية: نص بارز غير قابل للنقر مع تمييز للوصول الشامل
                <span
                  aria-current="page"
                  className="font-semibold text-foreground truncate max-w-[200px] sm:max-w-none"
                >
                  {link.label}
                </span>
              ) : (
                // الصفحات السابقة: رابط مع تفاعل Hover
                <>
                  <Link
                    href={accumulatedPath || "/"}
                    className="transition-colors hover:text-foreground hover:underline underline-offset-4"
                  >
                    {link.label}
                  </Link>
                  <ChevronRight className="h-3.5 w-3.5 shrink-0 text-muted/70" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
