import { motion } from "framer-motion";
import { Link } from "wouter";
import logo from "@/assets/logo-removebg.png";

import {
  LocationOn as MapPin,
  Email as Mail,
  Phone,
  KeyboardArrowUp,
  LinkedIn,
  Facebook,
  Instagram,
} from "@mui/icons-material";
import { Box, Container, Grid, Typography, IconButton } from "@mui/material";

const QUICK_LINKS = [
  { label: "About Us",       to: "/about" },
  { label: "Capabilities",   to: "/services" },
  { label: "Past Projects",  to: "/projects" },
  { label: "Health & Safety", to: "/services" },
  { label: "Products", to: "/products" }, 
  { label: "Blog", to: "/blog" },
];

// TODO: replace "#" with real profile URLs when ready
const SOCIAL_LINKS = [
  { label: "LinkedIn",  href: "#", icon: LinkedIn },
  { label: "Facebook",  href: "#", icon: Facebook },
  { label: "Instagram", href: "#", icon: Instagram },
 
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box
      component="footer"
      sx={{ bgcolor: "secondary.main", color: "white", py: 8, borderTop: "8px solid", borderColor: "var(--color-green)" }}
    >
      <Container>
        <Grid container spacing={6} sx={{ mb: 6, borderBottom: "1px solid rgba(255,255,255,0.1)", pb: 6 }}>
          <Grid size={{ xs: 12, lg: 6 }}>
            <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
              <Box sx={{ display: "flex", gap: 2, alignItems: "center", mb: 3, cursor: "pointer" }}>
                <Box
                  component="img"
                  src={logo}
                  alt="BEFRA logo"
                  sx={{ width: 56, height: 56, objectFit: "contain" }}
                />
                <Typography variant="h5" fontWeight="bold">BEFRA Engineering Services Limited</Typography>
              </Box>
            </Link>
            <Typography sx={{ color: "rgba(255,255,255,0.6)", mb: 3, maxWidth: 400 }}>
              Leading engineering service provider specializing in HVAC, Mechanical, Electrical, and Fabrication works across the region.
            </Typography>

            <Box sx={{ display: "flex", gap: 1.5 }}>
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <motion.div key={label} whileHover={{ y: -3 }} whileTap={{ scale: 0.9 }}>
                  <IconButton
                    component="a"
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
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
                    <Icon fontSize="small" />
                  </IconButton>
                </motion.div>
              ))}
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6, lg: 3 }}>
            <Typography variant="h6" fontWeight="bold" mb={3}>Contact</Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2, color: "rgba(255,255,255,0.6)", fontSize: "0.875rem" }}>
              <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
                <MapPin fontSize="small" sx={{ color: "primary.main" }} /> Nairobi, Republic of Kenya
              </Box>
              <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
                <Phone fontSize="small" sx={{ color: "primary.main" }} /> +254 (0) 721409342
              </Box>
              <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
                <Mail fontSize="small" sx={{ color: "primary.main" }} /> info@befraengineering.com
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6, lg: 3 }}>
            <Typography variant="h6" fontWeight="bold" mb={3}>Quick Links</Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, color: "rgba(255,255,255,0.6)", fontSize: "0.875rem" }}>
              {QUICK_LINKS.map(link => (
                <Link key={link.label} href={link.to} style={{ color: "inherit", textDecoration: "none" }}>
                  {link.label}
                </Link>
              ))}
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
                onClick={scrollToTop}
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