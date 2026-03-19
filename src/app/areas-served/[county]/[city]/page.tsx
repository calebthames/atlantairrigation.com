import { notFound } from "next/navigation";
import Link from "next/link";
import { counties, getCity, getCounty } from "@/lib/locations";
import type { Metadata } from "next";

interface Props {
  params: { county: string; city: string };
}

export async function generateStaticParams() {
  return counties.flatMap((county) =>
    county.cities.map((city) => ({ county: county.slug, city: city.slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const city = getCity(params.county, params.city);
  if (!city) return {};
  return {
    title: city.metaTitle,
    description: city.metaDescription,
  };
}

export default function CityPage({ params }: Props) {
  const city = getCity(params.county, params.city);
  const county = getCounty(params.county);
  if (!city || !county) notFound();

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Atlanta Irrigation",
    url: "https://atlantairrigation.com",
    telephone: "+17702495417",
    address: {
      "@type": "PostalAddress",
      addressRegion: "GA",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "City",
      name: city.name,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: city.county,
      },
    },
    serviceType: [
      "Irrigation Installation",
      "Sprinkler Repair",
      "Seasonal Irrigation Service",
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: city.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link href="/">Home</Link> ›{" "}
            <Link href="/areas-served">Areas Served</Link> ›{" "}
            <Link href={`/areas-served/${county.slug}`}>{county.name}</Link> ›{" "}
            <span>{city.name}</span>
          </nav>
          <h1>{city.h1}</h1>
          <div className="hero-ctas">
            <a href="tel:+17702495417" className="btn-primary">Call (770) 249-5417</a>
            <Link href="/contact" className="btn-secondary">Free Estimate</Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-city-intro">
        <div className="container">
          <div className="city-intro-block">
            <p className="city-intro-text">{city.intro}</p>
            <div className="city-meta">
              <div className="city-meta-item">
                <span className="meta-label">Water Authority</span>
                <span className="meta-value">{city.waterAuthority}</span>
              </div>
              <div className="city-meta-item">
                <span className="meta-label">Soil Profile</span>
                <span className="meta-value">{city.soilContext}</span>
              </div>
              <div className="city-meta-item">
                <span className="meta-label">County</span>
                <span className="meta-value">
                  <Link href={`/areas-served/${county.slug}`}>{city.county}</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-city-services">
        <div className="container">
          <div className="service-section">
            <h2>Irrigation Installation in {city.name}</h2>
            <p>{city.installationCopy}</p>
          </div>

          <div className="service-section">
            <h2>Sprinkler Repair &amp; Diagnostics in {city.name}</h2>
            <p>{city.repairCopy}</p>
          </div>

          <div className="service-section">
            <h2>Seasonal Startup &amp; Winterization in {city.name}</h2>
            <p>{city.seasonalCopy}</p>
          </div>

          <div className="service-section closing">
            <p>{city.closingCopy}</p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-faqs">
        <div className="container">
          <h2>Common Questions About Irrigation in {city.name}</h2>
          <div className="faq-list">
            {city.faqs.map((faq, i) => (
              <details key={i} className="faq-item">
                <summary className="faq-question">{faq.q}</summary>
                <p className="faq-answer">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby */}
      <section className="section-nearby">
        <div className="container">
          <h2>Also Serving Nearby Communities</h2>
          <div className="nearby-links">
            {city.nearbyLinks.map((link) => (
              <Link
                key={link.slug}
                href={`/areas-served/${link.countySlug}/${link.slug}`}
                className="nearby-link"
              >
                {link.name}
              </Link>
            ))}
            <Link href="/areas-served" className="nearby-link nearby-link-all">
              View all service areas →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-cta">
        <div className="container">
          <h2>Get a Free Irrigation Estimate in {city.name}</h2>
          <p>Same-week scheduling for most repair calls. Free on-site estimates for new installation.</p>
          <div className="cta-btns">
            <a href="tel:+17702495417" className="btn-primary">Call (770) 249-5417</a>
            <Link href="/contact" className="btn-secondary">Request Online</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
