"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Header() {
  const pathname = usePathname();

  const linkBaseClass = "font-headline text-subhead hover:scale-105 hover:rotate-1 transition-transform duration-200";
  const activeClass = "text-primary font-bold border-b-2 border-dashed border-primary py-1";
  const inactiveClass = "text-on-surface-variant hover:text-primary transition-colors";

  return (
    <nav className="w-full top-0 px-xl py-lg bg-surface-raised border-b border-dashed border-outline-variant">
      <div className="flex justify-between items-center max-w-7xl mx-auto w-full">
        <Link href="/" className="font-display text-display text-primary rotate-[-2deg] cursor-pointer">
          DevJournal
        </Link>
        <div className="hidden md:flex gap-xl items-center">
          <Link href="/" className={`${linkBaseClass} ${pathname === '/' ? activeClass : inactiveClass}`}>
            Home
          </Link>
          <Link href="/blog" className={`${linkBaseClass} ${pathname?.startsWith('/blog') ? activeClass : inactiveClass}`}>
            Notes
          </Link>
          <Link href="/say-hello" className={`${linkBaseClass} ${pathname === '/say-hello' ? activeClass : inactiveClass}`}>
            Say Hello
          </Link>
          <span onClick={() => alert('Dark mode coming soon!')} className="material-symbols-outlined cursor-pointer text-primary p-xs hover:scale-110 transition-transform">
            dark_mode
          </span>
        </div>
        <div className="md:hidden">
          <span onClick={() => alert('Mobile menu coming soon!')} className="material-symbols-outlined text-primary text-3xl cursor-pointer">menu</span>
        </div>
      </div>
    </nav>
  );
}
