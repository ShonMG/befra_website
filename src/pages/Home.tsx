import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { Box } from "@mui/material";

import { Navbar }          from "@/components/Navbar";
import { Footer }          from "@/components/Footer";
import { HeroSection }     from "@/sections/HeroSection";
import { AboutSection }    from "@/sections/AboutSection";
import { ServicesSection } from "@/sections/ServicesSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { ProductsSection } from "@/sections/ProductsSection";
import { TeamSection }     from "@/sections/TeamSection";
import { ContactSection }  from "@/sections/ContactSection";
import { TestimonialsSection }  from "@/sections/TestimonialsSection";
import { SEO } from "@/components/SEO";
import { SectionFloatingButton } from "@/components/SectionFloatingButton";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";





export default function Home() {
  const [activeSection, setActiveSection] = useState("");
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const sectionIds = ["about", "services", "projects", "team", "contact"];
    const observers: IntersectionObserver[] = [];
    const sectionMap: Record<string, number> = {};

    const update = () => {
      const topSection = Object.entries(sectionMap)
        .filter(([, ratio]) => ratio > 0)
        .sort(([, a], [, b]) => b - a)[0];
      setActiveSection(topSection ? topSection[0] : "");
    };

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          sectionMap[id] = entry.intersectionRatio;
          update();
        },
        { threshold: [0, 0.1, 0.3, 0.5], rootMargin: "-70px 0px -30% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  return (
    <Box sx={{ minHeight: "100vh", overflowX: "hidden" }}>
      <motion.div
        style={{ scaleX: scrollYProgress, transformOrigin: "0% 50%" }}
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60]"
      />
      {/* <Navbar activeSection={activeSection} /> */}
       <SEO
        title="HVAC, Mechanical & Electrical Engineering Services in Kenya"
        description="Befra Engineering Services Limited — 25+ years delivering HVAC, mechanical, electrical, fabrication, and solar works for the UN, hospitals, and industrial plants across Kenya."
        keywords="HVAC Kenya, engineering services Nairobi, AC maintenance Kenya, mechanical works Kenya, electrical installation Nairobi, UN vendor Kenya UNGM"
        canonical="/"
      />

      <HeroSection />
      <Box sx={{ position: "relative" }}>
        <AboutSection />
        <SectionFloatingButton href="/about" label="More About Us" icon={InfoOutlinedIcon} side="right" />
      </Box>
      <Box sx={{ position: "relative" }}>
        <ServicesSection />
        <SectionFloatingButton href="/services" label="Explore Our Services" icon={BuildOutlinedIcon} side="left" />
      </Box>
      <ProjectsSection />
      <TeamSection />
      <Box sx={{ position: "relative" }}>
        <ProductsSection />
        <SectionFloatingButton href="/products" label="View All Products" icon={Inventory2OutlinedIcon} side="left" />
      </Box>
      
      <TestimonialsSection />
      <ContactSection />
      {/* <Footer /> */}
    </Box>
  );
}
