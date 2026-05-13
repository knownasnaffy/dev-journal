import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full mt-5xl px-xl py-2xl rounded-t-xl bg-surface-raised dark:bg-inverse-surface border-t border-dashed border-outline-variant dark:border-outline shadow-sm dark:shadow-none">
      <div className="flex flex-col md:flex-row justify-between items-center gap-lg max-w-7xl mx-auto w-full">
        <div className="font-display text-headline text-primary dark:text-primary-fixed">
          DevJournal
        </div>
        <div className="font-body text-body-sm dark:text-on-surface-variant text-text-secondary">
          © 2024 Made with love & messy sketches
        </div>
        <div className="flex gap-xl">
          <Link href="#" className="text-text-secondary dark:text-on-surface-variant hover:text-secondary dark:hover:text-secondary-fixed hover:translate-y-[-2px] transition-all duration-300">
            Twitter
          </Link>
          <Link href="#" className="text-text-secondary dark:text-on-surface-variant hover:text-secondary dark:hover:text-secondary-fixed hover:translate-y-[-2px] transition-all duration-300">
            GitHub
          </Link>
          <Link href="#" className="text-text-secondary dark:text-on-surface-variant hover:text-secondary dark:hover:text-secondary-fixed hover:translate-y-[-2px] transition-all duration-300">
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}
