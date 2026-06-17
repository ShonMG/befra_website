import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { Box } from "@mui/material";

import { Navbar }          from "@/components/Navbar";
import { Footer }          from "@/components/Footer";
import { HeroSection }     from "@/sections/HeroSection";
import { AboutSection }    from "@/sections/AboutSection";
import { ServicesSection } from "@/sections/ServicesSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { TeamSection }     from "@/sections/TeamSection";
import { ContactSection }  from "@/sections/ContactSection";

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
      <Navbar activeSection={activeSection} />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </Box>
  );
}
