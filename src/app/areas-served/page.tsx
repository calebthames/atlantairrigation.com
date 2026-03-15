import Link from "next/link";
import { counties } from "@/lib/locations";

export const metadata = {
  title: "Service Areas | Atlanta Irrigation — Fayette & Coweta County GA",
  description:
    "Atlanta Irrigation serves all of Fayette County and Coweta County, GA including Peachtree City, Fayetteville, Newnan, Senoia, Tyrone, and surrounding communities.",
};

export default function AreasServedPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1>Areas We Serve</h1>
          <p>
            We cover Fayette and Coweta County fully — same crew, same response times, every community.
            Click your county below to see cities served and learn about irrigation in your area.
          </p>
        </div>
      </section>

      <section className="section-areas-index">
        <div className="container">
          {counties.map((county) => (
            <div key={county.slug} className="county-section">
              <div className="county-header">
                <h2>
                  <Link href={`/areas-served/${county.slug}`}>{county.name}</Link>
                </h2>
                <p>{county.intro.slice(0, 180)}…</p>
                <Link href={`/areas-served/${county.slug}`} className="county-link">
                  About irrigation in {county.name} →
                </Link>
              </div>
              <div className="city-grid">
                {county.cities.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/areas-served/${county.slug}/${city.slug}`}
                    className="city-card"
                  >
                    <span className="city-name">{city.name}</span>
                    <span className="city-county">{county.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
