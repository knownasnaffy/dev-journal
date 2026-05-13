"use client";

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Link from 'next/link';

export default function BlogPost() {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-xl pt-2xl flex-grow mt-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5xl">
          {/* Main Content Area */}
          <article className="lg:col-span-8">
            {/* Polaroid Hero */}
            <div className="bg-surface-white p-lg pb-4xl mb-3xl shadow-[0_4px_12px_rgba(41,37,36,0.08)] scrapbook-rotation-3">
              <img
                alt="Desk with notebook"
                className="w-full aspect-[4/3] object-cover rounded-sm mb-lg"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6gobfdZ3CEcmU61bSek6d4Hp6HugLCtvqJzpt-56OLFO034CVQ7EF4J2H_nLUx-JmkecKq4Z1DfJn1RG-rg83-wr3Z5Gg3JczpYLo6HLNop4qK8yNUfYb6G01C08f3F-EMOqiJNi5c8s2cHTMjaDTdxPqL3q6Uilf1vCtM-TjBbmtepIXZDe0hjhCuCqeKIJBVxPZJpze4FmECNdV7Fv8dhjJJUNM3HLC-SmbervKl0PQdlmwUUuBc4L6go0MuzzlBevymY-sIv4l"
              />
              <div className="text-center">
                <h1 className="font-display text-display text-primary mb-xs">Finding Magic in the Messy Drafts</h1>
                <p className="font-headline text-subhead text-text-secondary">May 24th, 2024 • 8 min read</p>
              </div>
            </div>

            {/* Heart Action */}
            <div className="flex justify-end mb-xl">
              <button onClick={() => alert('Added to favorites!')} className="flex items-center gap-sm bg-surface-container-low px-lg py-md rounded-full border-2 border-primary-container text-primary hover:bg-primary-container hover:text-on-primary-container transition-all cursor-pointer active:scale-95">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                <span className="font-body font-bold">248 Favorites</span>
              </button>
            </div>

            {/* Article Content */}
            <div className="font-body-lg text-body-lg text-on-surface leading-relaxed space-y-xl">
              <p>
                There&apos;s a certain vulnerability in showing the world your unfinished thoughts. We often curate our final versions—the polished designs, the bug-free code, the perfect sentences. But lately, I’ve been finding more joy in the &quot;scrapbook phase&quot; of creation. It&apos;s the moment when ideas are taped together with metaphorical washi tape and scribbled notes in the margins.
              </p>

              <h2 className="font-headline text-headline text-secondary mt-2xl">The Beauty of Imperfection</h2>

              <p>
                In a world driven by pixel-perfect interfaces, the tactile sensation of a handwritten note or a messy sketch feels revolutionary. This &quot;Tactile / Scrapbook&quot; aesthetic isn&apos;t just about visuals; it&apos;s about a philosophy of human-centered design. It reminds us that behind every screen is a person with a pen, a cup of coffee, and a series of &quot;aha!&quot; moments.
              </p>

              <div className="dashed-divider h-1 my-xl"></div>

              <p>
                When we allow for organic shapes and soft pastel accents, we invite the user into a conversation rather than just a transaction. The UI starts to feel like a shared journal. Soft, multi-step shadows create a natural &quot;lift&quot; that mimics paper cutouts resting on a desk. It’s warm, it’s inviting, and it’s intentionally informal.
              </p>

              <blockquote className="bg-surface-raised border-l-4 border-primary p-xl italic font-headline text-subhead rounded-r-xl my-2xl shadow-sm scrapbook-rotation-1">
                &quot;The most creative spaces are those where we aren&apos;t afraid to make a mess. A blank page is intimidating, but a page with a few coffee stains? That&apos;s an invitation.&quot;
              </blockquote>

              <p>
                As we move forward into a future of generative AI and hyper-automated layouts, preserving this sense of &quot;handmade&quot; becomes even more critical. It&apos;s the small things—a 2px border on an input field, a pill-shaped chip in Mint green, or a dashed line divider—that remind us of the human hand at work.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-md mt-3xl">
              <span className="bg-tertiary/30 text-on-tertiary-fixed-variant px-lg py-xs rounded-full font-overline text-overline">DESIGN THEORY</span>
              <span className="bg-secondary-fixed text-on-secondary-fixed-variant px-lg py-xs rounded-full font-overline text-overline">CREATIVITY</span>
              <span className="bg-primary-fixed text-on-primary-fixed-variant px-lg py-xs rounded-full font-overline text-overline">SCRAPBOOKING</span>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-3xl">
            <div>
              <h3 className="font-headline text-headline text-on-surface mb-lg">Related Notes</h3>
              <div className="space-y-lg">
                {/* Card 1 */}
                <Link href="/blog/the-joy-of-coding" className="block">
                <div className="bg-surface-white p-lg rounded-xl shadow-sm border-2 border-surface-container-high hover:-translate-y-1 hover:shadow-md transition-all cursor-pointer scrapbook-rotation-2">
                  <img
                    className="w-full h-32 object-cover rounded-lg mb-md"
                    alt="Pastel colors palette"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGv8ZeqPLZc0K51rDsBaRPxCmfcDpT1Al1nugdVQTRSRAAVy4XscWoMy1tjpm1-NQHlJrEkNzBqjbZmF6bmS5amGlb4raCrQ_fqCN7aTzApmhT8oDEIR28J7uNu21FJGyADJ3RsughAishwUt-Jh2s6gpq_4q5a-w0EQtHsgWCon7-m4Yihxcr-qWA3HLOZ9wIY0CaqolKdFmncLeyQqMkCGydbB8J-b5UZu7eBHP1C4HoPZw-6TAbdVLk8xFh4NBNbVd2G24qWahX"
                  />
                  <h4 className="font-headline text-subhead text-primary">Mastering the Pastel Palette</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">How to use high-transparency tints to create a gentle UI experience.</p>
                </div>
                </Link>

                {/* Card 2 */}
                <Link href="/blog/the-joy-of-coding" className="block">
                <div className="bg-surface-white p-lg rounded-xl shadow-sm border-2 border-surface-container-high hover:-translate-y-1 hover:shadow-md transition-all cursor-pointer -rotate-1">
                  <img
                    className="w-full h-32 object-cover rounded-lg mb-md"
                    alt="Vintage stamps"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkd5Wxegr1J-2hqAbtzNd98HjNTOtW2guPjGuOO3m_6oqL9QTkd3mawBKc_edWhJ26LEDK4ITcWj__OuWtLpvuas7HKNVMOf2KCiI9MuCeyRwNeMyo6iNSEDniv12nGxiwmf6G2w6hJukg8F9X37bVnWell_i5oZa-Jjw5GKCEBmawxTktMNVLC2dtJqi9F-UNyZqXjJvBj_BPbB5ME7qIAtFk0FkWzh9yo-e-APYmGs0I01tAq5gnIKjWQ7QcJ6L7FH-p31iAY44Z"
                  />
                  <h4 className="font-headline text-subhead text-primary">The Logic of Elevation</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">Understanding ambient shadows and paper-like layering in digital products.</p>
                </div>
                </Link>
              </div>
            </div>

            <div className="bg-secondary-container/20 p-xl rounded-xl border-2 border-dashed border-secondary scrapbook-rotation-3">
              <h3 className="font-headline text-headline text-secondary mb-md">Join the Circle</h3>
              <p className="font-body text-body text-on-surface-variant mb-lg">Get my weekly messy sketches and design thoughts straight to your inbox.</p>
              <div className="space-y-md">
                <input
                  className="w-full bg-surface-white border-2 border-outline-variant rounded-lg p-md focus:border-info focus:ring-0 transition-all font-body text-on-surface"
                  placeholder="your@email.com"
                  type="email"
                />
                <button onClick={(e) => { e.preventDefault(); alert('Subscribed!'); }} className="w-full bg-primary text-on-primary font-bold py-md rounded-lg shadow-sm hover:translate-y-[-2px] transition-all cursor-pointer">
                  Subscribe
                </button>
              </div>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
