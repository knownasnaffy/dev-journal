import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full mt-5xl px-xl py-2xl rounded-t-xl bg-surface-raised border-t border-dashed border-outline-variant shadow-sm">
      <div className="flex flex-col md:flex-row justify-between items-center gap-lg max-w-7xl mx-auto w-full">
        <div className="font-display text-headline text-primary">
          DevJournal
        </div>
        <div className="font-body text-body-sm text-text-secondary">
          © 2024 Made with love & messy sketches
        </div>
        <div className="flex gap-xl">
          <Link href="#" className="text-text-secondary hover:text-secondary hover:translate-y-[-2px] transition-all duration-300">
            Twitter
          </Link>
          <Link href="#" className="text-text-secondary hover:text-secondary hover:translate-y-[-2px] transition-all duration-300">
            GitHub
          </Link>
          <Link href="#" className="text-text-secondary hover:text-secondary hover:translate-y-[-2px] transition-all duration-300">
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}
