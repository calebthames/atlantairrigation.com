"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type SubmitState = "idle" | "submitting" | "error";

export function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value.trim(),
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value.trim(),
      email: (form.elements.namedItem("email") as HTMLInputElement).value.trim(),
      city: (form.elements.namedItem("city") as HTMLInputElement).value.trim(),
      service: (form.elements.namedItem("service") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim(),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = (await res.json().catch(() => ({}))) as { success?: boolean; error?: string };

      if (!res.ok) {
        setErrorMessage(json.error || "Something went wrong. Please try again or call us.");
        setStatus("error");
        return;
      }

      form.reset();
      router.push("/contact/thank-you");
    } catch {
      setErrorMessage("Network error. Please check your connection or call (770) 249-5417.");
      setStatus("error");
    }
  }

  return (
    <>
      {status === "error" && errorMessage && (
        <p className="contact-form-feedback contact-form-feedback--error" role="alert">
          {errorMessage}
        </p>
      )}
      <form className="contact-form" onSubmit={handleSubmit}>
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
        <button type="submit" className="btn-primary" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : "Send Request"}
        </button>
      </form>
    </>
  );
}
