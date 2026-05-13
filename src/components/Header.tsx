import Link from 'next/link';

export function Header() {
  return (
    <nav className="w-full top-0 px-xl py-lg bg-surface-raised border-b border-dashed border-outline-variant">
      <div className="flex justify-between items-center max-w-7xl mx-auto w-full">
        <Link href="/" className="font-display text-display text-primary rotate-[-2deg] cursor-pointer">
          DevJournal
        </Link>
        <div className="hidden md:flex gap-xl items-center">
          <Link href="/" className="text-primary font-bold border-b-2 border-dashed border-primary py-1 font-headline text-subhead hover:scale-105 hover:rotate-1 transition-transform duration-200">
            Home
          </Link>
          <Link href="/blog" className="text-on-surface-variant hover:text-primary transition-colors font-headline text-subhead hover:scale-105 hover:rotate-1 transition-transform duration-200">
            Notes
          </Link>
          <Link href="/say-hello" className="text-on-surface-variant hover:text-primary transition-colors font-headline text-subhead hover:scale-105 hover:rotate-1 transition-transform duration-200">
            Say Hello
          </Link>
          <span className="material-symbols-outlined cursor-pointer text-primary p-xs hover:scale-110 transition-transform">
            dark_mode
          </span>
        </div>
        <div className="md:hidden">
          <span className="material-symbols-outlined text-primary text-3xl">menu</span>
        </div>
      </div>
    </nav>
  );
}
