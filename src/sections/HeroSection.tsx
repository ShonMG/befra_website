import { motion, useScroll, useTransform } from "framer-motion";
import { Public as Globe2, ArrowForward as ArrowRight } from "@mui/icons-material";
import { Button, Box, Container, Typography } from "@mui/material";
import heroBg from "@/assets/hero-bg.png";

export function HeroSection() {
  const { scrollY } = useScroll();
  const heroParallax = useTransform(scrollY, [0, 800], [0, 40]);

  return (
    <Box sx={{ position: "relative", pt: { xs: 16, md: 24 }, pb: { xs: 12, md: 16 }, minHeight: "90vh", display: "flex", alignItems: "center" }}>
      <Box sx={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden" }}>
        <Box sx={{ position: "absolute", inset: 0, bgcolor: "secondary.main", opacity: 0.9, mixBlendMode: "multiply", zIndex: 10 }} />
        <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(to right, #faf9f7 0%, rgba(250, 249, 247, 0.8) 50%, transparent 100%)", zIndex: 20 }} />
        <motion.img
          style={{ y: heroParallax }}
          src={heroBg}
          alt="Industrial HVAC facility"
          className="w-full h-full object-cover"
        />
      </Box>

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
            <Typography variant="h1" sx={{ fontSize: { xs: "3rem", md: "4.5rem" }, fontWeight: 800, lineHeight: 1.1, mb: 4, color: "text.primary" }}>
              Engineered Precision.<br />
              <Box component="span" sx={{ color: "primary.main" }}>Trusted by Global Giants.</Box>
            </Typography>
          </motion.div>

          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <Typography sx={{ fontSize: { xs: "1.125rem", md: "1.25rem" }, color: "text.secondary", mb: 5, maxWidth: 672, lineHeight: 1.6 }}>
              For over 25 years, Befra Engineering Services Limited has been a prominent player in  Refrigeration and Air Conditioning, Mechanical, Electrical, and
              Fabrication works for the UN, leading hospitals, and industrial power plants across Kenya.
            </Typography>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="flex flex-wrap gap-4"
          >
            <Button href="#services" variant="contained" size="large" endIcon={<ArrowRight />} sx={{ px: 4, py: 2, fontWeight: "bold" }} data-testid="button-hero-capabilities">
              Our Capabilities
            </Button>
            {/* <Box sx={{ display: "flex", alignItems: "center", gap: 2, px: 3, py: 2, bgcolor: "background.paper", border: "1px solid", borderColor: "divider" }} data-testid="badge-ungm">
              <Globe2 sx={{ color: "text.secondary" }} />
              <Typography sx={{ fontSize: "0.875rem", fontWeight: "bold" }}>UNGM Vendor #362091</Typography>
            </Box> */}
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
}
