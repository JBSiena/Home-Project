import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faChartColumn,
  faClock,
  faCompass,
  faFilter,
  faHandshake,
  faHouse,
  faLocationDot,
  faPhone,
  faStar as faStarSolid,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
  faYelp,
} from "@fortawesome/free-brands-svg-icons";
import heroLocal from "./assets/images/image.png";
import lifestyleImage from "./assets/images/image1.png";
import marciPortrait from "./assets/images/marci's pic.png";
import communityImage from "./assets/images/image2.png";
import searchBackground from "./assets/images/backgroundimage.png";
import ridgeLogo from "./assets/images/theridge.png";
import realtorLogo from "./assets/images/therealtor.png";
import pahrumpValleyLogo from "./assets/images/pahrumvalley.png";
import equalHousingLogo from "./assets/images/equalhousing.png";

const logoSrc =
  "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/blob-6c0c2e0.png/:/rs=h:167,cg:true,m/qt=q:95";

const heroImageSrc = heroLocal;

const galleryImages = [
  {
    src: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/4787%20E%20Beacon%20Ridge-53.jpg-SMALL.JPG/:/",
  },
  {
    src: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/4787%20E%20Beacon%20Ridge-41.jpg-SMALL.JPG/:/",
  },
  {
    src: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/4460%20Roseworthy-52.jpg-SMALL.JPG/:/",
  },
  {
    src: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/5570%20Ailanto-14.jpg-SMALL.JPG/:/cr=t:0%25,l:0.05%25,w:99.9%25,h:99.9%25",
  },
  {
    src: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/5570%20Ailanto-45.jpg-SMALL.JPG/:/",
  },
  {
    src: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/4460%20Roseworthy-52.jpg-SMALL.JPG/:/rs=w:70,h:70,cg=true,m/cr=w:70,h:70,a:cc",
  },
  {
    src: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/5570%20Ailanto-14.jpg-SMALL.JPG/:/rs=w:70,h:70,cg=true,m/cr=w:70,h:70,a:cc",
  },
  {
    src: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/5570%20Ailanto-45.jpg-SMALL.JPG/:/rs=w:70,h:70,cg=true,m/cr=w:70,h:70,a:cc",
  },
  {
    src: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/5570%20Ailanto-50.jpg-SMALL.JPG/:/rs=w:70,h:70,cg=true,m/cr=w:70,h:70,a:cc",
  },
  {
    src: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/4787%20E%20Beacon%20Ridge-54.jpg-SMALL.JPG/:/rs=w:70,h:70,cg=true,m/cr=w:70,h:70,a:cc",
  },
  {
    src: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/4787%20E%20Beacon%20Ridge-53.jpg-SMALL.JPG/:/rs=w:70,h:70,cg=true,m/cr=w:70,h:70,a:cc",
  },
  {
    src: "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/4787%20E%20Beacon%20Ridge-41.jpg-SMALL.JPG/:/rs=w:70,h:70,cg=true,m/cr=w:70,h:70,a:cc",
  },
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Listings", href: "#search" },
  { label: "Let's Move", href: "#contact" },
  { label: "About Us", href: "#about" },
];

type SocialKind = "facebook" | "instagram" | "linkedin" | "yelp";

const socialLinks: { kind: SocialKind; label: string; href: string }[] = [
  {
    kind: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/MarciHomes/",
  },
  {
    kind: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/marciandlauren_nvrealtors/",
  },
  {
    kind: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/marci-metzger-30642496/",
  },
  {
    kind: "yelp",
    label: "Yelp",
    href: "https://www.yelp.com/biz/xr3yQN_m2SgO0R_7S6p62w",
  },
];

function SocialIcon({ kind }: { kind: SocialKind }) {
  const base = "h-4 w-4 sm:h-5 sm:w-5";

  if (kind === "facebook") {
    return <FontAwesomeIcon icon={faFacebookF} className={base} fixedWidth />;
  }

  if (kind === "instagram") {
    return <FontAwesomeIcon icon={faInstagram} className={base} fixedWidth />;
  }

  if (kind === "linkedin") {
    return <FontAwesomeIcon icon={faLinkedinIn} className={base} fixedWidth />;
  }

  if (kind === "yelp") {
    return <FontAwesomeIcon icon={faYelp} className={base} fixedWidth />;
  }

  return null;
}

