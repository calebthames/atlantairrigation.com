import { notFound } from "next/navigation";
import Link from "next/link";
import { counties, getCounty } from "@/lib/locations";
import type { Metadata } from "next";

interface Props {
  params: { county: string };
}

export async function generateStaticParams() {
  return counties.map((c) => ({ county: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const county = getCounty(params.county);
  if (!county) return {};
  return {
    title: county.metaTitle,
    description: county.metaDescription,
  };
}

export default function CountyPage({ params }: Props) {
  const county = getCounty(params.county);
  if (!county) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Atlanta Irrigation",
    url: "https://atlantairrigation.com",
    telephone: "+17702495417",
    areaServed: {
      "@type": "AdministrativeArea",
      name: county.name,
    },
    serviceType: ["Irrigation Installation", "Sprinkler Repair", "Seasonal Irrigation Service"],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link href="/">Home</Link> ›{" "}
            <Link href="/areas-served">Areas Served</Link> ›{" "}
            <span>{county.name}</span>
          </nav>
          <h1>{county.h1}</h1>
        </div>
      </section>

      <section className="section-county">
        <div className="container">
          <div className="county-intro">
            <p>{county.intro}</p>
          </div>

          <h2>Cities We Serve in {county.name}</h2>
          <div className="city-grid">
            {county.cities.map((city) => (
              <Link
                key={city.slug}
                href={`/areas-served/${county.slug}/${city.slug}`}
                className="city-card"
              >
                <span className="city-name">{city.name}</span>
                <span className="city-detail">{city.waterAuthority}</span>
              </Link>
            ))}
          </div>

          <div className="county-cta">
            <h2>Get a Free Estimate in {county.name}</h2>
            <p>Same-week scheduling for most repair calls. Free on-site estimates for new installation.</p>
            <div className="cta-btns">
              <a href="tel:+17702495417" className="btn-primary">Call (770) 249-5417</a>
              <Link href="/contact" className="btn-secondary">Request Online</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
