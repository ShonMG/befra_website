import { PageHero } from "@/components/PageHero";
import { ContactSection } from "@/sections/ContactSection";
import { FAQSection } from "@/sections/FAQSection";
import heroBg from "@/assets/hero-bg.png";
import { SEO } from "@/components/SEO";


export default function ContactPage() {
  return (
    <>
    <SEO
      title="Request a Quote — Engineering Services in Kenya"
      description="Contact Befra Engineering Services Limited for a quote on HVAC, mechanical, electrical, fabrication, construction, or solar works anywhere in Kenya."
      keywords="engineering quote Kenya, HVAC quote Nairobi, contact engineering company Kenya"
      canonical="/contact"
    />
      <PageHero
        title="Contact Us"
        subtitle="Get in touch for a quote, consultation, or general enquiry"
        slides={[heroBg]}
      />
      <ContactSection />
      <FAQSection />
    </>
  );
}