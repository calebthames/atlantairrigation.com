import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Irrigation Installation Metro Atlanta GA | Atlanta Irrigation",
  description:
    "Professional irrigation system installation across metro Atlanta. We design every system around your property's specific soil, grade, water pressure, and plant material. Licensed, locally owned, free estimates.",
};

const installSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Irrigation System Installation",
  provider: {
    "@type": "LocalBusiness",
    name: "Atlanta Irrigation",
    telephone: "+17702495417",
    address: {
      "@type": "PostalAddress",
      streetAddress: "516 McDonough Road",
      addressLocality: "Fayetteville",
      addressRegion: "GA",
      postalCode: "30214",
      addressCountry: "US",
    },
  },
  areaServed: { "@type": "State", name: "Georgia" },
  description:
    "Full irrigation system design and installation for residential and rural properties across metro Atlanta, GA.",
};

export default function IrrigationInstallationPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(installSchema) }}
      />

      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link href="/">Home</Link> › <Link href="/services">Services</Link> ›{" "}
            <span>Irrigation Installation</span>
          </nav>
          <h1>Irrigation System Installation in Metro Atlanta, GA</h1>
          <p>
            Designed for your property. Built to last. No templates, no shortcuts.
          </p>
          <div className="hero-ctas">
            <a href="tel:+17702495417" className="btn-primary">
              Call (770) 249-5417
            </a>
            <Link href="/contact" className="btn-secondary">
              Free Estimate
            </Link>
          </div>
        </div>
      </section>

      <section className="section-service-intro">
        <div className="container service-intro-layout">
          <div className="service-intro-main">
            <h2>What a Proper Irrigation Install Actually Involves</h2>
            <p>
              Most homeowners have had the experience of calling a contractor who shows up, pulls out a
              standard parts list, and installs the same system they put in the last three houses. It looks
              fine on installation day and underperforms for years afterward. That's not how we work.
            </p>
            <p>
              Every Atlanta Irrigation installation starts with a site assessment — not a sales call. We
              walk the property, measure the water pressure at the point of connection, assess the soil
              type and any grade changes, and document the existing plant material before we spec a single
              component. Metro Atlanta's red clay soil, which dominates the region from Fayette County
              through Gwinnett, has a notoriously low infiltration rate. Water applied faster than the soil
              can absorb it runs off — wasting water, creating erosion, and leaving dry spots despite the
              system running. Getting the precipitation rate right from the start is the difference between
              a system that works and one that looks like it works.
            </p>
            <p>
              From the site assessment, we design a zone layout that separates turf from ornamental beds,
              shaded areas from sunny ones, and slopes from flat ground. Each zone runs at a precipitation
              rate matched to what the soil in that area can accept. We select head types based on the
              specific coverage geometry required — rotary heads for large turf areas, fixed spray for
              tight beds, drip emitters for ornamental plantings where overhead moisture creates problems.
              We size the mainline and lateral pipe for the pressure and flow the system actually requires,
              not for the minimum that would technically work.
            </p>
            <p>
              Installation is done by our own licensed technicians. We trench, install, connect, and
              commission the system in a single visit for most residential properties. Before we leave, we
              walk you through the controller, run every zone together, and verify head-to-head coverage
              across the full property. You receive a written zone map and a programming guide specific to
              your system.
            </p>

            <h2>What's Included in Every Installation</h2>
            <ul className="service-list">
              <li>On-site assessment and water pressure test</li>
              <li>Custom zone layout designed to your property</li>
              <li>Licensed installation by Atlanta Irrigation technicians</li>
              <li>Backflow preventer installation and certification</li>
              <li>Smart controller installation (Rachio, Hunter Hydrawise, or Rain Bird)</li>
              <li>Full system commissioning and zone-by-zone walkthrough</li>
              <li>Written zone map and programming documentation</li>
              <li>Manufacturer warranty on all components</li>
            </ul>

            <h2>Properties We Install For</h2>
            <p>
              We install irrigation on residential properties of all sizes — from quarter-acre suburban
              lots in Kennesaw to 10-acre rural properties in Brooks and Turin. We work alongside
              landscapers and builders on new construction installs, and we design from scratch for
              existing properties that have never had irrigation. We also handle commercial irrigation
              for light commercial properties and HOA common areas on a case-by-case basis.
            </p>
            <p>
              If your property is on a private well rather than municipal water, we start with a flow
              test before designing anything. Well-fed systems require engineering that's meaningfully
              different from municipal connections — oversizing a well-fed system is one of the most
              common and expensive irrigation mistakes we see in rural parts of our service area.
            </p>

            <h2>Smart Controllers — Standard on Every Install</h2>
            <p>
              Every system we install includes a smart controller as standard. Rachio, Hunter Hydrawise,
              and Rain Bird ESP-TM2 are our go-to platforms — all three connect to local weather data and
              automatically adjust your runtime schedule based on recent rainfall, temperature, and
              evapotranspiration rates. A properly configured smart controller typically reduces outdoor
              water usage by 30–50% compared to a fixed-schedule controller, and it eliminates the
              situation where your system runs during a rainstorm. Georgia's statewide outdoor watering
              restrictions and the drought-response restrictions implemented by individual county water
              authorities make smart scheduling not just convenient but practically necessary.
            </p>
          </div>

          <div className="service-sidebar">
            <div className="sidebar-card">
              <h3>Get a Free Estimate</h3>
              <p>Free on-site estimates for all new installation. Most properties assessed within 48 hours.</p>
              <a href="tel:+17702495417" className="btn-primary">Call (770) 249-5417</a>
              <Link href="/contact" className="btn-secondary" style={{ marginTop: "12px" }}>
                Request Online
              </Link>
            </div>
            <div className="sidebar-card">
              <h3>Service Area</h3>
              <p>We install throughout metro Atlanta across Fayette, Coweta, Henry, Clayton, Spalding, Douglas, Carroll, Cobb, Fulton, DeKalb, Gwinnett, Newton, and Rockdale counties.</p>
              <Link href="/areas-served" className="county-link">View all service areas →</Link>
            </div>
            <div className="sidebar-card">
              <h3>Related Services</h3>
              <Link href="/services/sprinkler-repair" className="sidebar-service-link">Sprinkler Repair & Diagnostics →</Link>
              <Link href="/services/seasonal-startup-winterization" className="sidebar-service-link">Seasonal Startup & Winterization →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-faqs">
        <div className="container">
          <h2>Common Questions About Irrigation Installation</h2>
          <div className="faq-list">
            {[
              {
                q: "How long does a typical residential installation take?",
                a: "Most standard residential installs in metro Atlanta are completed in a single day. Larger properties — typically over an acre or requiring more than 8 zones — may extend to a second day. We'll give you a realistic timeline at your estimate.",
              },
              {
                q: "When is the best time to install irrigation?",
                a: "The best time is at sod installation or immediately after, so new turf establishes with consistent moisture. Outside of new construction, spring and fall are the ideal installation windows — soil is workable, temperatures are moderate, and we can commission the system before peak demand season.",
              },
              {
                q: "Do I need a permit to install irrigation in Georgia?",
                a: "Requirements vary by county and municipality. Many jurisdictions in metro Atlanta require a permit and licensed contractor for new irrigation installation. We handle the permitting process where required as part of our install.",
              },
              {
                q: "What brands do you install?",
                a: "We install Hunter, Rain Bird, and Orbit systems depending on the application. For controllers, we default to Rachio or Hunter Hydrawise smart platforms on all new installs.",
              },
              {
                q: "Can you install on a property with significant slope?",
                a: "Yes. Sloped properties require pressure-compensating heads and careful zone design to achieve uniform coverage — standard heads on a slope will deliver too much water at the bottom and too little at the top. Slope irrigation is something we design for specifically.",
              },
              {
                q: "What's included in the free estimate?",
                a: "An on-site visit where we walk the property, test your water pressure, assess soil conditions and existing landscaping, and give you a written scope and cost before any commitment.",
              },
            ].map((faq, i) => (
              <details key={i} className="faq-item">
                <summary className="faq-question">{faq.q}</summary>
                <p className="faq-answer">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section-cta">
        <div className="container">
          <h2>Ready to Install? Let's Talk.</h2>
          <p>Free on-site estimates. Most properties assessed within 48 hours of your call.</p>
          <div className="cta-btns">
            <a href="tel:+17702495417" className="btn-primary">Call (770) 249-5417</a>
            <Link href="/contact" className="btn-secondary">Request an Estimate Online</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
