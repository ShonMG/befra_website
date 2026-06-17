import { motion } from "framer-motion";
import { VerifiedUser as ShieldCheck } from "@mui/icons-material";
import { Box, Container, Grid, Typography } from "@mui/material";

const DIRECTOR = {
  name: "Benard Gichuki",
  role: "Director",
  specialty: "25+ years leading HVAC & industrial engineering projects Kenya, from geothermal power plants to UN refugee camp cold chains.",
  photo: "",
};

const POLICIES = [
  { title: "WIBA Policy",              desc: "All employees comprehensively insured under the Work Injury Benefit Act." },
  { title: "DOSH/OSH Registered",      desc: "Fully registered with Occupational Safety and Health Services." },
  { title: "Health & Safety",          desc: "Staff undergo safety training, use full PPE on duty, and are First Aid trained." },
  { title: "Environmental Policy", desc: "Fully compliant with NEEMA environmental laws and regulations." },
  { title: "Financial Integrity",      desc: "Competitive pricing in KES (exclusive of VAT). 30-day payment terms upon invoice." },
  { title: "Warranty",  desc: " We offer a comprehensive warranty of One Year (1 year) on all work or services provided."},
  { title: "Guarantee", desc: "We guarantee the quality of our work and services:defending, indemnifying, and holding harmless the client, their staff, and agents from any losses, damages, expenses, claims, or liabilities arising from negligent or wrongful acts or any service that does not fully comply with the terms and conditions of the agreement."},
  { title: "Pricing",  desc: "Our pricing is competitive, and all charges are denominated in Kenya Shillings. Prices quoted are exclusive of VAT"},
  { title: "Payments", desc: "Invoicing will take place upon the completion of works or services/ monthly, with payment due within 30 days of invoice receipt."},
  { title: "Audit", desc: "The company is committed to transparency and will maintain records, adhering to sound accounting procedures, for all direct and indirect costs related to the agreement."},
  { title: "Termination", desc: "Either party may terminate the agreement, in whole or in part, at any time."},
  

];

export function TeamSection() {
  return (
    <Box id="team" sx={{ py: 12, bgcolor: "background.paper" }}>
      <Container>
        {/* Section eyebrow */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1 }}>
            <Box sx={{ width: 40, height: 2, bgcolor: "var(--color-green)" }} />
            <Typography sx={{ color: "var(--color-green)", fontWeight: "bold", textTransform: "uppercase", letterSpacing: 2, fontSize: "0.875rem" }}>
              Leadership
            </Typography>
          </Box>
          <Typography variant="h3" sx={{ fontWeight: 800, mb: 8 }}>Meet the Director</Typography>
        </motion.div>

        {/* Director card */}
        <Grid container spacing={6} sx={{ alignItems: "center", mb: 10 }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <Box sx={{ position: "relative" }}>
                <Box
                  component="img"
                  src={DIRECTOR.photo}
                  alt={`${DIRECTOR.name} — ${DIRECTOR.role}`}
                  sx={{
                    width: "100%",
                    maxWidth: 400,
                    display: "block",
                    objectFit: "cover",
                    aspectRatio: "4/5",
                    border: "1px solid",
                    borderColor: "divider",
                  }}
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = ""; }}
                />
                {/* Blue accent corner */}
                <Box sx={{ position: "absolute", bottom: -12, right: -12, width: 80, height: 80, bgcolor: "primary.main", zIndex: -1 }} />
              </Box>
            </motion.div>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <Typography sx={{ color: "var(--color-green)", fontWeight: 700, textTransform: "uppercase", letterSpacing: 2, fontSize: "0.85rem", mb: 1 }}>
                {DIRECTOR.role}
              </Typography>
              <Typography variant="h2" sx={{ fontWeight: 800, mb: 3 }}>{DIRECTOR.name}</Typography>
              <Box sx={{ width: 48, height: 3, bgcolor: "primary.main", mb: 3 }} />
              <Typography sx={{ color: "text.secondary", fontSize: "1.125rem", lineHeight: 1.8, mb: 4 }}>
                {DIRECTOR.specialty}
              </Typography>
              <Typography sx={{ color: "text.secondary", fontSize: "1.125rem", lineHeight: 1.8 }}>
                Under his leadership, Befra Engineering Services has grown into a trusted partner for international organisations including the UN, major hospitals, and industrial power plant operators — delivering on time, on spec, and within budget for over 25 years.
              </Typography>
            </motion.div>
          </Grid>
        </Grid>

        {/* Corporate Policies */}
        <Typography variant="h3" sx={{ mb: 4, fontWeight: 800 }}>Company Policy</Typography>
        <Grid container spacing={3}>
          {POLICIES.map((policy, i) => (
            <Grid key={i} size={{ xs: 12, sm: 6, lg: 4 }}>
              <motion.div  style={{ height: "100%" }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Box sx={{ display: "flex", gap: 2, p: 2.5, border: "1px solid", borderColor: "divider", height: "100%", "&:hover": { borderColor: "primary.main", bgcolor: "rgba(21,101,192,0.03)" }, transition: "all 0.2s" }}>
                  <ShieldCheck sx={{ color: "primary.main", mt: 0.25, flexShrink: 0 }} />
                  <Box>
                    <Typography sx={{ fontWeight: 700, mb: 0.5 }}>{policy.title}</Typography>
                    <Typography variant="body2" color="text.secondary">{policy.desc}</Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
