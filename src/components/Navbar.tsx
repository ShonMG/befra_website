import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "@/assets/logo-removebg.png";
import {
  Public as Globe2,
  LocationOn as MapPin,
  Email as Mail,
  Menu as MenuIcon,
  Close as CloseIcon,
} from "@mui/icons-material";
import {
  AppBar, Toolbar, Button, Box, Typography, IconButton,
  Drawer, List, ListItem, ListItemButton, ListItemText, Divider,
} from "@mui/material";

const NAV_LINKS = [
  { label: "About",    href: "#about",    id: "about",    testId: "link-nav-about" },
  { label: "Services", href: "#services", id: "services", testId: "link-nav-services" },
  { label: "Projects", href: "#projects", id: "projects", testId: "link-nav-projects" },
  { label: "Contact",  href: "#contact",  id: "contact",  testId: "link-nav-contact" },
];

interface NavbarProps {
  activeSection: string;
}

export function Navbar({ activeSection }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setNavScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.div
        animate={{
          backgroundColor: navScrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0)",
          boxShadow: navScrolled ? "0 1px 16px rgba(0,0,0,0.08)" : "none",
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <AppBar
          position="static"
          elevation={0}
          sx={{
            background: "transparent",
            backdropFilter: "blur(10px)",
            borderBottom: navScrolled
              ? "1px solid rgba(0,0,0,0.06)"
              : "1px solid rgba(0,0,0,0.05)",
          }}
        >
          <Toolbar sx={{ justifyContent: "space-between", height: 80, px: { xs: 2, md: 6 } }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box
                component="img"
                src={logo}
                alt="BEFRA logo"
                sx={{ width: 100, height: 100, objectFit: "contain" }}
              />
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 800, lineHeight: 1.1, color: "text.primary" }}>BEFRA</Typography>
                <Typography sx={{ fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: 2, color: "text.secondary", fontWeight: 600 }}>Engineering Services Limited</Typography>
              </Box>
            </Box>

            <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 4 }}>
              {NAV_LINKS.map(link => {
                const isActive = activeSection === link.id;
                return (
                  <Box key={link.href} sx={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <a
                      href={link.href}
                      style={{ textDecoration: "none", color: isActive ? "#1565C0" : "#1a1c24", fontWeight: isActive ? 700 : 500, transition: "color 0.2s" }}
                      data-testid={link.testId}
                    >
                      {link.label}
                    </a>
                    <motion.div
                      animate={{ scaleX: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                      transition={{ duration: 0.25 }}
                      style={{ transformOrigin: "center", height: 2, width: "100%", background: "#1565C0", borderRadius: 2, marginTop: 2 }}
                    />
                  </Box>
                );
              })}
              <Button href="#contact" variant="contained" color="primary" sx={{ px: 3, py: 1 }} data-testid="button-nav-quote">
                Request Quote
              </Button>
            </Box>

            <IconButton
              onClick={() => setMobileOpen(true)}
              sx={{ display: { xs: "flex", md: "none" }, color: "text.primary" }}
              aria-label="Open navigation menu"
              data-testid="button-mobile-menu"
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </motion.div>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{ sx: { width: 280, bgcolor: "background.paper" } }}
        data-testid="drawer-mobile-nav"
      >
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", px: 3, py: 2.5, borderBottom: "1px solid", borderColor: "divider" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Box sx={{ width: 32, height: 32, bgcolor: "primary.main", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: "bold", fontSize: "1rem" }}>
              B
            </Box>
            <Typography sx={{ fontWeight: 800, fontSize: "1rem", letterSpacing: 1 }}>BEFRA</Typography>
          </Box>
          <IconButton onClick={() => setMobileOpen(false)} size="small" aria-label="Close menu" data-testid="button-close-mobile-menu">
            <CloseIcon />
          </IconButton>
        </Box>

        <List sx={{ px: 1, py: 2, flexGrow: 1 }}>
          {NAV_LINKS.map((link, i) => {
            const isActive = activeSection === link.id;
            return (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06, duration: 0.3 }}
              >
                <ListItem disablePadding>
                  <ListItemButton
                    component="a"
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    sx={{
                      py: 1.5, px: 2, borderRadius: 1,
                      bgcolor: isActive ? "rgba(21,101,192,0.08)" : "transparent",
                      borderLeft: isActive ? "3px solid" : "3px solid transparent",
                      borderColor: isActive ? "primary.main" : "transparent",
                      "&:hover": { bgcolor: "primary.main", color: "white", "& .MuiListItemText-primary": { color: "white" } },
                    }}
                    data-testid={link.testId}
                  >
                    <ListItemText
                      primary={link.label}
                      slotProps={{ primary: { sx: { fontWeight: isActive ? 700 : 600, fontSize: "1rem", letterSpacing: 0.5, color: isActive ? "primary.main" : "text.primary" } } }}
                    />
                  </ListItemButton>
                </ListItem>
              </motion.div>
            );
          })}
        </List>

        <Divider />
        <Box sx={{ p: 3 }}>
          <Button
            href="#contact"
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            onClick={() => setMobileOpen(false)}
            sx={{ py: 1.5, fontWeight: 700 }}
            data-testid="button-mobile-quote"
          >
            Request Quote
          </Button>
          <Box sx={{ mt: 3, pt: 3, borderTop: "1px solid", borderColor: "divider", display: "flex", flexDirection: "column", gap: 1 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <MapPin fontSize="small" sx={{ color: "primary.main" }} />
              <Typography variant="body2" color="text.secondary">Nairobi, Kenya</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <Mail fontSize="small" sx={{ color: "primary.main" }} />
              <Typography variant="body2" color="text.secondary">befraeng.services@gmail.com</Typography>
            </Box>
            {/* <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <Globe2 fontSize="small" sx={{ color: "primary.main" }} />
              <Typography variant="body2" color="text.secondary">UNGM No. 362091</Typography>
            </Box> */}
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
