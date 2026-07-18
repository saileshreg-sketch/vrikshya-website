import type { Metadata } from "next";
import { ContactForm } from "../components/ContactForm";
import { InnerHero } from "../components/InnerHero";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return <><SiteHeader /><main><InnerHero eyebrow="Start a conversation" title="Tell us what you are planning." intro="Share the essentials below. A clear first brief helps us understand the right service, next questions, and most useful way to begin." index="05" />
    <section className="section contact-section"><div className="container contact-grid"><aside><p className="eyebrow">Project enquiries</p><h2>One conversation can begin the complete project.</h2><p>Whether you have a complete brief, an existing building, a piece of land, or only an early idea, start with what you know. Vrikshya can take the work from design and costing through construction and final handover.</p><div className="contact-note"><span>Studio</span><strong>Chandragiri-9, Kathmandu</strong><p>Working with projects across Nepal.</p></div><div className="contact-directory" aria-label="Vrikshya contact directory"><a href="tel:+9779861723878"><span>Managing Director</span><strong>Ruby Bista</strong><em>+977 986 1723878</em></a><a href="tel:+9779845222220"><span>Contact</span><strong>Sailesh Regmi</strong><em>+977 984 5222220</em></a><a href="tel:+9779851336344"><span>Contact</span><strong>Paban Rupakheti</strong><em>+977 985 1336344</em></a></div><div className="contact-note"><span>Email</span><strong><a href="mailto:info@vrikshya.com.np">info@vrikshya.com.np</a></strong></div><div className="contact-note"><span>What happens next</span><strong>Review · Call · Define scope</strong><p>We review your brief and recommend the clearest route—design service, construction, or complete design and build.</p></div></aside><ContactForm /></div></section>
  </main><SiteFooter /></>;
}
