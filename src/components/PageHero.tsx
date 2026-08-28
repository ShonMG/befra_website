import { useState, useEffect, useCallback } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Box, Container, Typography, IconButton } from "@mui/material";

const AUTO_ADVANCE_MS = 5000;

interface PageHeroProps {
  title: string;
  subtitle?: string;
  slides: string[];
}

export function PageHero({ title, subtitle, slides }: PageHeroProps) {
  const { scrollY } = useScroll();
  const parallax = useTransform(scrollY, [0, 400], [0, 30]);

  const [activeSlide, setActiveSlide] = useState(0);

  const goTo = useCallback((index: number) => {
    setActiveSlide(((index % slides.length) + slides.length) % slides.length);
  }, [slides.length]);

  const goNext = useCallback(() => goTo(activeSlide + 1), [activeSlide, goTo]);
  const goPrev = useCallback(() => goTo(activeSlide - 1), [activeSlide, goTo]);

  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(goNext, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [goNext, slides.length]);

  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: 380, md: 520 },
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        mt: { xs: "64px", md: "80px" }, // clear fixed navbar
      }}
    >
      {/* SLIDES */}
      <AnimatePresence mode="sync">
        <motion.img
          key={activeSlide}
          src={slides[activeSlide]}
          alt=""
          style={{ y: parallax }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* same overlay stack as HeroSection */}
      <Box sx={{ position: "absolute", inset: 0, bgcolor: "secondary.main", opacity: 0.45, mixBlendMode: "multiply", zIndex: 10 }} />
      <Box sx={{ position: "absolute", inset: 0, bgcolor: "rgba(0,0,0,0.15)", zIndex: 11 }} />

      {/* ARROWS — only render if more than one slide */}
      {slides.length > 1 && (
        <>
          <IconButton
            onClick={goPrev}
            aria-label="Previous slide"
            size="small"
            sx={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", zIndex: 25, bgcolor: "rgba(255,255,255,0.15)", color: "white", backdropFilter: "blur(4px)", "&:hover": { bgcolor: "primary.main" } }}
          >
            <ChevronLeft />
          </IconButton>
          <IconButton
            onClick={goNext}
            aria-label="Next slide"
            size="small"
            sx={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", zIndex: 25, bgcolor: "rgba(255,255,255,0.15)", color: "white", backdropFilter: "blur(4px)", "&:hover": { bgcolor: "primary.main" } }}
          >
            <ChevronRight />
          </IconButton>

          {/* DOTS */}
          <Box sx={{ position: "absolute", bottom: 16, left: "50%", transform: "translateX(-50%)", zIndex: 25, display: "flex", gap: 0.75 }}>
            {slides.map((_, i) => (
              <Box
                key={i}
                component="button"
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                sx={{
                  width: i === activeSlide ? 24 : 8,
                  height: 8,
                  borderRadius: 4,
                  border: "none",
                  cursor: "pointer",
                  bgcolor: i === activeSlide ? "primary.main" : "rgba(255,255,255,0.5)",
                  transition: "all 0.3s ease",
                  p: 0,
                }}
              />
            ))}
          </Box>
        </>
      )}

      {/* TEXT */}
      <Container sx={{ position: "relative", zIndex: 20 }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1.5 }}>
            <Box sx={{ width: 36, height: 2, bgcolor: "var(--color-green)", flexShrink: 0 }} />
            <Typography sx={{ color: "var(--color-green)", fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, fontSize: "0.75rem" }}>
              Befra Engineering Services Limited
            </Typography>
          </Box>
          <Typography
            variant="h1"
            sx={{ fontSize: { xs: "2rem", md: "2.75rem" }, fontWeight: 800, color: "white", mb: subtitle ? 1 : 0, lineHeight: 1.15 }}
          >
            {title}
          </Typography>
          {subtitle && (
            <Typography sx={{ color: "rgba(255,255,255,0.8)", fontSize: { xs: "0.95rem", md: "1.05rem" }, fontWeight: 500, maxWidth: 560 }}>
              {subtitle}
            </Typography>
          )}
        </motion.div>
      </Container>
    </Box>
  );
}