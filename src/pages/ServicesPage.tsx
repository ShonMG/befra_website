import { PageHero } from "@/components/PageHero";
import { ServicesSection } from "@/sections/ServicesSection";
import airCon      from "@/assets/airConditioning.jpeg";
import electrical1 from "@/assets/electrical.jpeg";
import solar1      from "@/assets/solar.jpeg";
import mechanical1 from "@/assets/mechanical.jpeg";
import { SEO } from "@/components/SEO";


export default function ServicesPage() {
  return (
    <>
    <SEO
      title="HVAC, Electrical, Mechanical & Solar Engineering Services"
      description="Comprehensive engineering services in Kenya: HVAC installation and maintenance, mechanical works, electrical installation, steel fabrication, building construction, and solar systems."
      keywords="HVAC installation Kenya, AC maintenance Nairobi, mechanical engineering Kenya, electrical works Nairobi, solar installation Kenya, steel fabrication Kenya"
      canonical="/services"
    />
      <PageHero
        title="Our Services"
        subtitle="Mechanical, electrical, refrigeration & fabrication solutions"
        slides={[airCon, electrical1, solar1, mechanical1]}
      />
      <ServicesSection />
    </>
  );
}