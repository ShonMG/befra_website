import { motion } from "framer-motion";
import { Box, Container, Grid, Typography, Card, CardMedia, CardContent, Chip, Button } from "@mui/material";
import { Link } from "wouter";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import geothermalPipes from "@/assets/projects.png";
import { PROJECTS } from "@/data/projects";

const FEATURED_COUNT = 6;

export function ProjectsSection() {
  const featured = PROJECTS.slice(0, FEATURED_COUNT);

  return (
    <Box sx={{ py: 12, bgcolor: "secondary.main", color: "white", position: "relative" }}>
      <Box sx={{ position: "absolute", inset: 0, opacity: 0.15 }}>
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
          {featured.map((project, i) => (
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
                    sx={{ height: 200, objectFit: "cover" }}
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

        <Box sx={{ display: "flex", justifyContent: "center", mt: 8 }}>
          <Link href="/projects">
            <Button
              variant="outlined"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{
                color: "white",
                borderColor: "rgba(255,255,255,0.4)",
                px: 4,
                py: 1.5,
                "&:hover": {
                  borderColor: "primary.main",
                  bgcolor: "rgba(255,255,255,0.05)",
                },
              }}
            >
              View All Projects
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
}