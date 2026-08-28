import { motion } from "framer-motion";
import { VerifiedUser as ShieldCheck } from "@mui/icons-material";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import engineeringAbstract from "@/assets/about_2.png";



const STATS = [
  { value: 25, suffix: "+", label: "Years Experience" },
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 30, suffix: "+", label: "Clients Served" },
  { value: 100, suffix: "%", label: "Safety Compliance" },
];

export function AboutSection() {
  return (
    <Box sx={{ py: 12, bgcolor: "background.paper" }}>
      <Container>
        <Grid container spacing={8} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            >
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                <Typography variant="h2" sx={{ fontSize: { xs: "2rem", md: "3rem" }, mb: 3 }}>
                  The leading engineering service provider in Kenya and beyond
                </Typography>
                <Typography sx={{ color: "text.secondary", fontSize: "1.125rem", mb: 3, lineHeight: 1.6 }}>
                  Incorporated as a Limited company in 2015, Befra began its journey in 1998. We are driven by a singular vision: to be the leading HVAC service provider in the region and beyond, creating lasting value for clients and stakeholders.
                  Befra Engineering Services Limited is registered under the
                  Registration of Business Names Act (Cap 499, Section 14),
                  adhering to the provisions of the Registration of Business Names
                  and Act. The company is also proud to be a part of the United
                  Nations Global Marketplace (UNGM) under Registration No. 362091.
                </Typography>
                <Typography sx={{ color: "text.secondary", fontSize: "1.125rem", mb: 4, lineHeight: 1.6 }}>
                  We commit to uncompromising quality in mechanical, electrical, refrigeration, ventilation, and construction projects. When the stakes are high—from geothermal plants to refugee camp cold chains—Befra delivers.
                </Typography>
              </motion.div>

              {/* STATS GRID */}
              <motion.div
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              >
                <Box
                  sx={{
                    pt: 4,
                    mt: 4,
                    borderTop: "1px solid",
                    borderColor: "divider",
                    display: "grid",
                    gridTemplateColumns: { xs: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
                    gap: { xs: 3, md: 2 },
                  }}
                >
                  {STATS.map(({ value, suffix, label }) => (
                    <Box key={label}>
                      <Typography variant="h3" sx={{ color: "primary.main", mb: 0.5, lineHeight: 1 }}>
                        {/* Desktop: animated */}
                        <Box component="span" sx={{ display: { xs: "none", md: "inline" } }}>
                          <AnimatedCounter value={value} />
                        </Box>
                        {/* Mobile: static */}
                        <Box component="span" sx={{ display: { xs: "inline", md: "none" } }}>
                          {value}
                        </Box>
                        {suffix}
                      </Typography>
                      <Typography sx={{ fontSize: "0.875rem", fontWeight: "bold", textTransform: "uppercase", letterSpacing: 1, color: "text.secondary" }}>
                        {label}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </motion.div>
            </motion.div>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[600px]"
            >
              <img
                src={engineeringAbstract}
                alt="Engineering Blueprint"
                className="w-full h-full object-cover border border-gray-200"
              />
              <Box sx={{ position: "absolute", bottom: -24, left: -24, bgcolor: "secondary.main", color: "white", p: 4, maxWidth: 280 }}>
                <ShieldCheck sx={{ fontSize: 40, color: "primary.main", mb: 2 }} />
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>Unwavering Guarantee</Typography>
                <Typography sx={{ fontSize: "0.875rem", opacity: 0.8 }}>
                  We defend, indemnify, and hold clients harmless. 1-Year warranty on all work.
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
        
      </Container>
    </Box>
  );
}