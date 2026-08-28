import { useState, useEffect, useCallback } from "react";
import { Link } from "wouter";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowForward as ArrowRight, ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Phone } from  "@mui/icons-material";
import { Button, Box, Container, Typography, IconButton } from "@mui/material";

;
import heroBg2  from "@/assets/hero_org.png";
import heroBg3  from "@/assets/hero-bg-3.png";
import heroBg4  from "@/assets/hero-bg-4.png";
import heroBg5  from "@/assets/hero-bg-5.png";
import heroBg6  from "@/assets/hero-bg-6.png";


const SLIDES = [ heroBg2, heroBg3, heroBg4, heroBg5, heroBg6 ];
const AUTO_ADVANCE_MS = 6000;

export function HeroSection() {
  const { scrollY } = useScroll();
  const heroParallax = useTransform(scrollY, [0, 800], [0, 40]);
  const [activeSlide, setActiveSlide] = useState(0);

  const goTo = useCallback((index: number) => {
    setActiveSlide(((index % SLIDES.length) + SLIDES.length) % SLIDES.length);
  }, []);

  const goNext = useCallback(() => goTo(activeSlide + 1), [activeSlide, goTo]);
  const goPrev = useCallback(() => goTo(activeSlide - 1), [activeSlide, goTo]);

  useEffect(() => {
    const timer = setInterval(goNext, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [goNext]);

  return (
    <Box sx={{ position: "relative", pt: { xs: 16, md: 24 }, pb: { xs: 12, md: 16 }, minHeight: "90vh", display: "flex", alignItems: "center" }}>
      <Box sx={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden" }}>

        {/* Layer 1 — subtle dark scrim so text always reads, replaces the heavy multiply overlay */}
        <Box sx={{
          position: "absolute", inset: 0, zIndex: 10,
          background: "linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.18) 100%)",
        }} />

        {/* Layer 2 — very light blue tint at bottom-left for brand grounding, no longer washing out the image */}
        <Box sx={{
          position: "absolute", inset: 0, zIndex: 11,
          background: "linear-gradient(to top, rgba(13,71,161,0.30) 0%, transparent 50%)",
        }} />

        {/* SLIDES */}
        <AnimatePresence mode="sync">
          <motion.img
            key={activeSlide}
            style={{ y: heroParallax }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            src={SLIDES[activeSlide]}
            alt="Industrial HVAC facility"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* ARROWS */}
        <IconButton
          onClick={goPrev}
          aria-label="Previous slide"
          sx={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", zIndex: 25, bgcolor: "rgba(255,255,255,0.15)", color: "white", backdropFilter: "blur(4px)", "&:hover": { bgcolor: "primary.main" } }}
        >
          <ChevronLeft />
        </IconButton>
        <IconButton
          onClick={goNext}
          aria-label="Next slide"
          sx={{ position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)", zIndex: 25, bgcolor: "rgba(255,255,255,0.15)", color: "white", backdropFilter: "blur(4px)", "&:hover": { bgcolor: "primary.main" } }}
        >
          <ChevronRight />
        </IconButton>

        {/* DOTS */}
        <Box sx={{ position: "absolute", bottom: 24, left: "50%", transform: "translateX(-50%)", zIndex: 25, display: "flex", gap: 1 }}>
          {SLIDES.map((_, i) => (
            <Box
              key={i}
              component="button"
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              sx={{
                width: i === activeSlide ? 28 : 10, height: 10,
                borderRadius: 5, border: "none", cursor: "pointer",
                bgcolor: i === activeSlide ? "primary.main" : "rgba(255,255,255,0.6)",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </Box>
      </Box>

      {/* TEXT — switched to white since images are now visible behind it */}
      <Container sx={{ position: "relative", zIndex: 30 }}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="max-w-3xl"
        >
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="flex items-center gap-3 mb-6"
          >
            <Box sx={{ width: 48, height: 2, bgcolor: "var(--color-green)" }} />
            <Typography sx={{ color: "var(--color-green)", fontWeight: "bold", textTransform: "uppercase", letterSpacing: 2, fontSize: "0.875rem" }}>
              Est. 1998 • Republic of Kenya
            </Typography>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <Typography variant="h1" sx={{ fontSize: { xs: "3rem", md: "4.5rem" }, fontWeight: 800, lineHeight: 1.1, mb: 4, color: "white" }}>
              Engineered Precision.<br />
              <Box component="span" sx={{ color: "error.light" }}>Trusted by Global Giants.</Box>
            </Typography>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <Typography sx={{ fontSize: { xs: "1.125rem", md: "1.25rem" }, color: "rgba(255,255,255,0.85)", mb: 5, maxWidth: 672, lineHeight: 1.6 }}>
              For over 25 years, Befra Engineering Services Limited has been a prominent player in Refrigeration and Air Conditioning, Mechanical, Electrical, and
              Fabrication works for the UN, leading hospitals, and industrial power plants across Kenya.
            </Typography>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="flex flex-wrap gap-4"
          >
            <Button
              component={Link}
              href="/contact" 
              variant="contained"
              size="large"
              endIcon={<ArrowRight />}
              className="btn-hero=primary"
              sx={{ px: 4, py: 2, fontWeight: "bold" }}
              data-testid="button-hero-quote"
            >
              Get a Quote
            </Button>

            <Button
              component="a"
              href="tel:+254721409342"
              variant="outlined"
              size="large"
              startIcon={<Phone />}
              className="btn-hero-ghost"

              sx={{
                px: 4, py: 2, fontWeight: "bold",
                color: "white",
                borderColor: "rgba(255,255,255,0.6)",
                "&:hover": {
                  borderColor: "white",
                  bgcolor: "rgba(255,255,255,0.1)",
                },
              }}
              data-testid="button-hero-call"
            >
              +254 721 409 342
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
}