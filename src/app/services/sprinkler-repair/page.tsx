import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sprinkler Repair Metro Atlanta GA | Atlanta Irrigation",
  description:
    "Professional sprinkler repair and irrigation diagnostics across metro Atlanta. Same-day repairs on most calls. We carry common parts on every truck. Licensed, locally owned.",
};

const repairSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Sprinkler Repair & Irrigation Diagnostics",
  provider: {
    "@type": "LocalBusiness",
    name: "Atlanta Irrigation",
    telephone: "+17703159814",
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
    "Sprinkler repair, irrigation diagnostics, and system troubleshooting for residential and commercial properties across metro Atlanta, GA.",
};

export default function SprinklerRepairPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(repairSchema) }}
      />

      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link href="/">Home</Link> › <Link href="/services">Services</Link> ›{" "}
            <span>Sprinkler Repair</span>
          </nav>
          <h1>Sprinkler Repair & Irrigation Diagnostics in Metro Atlanta, GA</h1>
          <p>
            Accurate diagnosis. Same-day repairs on most calls. No guesswork, no upselling.
          </p>
          <div className="hero-ctas">
            <a href="tel:+17703159814" className="btn-primary">
              Call (770) 315-9814
            </a>
            <Link href="/contact" className="btn-secondary">
              Schedule a Repair
            </Link>
          </div>
        </div>
      </section>

      <section className="section-service-intro">
        <div className="container service-intro-layout">
          <div className="service-intro-main">
            <h2>How We Approach Irrigation Repairs</h2>
            <p>
              The most common irrigation repair mistake isn't a bad fix — it's fixing the wrong thing.
              A zone that won't run gets a new solenoid valve when the real problem is a severed wire
              twelve feet away. A head that won't pop gets replaced when the issue is a failed valve
              diaphragm upstream. We diagnose from the water source forward, not from the symptom
              backward, because that's the only way to fix problems that actually stay fixed.
            </p>
            <p>
              Our repair process starts with a full diagnostic. We run every zone, observe every head,
              test pressure at the manifold, and check the controller program before we touch a single
              component. Most problems become clear during the diagnostic — a dead zone maps to a specific
              valve, an underperforming area maps to a specific head or pressure issue, a system that
              runs when it shouldn't maps to a controller or valve problem. We explain what we find in
              plain language before we recommend anything, and we tell you honestly whether a repair
              makes economic sense or whether you're approaching the point where a targeted replacement
              is the right call.
            </p>
            <p>
              We carry the most common replacement parts for Hunter, Rain Bird, Orbit, and Rainmaster
              systems on every truck — solenoid valves, diaphragms, pop-up heads in standard sizes,
              swing joints, controller transformers, and common controller boards. Most straightforward
              repairs are completed the same visit as the diagnostic. If we need a part we don't have
              on the truck, we tell you upfront and schedule the repair efficiently.
            </p>

            <h2>Common Repair Scenarios We Handle</h2>

            <div className="repair-scenarios">
              <div className="scenario">
                <h3>Zone Won't Run</h3>
                <p>
                  The most common repair call we receive. A zone that won't activate is almost always
                  a failed solenoid, a broken wire between the controller and the valve, or a damaged
                  valve diaphragm. Occasionally it's a controller zone output failure. We diagnose which
                  it is with a multimeter before ordering parts — the fix varies significantly depending
                  on the cause.
                </p>
              </div>
              <div className="scenario">
                <h3>Zone Won't Shut Off</h3>
                <p>
                  A zone that runs continuously after the controller shuts it off almost always has a
                  failed valve diaphragm that's stuck open, or debris lodged in the valve seat preventing
                  it from sealing. We disassemble the valve, clear any debris, and replace the diaphragm.
                  If the valve body is cracked or corroded, we replace the full valve.
                </p>
              </div>
              <div className="scenario">
                <h3>Broken or Damaged Heads</h3>
                <p>
                  Head strikes from mowers and string trimmers are the most common physical damage we
                  repair. We carry standard pop-up heads for most rotor and spray applications and can
                  replace damaged heads quickly. We also address heads that have settled below grade over
                  years of lawn maintenance — a head that's flush with or below the turf line won't
                  distribute water correctly regardless of its condition.
                </p>
              </div>
              <div className="scenario">
                <h3>Poor Coverage or Dry Spots</h3>
                <p>
                  Dry spots that persist despite the system running are usually caused by one of three
                  things: a clogged or misaligned head, a pressure problem reducing throw distance, or a
                  zone layout that never properly covered that area. We diagnose which and give you an
                  honest answer about whether it's a simple adjustment or a design issue that requires
                  additional heads.
                </p>
              </div>
              <div className="scenario">
                <h3>Controller Problems</h3>
                <p>
                  Controllers fail in several ways — transformer burnout, programming loss after power
                  outages, zone output failure, and display failures are the most common. We assess
                  whether the controller is worth repairing or should be replaced. Given the cost
                  differential between repairing a 15-year-old mechanical timer and replacing it with a
                  modern smart controller, replacement usually wins on both economics and performance.
                </p>
              </div>
              <div className="scenario">
                <h3>Low Pressure Throughout System</h3>
                <p>
                  System-wide low pressure usually originates upstream of the irrigation system — a
                  partially closed backflow preventer, a failed pressure regulator, or a municipal
                  supply issue. We test pressure at the point of connection and work upstream from there
                  rather than assuming the problem is at the head level.
                </p>
              </div>
              <div className="scenario">
                <h3>Backflow Preventer Issues</h3>
                <p>
                  Backflow preventers are required on all irrigation systems connected to municipal water
                  and must be tested annually in most Georgia jurisdictions. We're licensed to test and
                  certify backflow preventers, and we repair or replace failed units. Freeze damage to
                  backflow preventers — cracked bodies and failed check valves — is the most common
                  backflow repair we do following hard winter weather.
                </p>
              </div>
              <div className="scenario">
                <h3>Aging System Assessment</h3>
                <p>
                  If your system hasn't had professional service in years and you're not sure of its
                  condition, we offer a full system audit — running every zone, checking every head,
                  testing the backflow, and reviewing the controller program. You receive a written
                  summary of the system's condition and clear recommendations for what needs attention,
                  in what order, and at what approximate cost.
                </p>
              </div>
            </div>

            <h2>Builder-Installed Systems</h2>
            <p>
              One of the most common repair calls we receive in metro Atlanta's newer communities is from
              homeowners whose irrigation system has never worked correctly since they moved in. Builder-
              installed systems are frequently designed to a budget — undersized mainlines, too few zones
              for the lot, minimum-spec heads, and controllers that were never programmed after installation.
              These systems aren't necessarily beyond repair, but they often need more than a single broken
              head fixed. We assess builder-installed systems honestly and tell you what it will take to
              bring them to actual working order.
            </p>
          </div>

          <div className="service-sidebar">
            <div className="sidebar-card">
              <h3>Schedule a Repair</h3>
              <p>Same-week scheduling on most repair calls. Same-day repairs on most diagnostics.</p>
              <a href="tel:+17703159814" className="btn-primary">Call (770) 315-9814</a>
              <Link href="/contact" className="btn-secondary" style={{ marginTop: "12px" }}>
                Request Online
              </Link>
            </div>
            <div className="sidebar-card">
              <h3>Brands We Service</h3>
              <p>Hunter · Rain Bird · Orbit · Rainmaster · Toro · K-Rain · Irritrol</p>
              <p style={{ marginTop: "8px", fontSize: "0.88rem", color: "var(--text-muted)" }}>
                We service all major irrigation brands and carry common parts on every truck.
              </p>
            </div>
            <div className="sidebar-card">
              <h3>Related Services</h3>
              <Link href="/services/irrigation-installation" className="sidebar-service-link">Irrigation Installation →</Link>
              <Link href="/services/seasonal-startup-winterization" className="sidebar-service-link">Seasonal Startup & Winterization →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-faqs">
        <div className="container">
          <h2>Common Questions About Sprinkler Repair</h2>
          <div className="faq-list">
            {[
              {
                q: "How quickly can you get to me for a repair?",
                a: "We typically schedule repair calls within a few business days throughout our service area. For urgent situations — a zone that won't shut off and is flooding your yard — call us directly and we'll do our best to expedite.",
              },
              {
                q: "Do you charge separately for the diagnostic and the repair?",
                a: "We charge a diagnostic fee for the service visit. If we complete the repair the same day — which we do in most cases — the diagnostic fee is applied toward the repair total.",
              },
              {
                q: "My system is old. Is it worth repairing or should I replace it?",
                a: "It depends on the condition of the pipe and the nature of the failure. A system with sound infrastructure that needs a controller upgrade and a few head replacements is absolutely worth repairing. A system with brittle poly pipe that's failing in multiple places is approaching the point where targeted replacement sections make more sense. We'll give you an honest assessment at the diagnostic visit.",
              },
              {
                q: "Can you repair a system you didn't install?",
                a: "Yes — we service any brand and any system configuration regardless of who installed it.",
              },
              {
                q: "My controller lost its programming after a power outage. Can you reprogram it?",
                a: "Yes. Reprogramming is a quick service call. If your controller is losing programming regularly, a modern smart controller with cloud-based schedule backup is worth the upgrade.",
              },
              {
                q: "Do you fix irrigation systems on commercial properties?",
                a: "We handle light commercial irrigation alongside our residential work throughout our service area.",
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
          <h2>Something Wrong With Your System?</h2>
          <p>Same-week scheduling. Most repairs completed same day as the diagnostic.</p>
          <div className="cta-btns">
            <a href="tel:+17703159814" className="btn-primary">Call (770) 315-9814</a>
            <Link href="/contact" className="btn-secondary">Schedule Online</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
