import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Irrigation Startup & Winterization Metro Atlanta GA | Atlanta Irrigation",
  description:
    "Spring irrigation startup and fall winterization across metro Atlanta. Full zone inspection, pressure testing, controller programming, and backflow certification. Licensed, locally owned.",
};

const seasonalSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Seasonal Irrigation Startup & Winterization",
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
    "Spring irrigation activation and fall winterization service for residential and rural properties across metro Atlanta, GA.",
};

export default function SeasonalStartupPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seasonalSchema) }}
      />

      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link href="/">Home</Link> › <Link href="/services">Services</Link> ›{" "}
            <span>Seasonal Startup & Winterization</span>
          </nav>
          <h1>Irrigation Startup & Winterization in Metro Atlanta, GA</h1>
          <p>
            Spring activation done right. Fall shutdown that actually protects your system.
          </p>
          <div className="hero-ctas">
            <a href="tel:+17702495417" className="btn-primary">
              Call (770) 249-5417
            </a>
            <Link href="/contact" className="btn-secondary">
              Schedule Service
            </Link>
          </div>
        </div>
      </section>

      <section className="section-service-intro">
        <div className="container service-intro-layout">
          <div className="service-intro-main">

            <h2>Spring Startup</h2>
            <p>
              A spring activation visit is more than turning the water back on and walking away. A system
              that sat dormant through a Georgia winter has potentially developed problems — freeze damage
              to the backflow preventer, heads that shifted or sank during frost heave, a controller that
              lost its programming during a power outage, or fittings that cracked when water expanded
              in an incompletely drained line. Finding these problems at startup, before the irrigation
              season begins, means fixing them before they damage your landscape or waste thousands of
              gallons of water running into a zone you think is working.
            </p>
            <p>
              Our spring startup visit includes turning the system on zone by zone, physically inspecting
              every head for proper rotation, arc, and pop-up height, testing the backflow preventer,
              verifying pressure at the manifold, reviewing the controller program, and adjusting runtimes
              for the season ahead. If we find problems — and we frequently do on systems that have been
              through a hard winter — we document them and discuss repair options before doing any
              additional work.
            </p>
            <p>
              We also review current outdoor watering restrictions at every spring startup visit. Georgia's
              statewide watering schedule, combined with the drought-response restrictions that individual
              county water authorities implement in dry years, creates a compliance picture that changes
              year to year. We program your controller to comply with current restrictions at the time of
              service — odd/even day schedules, day-of-week restrictions, and time-of-day windows all get
              factored in.
            </p>

            <h3>What's Included in Spring Startup</h3>
            <ul className="service-list">
              <li>Zone-by-zone system activation</li>
              <li>Full head inspection — rotation, arc, pop-up height, coverage</li>
              <li>Backflow preventer inspection and pressure test</li>
              <li>Manifold pressure verification</li>
              <li>Controller program review and runtime adjustment</li>
              <li>Current watering restriction compliance check</li>
              <li>Written summary of any issues found</li>
            </ul>

            <h2>Fall Winterization</h2>
            <p>
              Metro Atlanta's winters are mild enough that many homeowners skip irrigation winterization
              entirely — and then spend the following spring dealing with cracked backflow preventers and
              split lateral lines that froze during a hard cold snap in January. Georgia does get hard
              freezes. They don't happen every year, but when they do, an irrigation system with water
              standing in the lines is at real risk.
            </p>
            <p>
              The most vulnerable component is the backflow preventer, which typically sits above grade
              and is exposed to ambient air temperature. A cracked backflow preventer from a freeze event
              is a $200–$400 repair that a $75 winterization visit prevents entirely. Lateral lines buried
              shallowly — which is common on older installs and rural properties with longer mainline runs
              — are the next most vulnerable, particularly any above-grade segments near valves or
              connection points.
            </p>
            <p>
              Our fall winterization visit shuts down the system, drains the mainline and lateral lines
              where possible, insulates the backflow preventer, and sets the controller to off or rain
              delay mode. We note any above-grade pipe segments that are freeze-vulnerable and give
              recommendations for additional insulation where warranted.
            </p>
            <p>
              We time our fall shutdown visits to the actual forecast rather than a calendar date. In a
              warm fall, we push the visit later to let your system run through the extended season. In a
              year where a hard freeze is forecast early, we move quickly. Customers on our annual service
              agreement get proactive scheduling — we reach out when the timing is right rather than
              waiting for you to call.
            </p>

            <h3>What's Included in Fall Winterization</h3>
            <ul className="service-list">
              <li>Full system shutdown</li>
              <li>Mainline and lateral drain-down</li>
              <li>Backflow preventer insulation</li>
              <li>Controller shutoff or rain delay programming</li>
              <li>Freeze vulnerability assessment for exposed pipe</li>
              <li>Written service summary</li>
            </ul>

            <h2>Annual Service Agreements</h2>
            <p>
              Our annual service agreement covers spring startup, fall winterization, and a mid-season
              check visit in a single package at a discounted rate. Agreement customers receive priority
              scheduling, proactive outreach when service windows open, and a consistent service history
              that makes diagnosing any system issues faster and easier over time. If you'd rather not
              think about your irrigation system — just know it's being cared for — an annual agreement
              is the right fit.
            </p>

            <h2>Metro Atlanta's Seasonal Window</h2>
            <p>
              Spring startup in metro Atlanta is typically mid-March through early April, depending on the
              year. Fall shutdown windows vary more — in warm years, systems can run productively into
              November, while an early cold snap can push the shutdown window into late October. We serve
              customers from Carroll County in the west to Gwinnett and Newton in the east, and weather
              patterns vary enough across that footprint that we don't use a single date for the entire
              service area. We schedule based on the forecast for your specific location.
            </p>
          </div>

          <div className="service-sidebar">
            <div className="sidebar-card">
              <h3>Schedule Seasonal Service</h3>
              <p>Spring and fall scheduling fills quickly. Call early to secure your preferred window.</p>
              <a href="tel:+17702495417" className="btn-primary">Call (770) 249-5417</a>
              <Link href="/contact" className="btn-secondary" style={{ marginTop: "12px" }}>
                Request Online
              </Link>
            </div>
            <div className="sidebar-card">
              <h3>Annual Agreement</h3>
              <p>Spring startup + fall shutdown + mid-season check. Priority scheduling. Single annual invoice.</p>
              <Link href="/contact" className="county-link">Ask about annual agreements →</Link>
            </div>
            <div className="sidebar-card">
              <h3>Related Services</h3>
              <Link href="/services/irrigation-installation" className="sidebar-service-link">Irrigation Installation →</Link>
              <Link href="/services/sprinkler-repair" className="sidebar-service-link">Sprinkler Repair & Diagnostics →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-faqs">
        <div className="container">
          <h2>Common Questions About Seasonal Service</h2>
          <div className="faq-list">
            {[
              {
                q: "Does metro Atlanta really need irrigation winterization?",
                a: "Yes — not every year, but often enough to matter. Georgia gets hard freezes, and a backflow preventer left exposed through a night at 20°F is a real risk. The cost of winterization is a fraction of the cost of the repair it prevents.",
              },
              {
                q: "When should I schedule spring startup?",
                a: "Mid-March through early April is the typical window for metro Atlanta. The goal is to have the system running and calibrated before your landscape enters its peak growth phase and before temperatures push into consistent summer heat.",
              },
              {
                q: "My system ran all winter without issues. Do I still need a spring visit?",
                a: "A spring visit isn't just about freeze damage — it's about verifying the system is performing correctly before peak demand season and updating the controller program for current watering restrictions. Most systems that 'ran fine all winter' turn up at least one issue during a proper spring inspection.",
              },
              {
                q: "What is a backflow preventer and why does it need testing?",
                a: "A backflow preventer is a device that prevents irrigation water from flowing back into your municipal water supply. Most Georgia water authorities require annual testing by a licensed tester. We're licensed to test and certify backflow preventers and include this as part of our spring startup service.",
              },
              {
                q: "What's included in the annual service agreement?",
                a: "Spring startup, fall winterization, and a mid-season check visit. Agreement customers receive priority scheduling, proactive seasonal outreach, and a discounted rate versus scheduling each visit individually.",
              },
              {
                q: "Do you serve my county for seasonal service?",
                a: "We provide seasonal service throughout our full service area — Fayette, Coweta, Henry, Clayton, Spalding, Douglas, Carroll, Cobb, Fulton, DeKalb, Gwinnett, Newton, and Rockdale counties.",
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
          <h2>Ready to Schedule Seasonal Service?</h2>
          <p>Spring and fall windows fill up. Call early to get your preferred date.</p>
          <div className="cta-btns">
            <a href="tel:+17702495417" className="btn-primary">Call (770) 249-5417</a>
            <Link href="/contact" className="btn-secondary">Schedule Online</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
