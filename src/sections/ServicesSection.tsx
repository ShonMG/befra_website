import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Construction as Building2,
  Build as Wrench,
  Bolt as Zap,
  AcUnit as Snowflake,
  VerifiedUser as ShieldCheck,
  SolarPower,
  CheckCircle,
  ArrowForward,
  Close,
  ChevronLeft,
  ChevronRight,
} from "@mui/icons-material";
import {
  Box, Container, Grid, Card, CardContent, Typography, Chip, IconButton, Modal,
} from "@mui/material";

import airCon        from "@/assets/airConditioning.jpeg";
import refrigeration from "@/assets/refrigeration.jpeg";
import mechanical1   from "@/assets/mechanical.jpeg";
import mechanical2   from "@/assets/mechanical pumps.jpeg";
import electrical1   from "@/assets/electrical.jpeg";
import electrical2   from "@/assets/borehole_electrical.jpeg";
import fabrication1  from "@/assets/fabrication.jpeg";
import fabrication2  from "@/assets/fabrication_1.jpeg";
import building1     from "@/assets/building.jpeg";
import building2     from "@/assets/building_1.jpeg";
import solar1        from "@/assets/solar.jpeg";
import solar2        from "@/assets/solar_1.jpeg";

const CAPABILITIES = [
  "Installation",
  "Preventive Maintenance",
  "Repairs & Troubleshooting",
  "Commissioning",
  "Quality Assurance",
];

const SERVICES = [
  {
    icon: Snowflake,
    title: "Refrigeration & Air Conditioning (HVAC)",
    desc: "Professional HVAC installation, AC maintenance, and refrigeration servicing across Nairobi and Kenya. Gas recharging, fault diagnosis, parts replacement, and quality-assured commissioning for commercial and industrial clients.",
    fullDesc: "Befra Engineering provides installation, maintenance, and repair of commercial and industrial refrigeration and air-conditioning systems. Our experience includes servicing cooling systems and implementing specialized solar-powered cooling solutions. Notable projects include the construction of a solar-powered thermo-eggs cooling system for Kiaga Poultry Farmers Society under the Kirinyaga County Government, delivering reliable and energy-efficient temperature control solutions.",
    coverImage: airCon,
    images: [airCon, refrigeration],
    gradient: "linear-gradient(135deg, #0d47a1 0%, #1976d2 100%)",
  },
  {
    icon: Wrench,
    title: "Mechanical Works",
    desc: "Heavy-duty ventilation systems, commercial kitchen equipment installation, water pumps, and routine maintenance.",
    fullDesc: "Our mechanical engineering division handles installation and maintenance of ventilation systems, commercial kitchen equipment, pumps, generators, and industrial machinery. We have undertaken generator repairs and maintenance, borehole water pump maintenance, and various mechanical works for institutions including the Venetian Retreat Centre in Thika and Lavington. We provide preventive maintenance programs aimed at ensuring reliability and minimizing downtime.",
    coverImage: mechanical1,
    images: [mechanical1, mechanical2],
    gradient: "linear-gradient(135deg, #1b5e20 0%, #388e3c 100%)",
  },
  {
    icon: Zap,
    title: "Electrical Works",
    desc: "Large-scale plant electrical works and borehole pump systems.",
    fullDesc: "Befra Engineering delivers electrical installation and maintenance services for industrial plants, commercial facilities, and pumping systems. Our capabilities include power distribution systems, electrical fault diagnosis, control systems, and borehole pump installations. We have successfully executed electrical installations and ongoing maintenance works for clients such as the Venetian Retreat Centre, ensuring efficient and dependable power systems.",
    coverImage: electrical1,
    images: [electrical1, electrical2],
    gradient: "linear-gradient(135deg, #e65100 0%, #f57c00 100%)",
  },
  {
    icon: Building2,
    title: "Fabrication Works",
    desc: "Precision duct fabrication and heavy steel frame works for industrial and commercial applications.",
    fullDesc: "We specialize in fabrication of ducts, steel structures, and customized industrial components for commercial and institutional facilities. Our team delivers precision metal fabrication and structural works tailored to client specifications while maintaining high standards of workmanship and safety.",
    coverImage: fabrication1,
    images: [fabrication1, fabrication2],
    gradient: "linear-gradient(135deg, #37474f 0%, #546e7a 100%)",
  },
  {
    icon: ShieldCheck,
    title: "Building & Construction",
    desc: "General construction works and specialized solar-powered cooling systems.",
    fullDesc: "Befra Engineering undertakes general building and construction projects for institutional, commercial, and agricultural clients. Our portfolio includes the construction of a solar-powered thermo-eggs cooling facility for Kiaga Poultry Farmers Society under the Kirinyaga County Government. We deliver turnkey construction solutions from planning and structural works to mechanical and electrical integration.",
    coverImage: building1,
    images: [building1, building2],
    gradient: "linear-gradient(135deg, #4a148c 0%, #7b1fa2 100%)",
  },
  {
    icon: SolarPower,
    title: "Solar Works",
    desc: "Large-scale installation of solar panels and solar-powered systems.",
    fullDesc: "We provide design, supply, installation, and maintenance of solar energy systems for commercial, institutional, and agricultural applications. Our experience includes installation of a 15kW solar system for the Venetian Retreat Centre and the development of solar-powered cooling systems for agricultural facilities. We focus on sustainable and cost-effective energy solutions that reduce operational costs and improve reliability.",
    coverImage: solar1,
    images: [solar1, solar2],
    gradient: "linear-gradient(135deg, #f57f17 0%, #fbc02d 100%)",
  },
];

