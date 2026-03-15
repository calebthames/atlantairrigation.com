import Link from "next/link";
import { counties } from "@/lib/locations";

export const metadata = {
  title: "Atlanta Irrigation | Licensed Irrigation Company Metro Atlanta GA",
  description:
    "Atlanta Irrigation serves metro Atlanta with professional irrigation installation, sprinkler repair, and seasonal startup & winterization. Serving counties across the south, west, and north metro. Locally owned and licensed.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Atlanta Irrigation",
  url: "https://atlantairrigation.com",
  telephone: "+17703159814",
  email: "info@atlantairrigation.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "516 McDonough Road",
    addressLocality: "Fayetteville",
    addressRegion: "GA",
    postalCode: "30214",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 33.4487,
    longitude: -84.4549,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:00",
      closes: "18:00",
    },
  ],
  areaServed: [
    "Fayette County, GA",
    "Coweta County, GA",
    "Henry County, GA",
    "Clayton County, GA",
    "Spalding County, GA",
    "Douglas County, GA",
    "Carroll County, GA",
    "Cobb County, GA",
    "Fulton County, GA",
    "DeKalb County, GA",
    "Gwinnett County, GA",
    "Newton County, GA",
    "Rockdale County, GA",
  ],
  serviceType: [
    "Irrigation System Installation",
    "Sprinkler Repair",
    "Irrigation Diagnostics",
    "Seasonal Irrigation Startup",
    "Irrigation Winterization",
    "Backflow Preventer Testing",
    "Smart Controller Installation",
  ],
  priceRange: "$$",
  // aggregateRating will be added once reviews are established:
  // "aggregateRating": {
  //   "@type": "AggregateRating",
  //   "ratingValue": "5.0",
  //   "reviewCount": "24"
  // }
};

const homepageFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What areas does Atlanta Irrigation serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Atlanta Irrigation serves metro Atlanta across 13 counties: Fayette, Coweta, Henry, Clayton, Spalding, Douglas, Carroll, Cobb, Fulton, DeKalb, Gwinnett, Newton, and Rockdale.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer free estimates for irrigation installation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We offer free on-site estimates for all new irrigation installation throughout our service area. Most properties can be assessed within 48 hours of your call.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can you get to me for a sprinkler repair?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We typically schedule repair calls within a few business days throughout metro Atlanta. We carry common parts on every truck and complete most repairs the same day as the diagnostic visit.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to winterize my irrigation system in Georgia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Georgia does get hard freezes, and backflow preventers left exposed are at real risk. A fall winterization visit costs far less than the freeze damage repairs it prevents.",
      },
    },
    {
      "@type": "Question",
      name: "Are you licensed and insured?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Atlanta Irrigation is fully licensed and insured. All technicians on your property are trained to our standards and covered.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageFaqSchema) }}
      />

      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-eyebrow">Metro Atlanta, Georgia</p>
          <h1>Irrigation That Actually Works</h1>
          <p className="hero-sub">
            Installation, repair, and seasonal service for residential and rural properties
            across metro Atlanta. Locally owned. Licensed. Free estimates.
          </p>
          <div className="hero-ctas">
            <a href="tel:+17703159814" className="btn-primary">Call (770) 315-9814</a>
            <Link href="/contact" className="btn-secondary">Get a Free Estimate</Link>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="hero-circle" />
        </div>
      </section>

      {/* Why Us */}
      <section className="section-why">
        <div className="container">
          <h2>Why Atlanta Irrigation</h2>
          <div className="why-grid">
            <div className="why-card">
              <span className="why-icon">◎</span>
              <h3>Licensed & Insured</h3>
              <p>Every technician on your property is licensed, insured, and trained to our standards. Your property and your landscape are protected.</p>
            </div>
            <div className="why-card">
              <span className="why-icon">◎</span>
              <h3>Local Knowledge</h3>
              <p>We know metro Atlanta's soil profiles, water authorities, and the specific landscape pressures that come with each community we serve.</p>
            </div>
            <div className="why-card">
              <span className="why-icon">◎</span>
              <h3>Honest Assessments</h3>
              <p>We'll tell you what actually needs fixing — not everything we can sell you. Most repair calls don't need a new system.</p>
            </div>
            <div className="why-card">
              <span className="why-icon">◎</span>
              <h3>Same-Day Repairs</h3>
              <p>We carry common parts on every truck. Most diagnostic visits end with a completed repair, not a second appointment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-services">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>New Irrigation Installation</h3>
              <p>
                Full system design and installation for new construction, newly landscaped properties,
                and homes that have never had irrigation. We design around your lot's specific soil,
                grade, water pressure, and plant material — not a template.
              </p>
              <Link href="/services/irrigation-installation" className="service-card-link">Learn more →</Link>
            </div>
            <div className="service-card">
              <h3>Sprinkler Repair &amp; Diagnostics</h3>
              <p>
                From a single broken head to a full system that won't run, we diagnose and fix
                irrigation problems efficiently. Most repairs are completed the same day we diagnose them.
              </p>
              <Link href="/services/sprinkler-repair" className="service-card-link">Learn more →</Link>
            </div>
            <div className="service-card">
              <h3>Seasonal Startup &amp; Winterization</h3>
              <p>
                Spring activation includes a full zone inspection, pressure test, and controller
                reprogramming. Fall shutdown protects your backflow preventer and lateral lines
                from freeze damage.
              </p>
              <Link href="/services/seasonal-startup-winterization" className="service-card-link">Learn more →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="section-areas">
        <div className="container">
          <h2>Areas We Serve</h2>
          <p className="section-sub">
            We cover metro Atlanta — same crew, same standards, every community.
          </p>
          <div className="counties-grid">
            {counties.map((county) => (
              <div key={county.slug} className="county-block">
                <h3>
                  <Link href={`/areas-served/${county.slug}`}>{county.name}</Link>
                </h3>
                <ul>
                  {county.cities.map((city) => (
                    <li key={city.slug}>
                      <Link href={`/areas-served/${county.slug}/${city.slug}`}>
                        {city.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-faq-home">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            {homepageFaqSchema.mainEntity.map((faq, i) => (
              <details key={i} className="faq-item">
                <summary className="faq-question">{faq.name}</summary>
                <p className="faq-answer">{faq.acceptedAnswer.text}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-cta">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Free estimates for installation. Same-week scheduling for most repair calls.</p>
          <div className="cta-btns">
            <a href="tel:+17703159814" className="btn-primary">Call (770) 315-9814</a>
            <Link href="/contact" className="btn-secondary">Request an Estimate Online</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
