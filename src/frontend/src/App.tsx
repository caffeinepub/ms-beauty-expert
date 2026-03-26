import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { type FormEvent, useRef, useState } from "react";

// ── Icons ────────────────────────────────────────────────────────────
function FlowerIcon() {
  return (
    <svg
      aria-hidden="true"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="16"
        cy="16"
        r="3.5"
        stroke="currentColor"
        strokeWidth="1.4"
        fill="none"
      />
      <ellipse
        cx="16"
        cy="8"
        rx="2.5"
        ry="4.5"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
      />
      <ellipse
        cx="16"
        cy="24"
        rx="2.5"
        ry="4.5"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
      />
      <ellipse
        cx="8"
        cy="16"
        rx="4.5"
        ry="2.5"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
      />
      <ellipse
        cx="24"
        cy="16"
        rx="4.5"
        ry="2.5"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
      />
      <ellipse
        cx="10.34"
        cy="10.34"
        rx="2.5"
        ry="4.5"
        transform="rotate(-45 10.34 10.34)"
        stroke="currentColor"
        strokeWidth="1.1"
        fill="none"
      />
      <ellipse
        cx="21.66"
        cy="21.66"
        rx="2.5"
        ry="4.5"
        transform="rotate(-45 21.66 21.66)"
        stroke="currentColor"
        strokeWidth="1.1"
        fill="none"
      />
      <ellipse
        cx="21.66"
        cy="10.34"
        rx="2.5"
        ry="4.5"
        transform="rotate(45 21.66 10.34)"
        stroke="currentColor"
        strokeWidth="1.1"
        fill="none"
      />
      <ellipse
        cx="10.34"
        cy="21.66"
        rx="2.5"
        ry="4.5"
        transform="rotate(45 10.34 21.66)"
        stroke="currentColor"
        strokeWidth="1.1"
        fill="none"
      />
    </svg>
  );
}

function WhatsAppIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function StarIcon({ filled = true }: { filled?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill={filled ? "var(--gold)" : "none"}
      stroke="var(--gold)"
      strokeWidth="1.2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon points="9,1.5 11.09,6.26 16.18,6.76 12.45,10.15 13.64,15.13 9,12.45 4.36,15.13 5.55,10.15 1.82,6.76 6.91,6.26" />
    </svg>
  );
}

