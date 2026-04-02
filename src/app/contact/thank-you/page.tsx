import Link from "next/link";
import styles from "./thank-you.module.css";

export const metadata = {
  title: "Thank You | Atlanta Irrigation",
  description:
    "Your estimate request was received. Atlanta Irrigation will be in touch shortly.",
};

export default function ContactThankYouPage() {
  return (
    <main>
      <section className={styles.section} aria-labelledby="thank-you-heading">
        <div className={styles.inner}>
          <div className={styles.iconWrap} aria-hidden="true">
            <span className={styles.check}>✓</span>
          </div>

          <h1 id="thank-you-heading" className={styles.title}>
            Thank you
          </h1>

          <p className={styles.lead}>Your free estimate request was received.</p>

          <p className={styles.body}>
            We will be in touch shortly. If you need to reach us sooner, call{" "}
            <a href="tel:+17702495417" className={styles.phone}>
              (770) 249-5417
            </a>
            .
          </p>

          <Link href="/" className={`btn-primary ${styles.cta}`}>
            Back to home
          </Link>
        </div>
      </section>
    </main>
  );
}
