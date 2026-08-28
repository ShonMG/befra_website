import { PageHero }        from "@/components/PageHero";
import { ProductsSection } from "@/sections/ProductsSection";
import mechanical1         from "@/assets/mechanical.jpeg";
import solar1              from "@/assets/solar.jpeg";
import electrical1         from "@/assets/electrical.jpeg";
import { SEO } from "@/components/SEO";


export default function ProductsPage() {
  return (
    <>
    <SEO
        title="Engineering Products — AC Units, Solar Systems, Generators & More"
        description="Befra Engineering supplies and installs air conditioning units, solar PV systems, diesel generators, borehole pumps, electrical panels, and fabricated steel in Kenya. 1-year warranty on all products."
        keywords="AC units Kenya, solar panels Nairobi, diesel generator Kenya, borehole pump installation, HVAC equipment Kenya, cold room refrigeration Kenya, electrical distribution panel, fabrication Kenya"
        canonical="/products"
      />
      <PageHero
        title="Our Products"
        subtitle="Equipment and systems supplied, installed, and warranted by Befra Engineering"
        slides={[mechanical1, solar1, electrical1]}
      />
      <ProductsSection />
    </>
  );
}