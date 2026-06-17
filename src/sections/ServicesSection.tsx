import { motion } from "framer-motion";
import {
  Construction as Building2,
  Build as Wrench,
  Bolt as Zap,
  AcUnit as Snowflake,
  VerifiedUser as ShieldCheck,
} from "@mui/icons-material";
import { Box, Container, Grid, Card, CardContent, Typography } from "@mui/material";

const SERVICES = [
  { icon: Snowflake,   title: "Refrigeration & AC",     desc: "Comprehensive repairs, servicing, gas recharging, replacement of faulty parts, and strict quality control protocols." },
  { icon: Wrench,      title: "Mechanical Works",        desc: "Heavy-duty ventilation systems, commercial kitchen equipment installation, water pumps, and routine maintenance." },
  { icon: Zap,         title: "Electrical Works",        desc: "Large-scale plant electrical works, commercial solar installations, and borehole pump systems." },
  { icon: Building2,   title: "Fabrication Works",       desc: "Precision duct fabrication and heavy steel frame works for industrial and commercial applications." },
  { icon: ShieldCheck, title: "Building & Construction", desc: "General construction works and specialized solar-powered cooling systems." },
];

export function ServicesSection() {
  return (
    <Box id="services" sx={{ py: 12, bgcolor: "background.default", borderTop: "1px solid", borderBottom: "1px solid", borderColor: "divider" }}>
      <Container>
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

        <Grid container spacing={3}>
          {SERVICES.map((service, i) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={i}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Card sx={{ height: "100%", transition: "all 0.3s", borderLeft: "4px solid transparent", "&:hover": { transform: "translateY(-8px)", borderLeftColor: "primary.main", boxShadow: 3 } }}>
                  <CardContent sx={{ p: 4 }}>
                    <service.icon sx={{ fontSize: 48, color: "primary.main", mb: 3, transition: "transform 0.3s", ".MuiCard-root:hover &": { transform: "scale(1.1)" } }} />
                    <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>{service.title}</Typography>
                    <Typography color="text.secondary">{service.desc}</Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
