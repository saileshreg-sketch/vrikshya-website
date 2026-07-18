"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [brief, setBrief] = useState("");
  const [copied, setCopied] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const summary = [
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Email: ${data.get("email")}`,
      `Project location: ${data.get("location")}`,
      `Project type: ${data.get("type")}`,
      `Service: ${data.get("service")}`,
      `Current stage: ${data.get("stage")}`,
      `Approx. area: ${data.get("area") || "Not provided"}`,
      `Budget range: ${data.get("budget") || "Not provided"}`,
      `Preferred start: ${data.get("start") || "Not provided"}`,
      `Project notes: ${data.get("message")}`,
    ].join("\n");
    setBrief(summary);
    setCopied(false);
  }

  async function copyBrief() {
    await navigator.clipboard.writeText(brief);
    setCopied(true);
  }

  const emailHref = `mailto:info@vrikshya.com.np?subject=${encodeURIComponent("New project enquiry")}&body=${encodeURIComponent(brief)}`;

  if (brief) return (
    <div className="form-success" role="status">
      <span className="success-mark">✓</span>
      <p className="eyebrow">Project brief ready</p>
      <h2>Thank you for sharing the project.</h2>
      <p>Your brief is ready. Send it directly to Vrikshya by email, or copy it for your records.</p>
      <pre>{brief}</pre>
      <div className="form-actions"><a className="button button-accent" href={emailHref}>Email project brief <span>↗</span></a><button className="button button-dark" type="button" onClick={copyBrief}>{copied ? "Brief copied" : "Copy project brief"} <span>↗</span></button><button className="text-button" type="button" onClick={() => setBrief("")}>Edit details</button></div>
    </div>
  );

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-section"><p className="form-step">01 · Your details</p><div className="field-grid"><label>Full name<input name="name" required placeholder="Your name" /></label><label>Phone number<input name="phone" required placeholder="Your contact number" /></label><label className="field-full">Email address<input type="email" name="email" required placeholder="name@email.com" /></label></div></div>
      <div className="form-section"><p className="form-step">02 · Project overview</p><div className="field-grid"><label>Project location<input name="location" required placeholder="Municipality / district" /></label><label>Project type<select name="type" required defaultValue=""><option value="" disabled>Select project type</option><option>Residential</option><option>Commercial</option><option>Hospitality / Resort</option><option>Interior</option><option>Renovation</option><option>Other</option></select></label><label>Service required<select name="service" required defaultValue=""><option value="" disabled>Select a service</option><option>Complete Design & Build</option><option>Architecture & Planning</option><option>Interior Design</option><option>Construction & Execution</option><option>Renovation & Remodeling</option><option>Not sure yet</option></select></label><label>Current stage<select name="stage" required defaultValue=""><option value="" disabled>Select current stage</option><option>Exploring an idea</option><option>Land / site identified</option><option>Design in progress</option><option>Drawings ready</option><option>Construction started</option><option>Existing space to renovate</option></select></label><label>Approximate area<input name="area" placeholder="Land or project area" /></label><label>Expected budget range<input name="budget" placeholder="Optional" /></label><label className="field-full">Preferred starting period<input name="start" placeholder="For example: within 3 months" /></label></div></div>
      <div className="form-section"><p className="form-step">03 · Tell us more</p><label>What would you like to create or improve?<textarea name="message" required rows={6} placeholder="Share the main requirements, priorities, and anything we should understand before contacting you." /></label></div>
      <div className="form-submit"><p>By continuing, your details are used only to prepare this project enquiry.</p><button className="button button-accent" type="submit">Prepare project brief <span>↗</span></button></div>
    </form>
  );
}