function SmallIcon({
  kind,
}: {
  kind: "filter" | "mapPin" | "phone" | "clock" | "whatsapp";
}) {
  const className = "h-5 w-5";

  if (kind === "filter") {
    return <FontAwesomeIcon icon={faFilter} className={className} fixedWidth />;
  }

  if (kind === "mapPin") {
    return <FontAwesomeIcon icon={faLocationDot} className={className} fixedWidth />;
  }

  if (kind === "phone") {
    return <FontAwesomeIcon icon={faPhone} className={className} fixedWidth />;
  }

  if (kind === "clock") {
    return <FontAwesomeIcon icon={faClock} className={className} fixedWidth />;
  }

  if (kind === "whatsapp") {
    return <FontAwesomeIcon icon={faWhatsapp} className={className} fixedWidth />;
  }

  return null;
}

function App() {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [galleryEntered, setGalleryEntered] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [servicesEntered, setServicesEntered] = useState(false);
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

  useEffect(() => {
    if (galleryImages.length <= 1) return;

    const id = window.setInterval(() => {
      setCurrentSlide((index) => (index + 1) % galleryImages.length);
    }, 5000);

    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("photo-gallery");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.8) {
        setGalleryEntered(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("services");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.9) {
        setServicesEntered(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeLightbox = () => {
    setActiveImageIndex(null);
  };

  const showPreviousImage = () => {
    setActiveImageIndex((index) => {
      if (index === null || index === 0) return index;
      return index - 1;
    });
  };

  const showNextImage = () => {
    setActiveImageIndex((index) => {
      if (index === null || index === galleryImages.length - 1) return index;
      return index + 1;
    });
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((index) =>
      index === 0 ? galleryImages.length - 1 : index - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((index) =>
      index === galleryImages.length - 1 ? 0 : index + 1
    );
  };

  return (
    <div className="min-h-screen bg-stone-50 font-body text-slate-900">
      <div id="home" />
      {/* Sticky navigation */}
      <header
        className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <a href="#home" className="flex items-center gap-3">
            <img
              src={logoSrc}
              alt="Marci Metzger Homes logo"
              className="h-10 w-auto"
            />
            <div className="leading-tight">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-amber-700">
                The Ridge Realty Group
              </p>
              <p className="text-sm font-semibold text-slate-900">
                Marci Metzger Homes
              </p>
            </div>
          </a>
          <div className="flex items-center gap-3">
            <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-amber-700"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <a
              href="tel:(206) 919-6886"
              className="hidden items-center gap-2 rounded-full bg-amber-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-amber-700 sm:inline-flex"
            >
              <SmallIcon kind="phone" />
              <span>CALL NOW</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileNavOpen((open) => !open)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-800 shadow-sm transition-colors hover:border-amber-600 hover:text-amber-700 md:hidden"
              aria-label={
                mobileNavOpen ? "Close navigation" : "Open navigation"
              }
            >
              <span className="relative block h-4 w-4">
                <span
                  className={`absolute inset-x-0 top-0 h-[2px] rounded-full bg-current transition-transform duration-200 ${
                    mobileNavOpen ? "translate-y-2 rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 rounded-full bg-current transition-opacity duration-200 ${
                    mobileNavOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute inset-x-0 bottom-0 h-[2px] rounded-full bg-current transition-transform duration-200 ${
                    mobileNavOpen ? "-translate-y-2 -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
        {mobileNavOpen && (
          <div className="border-t border-slate-200 bg-white md:hidden">
            <nav className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-3 text-sm font-medium text-slate-700">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileNavOpen(false)}
                  className="rounded-lg px-3 py-2 hover:bg-amber-50 hover:text-amber-800"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:(206) 919-6886"
                onClick={() => setMobileNavOpen(false)}
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-amber-600 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-amber-700"
              >
                <SmallIcon kind="phone" />
                <span>CALL NOW</span>
              </a>
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* Hero & results */}
        <section className="relative overflow-hidden bg-slate-950 text-white">
          <img
            src={heroImageSrc}
            alt="Pahrump neighborhood aerial view"
            className="absolute inset-0 h-full w-full object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/55 to-slate-950/10" />
          <div className="relative mx-auto max-w-6xl px-4 pt-12 pb-16 sm:pt-16">
            <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-200">
                  MARCI METZGER - THE RIDGE REALTY GROUP
                </p>
                <h1 className="mt-4 font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                  Buy or sell in Pahrump with a local expert
                </h1>
                <p className="mt-4 max-w-xl text-base text-slate-200">
                  Nearly 30 years of experience with pricing strategy,
                  negotiation, and hands-on guidance from first showing to
                  closing.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="tel:(206) 919-6886"
                    className="inline-flex items-center justify-center rounded-full bg-amber-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-amber-700"
                  >
                    CALL NOW
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:border-amber-300 hover:bg-white/15"
                  >
                    Schedule a Consultation
                  </a>
                </div>
                <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
                  <a
                    href="#search"
                    className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-4 py-2 font-semibold text-white shadow-sm transition hover:border-amber-300"
                  >
                    <SmallIcon kind="filter" />
                    <span>Browse Listings</span>
                  </a>
                  <a
                    href="https://wa.me/14259412560"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-4 py-2 font-semibold text-white shadow-sm transition hover:border-emerald-300"
                  >
                    <SmallIcon kind="whatsapp" />
                    <span>WhatsApp</span>
                  </a>
                </div>
                <p className="mt-3 text-xs text-slate-300">
                  Response within 1 business hour during office hours.
                </p>
                <div className="mt-8 rounded-3xl bg-white/10 p-6 shadow-sm ring-1 ring-white/10">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="flex items-center gap-1 text-yellow-400">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <FontAwesomeIcon
                            key={index}
                            icon={faStarSolid}
                            className="h-4 w-4"
                            fixedWidth
                          />
                        ))}
                      </div>
                      <p className="mt-2 text-sm font-semibold text-white">
                        Client review highlights
                      </p>
                    </div>
                    <div className="grid gap-3 text-sm text-slate-200 sm:max-w-md">
                      <p className="rounded-2xl bg-white/10 p-4">
                        “Clear communication, strong negotiation, and a smooth
                        closing.”
                      </p>
                      <p className="rounded-2xl bg-white/10 p-4">
                        “Local market expertise that helped us price right and
                        sell fast.”
                      </p>
                    </div>
                  </div>
                </div>
                <dl className="mt-8 grid gap-4 text-sm text-slate-200 sm:grid-cols-3">
                  <div>
                    <dt className="font-semibold text-white">Recent sales</dt>
                    <dd className="mt-1">
                      Top residential sales over the last five years.
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-white">Clients served</dt>
                    <dd className="mt-1">We helped nearly 90 clients in 2021.</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-white">Sales volume</dt>
                    <dd className="mt-1">
                      Closed 28.5 million in sales in 2021.
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="relative space-y-4">
                <div className="relative overflow-hidden rounded-3xl bg-slate-900/35 text-white shadow-xl ring-1 ring-white/10">
                  <img
                    src={lifestyleImage}
                    alt="Homes and mountains around Pahrump"
                    className="absolute inset-0 -z-10 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-slate-950/70 via-slate-950/30 to-transparent" />
                  <div className="relative p-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-200">
                      BUY OR SELL WITH CONFIDENCE
                    </p>
                    <h2 className="mt-3 font-display text-2xl font-semibold">
                      Top Residential Sales Last 5 Years
                    </h2>
                    <p className="mt-4 text-sm text-slate-100">
                      We helped nearly 90 clients in 2021, and closed 28.5
                      million in sales—supporting both buyers and sellers.
                    </p>
                    <p className="mt-2 text-sm text-slate-100/80">
                      From pricing strategy to offer negotiation, we guide you
                      through the process with clear timelines, local insight,
                      and hands-on coordination.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About & expertise */}
        <section id="about" className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
              <div className="space-y-6">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                  <div className="relative h-28 w-28 overflow-hidden rounded-3xl bg-slate-200 shadow-md ring-1 ring-slate-900/5 sm:h-32 sm:w-32">
                    <img
                      src={marciPortrait}
                      alt="Portrait of Marci Metzger"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">
                      ABOUT US
                    </p>
                    <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-900">
                      Nearly 30 years helping buyers and sellers in Pahrump
                    </h2>
                    <p className="text-sm text-slate-600">
                      Local market expertise, personal attention, and a clear
                      plan—so you feel confident at every step.
                    </p>
                  </div>
                </div>
                <div className="rounded-3xl bg-stone-50 p-6 shadow-sm ring-1 ring-slate-900/5">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-1">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
                        For buyers
                      </p>
                      <p className="text-sm text-slate-700">
                        Tour planning, offer strategy, negotiation, and
                        inspection coordination—so you can move fast with
                        clarity.
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
                        For sellers
                      </p>
                      <p className="text-sm text-slate-700">
                        Pricing, prep guidance, marketing, and strong
                        negotiation—focused on net results, not just list price.
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-sm font-semibold text-slate-900">
                  Call or text{" "}
                  <a
                    href="tel:2069196886"
                    className="text-amber-700 underline underline-offset-4"
                  >
                    206-919-6886
                  </a>
                  .
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <article className="group rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5 transition hover:-translate-y-1 hover:shadow-md">
                  <div className="flex items-start gap-4">
                    <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-amber-50 text-amber-700">
                      <FontAwesomeIcon icon={faHouse} className="h-5 w-5" fixedWidth />
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900">
                        Buyer representation
                      </h3>
                      <p className="mt-2 text-sm text-slate-700">
                        Targeted searches, strong offers, and steady guidance
                        from tour to keys.
                      </p>
                    </div>
                  </div>
                </article>
                <article className="group rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5 transition hover:-translate-y-1 hover:shadow-md">
                  <div className="flex items-start gap-4">
                    <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-amber-50 text-amber-700">
                      <FontAwesomeIcon
                        icon={faChartColumn}
                        className="h-5 w-5"
                        fixedWidth
                      />
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900">
                        Seller strategy
                      </h3>
                      <p className="mt-2 text-sm text-slate-700">
                        Pricing plan, prep checklist, and marketing that brings
                        the right buyers.
                      </p>
                    </div>
                  </div>
                </article>
                <article className="group rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5 transition hover:-translate-y-1 hover:shadow-md">
                  <div className="flex items-start gap-4">
                    <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-amber-50 text-amber-700">
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        className="h-5 w-5"
                        fixedWidth
                      />
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900">
                        Neighborhood expertise
                      </h3>
                      <p className="mt-2 text-sm text-slate-700">
                        Local comps, insights, and guidance tailored to Pahrump
                        and nearby communities.
                      </p>
                    </div>
                  </div>
                </article>
                <article className="group rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5 transition hover:-translate-y-1 hover:shadow-md">
                  <div className="flex items-start gap-4">
                    <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-amber-50 text-amber-700">
                      <FontAwesomeIcon
                        icon={faHandshake}
                        className="h-5 w-5"
                        fixedWidth
                      />
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900">
                        Smooth closing
                      </h3>
                      <p className="mt-2 text-sm text-slate-700">
                        Lender + inspector coordination, timeline clarity, and
                        hands-on problem solving.
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* Search listings */}
        <section
          id="search"
          className="relative border-t border-slate-200 bg-slate-900"
        >
          <div className="absolute inset-0">
            <img
              src={searchBackground}
              alt="Subtle home and key background behind search filters"
              className="h-full w-full object-cover opacity-50"
            />
          </div>
          <div className="absolute inset-0 bg-slate-900/20" />
          <div className="relative mx-auto max-w-6xl px-4 py-16">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">
                  FIND YOUR DREAM HOME
                </p>
                <div className="mt-3 flex items-center gap-3">
                  <h2 className="font-display text-3xl font-semibold tracking-tight text-white">
                    Search Listings
                  </h2>
                  <span className="hidden items-center gap-1 rounded-full bg-amber-100 px-3 py-1 text-[11px] font-medium text-amber-900 sm:inline-flex">
                    <span className="text-amber-700">
                      <SmallIcon kind="filter" />
                    </span>
                    <span>Smart filters</span>
                  </span>
                </div>
                <p className="mt-4 max-w-lg text-sm text-amber-50/90">
                  Nobody knows the market like we do. Use the search filters to
                  narrow down location, price, and home features, and then reach
                  out so we can help you buy with confidence or sell smoothly.
                </p>
              </div>
              <form
                className="rounded-3xl bg-white p-6 shadow-lg ring-1 ring-slate-900/5"
                onSubmit={(event) => event.preventDefault()}
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-slate-900">
                    Quick search
                  </p>
                  <button
                    type="button"
                    onClick={() => setShowAdvancedFilters((value) => !value)}
                    className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-900 shadow-sm transition hover:border-amber-300"
                  >
                    {showAdvancedFilters ? "Hide filters" : "More filters"}
                  </button>
                </div>
                <p className="mt-2 text-xs text-slate-500">
                  Start simple—then expand filters if you want to narrow down.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1 text-sm">
                    <label
                      htmlFor="location"
                      className="block font-medium text-slate-900"
                    >
                      Location
                    </label>
                    <select
                      id="location"
                      name="location"
                      className="block w-full rounded-lg border-slate-300 bg-white text-sm text-slate-900 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                    >
                      <option>Any Location</option>
                      <option>Pahrump</option>
                    </select>
                  </div>
                  <div className="space-y-1 text-sm">
                    <label
                      htmlFor="type"
                      className="block font-medium text-slate-900"
                    >
                      Type
                    </label>
                    <select
                      id="type"
                      name="type"
                      className="block w-full rounded-lg border-slate-300 bg-white text-sm text-slate-900 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                    >
                      <option>Any Type</option>
                      <option>Single Family</option>
                      <option>Condo / Townhome</option>
                      <option>Land</option>
                    </select>
                  </div>
                  <div className="space-y-1 text-sm">
                    <label
                      htmlFor="bedrooms"
                      className="block font-medium text-slate-900"
                    >
                      Bedrooms
                    </label>
                    <select
                      id="bedrooms"
                      name="bedrooms"
                      className="block w-full rounded-lg border-slate-300 bg-white text-sm text-slate-900 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                    >
                      <option>Any Number</option>
                      <option>Studio</option>
                      <option>1+</option>
                      <option>2+</option>
                      <option>3+</option>
                      <option>4+</option>
                      <option>5+</option>
                      <option>6+</option>
                    </select>
                  </div>
                  <div className="space-y-1 text-sm">
                    <label
                      htmlFor="minPrice"
                      className="block font-medium text-slate-900"
                    >
                      Min Price
                    </label>
                    <input
                      id="minPrice"
                      name="minPrice"
                      type="number"
                      placeholder="Any"
                      className="block w-full rounded-lg border-slate-300 bg-white text-sm text-slate-900 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                    />
                  </div>
                  <div className="space-y-1 text-sm">
                    <label
                      htmlFor="maxPrice"
                      className="block font-medium text-slate-900"
                    >
                      Max Price
                    </label>
                    <input
                      id="maxPrice"
                      name="maxPrice"
                      type="number"
                      placeholder="Any"
                      className="block w-full rounded-lg border-slate-300 bg-white text-sm text-slate-900 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                    />
                  </div>
                  {showAdvancedFilters && (
                    <>
                      <div className="space-y-1 text-sm">
                        <label
                          htmlFor="sortBy"
                          className="block font-medium text-slate-900"
                        >
                          Sort By
                        </label>
                        <select
                          id="sortBy"
                          name="sortBy"
                          className="block w-full rounded-lg border-slate-300 bg-white text-sm text-slate-900 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                        >
                          <option>Newest</option>
                          <option>Oldest</option>
                          <option>Least Expensive to Most</option>
                          <option>Most Expensive to Least</option>
                          <option>Bedrooms (Low to High)</option>
                          <option>Bedrooms (High to Low)</option>
                          <option>Bathrooms (Low to High)</option>
                          <option>Bathrooms (High to Low)</option>
                        </select>
                      </div>
                      <div className="space-y-1 text-sm">
                        <label
                          htmlFor="baths"
                          className="block font-medium text-slate-900"
                        >
                          Baths
                        </label>
                        <select
                          id="baths"
                          name="baths"
                          className="block w-full rounded-lg border-slate-300 bg-white text-sm text-slate-900 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                        >
                          <option>Any Number</option>
                          <option>1+</option>
                          <option>2+</option>
                          <option>3+</option>
                          <option>4+</option>
                          <option>5+</option>
                          <option>6+</option>
                        </select>
                      </div>
                    </>
                  )}
                </div>
                <button
                  type="submit"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-amber-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-amber-700"
                >
                  Search Now
                </button>
                <p className="mt-3 text-xs text-slate-600">
                  Want curated matches? Tell us what you&apos;re looking for and
                  we&apos;ll send options.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* Photo gallery */}
        <section
          id="photo-gallery"
          className="border-t border-slate-200 bg-white"
        >
          <div className="mx-auto max-w-6xl px-4 py-16">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">
                  PHOTO GALLERY
                </p>
                <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-slate-900">
                  Photo Gallery
                </h2>
              </div>
              <p className="max-w-md text-sm text-slate-700">
                Explore a selection of recent properties and neighborhood
                moments from Marci Metzger Homes in Pahrump and the surrounding
                area.
              </p>
            </div>
            <div
              className={`mt-8 space-y-4 transform transition-all duration-700 ${
                galleryEntered
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              <div className="relative w-full overflow-hidden rounded-3xl bg-slate-100 shadow-lg">
                <div className="relative aspect-[4/3] w-full">
                  {galleryImages.map((image, index) => (
                    <button
                      type="button"
                      key={image.src + index}
                      onClick={() => setActiveImageIndex(index)}
                      className={`group absolute inset-0 block w-full transition-all duration-700 ${
                        index === currentSlide
                          ? "translate-x-0 opacity-100"
                          : "translate-x-full opacity-0 pointer-events-none"
                      }`}
                    >
                      <img
                        src={image.src}
                        alt="Gallery image from Marci Metzger Homes"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      <span className="pointer-events-none absolute inset-x-4 bottom-4 inline-flex items-center justify-between text-xs font-medium text-slate-50 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                        <span>View photo</span>
                        <span className="rounded-full bg-slate-900/60 px-2 py-1 text-[11px] tracking-wide">
                          {index + 1} / {galleryImages.length}
                        </span>
                      </span>
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={goToPreviousSlide}
                  className="absolute inset-y-0 left-0 flex w-20 items-center justify-center bg-slate-900/5 text-white transition hover:bg-slate-900/35"
                  aria-label="Previous photo"
                >
                  <span className="text-2xl leading-none">&#10094;</span>
                </button>
                <button
                  type="button"
                  onClick={goToNextSlide}
                  className="absolute inset-y-0 right-0 flex w-20 items-center justify-center bg-slate-900/5 text-white transition hover:bg-slate-900/35"
                  aria-label="Next photo"
                >
                  <span className="text-2xl leading-none">&#10095;</span>
                </button>
              </div>
              <div className="mt-4 flex items-center justify-center gap-2">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 w-2 rounded-full transition-colors ${
                      index === currentSlide
                        ? "bg-amber-600"
                        : "bg-slate-300 hover:bg-slate-400"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Social & services summary */}
        <section
          id="services"
          className="border-t border-slate-200 bg-slate-900 text-slate-50"
        >
          <div
            className={`mx-auto max-w-6xl px-4 py-12 transform transition-all duration-700 ease-out ${
              servicesEntered
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
              <div className="space-y-4">
                <div>
                  <h2 className="font-display text-2xl font-semibold tracking-tight">
                    Our Services
                  </h2>
                  <p className="mt-3 text-sm text-slate-200">
                    Real estate done right, for buyers and sellers. From
                    first-time purchases to investment properties, our team
                    focuses on getting you the best experience possible and
                    making sure you feel confident and educated every step of
                    the way.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3 text-[13px] text-slate-200/90">
                    <div className="inline-flex items-center gap-3 rounded-full bg-slate-800/80 px-4 py-1.5">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-amber-400">
                        <FontAwesomeIcon icon={faUsers} className="h-4 w-4" fixedWidth />
                      </span>
                      <span>90+ clients served</span>
                    </div>
                    <div className="inline-flex items-center gap-3 rounded-full bg-slate-800/80 px-4 py-1.5">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-amber-400">
                        <FontAwesomeIcon
                          icon={faChartColumn}
                          className="h-4 w-4"
                          fixedWidth
                        />
                      </span>
                      <span>28.5M+ in recent sales</span>
                    </div>
                    <div className="inline-flex items-center gap-3 rounded-full bg-slate-800/80 px-4 py-1.5">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-amber-400">
                        <FontAwesomeIcon icon={faClock} className="h-4 w-4" fixedWidth />
                      </span>
                      <span>Nearly 30 years of experience</span>
                    </div>
                  </div>
                </div>
                <div className="grid gap-4 text-sm text-slate-100 sm:grid-cols-2">
                  <div className="group rounded-2xl bg-slate-800/80 p-4 shadow-sm ring-1 ring-slate-800/60 transition-transform transition-colors duration-300 hover:-translate-y-1.5 hover:bg-slate-800 hover:shadow-lg hover:ring-amber-500/60">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-amber-400">
                        <FontAwesomeIcon icon={faHouse} className="h-5 w-5" fixedWidth />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-semibold">
                          Real Estate Done Right
                        </h3>
                        <p className="mt-2 text-slate-200/90">
                          Nervous about your property adventure? Don&apos;t be.
                          We make sure your experience is smooth from start to
                          finish.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="group rounded-2xl bg-slate-800/80 p-4 shadow-sm ring-1 ring-slate-800/60 transition-transform transition-colors duration-300 hover:-translate-y-1.5 hover:bg-slate-800 hover:shadow-lg hover:ring-amber-500/60">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-amber-400">
                        <FontAwesomeIcon
                          icon={faBuilding}
                          className="h-5 w-5"
                          fixedWidth
                        />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-semibold">
                          Commercial &amp; Residential
                        </h3>
                        <p className="mt-2 text-slate-200/90">
                          Large or small, condo or mansion, fixer-upper or
                          luxury, we can help with all of it.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="group rounded-2xl bg-slate-800/80 p-4 shadow-sm ring-1 ring-slate-800/60 transition-transform transition-colors duration-300 hover:-translate-y-1 hover:bg-slate-800 hover:shadow-lg hover:ring-amber-500/60">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-amber-400">
                        <FontAwesomeIcon
                          icon={faHandshake}
                          className="h-5 w-5"
                          fixedWidth
                        />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-semibold">Rely on Expertise</h3>
                        <p className="mt-2 text-slate-200/90">
                          From affordability to loan options, we connect you
                          with the right people to get the answers you need.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="group rounded-2xl bg-slate-800/80 p-4 shadow-sm ring-1 ring-slate-800/60 transition-transform transition-colors duration-300 hover:-translate-y-1 hover:bg-slate-800 hover:shadow-lg hover:ring-amber-500/60">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-amber-400">
                        <FontAwesomeIcon
                          icon={faCompass}
                          className="h-5 w-5"
                          fixedWidth
                        />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-semibold">Guide to Buyers</h3>
                        <p className="mt-2 text-slate-200/90">
                          Market analysis, upgrades lists, contractors on speed
                          dial, &amp; more.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
                  CONNECT &amp; REVIEWS
                </h3>
                <p className="text-sm text-slate-200">
                  Stay connected with Marci and read reviews across the
                  platforms you already use.
                </p>
                <div className="overflow-hidden rounded-2xl bg-slate-800/40 shadow-sm ring-1 ring-slate-800/60">
                  <img
                    src={communityImage}
                    alt="Neighborhood streets and homes around Pahrump"
                    className="h-28 w-full object-cover sm:h-32 md:h-36"
                  />
                </div>
                <div className="mt-4 flex flex-wrap gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.href}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-800 text-slate-100 shadow-sm ring-1 ring-slate-700/60 transition hover:bg-amber-500 hover:text-white hover:ring-amber-300"
                    >
                      <SocialIcon kind={social.kind} />
                    </a>
                  ))}
                </div>
                <div className="mt-6 space-y-3 text-xs text-slate-300/90">
                  <span className="inline-block rounded bg-slate-800/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-300">
                    Trusted partners
                  </span>
                  <div className="flex flex-wrap items-center gap-4">
                    <img
                      src={ridgeLogo}
                      alt="The Ridge Realty Group logo"
                      className="h-16 w-auto object-contain drop-shadow-sm"
                    />
                    <img
                      src={realtorLogo}
                      alt="REALTOR logo"
                      className="h-12 w-auto object-contain drop-shadow-sm"
                    />
                    <img
                      src={pahrumpValleyLogo}
                      alt="Pahrump Valley logo"
                      className="h-12 w-auto object-contain drop-shadow-sm"
                    />
                    <img
                      src={equalHousingLogo}
                      alt="Equal Housing Opportunity logo"
                      className="h-12 w-auto object-contain drop-shadow-sm brightness-0 invert"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact & office hours */}
        <section id="contact" className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">
                  CALL OR VISIT
                </p>
                <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-slate-900">
                  Call or Visit
                </h2>
              </div>
            </div>
            <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
              <form
                className="space-y-4 rounded-3xl bg-stone-50 p-6 shadow-sm ring-1 ring-slate-900/5"
                onSubmit={(event) => event.preventDefault()}
              >
                <h3 className="text-sm font-semibold text-slate-900">
                  Get a call back today
                </h3>
                <p className="text-xs text-slate-600">
                  Response within 1 business hour during office hours.
                </p>
                <div className="space-y-1 text-sm">
                  <label
                    htmlFor="name"
                    className="block font-medium text-slate-900"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="block w-full rounded-lg border-slate-300 bg-white text-sm text-slate-900 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                  />
                </div>
                <div className="space-y-1 text-sm">
                  <label
                    htmlFor="email"
                    className="block font-medium text-slate-900"
                  >
                    Email*
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="block w-full rounded-lg border-slate-300 bg-white text-sm text-slate-900 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                  />
                </div>
                <div className="space-y-1 text-sm">
                  <label
                    htmlFor="phone"
                    className="block font-medium text-slate-900"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="block w-full rounded-lg border-slate-300 bg-white text-sm text-slate-900 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                  />
                </div>
                <div className="space-y-1 text-sm">
                  <label
                    htmlFor="intent"
                    className="block font-medium text-slate-900"
                  >
                    I&apos;m interested in
                  </label>
                  <select
                    id="intent"
                    name="intent"
                    className="block w-full rounded-lg border-slate-300 bg-white text-sm text-slate-900 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                  >
                    <option>Buying</option>
                    <option>Selling</option>
                    <option>Investing</option>
                    <option>Just browsing</option>
                  </select>
                </div>
                <div className="space-y-1 text-sm">
                  <label
                    htmlFor="message"
                    className="block font-medium text-slate-900"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full rounded-lg border-slate-300 bg-white text-sm text-slate-900 shadow-sm focus:border-amber-500 focus:ring-amber-500"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-full bg-amber-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-amber-700"
                >
                  Request a callback
                </button>
                <p className="mt-2 text-xs text-slate-500">
                  This site is protected by reCAPTCHA and the Google{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4"
                  >
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://policies.google.com/terms"
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4"
                  >
                    Terms of Service
                  </a>{" "}
                  apply.
                </p>
              </form>
              <div className="space-y-6 text-sm text-slate-700">
                <div className="space-y-2">
                  <a
                    href="https://wa.me/14259412560"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-emerald-700"
                  >
                    Message us on WhatsApp
                  </a>
                  <h3 className="text-base font-semibold text-slate-900">
                    Marci Metzger - THE RIDGE REALTY GROUP
                  </h3>
                  <div className="mt-2 space-y-1">
                    <div className="flex items-start gap-2">
                      <span className="mt-0.5 text-amber-700">
                        <SmallIcon kind="mapPin" />
                      </span>
                      <p>
                        3190 HW-160, Suite F, Pahrump, Nevada 89048, United
                        States
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-amber-700">
                        <SmallIcon kind="phone" />
                      </span>
                      <a
                        href="tel:2069196886"
                        className="font-semibold text-amber-700"
                      >
                        (206) 919-6886
                      </a>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-amber-700">
                        <SmallIcon kind="clock" />
                      </span>
                      <h3 className="text-base font-semibold text-slate-900">
                        Office Hours
                      </h3>
                    </div>
                    <p className="text-sm">Open today 08:00 am – 07:00 pm</p>
                    <p className="text-sm">Open daily 8:00 am - 7:00 pm</p>
                    <p className="text-sm">
                      Appointments outside office hours available upon request.
                      Just call!
                    </p>
                  </div>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=3190+HW-160,+Suite+F,+Pahrump,+Nevada+89048"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-xs font-semibold text-slate-900 hover:border-amber-600 hover:text-amber-700"
                  >
                    <span className="text-amber-700">
                      <SmallIcon kind="mapPin" />
                    </span>
                    <span>Get directions</span>
                  </a>
                  <div className="overflow-hidden rounded-2xl bg-slate-100 shadow-sm ring-1 ring-slate-900/5">
                    <iframe
                      title="Map to Marci Metzger - The Ridge Realty Group"
                      src="https://www.google.com/maps?q=3190+HW-160,+Suite+F,+Pahrump,+Nevada+89048&output=embed"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="h-56 w-full border-0"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-900 text-slate-100">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <img
                src={logoSrc}
                alt="Marci Metzger Homes logo"
                className="h-8 w-auto brightness-0 invert"
              />
              <div className="leading-tight">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-amber-300">
                  The Ridge Realty Group
                </p>
                <p className="text-sm font-semibold">Marci Metzger Homes</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 text-xs">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-slate-100 ring-1 ring-slate-700/70 transition hover:bg-amber-500 hover:text-white hover:ring-amber-300"
                >
                  <SocialIcon kind={social.kind} />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-6 border-t border-slate-800 pt-4 text-xs text-slate-400">
            <p>Copyright © 2025 Marci METZGER Homes - All Rights Reserved</p>
            <p className="mt-2 flex items-center gap-1">
              <span>Powered by</span>
              <a
                href="https://www.godaddy.com/websites/website-builder?isc=pwugc&utm_source=wsb&utm_medium=applications&utm_campaign=en-us_corp_applications_base"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-amber-200 underline-offset-4 hover:underline"
              >
                John Benjie Siena
              </a>
            </p>
          </div>
        </div>
      </footer>

      {activeImageIndex !== null && (
        <div className="fixed inset-0 z-50 bg-slate-900/80 p-4">
          <div
            className="absolute inset-0 cursor-pointer"
            onClick={closeLightbox}
            aria-hidden="true"
          />
          <div className="relative z-10 flex h-full items-center justify-center">
            <div className="w-full max-w-4xl">
              <div className="overflow-hidden rounded-3xl bg-black/80 shadow-2xl">
                <img
                  src={galleryImages[activeImageIndex].src}
                  alt="Gallery image from Marci Metzger Homes"
                  className="max-h-[70vh] w-full object-contain"
                />
              </div>
              <div className="mt-4 flex items-center justify-between gap-4 text-xs text-slate-100">
                <button
                  type="button"
                  onClick={closeLightbox}
                  className="rounded-full border border-slate-500 px-4 py-2 font-semibold hover:border-amber-400 hover:text-amber-200"
                >
                  Close
                </button>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={showPreviousImage}
                    disabled={activeImageIndex === 0}
                    className="rounded-full border border-slate-500 px-3 py-2 font-semibold hover:border-amber-400 hover:text-amber-200 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    onClick={showNextImage}
                    disabled={activeImageIndex === galleryImages.length - 1}
                    className="rounded-full border border-slate-500 px-3 py-2 font-semibold hover:border-amber-400 hover:text-amber-200 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
