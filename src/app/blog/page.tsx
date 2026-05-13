"use client";

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Link from 'next/link';

export default function Blog() {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-xl flex-grow mt-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3xl">
          {/* Card 1: Large Featured */}
          <article className="md:col-span-2 lg:col-span-2 bg-surface-raised p-lg rounded-xl shadow-[0_4px_12px_rgba(41,37,36,0.08)] scrapbook-rotation-1 hover:-translate-y-1 hover:shadow-lg transition-all cursor-pointer group">
            <Link href="/blog/the-joy-of-coding">
              <div className="relative overflow-hidden rounded-lg aspect-[16/9] mb-lg">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Desk with laptop and sketchbook" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjFVVPIhMac6y4kUI1S9x9LnxBUO7ZvSxZNO50zSxYBXxZMsMS7D7ZWDZsx3zsP-lprebDLKG6nfRGxMQsUhkRDJ5zM0ufXcN4LIsfkz4bxJTU_5D2-rfdsGP0HuGY4tePZsIUnRd17Cv2PsHAFYvwTwmv4u6bH0u-4m9-8lcpLvttUQyUKpZ2eaflBi1_c5LbLjjY-odFW3QASVXin4sFx5sdcq6QFSGRClHJZyHmT3PSlyGY1i7ImqIorhaWmYfTB2SxtbTFLL-t" />
                <div className="absolute top-md right-md flex gap-sm">
                  <span className="px-lg py-xs bg-tertiary rounded-full font-overline text-on-tertiary-container">DESIGN</span>
                  <span className="px-lg py-xs bg-secondary-container rounded-full font-overline text-on-secondary-container">PROCESS</span>
                </div>
              </div>
              <div className="px-base">
                <h2 className="font-headline text-display mb-sm group-hover:text-primary transition-colors">Finding focus in the digital noise</h2>
                <p className="font-body text-body text-on-surface-variant mb-lg">Last week I decided to turn off all notifications. It felt like I was back in 2005, just me and my sketchbook. Here&apos;s what I learned about the &quot;slow design&quot; movement...</p>
                <div className="flex items-center gap-sm">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_today</span>
                  <span className="font-caption text-caption text-text-secondary">October 24, 2024</span>
                </div>
              </div>
            </Link>
          </article>

          {/* Card 2: Square Sticky Note Style */}
          <article className="bg-surface-raised p-lg rounded-xl shadow-[0_4px_12px_rgba(41,37,36,0.08)] scrapbook-rotation-2 hover:-translate-y-1 transition-all cursor-pointer group flex flex-col justify-between">
            <Link href="/blog/the-joy-of-coding">
              <div>
                <div className="aspect-square relative overflow-hidden rounded-lg mb-lg">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Polaroid photo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1k13fuZAHaUBRWNDGtj0XbpE4WOxGmqxnPcc2XuPMOPtdoThg8JTDco8I_yDZtiGrcofZQFYA6yuTVad69_ie27ZMmnkPiBjwS9auq09KDAcsAlWKxLdErhszCPni8JHWTsa87_o1LrbV3CVXDSq1dsLLPxHmu-YYYMbjVYC2Tf5LTWRhGmuXN8juGkNmX6KneVtwYjAJljAmqMqcctdH4DOwIR_aWjCIYS9h20VE2XOiMdUbCjSSklVscbzYOYyZXK93JVWSw-Su" />
                </div>
                <span className="px-lg py-xs bg-secondary-container rounded-full font-overline text-on-secondary-container mb-sm inline-block">PERSONAL</span>
                <h2 className="font-headline text-headline mb-sm group-hover:text-primary transition-colors">Morning Coffee Rituals</h2>
                <p className="font-body text-body-sm text-on-surface-variant line-clamp-3">There is something sacred about the first 15 minutes of the day before the emails start pouring in.</p>
              </div>
              <div className="mt-lg pt-lg border-t border-dashed border-outline-variant flex justify-between items-center">
                <span className="font-caption text-caption text-text-secondary italic">5 min read</span>
                <span className="material-symbols-outlined text-primary">arrow_forward</span>
              </div>
            </Link>
          </article>

          {/* Card 3: Minimal Text Focus */}
          <article className="bg-surface-raised p-xl rounded-xl shadow-[0_4px_12px_rgba(41,37,36,0.08)] scrapbook-rotation-3 hover:-translate-y-1 transition-all cursor-pointer group border-l-[3px] border-primary">
            <Link href="/blog/the-joy-of-coding">
              <div className="flex flex-col gap-lg">
                <span className="px-lg py-xs bg-tertiary rounded-full font-overline text-on-tertiary-container self-start">CODE</span>
                <h2 className="font-headline text-headline group-hover:text-primary transition-colors">The messy reality of CSS Grid layouts</h2>
                <p className="font-body text-body text-on-surface-variant">Tutorials make it look easy, but in production, it&apos;s a game of tetris where the blocks are made of jelly. Let&apos;s talk about the overflow property and why it&apos;s my best friend and worst enemy.</p>
                <div className="bg-surface-container p-md rounded-lg mt-base mb-base">
                  <code className="font-code text-code text-on-surface">grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));</code>
                </div>
                <div className="flex items-center gap-sm mt-base">
                  <span className="material-symbols-outlined text-primary">label</span>
                  <span className="font-caption text-caption text-text-secondary">Development, UX, Rants</span>
                </div>
              </div>
            </Link>
          </article>

          {/* Card 4: Medium Horizontal */}
          <article className="md:col-span-2 bg-surface-raised p-lg rounded-xl shadow-[0_4px_12px_rgba(41,37,36,0.08)] scrapbook-rotation-1 hover:-translate-y-1 transition-all cursor-pointer group flex flex-col md:flex-row gap-xl">
            <Link href="/blog/the-joy-of-coding" className="flex flex-col md:flex-row gap-xl w-full">
              <div className="md:w-1/2 aspect-[4/3] overflow-hidden rounded-lg">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Analog tools" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDs9yTYue2ORyPVW6EooG_CDfsUiVOT2oZ18wdzqy9C19bOxG_RNbhJAAbdeKKjGyPQcqJ3TgnnleyCy1tTYMjkRKkFSr7iHv5Hl0CmKBqFWgEbM52V3wMOyP6l1XftzPuPuePHIY5hhPo4dw4lshgVkm4CMEQQSgJf_iI3ptanefMUewQ42MYWuUCSs_mpk1xvT5yOiAiNfHIHKXxRWF-dBUO23YucXsyw1Zbe0J4hXphTmF54VLizQYQDslz5PK972DAwiL4J4ggz" />
              </div>
              <div className="md:w-1/2 flex flex-col justify-center">
                <span className="px-lg py-xs bg-secondary-container rounded-full font-overline text-on-secondary-container mb-sm self-start">INSPIRATION</span>
                <h2 className="font-headline text-headline mb-sm group-hover:text-primary transition-colors">Analog Tools for Modern Minds</h2>
                <p className="font-body text-body text-on-surface-variant mb-lg">Why I keep buying fountain pens even though I type 90 words per minute. The tactile feedback is irreplaceable for thinking.</p>
                <div className="flex items-center gap-sm">
                  <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center">
                    <span className="material-symbols-outlined text-on-primary-container text-[20px]">edit_note</span>
                  </div>
                  <span className="font-caption text-caption text-text-primary font-bold">Read the Essay</span>
                </div>
              </div>
            </Link>
          </article>

          {/* Card 5: Tall Vertical */}
          <article className="bg-surface-raised p-lg rounded-xl shadow-[0_4px_12px_rgba(41,37,36,0.08)] scrapbook-rotation-2 hover:-translate-y-1 transition-all cursor-pointer group">
            <Link href="/blog/the-joy-of-coding">
              <div className="aspect-[3/4] overflow-hidden rounded-lg mb-lg bg-surface-container-high flex items-center justify-center">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Abstract shapes" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDYDDhY9-WxkgdIzOawnC1rjzFkGPRyHWsfXSGousEYKdhngkJj0GWnrB_xVjNTNIhoNWBd9oOZuH72OMnhq5fUHoHuafLIiPOO4SPIp4erostt8qEuNw-d6PAUaWAbigT-aMsDAa4f8w3FjiE5VagXrPoxuUrovd8ooVp3oo2ReVemRdxFao5C17ik9rZuKKv1zg_DdA_dmsYQxotKsC1GwEZbliJrxEYr7aRq3srEeyJe7t6liDTkQoNfOPY3Ra5Tw82AWtdbZWF" />
              </div>
              <h2 className="font-headline text-headline mb-sm group-hover:text-primary transition-colors">Why &quot;Perfect&quot; is the Enemy</h2>
              <p className="font-body text-body-sm text-on-surface-variant mb-md">Embracing the messy sketches and the half-finished ideas. This blog is a testament to the beauty of the &quot;Work in Progress&quot;.</p>
              <div className="flex flex-wrap gap-xs">
                <span className="px-md py-1 bg-surface-container rounded-full text-caption text-on-surface-variant border border-dashed border-outline">#creativity</span>
                <span className="px-md py-1 bg-surface-container rounded-full text-caption text-on-surface-variant border border-dashed border-outline">#growth</span>
              </div>
            </Link>
          </article>

        </div>
      </main>

      {/* FAB for quick action */}
      <button onClick={() => alert('Create new note coming soon!')} className="fixed bottom-xl right-xl w-14 h-14 bg-primary text-on-primary rounded-full shadow-[0_12px_24px_rgba(41,37,36,0.14),0_4px_8px_rgba(41,37,36,0.06)] hover:scale-110 active:scale-95 transition-all flex items-center justify-center z-50">
        <span className="material-symbols-outlined text-[28px]">edit</span>
      </button>

      <Footer />
    </>
  );
}
