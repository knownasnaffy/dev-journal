import Link from 'next/link';

export function Header() {
  return (
    <nav className="w-full top-0 px-xl py-lg bg-background dark:bg-background">
      <div className="flex justify-between items-center max-w-7xl mx-auto w-full">
        <Link href="/" className="font-display text-display text-primary dark:text-primary-fixed-dim rotate-[-2deg] cursor-pointer">
          DevJournal
        </Link>
        <div className="hidden md:flex gap-xl items-center">
          <Link href="/" className="text-primary dark:text-primary-fixed font-bold border-b-2 border-dashed border-primary dark:border-primary-fixed pb-1 font-headline text-subhead hover:scale-105 hover:rotate-1 transition-transform duration-200">
            Home
          </Link>
          <Link href="#" className="text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors font-headline text-subhead hover:scale-105 hover:rotate-1 transition-transform duration-200">
            About
          </Link>
          <Link href="/blog" className="text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors font-headline text-subhead hover:scale-105 hover:rotate-1 transition-transform duration-200">
            Notes
          </Link>
          <Link href="/say-hello" className="text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors font-headline text-subhead hover:scale-105 hover:rotate-1 transition-transform duration-200">
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
