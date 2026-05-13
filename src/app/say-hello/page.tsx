import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function SayHello() {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-xl py-4xl flex-grow">
        <header className="mb-5xl text-center md:text-left">
          <h1 className="font-display text-display text-primary mb-base">Let&apos;s start a conversation.</h1>
          <p className="font-body-lg text-text-secondary">Whether you have a project in mind, a question about my process, or just want to share a messy sketch, my inbox is always open.</p>
        </header>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4xl items-start">
          {/* Contact Form Section */}
          <div className="lg:col-span-7 bg-surface-white rounded-xl p-2xl shadow-[0_4px_12px_rgba(41,37,36,0.08)] scrapbook-rotation-3">
            <form className="space-y-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
                <div className="space-y-xs">
                  <label className="font-overline text-overline text-on-surface-variant px-xs">NAME</label>
                  <input className="w-full bg-surface-bright border-2 border-border-medium rounded-xl px-lg py-md font-body text-body focus:ring-0 transition-all placeholder:text-neutral-gray" placeholder="Your beautiful name" type="text" />
                </div>
                <div className="space-y-xs">
                  <label className="font-overline text-overline text-on-surface-variant px-xs">EMAIL</label>
                  <input className="w-full bg-surface-bright border-2 border-border-medium rounded-xl px-lg py-md font-body text-body focus:ring-0 transition-all placeholder:text-neutral-gray" placeholder="hello@example.com" type="email" />
                </div>
              </div>
              <div className="space-y-xs">
                <label className="font-overline text-overline text-on-surface-variant px-xs">SUBJECT</label>
                <select className="w-full bg-surface-bright border-2 border-border-medium rounded-xl px-lg py-md font-body text-body focus:ring-0 transition-all text-on-surface">
                  <option>Collaboration Inquiry</option>
                  <option>Quick Question</option>
                  <option>Just Saying Hi</option>
                  <option>Feedback</option>
                </select>
              </div>
              <div className="space-y-xs">
                <label className="font-overline text-overline text-on-surface-variant px-xs">MESSAGE</label>
                <textarea className="w-full bg-surface-bright border-2 border-border-medium rounded-xl px-lg py-md font-body text-body focus:ring-0 transition-all placeholder:text-neutral-gray resize-none" placeholder="Tell me about your dreams, projects, or favorite coffee..." rows={6}></textarea>
              </div>
              <button className="w-full bg-primary-container text-on-primary font-bold py-lg rounded-xl shadow-lg hover:translate-y-[-2px] hover:shadow-xl active:scale-95 transition-all flex items-center justify-center gap-md" type="submit">
                <span>Send Message</span>
                <span className="material-symbols-outlined">send</span>
              </button>
            </form>
          </div>

          {/* Mailing Info & Illustration */}
          <div className="lg:col-span-5 space-y-3xl">
            {/* Mailing Address Section */}
            <div className="bg-surface-raised rounded-xl p-2xl shadow-[0_4px_12px_rgba(41,37,36,0.08)] scrapbook-rotation-2 border-2 border-dashed border-outline-variant relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <div className="w-26 h-20 bg-primary-fixed border-2 border-primary rounded-sm flex items-center justify-center text-primary font-display text-subhead opacity-50">STAMP</div>
              </div>
              <h3 className="font-headline text-headline text-secondary mb-xl">The Mailing List</h3>
              <div className="space-y-lg">
                <div className="flex items-start gap-lg">
                  <span className="material-symbols-outlined text-secondary-container bg-on-secondary-container p-sm rounded-lg" style={{ fontVariationSettings: "'FILL' 1" }}>alternate_email</span>
                  <div>
                    <p className="font-overline text-overline text-on-surface-variant">DIGITAL BOX</p>
                    <p className="font-body text-body font-medium">hello@devjournal.studio</p>
                  </div>
                </div>
                <div className="flex items-start gap-lg">
                  <span className="material-symbols-outlined text-secondary-container bg-on-secondary-container p-sm rounded-lg" style={{ fontVariationSettings: "'FILL' 1" }}>home_pin</span>
                  <div>
                    <p className="font-overline text-overline text-on-surface-variant">CO-WORKING NEST</p>
                    <p className="font-body text-body font-medium">Studio 42, The Creative Quarter<br />Stockholm, Sweden</p>
                  </div>
                </div>
                <div className="flex items-start gap-lg">
                  <span className="material-symbols-outlined text-secondary-container bg-on-secondary-container p-sm rounded-lg" style={{ fontVariationSettings: "'FILL' 1" }}>schedule</span>
                  <div>
                    <p className="font-overline text-overline text-on-surface-variant">AVAILABILITY</p>
                    <p className="font-body text-body font-medium">Mon - Fri, 10am - 4pm CET</p>
                  </div>
                </div>
              </div>
              <div className="mt-2xl pt-xl border-t border-dashed border-outline-variant">
                <p className="font-headline text-subhead text-on-surface-variant">&quot;In a world of pixels, I still appreciate the warmth of a handwritten note.&quot;</p>
              </div>
            </div>

            {/* Scrapbook Photo */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-fixed-dim to-secondary-fixed-dim rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-[0_4px_12px_rgba(41,37,36,0.08)] transform transition-transform group-hover:scale-[1.02]">
                <img className="w-full h-full object-cover" alt="Home office desk" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDu16q3N68FpZD6l_yBq_oOoqYtCavFfOvF2o87Hbn8F3aL2heZBcMnoU01TA5cSJLwwE8zeSdd7UVGBBB6ucmNE_HoPLQwtmgvoKEwPP6uc5ChkfmlSf14lgJs9RPWoRPyv-2NgrnbUbBoyP9P8KCQZzWqlJUThdOLc2NDKi9R6OXTGyTBMUmdqpkkJwHT2oKdM0ec7gcrXn7RNIr3b58YVtNKDMgQkmG387HYsdShQNHmyMZBmMULJ1_gBYQb4iwhri8EMJi4LGIs" />
                <div className="absolute bottom-4 left-4 right-4 bg-surface-white/90 backdrop-blur-sm p-md rounded-lg scrapbook-rotation-3 border border-border-medium">
                  <p className="font-headline text-body text-on-surface-variant text-center">My creative messy desk corner.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
