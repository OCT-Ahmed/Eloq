'use client'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function BottomMobileNav({
  links 
  }:{
    links:{
      title: string;
      slug: string;
      href: string;
      icon: any;
    }[]
  }) {
  
  const pathname = usePathname();
  
  return (
    <aside className="z-1000 fixed bottom-0 left-0 right-0 flex items-stretch justify-between w-full bg-foreground/95 backdrop-blur-xl lg:h-10 lg:flex-shrink-0 lg:flex lg:flex-col lg:items-stretch lg:justify-stretch lg:gap-4 lg:bg-background px-4 pt-5 pb-3 lg:w-64 lg:h-full border-t lg:border-r border-border-subtle lg:shadow-2xl text-regular">
                      {
                        links.map(link => (
                          <Link key={link.slug} className={`flex gap-2 p-4 bg-background/30 hover:bg-background/50 text-sm rounded-full lg:rounded-lg ${link.href === pathname ? "text-eloq-purple shadow-md shadow-eloq-purple/10" : "text-muted" } transition-colors duration-300`} href={link.href}>
                            {link.icon}
                        </Link>
                        ))
                      }
        </aside>
    )
}
