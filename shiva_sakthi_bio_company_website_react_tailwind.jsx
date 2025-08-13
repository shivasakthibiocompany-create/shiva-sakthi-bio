import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, ChevronRight, Leaf, Images, Factory, Send } from "lucide-react";

// --- Helper Components ---
const Container = ({ children, className = "" }) => (
  <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

const Section = ({ id, title, subtitle, icon: Icon = Leaf, children, className = "" }) => (
  <section id={id} className={`py-16 lg:py-24 ${className}`}>
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10 lg:mb-14"
      >
        <div className="flex items-center gap-3 text-sm uppercase tracking-wider text-blue-700/80">
          <Icon className="h-5 w-5" />
          <span>{subtitle || "Shiva Sakthi Bio Company"}</span>
        </div>
        <h2 className="mt-3 font-serif text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl">{title}</h2>
      </motion.div>
      {children}
    </Container>
  </section>
);

const Card = ({ children }) => (
  <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black/5 transition hover:shadow-xl">{children}</div>
);

// --- Main Page ---
export default function Website() {
  const company = {
    name: "Shiva Sakthi Bio Company",
    tagline: "Grow more with Less — the future of Farming is here",
    phone: "+91 6380756104",
    email: "shivasakthibiocompany@gmail.com",
    address: "Krishnabalaambigai complex, Virudhachalam, Tamilnadu, India",
    whatsapp: "+91 6380756104",
    locationLink: "https://maps.google.com/?q=Virudhachalam,Tamilnadu,India",
    socials: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  };

  return (
    <div className="min-h-screen scroll-smooth bg-gradient-to-b from-white via-slate-50 to-white font-serif text-slate-800">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur">
        <Container className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-900 text-white shadow-md">
              <Leaf className="h-6 w-6" />
            </div>
            <span className="text-lg font-bold text-blue-900">{company.name}</span>
          </div>
          <nav className="hidden gap-6 md:flex">
            {[
              ["Home", "#home"],
              ["About", "#about"],
              ["Products", "#products"],
              ["Gallery", "#gallery"],
              ["Contact", "#contact"],
              ["Blog", "#blog"],
            ].map(([label, href]) => (
              <a key={label} href={href} className="text-sm font-medium text-slate-700 hover:text-blue-800">
                {label}
              </a>
            ))}
          </nav>
          <a
            href={`https://wa.me/${company.whatsapp.replace(/\D/g, "")}`}
            className="hidden items-center gap-2 rounded-2xl bg-blue-900 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-blue-800 md:flex"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
        </Container>
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden bg-blue-950">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage:
            "radial-gradient(1000px 400px at 10% 10%, rgba(255,255,255,0.35), transparent), radial-gradient(800px 400px at 90% 20%, rgba(255,255,255,0.25), transparent)",
        }} />
        <Container className="relative grid min-h-[72vh] grid-cols-1 items-center gap-10 py-16 text-white md:grid-cols-2 lg:py-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-balance text-4xl font-extrabold md:text-5xl lg:text-6xl">
              Premium Vetiver-Based Products
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-lg/8 opacity-90">
              {company.tagline}. We cultivate and craft world-class vetiver (Khus) products with
              sustainability at the core — serving customers across the globe.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#products"
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 font-semibold text-blue-950 shadow-md hover:shadow-lg"
              >
                Explore Products <ChevronRight className="h-5 w-5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/40 px-5 py-3 font-semibold text-white hover:bg-white/10"
              >
                Get a Quote
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-6 text-sm text-blue-100/90">
              <div className="flex items-center gap-2"><Factory className="h-4 w-4" /> Sustainable cultivation</div>
              <div className="flex items-center gap-2"><Leaf className="h-4 w-4" /> Ethical sourcing</div>
              <div className="flex items-center gap-2"><Images className="h-4 w-4" /> Strict quality control</div>
            </div>
          </motion.div>

          {/* Right hero image area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="rounded-3xl border border-white/10 bg-white/5 p-2 shadow-2xl backdrop-blur">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl">
                {/* Note: Replace src with your hosted image path later */}
                <img
                  src="/mnt/data/IMG-20250813-WA0008.jpg"
                  alt="Vetiver grow bags at Shiva Sakthi Bio Company"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ABOUT */}
      <Section id="about" title="About Us" subtitle="Who we are">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Card>
              <p className="text-lg leading-8 text-slate-700">
                Shiva Sakthi Bio Company specializes in the production of premium vetiver-based products, proudly serving clients across the globe. Our unwavering commitment to quality and sustainability ensures that every product we deliver meets the highest international standards.
              </p>
              <p className="mt-4 leading-8 text-slate-700">
                Vetiver, also known as Khus, is a remarkable plant renowned for its wide-ranging applications—from aromatic essential oils to therapeutic uses and eco-friendly materials. We harness its full potential through responsible cultivation and sustainable practices, delivering natural solutions that promote wellness and environmental harmony.
              </p>
              <p className="mt-4 leading-8 text-slate-700">
                At Shiva Sakthi Bio Company, innovation meets tradition. While we continue to explore and develop new applications of vetiver, we remain deeply rooted in preserving its cultural and ecological legacy. Every stage—from soil to shelf—is guided by strict quality control, ensuring purity, potency, and consistency.
              </p>
              <p className="mt-4 leading-8 text-slate-700">
                Whether you're seeking natural wellness solutions, green alternatives, or artisanal craftsmanship, our diverse portfolio of vetiver products is designed to meet the needs of modern global markets.
              </p>
            </Card>
            <Card>
              <h3 className="mb-2 text-2xl font-bold text-slate-900">Our Mission</h3>
              <p className="leading-8 text-slate-700">
                To deliver world-class vetiver products through sustainable, ethical, and innovative practices. We are committed to enhancing well-being, fostering relaxation, and supporting environmentally responsible living by offering a diverse range of high-quality vetiver-based solutions to customers around the globe.
              </p>
            </Card>
          </div>
          <div className="lg:col-span-5">
            <div className="grid gap-4">
              <img
                src="/mnt/data/IMG-20250730-WA0020.jpg"
                alt="Vetiver cultivation rows"
                className="aspect-[4/3] w-full rounded-2xl object-cover shadow-lg ring-1 ring-black/5"
              />
              <Card>
                <div className="flex items-start gap-3 text-sm">
                  <MapPin className="mt-1 h-5 w-5 text-blue-800" />
                  <div>
                    <p className="font-semibold text-slate-900">Virudhachalam, Tamil Nadu, India</p>
                    <p className="text-slate-600">{company.address}</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Section>

      {/* PRODUCTS */}
      <Section id="products" title="Products & Services" subtitle="What we offer">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Product 1 */}
          <Card>
            <div className="flex h-full flex-col">
              <div className="aspect-[4/3] overflow-hidden rounded-xl">
                <img src="/mnt/data/IMG-20250813-WA0008.jpg" alt="V2 Vetiver in grow bags" className="h-full w-full object-cover" />
              </div>
              <h3 className="mt-4 text-xl font-bold">V2 Vetiver – Planting Material</h3>
              <p className="mt-2 text-slate-700">
                High-quality vetiver slips (V2). Ideal for commercial cultivation, soil conservation and aroma industry use.
              </p>
              <div className="mt-4 flex-1" />
              <a href="#contact" className="mt-4 inline-flex items-center gap-2 rounded-xl bg-blue-900 px-4 py-2 font-semibold text-white hover:bg-blue-800">
                Request Quote <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </Card>

          {/* Product 2 */}
          <Card>
            <div className="flex h-full flex-col">
              <div className="aspect-[4/3] overflow-hidden rounded-xl">
                <img src="/mnt/data/IMG-20250730-WA0020.jpg" alt="Vetiver cultivation services" className="h-full w-full object-cover" />
              </div>
              <h3 className="mt-4 text-xl font-bold">Cultivation Support & Advisory</h3>
              <p className="mt-2 text-slate-700">
                Guidance on land prep, spacing, irrigation, and harvest for optimal oil content and root yield.
              </p>
              <div className="mt-4 flex-1" />
              <a href="#contact" className="mt-4 inline-flex items-center gap-2 rounded-xl bg-blue-900 px-4 py-2 font-semibold text-white hover:bg-blue-800">
                Talk to Us <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </Card>

          {/* Product 3 */}
          <Card>
            <div className="flex h-full flex-col">
              <div className="aspect-[4/3] overflow-hidden rounded-xl">
                <div className="flex h-full w-full items-center justify-center bg-slate-100">
                  <Leaf className="h-10 w-10 text-slate-500" />
                </div>
              </div>
              <h3 className="mt-4 text-xl font-bold">Bulk Vetiver Roots / Oil (Enquiries)</h3>
              <p className="mt-2 text-slate-700">
                Tell us your volume and specs. We follow strict post-harvest and quality protocols.
              </p>
              <div className="mt-4 flex-1" />
              <a href="#contact" className="mt-4 inline-flex items-center gap-2 rounded-xl bg-blue-900 px-4 py-2 font-semibold text-white hover:bg-blue-800">
                Send Requirements <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </Card>
        </div>
      </Section>

      {/* GALLERY */}
      <Section id="gallery" title="Gallery" subtitle="From our fields">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {["/mnt/data/IMG-20250813-WA0008.jpg", "/mnt/data/IMG-20250730-WA0020.jpg", "/mnt/data/IMG-20250813-WA0008.jpg"].map((src, i) => (
            <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <img src={src} alt={`Vetiver ${i + 1}`} className="aspect-[4/3] w-full rounded-2xl object-cover shadow-md ring-1 ring-black/5" />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* TESTIMONIALS (Optional placeholder) */}
      <Section id="testimonials" title="Testimonials" subtitle="What clients say">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {["High-quality slips and excellent guidance.", "Reliable partner for our vetiver program.", "Healthy plants and timely delivery."]
            .map((quote, i) => (
              <Card key={i}>
                <p className="text-lg italic text-slate-700">“{quote}”</p>
                <p className="mt-3 text-sm font-semibold text-slate-900">— Client {i + 1}</p>
              </Card>
            ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" title="Contact Us" subtitle="We're here to help">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Details */}
          <div className="lg:col-span-5">
            <Card>
              <div className="space-y-5 text-slate-700">
                <div className="flex items-start gap-3">
                  <Phone className="mt-1 h-5 w-5 text-blue-800" />
                  <div>
                    <p className="font-semibold text-slate-900">Phone / WhatsApp</p>
                    <a href={`tel:${company.phone}`} className="block hover:underline">{company.phone}</a>
                    <a href={`https://wa.me/${company.whatsapp.replace(/\D/g, "")}`} className="block hover:underline">Chat on WhatsApp</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="mt-1 h-5 w-5 text-blue-800" />
                  <div>
                    <p className="font-semibold text-slate-900">Email</p>
                    <a href={`mailto:${company.email}`} className="hover:underline">{company.email}</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 text-blue-800" />
                  <div>
                    <p className="font-semibold text-slate-900">Address</p>
                    <p>{company.address}</p>
                  </div>
                </div>
              </div>
            </Card>
            <div className="mt-6 overflow-hidden rounded-2xl ring-1 ring-black/5">
              <iframe
                title="Map"
                src="https://www.google.com/maps?q=Virudhachalam%2C%20Tamil%20Nadu%2C%20India&output=embed"
                className="h-64 w-full"
                loading="lazy"
              />
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <Card>
              <form className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="text-sm font-semibold text-slate-700">Name</label>
                  <input type="text" placeholder="Your name" className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-800" />
                </div>
                <div>
                  <label className="text-sm font-semibold text-slate-700">Email</label>
                  <input type="email" placeholder="name@example.com" className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-800" />
                </div>
                <div className="md:col-span-2">
                  <label className="text-sm font-semibold text-slate-700">Message</label>
                  <textarea placeholder="Tell us what you need" className="mt-1 h-32 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-800" />
                </div>
                <div className="md:col-span-2">
                  <button type="button" className="inline-flex items-center gap-2 rounded-2xl bg-blue-900 px-5 py-3 font-semibold text-white hover:bg-blue-800">
                    <Send className="h-4 w-4" /> Send Enquiry
                  </button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </Section>

      {/* BLOG (Optional placeholder) */}
      <Section id="blog" title="News & Updates" subtitle="From the field">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <p className="text-xs uppercase tracking-wider text-blue-800">Update</p>
              <h3 className="mt-1 text-xl font-bold">Post Title {i}</h3>
              <p className="mt-2 text-slate-700">Add your latest harvest notes, expo announcements, or product releases here.</p>
              <a href="#" className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-blue-900 hover:underline">
                Read more <ChevronRight className="h-4 w-4" />
              </a>
            </Card>
          ))}
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200/70 bg-white py-10">
        <Container className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-center text-sm text-slate-600 md:text-left">
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a href={company.socials.facebook} className="hover:text-blue-800">Facebook</a>
            <a href={company.socials.instagram} className="hover:text-blue-800">Instagram</a>
            <a href={company.socials.linkedin} className="hover:text-blue-800">LinkedIn</a>
          </div>
        </Container>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href={`https://wa.me/${company.whatsapp.replace(/\D/g, "")}`}
        className="fixed bottom-5 right-5 inline-flex items-center gap-2 rounded-full bg-green-600 px-4 py-3 font-semibold text-white shadow-xl hover:bg-green-700"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-5 w-5" /> Chat
      </a>
    </div>
  );
}