type Service = typeof SERVICES[number];

function ServiceModal({ service, onClose }: { service: Service; onClose: () => void }) {
  const [activeImg, setActiveImg] = useState(0);
  const Icon = service.icon;

  return (
    <Modal open onClose={onClose} sx={{ display: "flex", alignItems: "center", justifyContent: "center", p: { xs: 2, md: 4 } }}>
      {/* backdrop click handled by Modal, stop propagation on the card itself */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.88 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          style={{ outline: "none", width: "100%", maxWidth: 600 }}
          onClick={e => e.stopPropagation()}
        >
          <Box
            sx={{
              bgcolor: "background.paper",
              borderRadius: 3,
              overflow: "hidden",
              boxShadow: 24,
              maxHeight: "90vh",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* IMAGE SLIDER */}
            <Box sx={{ position: "relative", height: { xs: 220, md: 280 }, flexShrink: 0, bgcolor: "secondary.main" }}>
              <AnimatePresence mode="sync">
                <motion.img
                  key={activeImg}
                  src={service.images[activeImg]}
                  alt={service.title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                />
              </AnimatePresence>

              {/* gradient scrim */}
              <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)" }} />

              {/* icon badge */}
              <Box
                sx={{
                  position: "absolute", top: 16, left: 16,
                  width: 44, height: 44, borderRadius: "50%",
                  background: service.gradient,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: 3, zIndex: 2,
                }}
              >
                <Icon sx={{ color: "white", fontSize: 22 }} />
              </Box>

              {/* close button */}
              <IconButton
                onClick={onClose}
                aria-label="Close"
                size="small"
                sx={{
                  position: "absolute", top: 12, right: 12, zIndex: 2,
                  bgcolor: "rgba(0,0,0,0.4)", color: "white", backdropFilter: "blur(4px)",
                  "&:hover": { bgcolor: "rgba(0,0,0,0.65)" },
                }}
              >
                <Close fontSize="small" />
              </IconButton>

              {/* prev/next arrows — only if more than one image */}
              {service.images.length > 1 && (
                <>
                  <IconButton
                    onClick={() => setActiveImg(i => (i - 1 + service.images.length) % service.images.length)}
                    aria-label="Previous image"
                    size="small"
                    sx={{ position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)", zIndex: 2, bgcolor: "rgba(255,255,255,0.15)", color: "white", backdropFilter: "blur(4px)", "&:hover": { bgcolor: "primary.main" } }}
                  >
                    <ChevronLeft />
                  </IconButton>
                  <IconButton
                    onClick={() => setActiveImg(i => (i + 1) % service.images.length)}
                    aria-label="Next image"
                    size="small"
                    sx={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", zIndex: 2, bgcolor: "rgba(255,255,255,0.15)", color: "white", backdropFilter: "blur(4px)", "&:hover": { bgcolor: "primary.main" } }}
                  >
                    <ChevronRight />
                  </IconButton>

                  {/* dots */}
                  <Box sx={{ position: "absolute", bottom: 12, left: "50%", transform: "translateX(-50%)", zIndex: 2, display: "flex", gap: 0.75 }}>
                    {service.images.map((_, i) => (
                      <Box
                        key={i}
                        component="button"
                        onClick={() => setActiveImg(i)}
                        sx={{
                          width: i === activeImg ? 22 : 8, height: 8,
                          borderRadius: 4, border: "none", cursor: "pointer", p: 0,
                          bgcolor: i === activeImg ? "primary.main" : "rgba(255,255,255,0.55)",
                          transition: "all 0.3s ease",
                        }}
                      />
                    ))}
                  </Box>
                </>
              )}
            </Box>

            {/* SCROLLABLE CONTENT */}
            <Box sx={{ p: { xs: 3, md: 4 }, overflowY: "auto" }}>
              <Typography variant="h5" sx={{ fontWeight: 800, mb: 2, lineHeight: 1.3 }}>
                {service.title}
              </Typography>

              <Typography color="text.secondary" sx={{ fontSize: "0.95rem", lineHeight: 1.9, mb: 3 }}>
                {service.fullDesc}
              </Typography>

              <Typography variant="subtitle2" sx={{ fontWeight: 700, color: "primary.main", mb: 1.5, textTransform: "uppercase", letterSpacing: 0.5 }}>
                Key Capabilities
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {CAPABILITIES.map(cap => (
                  <Chip
                    key={cap}
                    icon={<CheckCircle sx={{ fontSize: "14px !important", color: "var(--color-green) !important" }} />}
                    label={cap}
                    size="small"
                    variant="outlined"
                    sx={{ fontSize: "0.75rem", borderColor: "divider" }}
                  />
                ))}
              </Box>
            </Box>
          </Box>
        </motion.div>
      </AnimatePresence>
    </Modal>
  );
}

export function ServicesSection() {
  const [selected, setSelected] = useState<number | null>(null);
  const activeService = selected !== null ? SERVICES[selected] : null;

  return (
    <Box sx={{ py: 12, bgcolor: "background.default", borderTop: "1px solid", borderBottom: "1px solid", borderColor: "divider" }}>
      <Container>
        {/* HEADER */}
        <Box sx={{ textAlign: "center", maxWidth: 768, mx: "auto", mb: 8 }}>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 40 }}
            viewport={{ once: true }}
            className="h-1 mx-auto mb-4"
            style={{ backgroundColor: "var(--color-green)" }}
          />
          <Typography sx={{ color: "var(--color-green)", fontWeight: "bold", textTransform: "uppercase", letterSpacing: 2, fontSize: "0.875rem", mb: 2 }}>
            Core Competencies
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: "2.25rem", md: "3rem" } }}>
            Comprehensive Engineering Solutions
          </Typography>
        </Box>

        {/* GRID */}
        <Grid container spacing={3} sx={{ alignItems: "stretch" }}>
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <Grid size={{ xs: 12, md: 6, lg: 4 }} key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  style={{ height: "100%", display: "flex", flexDirection: "column" }}
                >
                  <Card
                    sx={{
                      display: "flex", flexDirection: "column", height: "100%",
                      overflow: "hidden", cursor: "pointer",
                      transition: "box-shadow .3s, transform .3s",
                      "&:hover": { boxShadow: 8, transform: "translateY(-6px)" },
                      "&:hover .view-more": { color: "primary.main", gap: 1 },
                      "&:hover .cover-img": { transform: "scale(1.06)" },
                    }}
                    onClick={() => setSelected(i)}
                  >
                    {/* IMAGE COVER */}
                    <Box sx={{ position: "relative", height: 220, overflow: "hidden", flexShrink: 0 }}>
                      <Box
                        component="img"
                        src={service.coverImage}
                        alt={service.title}
                        className="cover-img"
                        sx={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform .5s ease" }}
                      />
                      <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)" }} />
                      <Box
                        sx={{
                          position: "absolute", top: 16, left: 16,
                          width: 44, height: 44, borderRadius: "50%",
                          background: service.gradient,
                          display: "flex", alignItems: "center", justifyContent: "center",
                          boxShadow: 3,
                        }}
                      >
                        <Icon sx={{ color: "white", fontSize: 22 }} />
                      </Box>
                    </Box>

                    {/* CARD BODY */}
                    <CardContent sx={{ p: 3, display: "flex", flexDirection: "column", flexGrow: 1 }}>
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, lineHeight: 1.3 }}>
                        {service.title}
                      </Typography>
                      <Typography color="text.secondary" sx={{ fontSize: "0.9rem", lineHeight: 1.7, flexGrow: 1, mb: 2 }}>
                        {service.desc}
                      </Typography>

                      {/* VIEW MORE TEXT LINK */}
                      <Box
                        className="view-more"
                        sx={{
                          display: "flex", alignItems: "center", gap: 0.5,
                          color: "text.secondary", fontSize: "0.875rem", fontWeight: 700,
                          transition: "color 0.2s, gap 0.2s", mt: "auto",
                        }}
                      >
                        View More <ArrowForward sx={{ fontSize: 16 }} />
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            );
          })}
        </Grid>
      </Container>

      {/* MODAL */}
      <AnimatePresence>
        {activeService && (
          <ServiceModal
            service={activeService}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </Box>
  );
}