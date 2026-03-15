import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Irrigation Services Metro Atlanta GA | Atlanta Irrigation",
  description:
    "Atlanta Irrigation offers irrigation installation, sprinkler repair, and seasonal startup & winterization across metro Atlanta. Licensed, locally owned, free estimates on installation.",
};

export default function ServicesPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>
            Three core services. All done properly, by licensed technicians, across metro Atlanta.
          </p>
        </div>
      </section>

      <section className="section-services-index">
        <div className="container">
          <div className="services-index-grid">
            <div className="service-index-card">
              <h2>Irrigation Installation</h2>
              <p>
                Full system design and installation for new construction and existing properties.
                We design around your lot's specific soil, grade, water pressure, and plant material.
                Smart controllers included as standard on every install.
              </p>
              <ul className="service-bullets">
                <li>Free on-site estimates</li>
                <li>Custom zone design — no templates</li>
                <li>Backflow preventer installation & certification</li>
                <li>Smart controller installation</li>
                <li>Same-day completion on most residential installs</li>
              </ul>
              <Link href="/services/irrigation-installation" className="btn-primary">
                Learn More
              </Link>
            </div>

            <div className="service-index-card">
              <h2>Sprinkler Repair & Diagnostics</h2>
              <p>
                Accurate diagnosis from the water source forward — not guesswork from the symptom
                backward. We carry common parts on every truck and complete most repairs the same
                day we diagnose them.
              </p>
              <ul className="service-bullets">
                <li>Full system diagnostics</li>
                <li>Zone failures, head damage, controller issues</li>
                <li>Backflow preventer repair & testing</li>
                <li>Builder-installed system correction</li>
                <li>All major brands serviced</li>
              </ul>
              <Link href="/services/sprinkler-repair" className="btn-primary">
                Learn More
              </Link>
            </div>

            <div className="service-index-card">
              <h2>Seasonal Startup & Winterization</h2>
              <p>
                Spring activation includes a full zone inspection, pressure test, and controller
                reprogramming to current watering restrictions. Fall shutdown protects your backflow
                preventer and lateral lines before Georgia's hard freezes.
              </p>
              <ul className="service-bullets">
                <li>Spring zone-by-zone inspection</li>
                <li>Watering restriction compliance programming</li>
                <li>Backflow preventer testing & certification</li>
                <li>Fall drain-down and insulation</li>
                <li>Annual service agreements available</li>
              </ul>
              <Link href="/services/seasonal-startup-winterization" className="btn-primary">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-cta">
        <div className="container">
          <h2>Not Sure What You Need?</h2>
          <p>Call us and describe what's going on. We'll point you in the right direction — no pressure.</p>
          <div className="cta-btns">
            <a href="tel:+17703159814" className="btn-primary">Call (770) 315-9814</a>
            <Link href="/contact" className="btn-secondary">Request Online</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
