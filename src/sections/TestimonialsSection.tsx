import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FormatQuote, ChevronLeft, ChevronRight, Star } from "@mui/icons-material";
import { Box, Container, Typography, IconButton, Avatar } from "@mui/material";

const TESTIMONIALS = [
  {
    name:         "James Ochieng",
    title:        "Facilities Manager",
    organisation: "UNHCR Kenya",
    initials:     "JO",
    rating:       5,
    quote:        "Befra Engineering has been our go-to partner for AC maintenance across Kakuma, Dadaab, and Nairobi since 2012. Their technicians understand the logistical realities of remote camp operations — they show up, they deliver, and they document everything properly. That level of reliability is rare.",
  },
  {
    name:         "Sr. Margaret Wanjiku",
    title:        "Hospital Administrator",
    organisation: "Nazareth Hospital, Limuru",
    initials:     "MW",
    rating:       5,
    quote:        "We have trusted Befra with our cold stores, laundry equipment, and generator systems for years. Healthcare infrastructure cannot afford downtime, and Befra has never let us down. Their preventive maintenance approach has saved us from several potential crises.",
  },
  {
    name:         "David Mutua",
    title:        "Project Engineer",
    organisation: "OR-Power 4 Inc, Olkaria",
    initials:     "DM",
    rating:       5,
    quote:        "Working at a geothermal plant means we have zero tolerance for substandard fabrication work. Befra's team consistently meets our specifications and safety requirements. The quality of their steel work and the discipline of their site teams is what keeps them on our approved vendor list.",
  },
  {
    name:         "Grace Njeri",
    title:        "Procurement Officer",
    organisation: "IOM Kenya",
    initials:     "GN",
    rating:       5,
    quote:        "Over the course of our contract with Befra, they maintained AC systems across three major facilities without a single compliance issue. Their UNGM registration made procurement straightforward, and their reporting standards matched what an international organisation requires.",
  },
  {
    name:         "Dr. Anil Patel",
    title:        "Chief of Operations",
    organisation: "MP Shah Hospital, Nairobi",
    initials:     "AP",
    rating:       5,
    quote:        "Befra handled our ventilation systems, kitchen equipment, and water pumps for nearly eight years. What sets them apart is that they treat hospital works with the seriousness they deserve — minimal disruption, thorough documentation, and a team that understands clinical environments.",
  },
  {
    name:         "Joseph Kamau",
    title:        "County Director of Agriculture",
    organisation: "Kirinyaga County Government",
    initials:     "JK",
    rating:       5,
    quote:        "The solar-powered egg cooling facility Befra built for the Kiaga Poultry Farmers Society has transformed post-harvest losses for our cooperative members. The turnkey delivery — from civil works to solar integration — was exactly what a county government project needs: on time, on budget, and fully commissioned.",
  },
  {
    name:         "Fr. Benedict Omondi",
    title:        "Director",
    organisation: "Vincetian Retreat Centre, Thika",
    initials:     "BO",
    rating:       5,
    quote:        "Befra installed our solar system, maintains our generators, and handles all electrical and borehole pump works. Having one trusted contractor for all our mechanical and electrical needs has simplified our operations enormously. Their team is professional, honest, and always responsive.",
  },
];

const AUTO_ADVANCE_MS = 5000;

