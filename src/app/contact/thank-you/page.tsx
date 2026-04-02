import Link from "next/link";

export const metadata = {
  title: "Thank You | Atlanta Irrigation",
  description:
    "Your estimate request was received. Atlanta Irrigation will be in touch shortly.",
};

export default function ContactThankYouPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1>Thank You</h1>
          <p>Your free estimate request was received.</p>
        </div>
      </section>

      <section className="section-contact">
        <div className="container" style={{ maxWidth: "640px" }}>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.65, marginBottom: "24px" }}>
            We will be in touch shortly. If you need to reach us sooner, call{" "}
            <a href="tel:+17702495417">(770) 249-5417</a>.
          </p>
          <Link href="/" className="btn-primary">
            Back to home
          </Link>
        </div>
      </section>
    </main>
  );
}
