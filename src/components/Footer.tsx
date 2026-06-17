import { motion } from "framer-motion";
import logo from "@/assets/logo-removebg.png";

import {
  LocationOn as MapPin,
  Email as Mail,
  Phone,
  KeyboardArrowUp,
} from "@mui/icons-material";
import { Box, Container, Grid, Typography, IconButton } from "@mui/material";

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{ bgcolor: "secondary.main", color: "white", py: 8, borderTop: "8px solid", borderColor: "var(--color-green)" }}
    >
      <Container>
        <Grid container spacing={6} sx={{ mb: 6, borderBottom: "1px solid rgba(255,255,255,0.1)", pb: 6 }}>
          <Grid size={{ xs: 12, lg: 6 }}>
            <Box sx={{ display: "flex", gap: 2, alignItems: "center", mb: 3 }}>
              <Box
                              component="img"
                              src={logo}
                              alt="BEFRA logo"
                              sx={{ width: 56, height: 56, objectFit: "contain" }}
                            />
              <Typography variant="h5" fontWeight="bold">BEFRA Engineering Services Limited</Typography>
            </Box>
            <Typography sx={{ color: "rgba(255,255,255,0.6)", mb: 3, maxWidth: 400 }}>
              Leading engineering service provider specializing in HVAC, Mechanical, Electrical, and Fabrication works across the region.
            </Typography>
            {/* /* <Box sx={{ display: "inline-block", px: 2, py: 1, border: "1px solid rgba(255,255,255,0.2)", fontSize: "0.875rem", fontFamily: "monospace", color: "rgba(255,255,255,0.8)" }}>
              UNGM Registration: 362091
            </Box> */}
          </Grid>

          <Grid size={{ xs: 12, md: 6, lg: 3 }}>
            <Typography variant="h6" fontWeight="bold" mb={3}>Contact</Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2, color: "rgba(255,255,255,0.6)", fontSize: "0.875rem" }}>
              <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
                <MapPin fontSize="small" sx={{ color: "primary.main" }} /> Nairobi, Republic of Kenya
              </Box>
              <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
                <Phone fontSize="small" sx={{ color: "primary.main" }} /> +254 (0) 721409324


              </Box>
              <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
                <Mail fontSize="small" sx={{ color: "primary.main" }} /> befraeng.services@gmail.com
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6, lg: 3 }}>
            <Typography variant="h6" fontWeight="bold" mb={3}>Quick Links</Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, color: "rgba(255,255,255,0.6)", fontSize: "0.875rem" }}>
              <a href="#about"    style={{ color: "inherit", textDecoration: "none" }}>About Us</a>
              <a href="#services" style={{ color: "inherit", textDecoration: "none" }}>Capabilities</a>
              <a href="#projects" style={{ color: "inherit", textDecoration: "none" }}>Past Projects</a>
              <a href="#policies" style={{ color: "inherit", textDecoration: "none" }}>Health &amp; Safety</a>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: "space-between", alignItems: "center", color: "rgba(255,255,255,0.4)", fontSize: "0.875rem", gap: 2 }}>
          <Typography variant="inherit">
            &copy; {new Date().getFullYear()} Befra Engineering Services Limited. All rights reserved.
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            <Typography variant="inherit">Incorporated July 2015. Cap 499, Section 14.</Typography>
            <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }}>
              <IconButton
                component="a"
                href="#"
                aria-label="Back to top"
                size="small"
                sx={{
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "white",
                  width: 36,
                  height: 36,
                  "&:hover": { bgcolor: "primary.main", borderColor: "primary.main" },
                  transition: "background-color 0.2s, border-color 0.2s",
                }}
              >
                <KeyboardArrowUp fontSize="small" />
              </IconButton>
            </motion.div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
