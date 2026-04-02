import { ContactForm } from "./ContactForm";

export const metadata = {
  title: "Contact Atlanta Irrigation | Free Estimates Metro Atlanta GA",
  description:
    "Contact Atlanta Irrigation for a free estimate or to schedule irrigation repair across metro Atlanta, GA. Call or request online.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1>Contact Atlanta Irrigation</h1>
          <p>Free estimates for new installation. Same-week scheduling for most repair calls.</p>
        </div>
      </section>

      <section className="section-contact">
        <div className="container contact-layout">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <div className="contact-item">
              <strong>Phone</strong>
              <a href="tel:+17702495417">(770) 249-5417</a>
            </div>
            <div className="contact-item">
              <strong>Email</strong>
              <a href="mailto:info@atlantairrigation.com">info@atlantairrigation.com</a>
            </div>
            <div className="contact-item">
              <strong>Service Area</strong>
              <p>Metro Atlanta, GA</p>
            </div>
            <div className="contact-item">
              <strong>Hours</strong>
              <p>Monday–Saturday, 7am–6pm</p>
            </div>
          </div>

          <div className="contact-form-block">
            <h2>Request a Free Estimate</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