export function TestimonialsSection() {
  const [active, setActive]     = useState(0);
  const [paused, setPaused]     = useState(false);
  const intervalRef             = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo   = (i: number) => setActive(((i % TESTIMONIALS.length) + TESTIMONIALS.length) % TESTIMONIALS.length);
  const goNext = () => goTo(active + 1);
  const goPrev = () => goTo(active - 1);

  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(goNext, AUTO_ADVANCE_MS);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [active, paused]);

  const t = TESTIMONIALS[active];

  return (
    <Box
      sx={{
        py: 12,
        bgcolor: "secondary.main",
        color: "white",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* subtle background quote mark */}
      <FormatQuote
        sx={{
          position: "absolute", top: -20, left: -20,
          fontSize: 320, color: "rgba(255,255,255,0.03)",
          transform: "scaleX(-1)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="md">
        {/* HEADER */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
            <Box sx={{ width: 40, height: 2, bgcolor: "var(--color-green)" }} />
          </Box>
          <Typography sx={{ color: "var(--color-green)", fontWeight: "bold", textTransform: "uppercase", letterSpacing: 2, fontSize: "0.875rem", mb: 2 }}>
            Client Voices
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: "2rem", md: "3rem" }, color: "white" }}>
            Trusted Across{" "}
            <Box component="span" sx={{ color: "error.light" }}>Kenya & Beyond</Box>
          </Typography>
        </Box>

        {/* CAROUSEL */}
        <Box
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          sx={{ position: "relative" }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
            >
              <Box
                sx={{
                  textAlign: "center",
                  px: { xs: 2, md: 6 },
                  py: 2,
                }}
              >
                {/* STARS */}
                <Box sx={{ display: "flex", justifyContent: "center", gap: 0.5, mb: 3 }}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} sx={{ color: "var(--color-green)", fontSize: 22 }} />
                  ))}
                </Box>

                {/* QUOTE */}
                <Typography
                  sx={{
                    fontSize: { xs: "1.05rem", md: "1.25rem" },
                    lineHeight: 1.85,
                    color: "rgba(255,255,255,0.88)",
                    fontStyle: "italic",
                    mb: 5,
                    position: "relative",
                  }}
                >
                  <Box
                    component="span"
                    sx={{ color: "var(--color-green)", fontSize: "2rem", lineHeight: 0, verticalAlign: "middle", mr: 0.5, fontStyle: "normal" }}
                  >
                    "
                  </Box>
                  {t.quote}
                  <Box
                    component="span"
                    sx={{ color: "var(--color-green)", fontSize: "2rem", lineHeight: 0, verticalAlign: "middle", ml: 0.5, fontStyle: "normal" }}
                  >
                    "
                  </Box>
                </Typography>

                {/* AVATAR + NAME */}
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1 }}>
                  <Avatar
                    sx={{
                      width: 56, height: 56,
                      bgcolor: "primary.main",
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      border: "3px solid rgba(255,255,255,0.15)",
                      mb: 0.5,
                    }}
                  >
                    {t.initials}
                  </Avatar>
                  <Typography sx={{ fontWeight: 700, fontSize: "1rem", color: "white" }}>
                    {t.name}
                  </Typography>
                  <Typography sx={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.55)" }}>
                    {t.title} · {t.organisation}
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </AnimatePresence>

          {/* ARROWS */}
          <IconButton
            onClick={goPrev}
            aria-label="Previous testimonial"
            sx={{
              position: "absolute", left: { xs: -8, md: -48 }, top: "50%", transform: "translateY(-50%)",
              color: "white", bgcolor: "rgba(255,255,255,0.08)", backdropFilter: "blur(4px)",
              "&:hover": { bgcolor: "primary.main" }, transition: "background-color 0.2s",
            }}
          >
            <ChevronLeft />
          </IconButton>
          <IconButton
            onClick={goNext}
            aria-label="Next testimonial"
            sx={{
              position: "absolute", right: { xs: -8, md: -48 }, top: "50%", transform: "translateY(-50%)",
              color: "white", bgcolor: "rgba(255,255,255,0.08)", backdropFilter: "blur(4px)",
              "&:hover": { bgcolor: "primary.main" }, transition: "background-color 0.2s",
            }}
          >
            <ChevronRight />
          </IconButton>
        </Box>

        {/* DOTS + COUNTER */}
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, mt: 5 }}>
          <Box sx={{ display: "flex", gap: 1 }}>
            {TESTIMONIALS.map((_, i) => (
              <Box
                key={i}
                component="button"
                onClick={() => goTo(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                sx={{
                  width: i === active ? 28 : 8, height: 8,
                  borderRadius: 4, border: "none", cursor: "pointer", p: 0,
                  bgcolor: i === active ? "var(--color-green)" : "rgba(255,255,255,0.25)",
                  transition: "all 0.3s ease",
                }}
              />
            ))}
          </Box>
          <Typography sx={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.35)", letterSpacing: 1 }}>
            {active + 1} / {TESTIMONIALS.length}
          </Typography>
        </Box>

        {/* AUTO-ADVANCE PROGRESS BAR */}
        {!paused && (
          <Box sx={{ mt: 4, height: 2, bgcolor: "rgba(255,255,255,0.1)", borderRadius: 1, overflow: "hidden" }}>
            <motion.div
              key={active}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: AUTO_ADVANCE_MS / 1000, ease: "linear" }}
              style={{ height: "100%", backgroundColor: "var(--color-green)", borderRadius: 4 }}
            />
          </Box>
        )}
      </Container>
    </Box>
  );
}