// ── Nav ──────────────────────────────────────────────────────────────
const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="sticky top-0 z-50 bg-white"
      style={{ boxShadow: "0 1px 0 oklch(0.738 0.092 72)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <button
          type="button"
          onClick={() => handleScroll("#home")}
          className="flex items-center gap-2.5 text-left"
          style={{ color: "oklch(0.648 0.082 18)" }}
          data-ocid="nav.link"
        >
          <FlowerIcon />
          <div>
            <div
              className="font-playfair text-sm font-bold tracking-widest leading-tight"
              style={{ color: "oklch(0.185 0.018 42)" }}
            >
              M/S BEAUTY
            </div>
            <div
              className="font-playfair text-xs font-semibold tracking-widest"
              style={{ color: "oklch(0.738 0.092 72)" }}
            >
              EXPERT
            </div>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center gap-6"
          data-ocid="nav.section"
        >
          {navLinks.map((link) => (
            <button
              type="button"
              key={link.href}
              onClick={() => handleScroll(link.href)}
              className="font-inter text-sm font-medium transition-colors hover:text-primary"
              style={{ color: "oklch(0.42 0.025 42)" }}
              data-ocid="nav.link"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Book Now CTA */}
        <button
          type="button"
          onClick={() => handleScroll("#booking")}
          className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full font-inter text-sm font-semibold transition-all hover:opacity-90 hover:-translate-y-0.5"
          style={{
            background: "oklch(0.648 0.082 18)",
            color: "white",
            boxShadow: "0 4px 14px rgba(197, 142, 138, 0.4)",
          }}
          data-ocid="nav.primary_button"
        >
          Book Now
        </button>

        {/* Hamburger */}
        <button
          type="button"
          className="md:hidden p-2 rounded"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          data-ocid="nav.toggle"
        >
          <svg
            aria-hidden="true"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            stroke="oklch(0.185 0.018 42)"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {menuOpen ? (
              <>
                <line x1="4" y1="4" x2="18" y2="18" />
                <line x1="18" y1="4" x2="4" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="19" y2="6" />
                <line x1="3" y1="11" x2="19" y2="11" />
                <line x1="3" y1="16" x2="19" y2="16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Gold divider */}
      <div className="gold-divider" />

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-border px-4 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <button
              type="button"
              key={link.href}
              onClick={() => handleScroll(link.href)}
              className="text-left font-inter text-sm font-medium py-1"
              style={{ color: "oklch(0.42 0.025 42)" }}
              data-ocid="nav.link"
            >
              {link.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => handleScroll("#booking")}
            className="mt-2 px-5 py-2.5 rounded-full font-inter text-sm font-semibold text-white"
            style={{ background: "oklch(0.648 0.082 18)" }}
            data-ocid="nav.primary_button"
          >
            Book Now
          </button>
        </div>
      )}
    </header>
  );
}

// ── Hero ─────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden hero-gradient"
      style={{ minHeight: "90vh" }}
    >
      {/* Faint floral background pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='40' cy='40' r='6' stroke='%23C9A46A' stroke-width='1.5'/%3E%3Cellipse cx='40' cy='22' rx='5' ry='9' stroke='%23C9A46A' stroke-width='1'/%3E%3Cellipse cx='40' cy='58' rx='5' ry='9' stroke='%23C9A46A' stroke-width='1'/%3E%3Cellipse cx='22' cy='40' rx='9' ry='5' stroke='%23C9A46A' stroke-width='1'/%3E%3Cellipse cx='58' cy='40' rx='9' ry='5' stroke='%23C9A46A' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex flex-col md:flex-row items-center gap-8 py-16 md:py-0"
        style={{ minHeight: "90vh" }}
      >
        {/* Left content */}
        <div
          className="flex-1 z-10 animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          {/* Rating badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 font-inter text-sm font-semibold"
            style={{
              background: "oklch(0.938 0.028 22)",
              border: "1px solid oklch(0.898 0.025 35)",
            }}
          >
            <span className="flex gap-0.5">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </span>
            <span style={{ color: "oklch(0.185 0.018 42)" }}>
              5.0 Rated Beauty Parlour
            </span>
          </div>

          <h1
            className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4"
            style={{ color: "oklch(0.185 0.018 42)" }}
          >
            M/S Beauty Expert
            <br />
            <span style={{ color: "oklch(0.648 0.082 18)" }}>
              Professional Beauty
            </span>
            <br />
            Services in Gaya
          </h1>

          <p
            className="font-inter text-base sm:text-lg font-medium mb-8 tracking-wide"
            style={{ color: "oklch(0.52 0.032 42)" }}
          >
            Bridal Makeup &nbsp;|&nbsp; Party Makeup &nbsp;|&nbsp; Mehndi
            &nbsp;|&nbsp; Skincare
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/918271782336"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full font-inter font-semibold text-base"
              style={{ boxShadow: "0 4px 20px rgba(37, 211, 102, 0.35)" }}
              data-ocid="hero.primary_button"
            >
              <WhatsAppIcon size={22} />
              Book Appointment on WhatsApp
            </a>
            <button
              type="button"
              onClick={() =>
                document
                  .querySelector("#services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-inter font-semibold text-sm border-2 transition-all hover:bg-secondary"
              style={{
                borderColor: "oklch(0.738 0.092 72)",
                color: "oklch(0.65 0.09 68)",
              }}
              data-ocid="hero.secondary_button"
            >
              Explore Services
            </button>
          </div>

          <div className="mt-10 flex items-center gap-6">
            <div className="text-center">
              <div
                className="font-playfair text-2xl font-bold"
                style={{ color: "oklch(0.648 0.082 18)" }}
              >
                500+
              </div>
              <div
                className="font-inter text-xs"
                style={{ color: "oklch(0.52 0.032 42)" }}
              >
                Happy Brides
              </div>
            </div>
            <div
              className="h-8 w-px"
              style={{ background: "oklch(0.898 0.025 35)" }}
            />
            <div className="text-center">
              <div
                className="font-playfair text-2xl font-bold"
                style={{ color: "oklch(0.648 0.082 18)" }}
              >
                5★
              </div>
              <div
                className="font-inter text-xs"
                style={{ color: "oklch(0.52 0.032 42)" }}
              >
                Google Rating
              </div>
            </div>
            <div
              className="h-8 w-px"
              style={{ background: "oklch(0.898 0.025 35)" }}
            />
            <div className="text-center">
              <div
                className="font-playfair text-2xl font-bold"
                style={{ color: "oklch(0.648 0.082 18)" }}
              >
                10+
              </div>
              <div
                className="font-inter text-xs"
                style={{ color: "oklch(0.52 0.032 42)" }}
              >
                Years Experience
              </div>
            </div>
          </div>
        </div>

        {/* Right image */}
        <div
          className="flex-1 flex justify-center md:justify-end relative z-10 animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          <div
            className="relative rounded-3xl overflow-hidden"
            style={{
              maxWidth: 420,
              width: "100%",
              boxShadow: "0 24px 80px rgba(197, 142, 138, 0.35)",
              border: "3px solid oklch(0.876 0.042 18)",
            }}
          >
            <img
              src="/assets/generated/bridal-hero.dim_800x900.jpg"
              alt="Beautiful Indian bride – M/S Beauty Expert Gaya"
              className="w-full object-cover"
              style={{ maxHeight: 520 }}
              loading="eager"
            />
            {/* Gold ribbon overlay */}
            <div
              className="absolute bottom-0 left-0 right-0 px-5 py-4"
              style={{
                background:
                  "linear-gradient(0deg, rgba(30,18,14,0.75) 0%, transparent 100%)",
              }}
            >
              <p className="font-playfair text-white text-sm italic">
                Your Dream Look Awaits
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── About ─────────────────────────────────────────────────────────────
function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6"
      style={{ background: "oklch(0.945 0.022 30)" }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <p className="section-subheading">Who We Are</p>
        <h2 className="section-heading mt-1">About Us</h2>
        <div className="gold-line" />

        <div className="grid md:grid-cols-2 gap-12 items-center text-left mt-4">
          <div>
            <p
              className="font-inter text-base leading-relaxed mb-4"
              style={{ color: "oklch(0.42 0.025 42)" }}
            >
              Welcome to <strong>M/S Beauty Expert</strong>, Gaya's most trusted
              beauty destination, nestled in the heart of Magadh Colony. We are
              a team of passionate beauty professionals dedicated to making
              every woman feel her most radiant and confident self.
            </p>
            <p
              className="font-inter text-base leading-relaxed mb-4"
              style={{ color: "oklch(0.42 0.025 42)" }}
            >
              With over a decade of experience in bridal makeup, party looks,
              mehndi artistry, skincare and hair styling, we combine
              time-honored techniques with contemporary trends to create looks
              that are uniquely yours.
            </p>
            <p
              className="font-inter text-base leading-relaxed"
              style={{ color: "oklch(0.42 0.025 42)" }}
            >
              We use only <strong>premium quality products</strong> that are
              safe for all skin types, ensuring long-lasting results and a
              flawless finish. Your satisfaction is our greatest reward.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              {[
                "Premium Products",
                "Experienced Artists",
                "Hygienic Environment",
                "Affordable Pricing",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-full font-inter text-xs font-semibold"
                  style={{
                    background: "oklch(0.876 0.042 18)",
                    color: "oklch(0.42 0.025 42)",
                    border: "1px solid oklch(0.838 0.055 18)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div
            className="rounded-2xl p-8"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.955 0.022 30), oklch(0.935 0.032 22))",
              border: "1px solid oklch(0.898 0.025 35)",
              boxShadow: "0 4px 30px rgba(60, 40, 35, 0.08)",
            }}
          >
            <FlowerIcon />
            <h3
              className="font-playfair text-xl font-bold mt-4 mb-3"
              style={{ color: "oklch(0.185 0.018 42)" }}
            >
              Our Promise
            </h3>
            <ul className="space-y-3">
              {[
                "Every client deserves to look and feel extraordinary",
                "We listen carefully to understand your vision",
                "Punctuality and professionalism at every appointment",
                "Honest pricing with no hidden surprises",
                "A welcoming, relaxing salon experience",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 font-inter text-sm"
                  style={{ color: "oklch(0.42 0.025 42)" }}
                >
                  <span className="mt-0.5 text-gold flex-shrink-0">
                    <svg
                      aria-hidden="true"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <polyline
                        points="2,8 6,12 14,4"
                        stroke="var(--gold)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Services ──────────────────────────────────────────────────────────
const services = [
  {
    icon: (
      <svg
        aria-hidden="true"
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        stroke="var(--gold)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <ellipse cx="18" cy="14" rx="8" ry="10" />
        <path d="M10 28c0-4.4 3.6-8 8-8s8 3.6 8 8" />
        <path d="M6 8c2-3 5-4 8-3M30 8c-2-3-5-4-8-3" />
        <circle cx="18" cy="5" r="1.5" fill="var(--gold)" />
      </svg>
    ),
    title: "Bridal Makeup",
    desc: "Stunning full bridal looks crafted with premium, long-lasting products. We capture your dream wedding look from engagement to reception.",
  },
  {
    icon: (
      <svg
        aria-hidden="true"
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        stroke="var(--gold)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="18" cy="14" r="9" />
        <path d="M11 23.5c-3 2-5 5-5 8h24c0-3-2-6-5-8" />
        <path d="M14 8c1-2 3-3 4-3s3 1 4 3" />
        <circle cx="14" cy="13" r="1.5" fill="var(--gold)" />
        <circle cx="22" cy="13" r="1.5" fill="var(--gold)" />
        <path d="M15 17c1 1.5 5 1.5 6 0" />
      </svg>
    ),
    title: "Party Makeup",
    desc: "Glamorous, head-turning looks for birthdays, receptions, festivals and every special occasion that deserves a wow moment.",
  },
  {
    icon: (
      <svg
        aria-hidden="true"
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        stroke="var(--gold)"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 28c-3-4-4-9-2-13 1.5-3 4-5 7-5 3 0 6 2 7.5 5 1.5 4 0.5 9-2.5 13" />
        <path d="M15 20c1 2 2 4 3 6" />
        <path d="M21 20c-1 2-2 4-3 6" />
        <path d="M10 16c2 1 4 0.5 6-1" />
        <path d="M26 16c-2 1-4 0.5-6-1" />
        <circle cx="18" cy="11" r="2" fill="var(--gold)" stroke="none" />
      </svg>
    ),
    title: "Mehndi Design",
    desc: "Intricate, artistic bridal and festive mehndi patterns by our skilled mehndi artists. Traditional and contemporary designs crafted with love.",
  },
  {
    icon: (
      <svg
        aria-hidden="true"
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        stroke="var(--gold)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="18" cy="14" r="9" />
        <path d="M9 22c-3 1-5 3-5 6h28c0-3-2-5-5-6" />
        <path d="M13 10c1.5-2 5-3 7-1" />
        <path d="M11 16c2 3 12 3 14 0" />
      </svg>
    ),
    title: "Facial & Skincare",
    desc: "Nourishing facials, deep cleansing treatments and advanced skin therapies that leave your skin glowing, hydrated and refreshed.",
  },
  {
    icon: (
      <svg
        aria-hidden="true"
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        stroke="var(--gold)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="18" cy="10" r="5" />
        <path d="M13 14c-4 3-6 8-5 14" />
        <path d="M23 14c4 3 6 8 5 14" />
        <path d="M14 28c2-3 8-3 8 0" />
        <path d="M10 20c3 1 13 1 16 0" />
        <circle cx="18" cy="10" r="2" fill="var(--gold)" stroke="none" />
      </svg>
    ),
    title: "Hair Styling",
    desc: "Elegant bridal updos, sleek blowouts, bouncy curls and beautiful braids. Whatever your hair dreams, we make them real.",
  },
];

function ServicesSection() {
  return (
    <section
      id="services"
      className="py-20 px-4 sm:px-6"
      style={{ background: "oklch(0.952 0.018 75)" }}
    >
      <div className="max-w-6xl mx-auto">
        <p className="section-subheading">What We Offer</p>
        <h2 className="section-heading mt-1">Our Services</h2>
        <div className="gold-line" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, i) => (
            <div
              key={svc.title}
              className="service-card rounded-2xl p-6"
              style={{ animationDelay: `${i * 0.1}s` }}
              data-ocid={`services.item.${i + 1}`}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                style={{
                  background: "oklch(0.938 0.032 22)",
                  border: "1px solid oklch(0.878 0.045 22)",
                }}
              >
                {svc.icon}
              </div>
              <h3
                className="font-playfair text-lg font-bold mb-2"
                style={{ color: "oklch(0.185 0.018 42)" }}
              >
                {svc.title}
              </h3>
              <p
                className="font-inter text-sm leading-relaxed"
                style={{ color: "oklch(0.52 0.032 42)" }}
              >
                {svc.desc}
              </p>
            </div>
          ))}

          {/* CTA card */}
          <div
            className="rounded-2xl p-6 flex flex-col items-center justify-center text-center"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.648 0.082 18), oklch(0.58 0.075 18))",
              boxShadow: "0 8px 32px rgba(197, 142, 138, 0.35)",
            }}
          >
            <FlowerIcon />
            <h3 className="font-playfair text-lg font-bold mt-4 mb-2 text-white">
              Book a Service
            </h3>
            <p className="font-inter text-xs text-white/80 mb-5">
              Ready to look stunning? Book your appointment today!
            </p>
            <a
              href="https://wa.me/918271782336"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-inter font-semibold text-sm bg-white"
              style={{ color: "oklch(0.648 0.082 18)" }}
              data-ocid="services.primary_button"
            >
              <WhatsAppIcon size={16} />
              Book Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Why Choose Us ─────────────────────────────────────────────────────
const whyUs = [
  {
    emoji: "⭐",
    title: "5 Star Rated",
    desc: "Consistently rated 5 stars by our happy clients on Google Reviews.",
  },
  {
    emoji: "👩‍🎨",
    title: "Professional Staff",
    desc: "Our certified beauty artists bring years of expertise to every appointment.",
  },
  {
    emoji: "💄",
    title: "Quality Products",
    desc: "We use only top-tier, skin-safe beauty products for flawless, long-lasting results.",
  },
  {
    emoji: "💰",
    title: "Affordable Pricing",
    desc: "Premium beauty services at prices that don't break the bank. Great value always.",
  },
];

function WhyChooseUsSection() {
  return (
    <section
      className="py-20 px-4 sm:px-6"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.185 0.018 42) 0%, oklch(0.22 0.022 42) 100%)",
      }}
    >
      <div className="max-w-5xl mx-auto">
        <p
          className="section-subheading"
          style={{ color: "oklch(0.738 0.092 72)" }}
        >
          Our Edge
        </p>
        <h2
          className="font-playfair text-3xl md:text-4xl font-bold tracking-widest uppercase text-center mt-1 mb-3"
          style={{ color: "white" }}
        >
          Why Choose Us
        </h2>
        <div className="gold-line" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
          {whyUs.map((item, i) => (
            <div
              key={item.title}
              className="rounded-2xl p-6 text-center"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(201, 164, 106, 0.3)",
                backdropFilter: "blur(8px)",
              }}
              data-ocid={`why.item.${i + 1}`}
            >
              <div className="text-4xl mb-3">{item.emoji}</div>
              <h3 className="font-playfair text-base font-bold mb-2 text-white">
                {item.title}
              </h3>
              <p
                className="font-inter text-xs leading-relaxed"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Reviews ──────────────────────────────────────────────────────────
const reviews = [
  {
    name: "Priya Sharma",
    initials: "PS",
    text: "The bridal makeup was absolutely stunning! I felt like a queen on my wedding day. The team understood exactly what I wanted. Thank you M/S Beauty Expert!",
    service: "Bridal Makeup",
  },
  {
    name: "Neha Singh",
    initials: "NS",
    text: "Best mehndi design I have ever seen. The artist was so skilled and patient, working until every detail was perfect. Highly recommend to all brides!",
    service: "Mehndi Design",
  },
  {
    name: "Ritu Verma",
    initials: "RV",
    text: "The staff is so professional and warm. The skincare facial treatment left my face glowing for weeks! Will definitely come back for every occasion.",
    service: "Facial & Skincare",
  },
];

function ReviewsSection() {
  return (
    <section
      className="py-20 px-4 sm:px-6"
      style={{ background: "oklch(0.945 0.022 30)" }}
    >
      <div className="max-w-5xl mx-auto">
        <p className="section-subheading">Kind Words</p>
        <h2 className="section-heading mt-1">What Our Clients Say</h2>
        <div className="gold-line" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, i) => (
            <div
              key={rev.name}
              className="testimonial-card rounded-2xl p-6"
              data-ocid={`reviews.item.${i + 1}`}
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>

              {/* Quote */}
              <p
                className="font-inter text-sm leading-relaxed mb-5 italic"
                style={{ color: "oklch(0.42 0.025 42)" }}
              >
                "{rev.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-playfair font-bold text-sm text-white"
                  style={{ background: "oklch(0.648 0.082 18)" }}
                >
                  {rev.initials}
                </div>
                <div>
                  <div
                    className="font-inter text-sm font-semibold"
                    style={{ color: "oklch(0.185 0.018 42)" }}
                  >
                    {rev.name}
                  </div>
                  <div
                    className="font-inter text-xs"
                    style={{ color: "oklch(0.738 0.092 72)" }}
                  >
                    {rev.service}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Gallery ───────────────────────────────────────────────────────────
const galleryImages = [
  {
    src: "/assets/generated/bridal-hero.dim_800x900.jpg",
    alt: "Bridal makeup by M/S Beauty Expert",
    span: "row-span-2",
  },
  {
    src: "/assets/generated/mehndi-gallery.dim_600x600.jpg",
    alt: "Intricate mehndi design",
    span: "",
  },
  {
    src: "/assets/generated/party-makeup-gallery.dim_600x600.jpg",
    alt: "Glamorous party makeup",
    span: "",
  },
  {
    src: "/assets/generated/skincare-gallery.dim_600x600.jpg",
    alt: "Facial skincare treatment",
    span: "",
  },
  {
    src: "/assets/generated/hair-styling-gallery.dim_600x600.jpg",
    alt: "Elegant bridal hair styling",
    span: "",
  },
];

function GallerySection() {
  return (
    <section
      id="gallery"
      className="py-20 px-4 sm:px-6"
      style={{ background: "oklch(0.952 0.018 75)" }}
    >
      <div className="max-w-5xl mx-auto">
        <p className="section-subheading">Our Work</p>
        <h2 className="section-heading mt-1">Moments of Beauty</h2>
        <div className="gold-line" />

        <div
          className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4"
          style={{ gridAutoRows: "200px" }}
        >
          {galleryImages.map((img, i) => (
            <div
              key={img.src}
              className={`overflow-hidden rounded-2xl ${img.span} group`}
              style={{ border: "2px solid oklch(0.898 0.025 35)" }}
              data-ocid={`gallery.item.${i + 1}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Booking Form ──────────────────────────────────────────────────────
function BookingSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, boolean> = {};
    if (!formData.name.trim()) newErrors.name = true;
    if (!formData.phone.trim()) newErrors.phone = true;
    if (!formData.service) newErrors.service = true;
    if (!formData.date) newErrors.date = true;
    if (!formData.time) newErrors.time = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});

    const msg = [
      "Hello! I'd like to book an appointment at M/S Beauty Expert.",
      "",
      `Name: ${formData.name}`,
      `Phone: ${formData.phone}`,
      `Service: ${formData.service}`,
      `Date: ${formData.date}`,
      `Time: ${formData.time}`,
      formData.message ? `Message: ${formData.message}` : "",
    ]
      .filter((l) => l !== undefined)
      .join("\n");

    window.open(
      `https://wa.me/918271782336?text=${encodeURIComponent(msg)}`,
      "_blank",
    );
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-2.5 rounded-xl font-inter text-sm outline-none transition-all ${
      errors[field]
        ? "border-2 border-red-400 bg-red-50"
        : "border border-border bg-white focus:border-primary focus:ring-2 focus:ring-primary/20"
    }`;

  return (
    <section
      id="booking"
      className="py-20 px-4 sm:px-6"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.938 0.032 22), oklch(0.952 0.018 75))",
      }}
    >
      <div className="max-w-2xl mx-auto">
        <p className="section-subheading">Get in Touch</p>
        <h2 className="section-heading mt-1">Book Your Appointment</h2>
        <div className="gold-line" />
        <p
          className="text-center font-inter text-sm mb-8"
          style={{ color: "oklch(0.52 0.032 42)" }}
        >
          Fill in the details below and we'll connect you on WhatsApp
        </p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          noValidate
          className="rounded-3xl p-6 sm:p-8"
          style={{
            background: "white",
            boxShadow: "0 8px 48px rgba(60, 40, 35, 0.12)",
            border: "1px solid oklch(0.898 0.025 35)",
          }}
          data-ocid="booking.modal"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <Label
                htmlFor="name"
                className="font-inter text-xs font-semibold uppercase tracking-wider"
                style={{ color: "oklch(0.42 0.025 42)" }}
              >
                Full Name *
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) =>
                  setFormData((p) => ({ ...p, name: e.target.value }))
                }
                className={inputClass("name")}
                data-ocid="booking.input"
              />
              {errors.name && (
                <span
                  className="text-xs text-red-500 font-inter"
                  data-ocid="booking.error_state"
                >
                  Name is required
                </span>
              )}
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-1.5">
              <Label
                htmlFor="phone"
                className="font-inter text-xs font-semibold uppercase tracking-wider"
                style={{ color: "oklch(0.42 0.025 42)" }}
              >
                Phone Number *
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                value={formData.phone}
                onChange={(e) =>
                  setFormData((p) => ({ ...p, phone: e.target.value }))
                }
                className={inputClass("phone")}
                data-ocid="booking.input"
              />
              {errors.phone && (
                <span
                  className="text-xs text-red-500 font-inter"
                  data-ocid="booking.error_state"
                >
                  Phone is required
                </span>
              )}
            </div>

            {/* Service */}
            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <Label
                className="font-inter text-xs font-semibold uppercase tracking-wider"
                style={{ color: "oklch(0.42 0.025 42)" }}
              >
                Select Service *
              </Label>
              <Select
                value={formData.service}
                onValueChange={(v) =>
                  setFormData((p) => ({ ...p, service: v }))
                }
              >
                <SelectTrigger
                  className={`w-full ${errors.service ? "border-2 border-red-400" : ""}`}
                  data-ocid="booking.select"
                >
                  <SelectValue placeholder="Choose a service..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Bridal Makeup">Bridal Makeup</SelectItem>
                  <SelectItem value="Party Makeup">Party Makeup</SelectItem>
                  <SelectItem value="Mehndi Design">Mehndi Design</SelectItem>
                  <SelectItem value="Facial & Skincare">
                    Facial & Skincare
                  </SelectItem>
                  <SelectItem value="Hair Styling">Hair Styling</SelectItem>
                </SelectContent>
              </Select>
              {errors.service && (
                <span
                  className="text-xs text-red-500 font-inter"
                  data-ocid="booking.error_state"
                >
                  Please select a service
                </span>
              )}
            </div>

            {/* Date */}
            <div className="flex flex-col gap-1.5">
              <Label
                htmlFor="date"
                className="font-inter text-xs font-semibold uppercase tracking-wider"
                style={{ color: "oklch(0.42 0.025 42)" }}
              >
                Preferred Date *
              </Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) =>
                  setFormData((p) => ({ ...p, date: e.target.value }))
                }
                className={inputClass("date")}
                data-ocid="booking.input"
              />
              {errors.date && (
                <span
                  className="text-xs text-red-500 font-inter"
                  data-ocid="booking.error_state"
                >
                  Date is required
                </span>
              )}
            </div>

            {/* Time */}
            <div className="flex flex-col gap-1.5">
              <Label
                htmlFor="time"
                className="font-inter text-xs font-semibold uppercase tracking-wider"
                style={{ color: "oklch(0.42 0.025 42)" }}
              >
                Preferred Time *
              </Label>
              <Input
                id="time"
                type="time"
                value={formData.time}
                onChange={(e) =>
                  setFormData((p) => ({ ...p, time: e.target.value }))
                }
                className={inputClass("time")}
                data-ocid="booking.input"
              />
              {errors.time && (
                <span
                  className="text-xs text-red-500 font-inter"
                  data-ocid="booking.error_state"
                >
                  Time is required
                </span>
              )}
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <Label
                htmlFor="message"
                className="font-inter text-xs font-semibold uppercase tracking-wider"
                style={{ color: "oklch(0.42 0.025 42)" }}
              >
                Special Requests
              </Label>
              <Textarea
                id="message"
                placeholder="Any special requests or notes..."
                value={formData.message}
                onChange={(e) =>
                  setFormData((p) => ({ ...p, message: e.target.value }))
                }
                className="w-full px-4 py-2.5 rounded-xl font-inter text-sm border border-border bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none min-h-[90px] resize-none"
                data-ocid="booking.textarea"
              />
            </div>
          </div>

          <button
            type="submit"
            className="whatsapp-btn w-full mt-6 flex items-center justify-center gap-3 py-3.5 rounded-full font-inter font-semibold text-base"
            style={{ boxShadow: "0 4px 20px rgba(37, 211, 102, 0.4)" }}
            data-ocid="booking.submit_button"
          >
            <WhatsAppIcon size={22} />
            Book Now on WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}

// ── Contact ───────────────────────────────────────────────────────────
function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6"
      style={{ background: "oklch(0.945 0.022 30)" }}
    >
      <div className="max-w-5xl mx-auto">
        <p className="section-subheading">Find Us</p>
        <h2 className="section-heading mt-1">Contact Us</h2>
        <div className="gold-line" />

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <div
              className="rounded-2xl p-6"
              style={{
                background: "white",
                boxShadow: "0 4px 20px rgba(60, 40, 35, 0.08)",
                border: "1px solid oklch(0.898 0.025 35)",
              }}
            >
              <h3
                className="font-playfair text-xl font-bold mb-5"
                style={{ color: "oklch(0.185 0.018 42)" }}
              >
                Get in Touch
              </h3>

              <div className="space-y-4">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "oklch(0.938 0.032 22)" }}
                  >
                    <svg
                      aria-hidden="true"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      stroke="var(--gold)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    >
                      <path d="M9 1C6.24 1 4 3.24 4 6c0 3.75 5 11 5 11s5-7.25 5-11c0-2.76-2.24-5-5-5z" />
                      <circle cx="9" cy="6" r="2" />
                    </svg>
                  </div>
                  <div>
                    <div
                      className="font-inter text-sm font-semibold"
                      style={{ color: "oklch(0.185 0.018 42)" }}
                    >
                      Location
                    </div>
                    <div
                      className="font-inter text-sm"
                      style={{ color: "oklch(0.52 0.032 42)" }}
                    >
                      Magadh Colony, Gaya, Bihar, India
                    </div>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "oklch(0.938 0.032 22)" }}
                  >
                    <span style={{ color: "#25D366", display: "flex" }}>
                      <WhatsAppIcon size={18} />
                    </span>
                  </div>
                  <div>
                    <div
                      className="font-inter text-sm font-semibold"
                      style={{ color: "oklch(0.185 0.018 42)" }}
                    >
                      WhatsApp
                    </div>
                    <a
                      href="https://wa.me/918271782336"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-inter text-sm font-medium hover:underline"
                      style={{ color: "#25D366" }}
                      data-ocid="contact.link"
                    >
                      +91 8271782336
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "oklch(0.938 0.032 22)" }}
                  >
                    <svg
                      aria-hidden="true"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      stroke="var(--gold)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    >
                      <circle cx="9" cy="9" r="7" />
                      <path d="M9 5v4l2.5 2.5" />
                    </svg>
                  </div>
                  <div>
                    <div
                      className="font-inter text-sm font-semibold"
                      style={{ color: "oklch(0.185 0.018 42)" }}
                    >
                      Working Hours
                    </div>
                    <div
                      className="font-inter text-sm"
                      style={{ color: "oklch(0.52 0.032 42)" }}
                    >
                      Mon – Sun: 8:00 AM – 8:00 PM
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/918271782336"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn mt-6 inline-flex w-full items-center justify-center gap-2 py-3 rounded-full font-inter font-semibold text-sm"
                data-ocid="contact.primary_button"
              >
                <WhatsAppIcon size={18} />
                Chat with Us on WhatsApp
              </a>
            </div>
          </div>

          {/* Map */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              boxShadow: "0 4px 20px rgba(60, 40, 35, 0.08)",
              border: "2px solid oklch(0.898 0.025 35)",
              minHeight: 300,
            }}
          >
            <iframe
              title="M/S Beauty Expert Location – Magadh Colony, Gaya"
              src="https://www.google.com/maps?q=24.775984,84.9542552&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 300, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Final CTA ─────────────────────────────────────────────────────────
function FinalCTASection() {
  return (
    <section
      className="py-20 px-4 sm:px-6 text-center"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.648 0.082 18) 0%, oklch(0.58 0.075 15) 100%)",
      }}
    >
      <div className="max-w-2xl mx-auto">
        <FlowerIcon />
        <h2
          className="font-playfair text-3xl md:text-4xl font-bold mt-4 mb-4 text-white"
          style={{ textShadow: "0 2px 8px rgba(0,0,0,0.2)" }}
        >
          Book Your Appointment Now
        </h2>
        <p
          className="font-inter text-base mb-8"
          style={{ color: "rgba(255,255,255,0.85)" }}
        >
          Contact us on WhatsApp today and let us make you look your absolute
          best!
        </p>
        <a
          href="https://wa.me/918271782336"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-inter font-bold text-base bg-white transition-all hover:scale-105"
          style={{
            color: "oklch(0.648 0.082 18)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
          }}
          data-ocid="cta.primary_button"
        >
          <WhatsAppIcon size={22} />
          Book on WhatsApp
        </a>
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────────
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="py-8 px-4 text-center"
      style={{ background: "oklch(0.185 0.018 42)" }}
    >
      <div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 font-inter text-xs"
        style={{ color: "rgba(255,255,255,0.55)" }}
      >
        <span>
          © {year} M/S Beauty Expert. All rights reserved. | Magadh Colony,
          Gaya, Bihar
        </span>
        <span className="hidden sm:inline">·</span>
        <a
          href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >
          Built with ❤️ using caffeine.ai
        </a>
      </div>
    </footer>
  );
}

// ── WhatsApp Float ────────────────────────────────────────────────────
function WhatsAppFloat() {
  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <div
        className="absolute bottom-full right-0 mb-2 px-3 py-1.5 rounded-lg font-inter text-xs font-medium text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
        style={{ background: "rgba(30,18,14,0.88)" }}
      >
        Chat with us on WhatsApp
      </div>
      <a
        href="https://wa.me/918271782336"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn w-14 h-14 rounded-full flex items-center justify-center"
        style={{ boxShadow: "0 4px 20px rgba(37, 211, 102, 0.5)" }}
        aria-label="Chat with us on WhatsApp"
        data-ocid="whatsapp.primary_button"
      >
        <WhatsAppIcon size={26} />
      </a>
    </div>
  );
}

// ── App ───────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <ReviewsSection />
        <GallerySection />
        <BookingSection />
        <ContactSection />
        <FinalCTASection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
