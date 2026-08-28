import { PageHero } from "@/components/PageHero";
import { motion } from "framer-motion";
import { Box, Container, Grid, Typography, Card, CardMedia, CardContent, Chip } from "@mui/material";
import { Helmet } from "react-helmet-async";
import geothermalPipes      from "@/assets/geothermal-pipes.png";
import engineeringAbstract  from "@/assets/engineering-abstract.png";
import { SEO } from "@/components/SEO";
import { PROJECTS } from "@/data/projects";


export default function ProjectsPage() {
  return (
    <>
      <Helmet>
        <title>Our Projects | Befra Engineering Services Limited</title>
        <meta
          name="description"
          content="A track record of HVAC, mechanical, electrical, and construction projects delivered for UNHCR, IOM, hospitals, county governments, and more across Kenya."
        />
      </Helmet>
      <SEO
        title="Engineering Projects — UNHCR, Hospitals & Industrial Plants"
        description="Befra Engineering's project portfolio: UNHCR camp AC maintenance, Olkaria geothermal plant fabrication, MP Shah Hospital mechanical works, Nazareth Hospital cold stores, and solar projects across Kenya."
        keywords="UNHCR engineering Kenya, geothermal plant maintenance Kenya, hospital HVAC Kenya, engineering projects Nairobi"
        canonical="/projects"
      />
      <PageHero
        title="Our Projects"
        subtitle="Trusted by the UN, leading hospitals, and industrial power plants across Kenya"
        slides={[geothermalPipes, engineeringAbstract]}
      />

      <Box sx={{ py: 10, bgcolor: "secondary.main", color: "white" }}>
        <Container>
          <Grid container spacing={4}>
            {PROJECTS.map((project, i) => (
              <Grid size={{ xs: 12, md: 6, lg: 4 }} key={project.client}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 3) * 0.1 }}
                  style={{ height: "100%" }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      bgcolor: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: 2,
                      overflow: "hidden",
                      transition: "transform 0.25s ease, border-color 0.25s ease",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        borderColor: "rgba(255,255,255,0.25)",
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={project.image}
                      alt={project.client}
                      sx={{ height: 220, objectFit: "cover" }}
                    />
                    <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column", p: 3 }}>
                      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 1, gap: 1 }}>
                        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                          {project.client}
                        </Typography>
                        <Chip
                          label={project.value}
                          size="small"
                          sx={{
                            bgcolor: "rgba(0,0,0,0.3)",
                            color: "primary.main",
                            fontFamily: "monospace",
                            fontWeight: 600,
                          }}
                        />
                      </Box>
                      {project.sector && (
                        <Typography sx={{ color: "var(--color-green)", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, mb: 1 }}>
                          {project.sector}
                        </Typography>
                      )}
                      <Typography sx={{ color: "rgba(255,255,255,0.5)", fontSize: "0.8rem", mb: 1.5 }}>
                        {project.date}
                      </Typography>
                      <Typography sx={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem", lineHeight: 1.6 }}>
                        {project.desc}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
     
    </>
  );
}