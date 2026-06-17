import { motion } from "framer-motion";
import { Box, Container, Grid, Typography } from "@mui/material";
import geothermalPipes from "@/assets/geothermal-pipes.png";

const PROJECTS = [
  { client: "UNHCR",              date: "Aug 2012 – Present",    value: "$269,400", desc: "AC maintenance contract across Kakuma, Dadaab, Nairobi, and Alinjugur camps." },
  { client: "IOM",                date: "Jan 2003 – Feb 2017",   value: "$286,900", desc: "Comprehensive AC maintenance contract for Kakuma, Dadaab, and Nairobi facilities." },
  { client: "OR-Power 4 Inc",     date: "Aug 2012 – Present",    value: "$184,900", desc: "Heavy fabrication & maintenance at Olkaria Geothermal Power Plant, Naivasha." },
  { client: "UNON",   date: "Sep 2010 – Dec 2013", value: "$28,031", desc: "General cleaning of condensers & evaporators,Adjusting duct diffusers, additional of gases,Replacement of liquid line filter driers, replacement of worn out insulations, adjusting pressure switch, calibration of control panel and expansion valves, Nairobi"},
  { client: "Care International", date: "Aug 2014 – Dec 2015", value: "$14,600", desc: "General cleaning of indoor & outdoor unit, gas topping, sealing of leakages, replacement of worn out insulations, replacement of faulty parts, adjusting control panel and giving quality control statements, Daadab"},
  { client: "MP Shah Hospital",   date: "Nov 2006 – Aug 2014",   value: "$19,801",  desc: "Critical mechanical works including ventilation, kitchen equipment, water pumps, and AC." },
  { client: "Kirinyaga County Govt", date: "August 2022",        value: "$56,250",  desc: "Construction & solar-powered thermos egg cooling system for Kiaga Poultry Farmers Society." },
  { client: "Nazareth Hospital",  date: "Nov 2006 – Present",    value: "$96,000",  desc: "Kitchen cold stores refurbishment, laundry equipment, and generator installation in Limuru & Ruiru." },
  { client: "Family Health International (FIH)", date: "Nov 2006 – July 2011", value: "$3,960", desc: "General cleaning of indoor & outdoor unit, gas topping, sealing of leakages, replacement of worn out insulations, replacement of faulty parts, adjusting control panel and giving quality control statements, Nakuru & Nairobi"},
  { client: "Vincetian Retreat Centre", date: "2019 – Present", value: "$10,750", desc: " Installation of 15Kw solar system, Repairs & Maintenance of generators, electrical installation and Borehole water pumps maintenance, Thika & Lavington"},
];

export function ProjectsSection() {
  return (
    <Box id="projects" sx={{ py: 12, bgcolor: "secondary.main", color: "white", position: "relative" }}>
      <Box sx={{ position: "absolute", inset: 0, opacity: 0.1 }}>
        <img src={geothermalPipes} alt="Background Pipes" className="w-full h-full object-cover grayscale" />
      </Box>
      <Container sx={{ position: "relative", zIndex: 10 }}>
        <Box sx={{ mb: 8, maxWidth: 672 }}>
          <Typography sx={{ color: "var(--color-green)", fontWeight: "bold", textTransform: "uppercase", letterSpacing: 2, fontSize: "0.875rem", mb: 2 }}>
            Proven Track Record
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: "2.25rem", md: "3rem" } }}>
            Trusted by those who cannot afford failure.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {PROJECTS.map((project, i) => (
            <Grid size={{ xs: 12, md: 6 }} key={i}>
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="border-t border-white/10 pt-6"
              >
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 1 }}>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>{project.client}</Typography>
                  <Typography sx={{ color: "primary.main", fontFamily: "monospace", fontSize: "0.875rem" }}>{project.value}</Typography>
                </Box>
                <Typography sx={{ color: "rgba(255,255,255,0.6)", fontSize: "0.875rem", mb: 1.5 }}>{project.date}</Typography>
                <Typography sx={{ color: "rgba(255,255,255,0.8)" }}>{project.desc}</Typography>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
