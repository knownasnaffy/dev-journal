"use client";

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-xl flex-grow">
        {/* Hero Section */}
        <section className="py-5xl flex flex-col md:flex-row items-center gap-4xl">
          <div className="flex-1 space-y-lg">
            <h1 className="font-display text-display text-primary leading-tight">
              Creating digital spaces <br />
              <span className="bg-tertiary px-base">with soul and code.</span>
            </h1>
            <p className="font-body text-body-lg text-on-surface-variant">
              I&apos;m a full-stack developer who believes websites should feel as personal as a handwritten note. Welcome to my digital journal where I share my messy sketches and polished pixels.
            </p>
            <div className="pt-lg">
              <button className="bg-primary text-on-primary px-xl py-lg rounded-xl font-bold text-lg hover:translate-y-[-2px] transition-all shadow-md active:scale-95">
                Download My Journal (CV)
              </button>
            </div>
          </div>
          <div className="flex-shrink-0 relative">
            <div className="bg-surface-white p-lg shadow-xl rotate-[2deg] hover:rotate-[4deg] transition-transform duration-300 rounded-lg border border-outline-variant peer">
              <img
                alt="Developer Portrait"
                className="w-96 h-96 object-cover rounded-sm"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4enoiwb81XlTXdNY2G5Nz6wUJA_URwJpzpYyKZrX2PCLSBLD_GPMkeN-awC3TRhv-6aoVlotbuTAyY-c7lOgqrcDRix59E9JntutGsI0as6gEJAUUKAlTaOUnMCc4BJCERBwSttUJB-BhcehqyJmsj6gOO-TxWmy_Z9wwuUxMbr4QLBUv1mddVqoSYtTn8o2cTG_AUjgVM1FeC0WimtVoTfe_2kzbtuvwNfQajopW6DlK559pYngN77LD7YxxqZl54zoVh1r7cEYB"
              />
              <div className="mt-md font-headline text-center text-subhead text-primary">me sketching ideas, 2024</div>
            </div>
            {/* Decorative element */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-secondary-container rounded-full flex items-center justify-center -rotate-12 shadow-sm peer-hover:-right-6 peer-hover:-top-2 transition-all duration-300">
              <span className="material-symbols-outlined text-on-secondary-container">auto_awesome</span>
            </div>
          </div>
        </section>

        {/* About Me & Skills */}
        <section className="py-5xl grid grid-cols-1 lg:grid-cols-2 gap-4xl items-start">
          <div className="space-y-lg">
            <h2 className="font-headline text-display text-secondary">About Me</h2>
            <div className="font-body text-body text-on-surface-variant space-y-md">
              <p>I started my journey with a box of crayons and a curiosity for how things work. Today, those crayons have been replaced by React, Node, and Tailwind, but the spirit remains the same.</p>
              <p>When I&apos;m not debugging, you&apos;ll find me at local coffee shops or hiking trails, probably thinking about new ways to make the web feel more human.</p>
            </div>
          </div>
          <div className="bg-surface-raised p-2xl rounded-xl shadow-sm border-2 border-dashed border-outline-variant">
            <h3 className="font-headline text-subhead text-primary mb-lg">The Toolkit</h3>
            <div className="flex flex-wrap gap-md">
              <span className="px-lg py-xs rounded-full bg-secondary-container text-on-secondary-container font-medium text-caption uppercase border border-secondary transition-transform hover:scale-105">React</span>
              <span className="px-lg py-xs rounded-full bg-tertiary-fixed-dim text-on-tertiary-container font-medium text-caption uppercase border border-tertiary-container transition-transform hover:scale-105">TypeScript</span>
              <span className="px-lg py-xs rounded-full bg-primary-container text-on-primary-container font-medium text-caption uppercase border border-primary transition-transform hover:scale-105">Tailwind CSS</span>
              <span className="px-lg py-xs rounded-full bg-secondary-fixed text-on-secondary-fixed font-medium text-caption uppercase border border-secondary-fixed-dim transition-transform hover:scale-105">Node.js</span>
              <span className="px-lg py-xs rounded-full bg-surface-variant text-on-surface-variant font-medium text-caption uppercase border border-outline transition-transform hover:scale-105">Figma</span>
              <span className="px-lg py-xs rounded-full bg-inverse-primary text-on-primary-container font-medium text-caption uppercase border border-primary transition-transform hover:scale-105">GraphQL</span>
            </div>
          </div>
        </section>

        {/* Projects (Bento Grid) */}
        <section className="py-5xl">
          <h2 className="font-headline text-display text-primary mb-4xl text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-xl">
            {/* Project 1 */}
            <div onClick={() => alert('Project coming soon!')} className="cursor-pointer md:col-span-8 group bg-surface-white p-lg rounded-xl border border-outline-variant shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="relative overflow-hidden rounded-lg aspect-video mb-lg">
                <img className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500" alt="EcoTrack Dashboard" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJFbGQVqx1xB7G5OOa9_E0Mw11VY1gXT77DN50ICjKbREf2z8bn2bP5hm6a3tXkPwoTAfMPS6Jg1TMycN8YDmZdNMakPgkS2vi6_GJhHu18rEY5gI_qdvmxA6Eqm6yYqEYeKU62TmKAJTxNIsRcpjuAA5urNsqlFqEPXKfynyX-mG5F_-0IQYbf-8W7NW0b8JaW5FvQd-znX_Q87On8A1ikDVbA_P9l_0Z3Y3cX0doS_9lbQKb0AOcmhFn1R6WD4FGBfCPecAu7uF4" />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-headline text-subhead text-primary">EcoTrack Dashboard</h3>
                  <p className="font-body text-body-sm text-text-secondary">A sustainable living companion built with Next.js</p>
                </div>
                <span className="material-symbols-outlined text-primary">arrow_outward</span>
              </div>
            </div>

            {/* Project 2 */}
            <div onClick={() => alert('Project coming soon!')} className="cursor-pointer md:col-span-4 group bg-surface-white p-lg rounded-xl border border-outline-variant shadow-md hover:shadow-xl transition-all hover:-translate-y-1 scrapbook-rotation-3">
              <div className="relative overflow-hidden rounded-lg aspect-square mb-lg">
                <img className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500" alt="Recipe Keeper" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2Y9oIXxz4MVoQGA_BXK8zf2FXJAN3fpp_BHYsbLrQpHc9uBayZlfBoNKuyFOlvrQtSozqx_Keo0cIBeC-Iro4yv8KlkdmnnDUdPmCVLjF6g-u-gh8jUo6k3Di0lkYkio0Ye3dgDhFHPV79jpAGdexTfreWcnr_3m8C-_4-J71NkK1SwhYdlLAqyrwgZNiJ7fxePYMHk0mL_HHeZL9sFsDYYdpJ0KHU7edtU6f6kqoPNbNM_cLCBUtQuPHvEAxKd3bF7tg9wjwBrtf" />
              </div>
              <h3 className="font-headline text-subhead text-secondary">Recipe Keeper</h3>
              <p className="font-body text-body-sm text-text-secondary">Mobile-first React Native app.</p>
            </div>

            {/* Project 3 */}
            <div onClick={() => alert('Project coming soon!')} className="cursor-pointer md:col-span-4 group bg-surface-white p-lg rounded-xl border border-outline-variant shadow-md hover:shadow-xl transition-all hover:-translate-y-1 scrapbook-rotation-2">
              <div className="relative overflow-hidden rounded-lg aspect-square mb-lg">
                <img className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500" alt="CodeSketch" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLVpLf3Ez1D04oJ7GL_TsWhQqYuZ5NWv1Yba5GLz0whQ5PSHlmR6JW1I-dIpXtmBcCcNxTpgIZqBxjoCO8NCWkUBH0RuAHlmQlV1wKtKqIEie22p_MFHz1ELWAVPBjd3Z9SqTJum23jLnHvoMOOlPLWF2sG9jowIeMDIaSJraAVHeBKcqEFGBJ2gE4z2wxXz7FUpLJQpOTezi9u2LfHF2Xy8GTv184HicfRADR3TjQI0ohtBjtLzCtA2pIzNHoyqNk1W6BQWNq-hip" />
              </div>
              <h3 className="font-headline text-subhead text-primary">CodeSketch</h3>
              <p className="font-body text-body-sm text-text-secondary">A VS Code theme for dreamers.</p>
            </div>

            {/* Project 4 */}
            <div onClick={() => alert('Project coming soon!')} className="cursor-pointer md:col-span-8 group bg-surface-white p-lg rounded-xl border border-outline-variant shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="relative overflow-hidden rounded-lg aspect-video mb-lg">
                <img className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500" alt="Urban Canvas" src="https://lh3.googleusercontent.com/aida-public/AB6AXuALuP0bf88XF1b6uWB864faZJTOX2o31j0opj8DE8rg0Xl_ylYTTXRhxBM_3E3cK1ztYk0VWOOKKsPSGRSRBcL0oxn1864T8SgTPJT6tjR6sBNVKSYo9icotips_NFcL8lxV41iYV5LZUhEFA8SX4bqj_V7KciZGsLpKQEUhiuZ1cI4Vt29RKYWABC4tUF1BdUYo0p5Owl2zYk_54xhNtJkuNyzrwa0AzpGRPBQwrRPl-s8HsRfxSwvx44egzMPN2TjZbZPGLC1h3u0" />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-headline text-subhead text-secondary">Urban Canvas</h3>
                  <p className="font-body text-body-sm text-text-secondary">Portfolio for contemporary architects.</p>
                </div>
                <span className="material-symbols-outlined text-secondary">arrow_outward</span>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="py-5xl">
          <h2 className="font-headline text-display text-secondary mb-4xl">Work Experience</h2>
          <div className="space-y-xl">
            <div className="flex flex-col md:flex-row md:items-center gap-base md:gap-xl pb-xl border-b border-dashed border-outline">
              <span className="font-headline text-subhead text-primary min-w-[150px]">2022 — Present</span>
              <div className="flex-1">
                <h4 className="font-bold text-lg text-on-surface">Senior Developer @ Creative Flow</h4>
                <p className="text-on-surface-variant font-body">Leading the frontend transition to React and building scalable design systems for boutique agencies.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-base md:gap-xl pb-xl border-b border-dashed border-outline">
              <span className="font-headline text-subhead text-primary min-w-[150px]">2020 — 2022</span>
              <div className="flex-1">
                <h4 className="font-bold text-lg text-on-surface">Full Stack Engineer @ Pixel & Ink</h4>
                <p className="text-on-surface-variant font-body">Developed custom e-commerce solutions and interactive storytelling components for local businesses.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-base md:gap-xl pb-xl border-b border-dashed border-outline">
              <span className="font-headline text-subhead text-primary min-w-[150px]">2018 — 2020</span>
              <div className="flex-1">
                <h4 className="font-bold text-lg text-on-surface">Junior Developer @ StartUp Nest</h4>
                <p className="text-on-surface-variant font-body">Cut my teeth on Vue.js and Python, helping build the foundation of a community-driven travel platform.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Blog Posts */}
        <section className="py-5xl">
          <div className="flex justify-between items-end mb-4xl">
            <h2 className="font-headline text-display text-primary">From the Journal</h2>
            <Link className="text-secondary font-headline text-subhead border-b border-secondary" href="/blog">View all notes</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-xl">
            <Link href="/blog/the-joy-of-coding" className="block">
            <article className="bg-surface-raised p-xl rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-all">
              <div className="text-caption text-secondary font-bold mb-sm">OCT 24, 2023</div>
              <h3 className="font-headline text-subhead text-on-surface mb-md">Why I still carry a physical notebook</h3>
              <p className="font-body text-body-sm text-on-surface-variant mb-lg">Analog tools in a digital world help slow down the thinking process...</p>
              <div className="flex gap-xs items-center text-primary font-bold">
                <span>Read more</span>
                <span className="material-symbols-outlined text-sm">trending_flat</span>
              </div>
            </article>
            </Link>
            <Link href="/blog/the-joy-of-coding" className="block">
            <article className="bg-surface-raised p-xl rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-all">
              <div className="text-caption text-secondary font-bold mb-sm">SEP 12, 2023</div>
              <h3 className="font-headline text-subhead text-on-surface mb-md">The beauty of CSS Grid for layouts</h3>
              <p className="font-body text-body-sm text-on-surface-variant mb-lg">Breaking away from standard columns to create something unique...</p>
              <div className="flex gap-xs items-center text-primary font-bold">
                <span>Read more</span>
                <span className="material-symbols-outlined text-sm">trending_flat</span>
              </div>
            </article>
            </Link>
            <Link href="/blog/the-joy-of-coding" className="block">
            <article className="bg-surface-raised p-xl rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-all">
              <div className="text-caption text-secondary font-bold mb-sm">AUG 05, 2023</div>
              <h3 className="font-headline text-subhead text-on-surface mb-md">Debugging with a cup of chamomile</h3>
              <p className="font-body text-body-sm text-on-surface-variant mb-lg">A soft approach to solving hard technical problems in the evening...</p>
              <div className="flex gap-xs items-center text-primary font-bold">
                <span>Read more</span>
                <span className="material-symbols-outlined text-sm">trending_flat</span>
              </div>
            </article>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
