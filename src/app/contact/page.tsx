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
            <form className="contact-form" action="/api/contact" method="POST">
              <label>
                Name
                <input type="text" name="name" required placeholder="Your name" />
              </label>
              <label>
                Phone
                <input type="tel" name="phone" required placeholder="(770) 000-0000" />
              </label>
              <label>
                Email
                <input type="email" name="email" placeholder="you@email.com" />
              </label>
              <label>
                City / Neighborhood
                <input type="text" name="city" placeholder="e.g. Peachtree City" />
              </label>
              <label>
                What do you need?
                <select name="service">
                  <option value="">Select a service</option>
                  <option value="installation">New Irrigation Installation</option>
                  <option value="repair">Sprinkler Repair</option>
                  <option value="seasonal">Seasonal Startup or Winterization</option>
                  <option value="other">Not sure / Other</option>
                </select>
              </label>
              <label>
                Additional Details
                <textarea name="message" rows={4} placeholder="Anything else we should know about your property or issue" />
              </label>
              <button type="submit" className="btn-primary">Send Request</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
