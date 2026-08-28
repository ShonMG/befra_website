import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Close, ChevronLeft, ChevronRight, ArrowForward } from "@mui/icons-material";
import {
  Box, Container, Grid, Card, CardContent, Typography,
  IconButton, Modal, Chip, Tab, Tabs,
} from "@mui/material";

import {
  PRODUCTS, CATEGORIES, CATEGORY_COLORS,
  type Product, type ProductCategory,
} from "@/data/products";

// ── MODAL ────────────────────────────────────────────────────────────────────

function ProductModal({ product, onClose }: { product: Product; onClose: () => void }) {
  const [activeImg, setActiveImg] = useState(0);
  const color = CATEGORY_COLORS[product.category];

  return (
    <Modal open onClose={onClose} sx={{ display: "flex", alignItems: "center", justifyContent: "center", p: { xs: 2, md: 4 } }}>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.88 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          style={{ outline: "none", width: "100%", maxWidth: 640 }}
          onClick={e => e.stopPropagation()}
        >
          <Box sx={{ bgcolor: "background.paper", borderRadius: 3, overflow: "hidden", boxShadow: 24, maxHeight: "90vh", display: "flex", flexDirection: "column" }}>

            {/* IMAGE SLIDER */}
            <Box sx={{ position: "relative", height: { xs: 230, md: 300 }, flexShrink: 0, bgcolor: "secondary.main" }}>
              <AnimatePresence mode="sync">
                <motion.img
                  key={activeImg}
                  src={product.images[activeImg]}
                  alt={product.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                />
              </AnimatePresence>

              {/* scrim */}
              <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)" }} />

              {/* category badge */}
              <Box sx={{ position: "absolute", top: 14, left: 14, zIndex: 2 }}>
                <Chip
                  label={product.category}
                  size="small"
                  sx={{ bgcolor: color, color: "white", fontWeight: 700, fontSize: "0.72rem", letterSpacing: 0.3 }}
                />
              </Box>

              {/* close */}
              <IconButton
                onClick={onClose}
                aria-label="Close"
                size="small"
                sx={{ position: "absolute", top: 12, right: 12, zIndex: 2, bgcolor: "rgba(0,0,0,0.4)", color: "white", backdropFilter: "blur(4px)", "&:hover": { bgcolor: "rgba(0,0,0,0.65)" } }}
              >
                <Close fontSize="small" />
              </IconButton>

              {/* arrows */}
              {product.images.length > 1 && (
                <>
                  <IconButton
                    onClick={() => setActiveImg(i => (i - 1 + product.images.length) % product.images.length)}
                    size="small"
                    aria-label="Previous image"
                    sx={{ position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)", zIndex: 2, bgcolor: "rgba(255,255,255,0.15)", color: "white", backdropFilter: "blur(4px)", "&:hover": { bgcolor: "primary.main" } }}
                  >
                    <ChevronLeft />
                  </IconButton>
                  <IconButton
                    onClick={() => setActiveImg(i => (i + 1) % product.images.length)}
                    size="small"
                    aria-label="Next image"
                    sx={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", zIndex: 2, bgcolor: "rgba(255,255,255,0.15)", color: "white", backdropFilter: "blur(4px)", "&:hover": { bgcolor: "primary.main" } }}
                  >
                    <ChevronRight />
                  </IconButton>

                  {/* dots */}
                  <Box sx={{ position: "absolute", bottom: 12, left: "50%", transform: "translateX(-50%)", zIndex: 2, display: "flex", gap: 0.75 }}>
                    {product.images.map((_, i) => (
                      <Box
                        key={i}
                        component="button"
                        onClick={() => setActiveImg(i)}
                        sx={{ width: i === activeImg ? 22 : 8, height: 8, borderRadius: 4, border: "none", cursor: "pointer", p: 0, bgcolor: i === activeImg ? "primary.main" : "rgba(255,255,255,0.55)", transition: "all 0.3s ease" }}
                      />
                    ))}
                  </Box>
                </>
              )}
            </Box>

            {/* SCROLLABLE CONTENT */}
            <Box sx={{ p: { xs: 3, md: 4 }, overflowY: "auto" }}>
              <Typography variant="h5" sx={{ fontWeight: 800, mb: 1, lineHeight: 1.3 }}>
                {product.name}
              </Typography>
              <Typography color="text.secondary" sx={{ fontSize: "0.95rem", lineHeight: 1.9, mb: 3 }}>
                {product.description}
              </Typography>

              {/* SPECS TABLE */}
              <Typography variant="subtitle2" sx={{ fontWeight: 700, color: "primary.main", mb: 1.5, textTransform: "uppercase", letterSpacing: 0.5 }}>
                Specifications
              </Typography>
              <Box sx={{ border: "1px solid", borderColor: "divider", borderRadius: 1.5, overflow: "hidden" }}>
                {product.specs.map((spec, i) => (
                  <Box
                    key={i}
                    sx={{
                      display: "flex",
                      borderBottom: i < product.specs.length - 1 ? "1px solid" : "none",
                      borderColor: "divider",
                    }}
                  >
                    <Box sx={{ px: 2, py: 1.25, width: "40%", bgcolor: "rgba(0,0,0,0.025)", flexShrink: 0 }}>
                      <Typography sx={{ fontSize: "0.8rem", fontWeight: 700, color: "text.secondary", textTransform: "uppercase", letterSpacing: 0.3 }}>
                        {spec.label}
                      </Typography>
                    </Box>
                    <Box sx={{ px: 2, py: 1.25, borderLeft: "1px solid", borderColor: "divider" }}>
                      <Typography sx={{ fontSize: "0.875rem", color: "text.primary", fontWeight: 500 }}>
                        {spec.value}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </motion.div>
      </AnimatePresence>
    </Modal>
  );
}

// ── SECTION ──────────────────────────────────────────────────────────────────

export function ProductsSection() {
  const [selected, setSelected]   = useState<Product | null>(null);
  const [activeTab, setActiveTab] = useState<ProductCategory | "All">("All");

  const filtered = activeTab === "All"
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeTab);

  return (
    <Box sx={{ py: 12, bgcolor: "background.paper" }}>
      <Container>

        {/* HEADER */}
        <Box sx={{ mb: 6 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
            <Box sx={{ width: 40, height: 2, bgcolor: "var(--color-green)" }} />
            <Typography sx={{ color: "var(--color-green)", fontWeight: "bold", textTransform: "uppercase", letterSpacing: 2, fontSize: "0.875rem" }}>
              Equipment & Systems
            </Typography>
          </Box>
          <Typography variant="h2" sx={{ fontSize: { xs: "2rem", md: "3rem" }, mb: 1 }}>
            Products We{" "}
            <Box component="span" sx={{ color: "error.main" }}>Supply & Install</Box>
          </Typography>
          <Typography color="text.secondary" sx={{ fontSize: "1.05rem", maxWidth: 580, lineHeight: 1.7 }}>
            Every product Befra supplies comes with professional installation, commissioning, and a 1-year warranty on parts and labour.
          </Typography>
        </Box>

        {/* CATEGORY FILTER TABS */}
        <Tabs
          value={activeTab}
          onChange={(_, val) => setActiveTab(val)}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            mb: 5,
            "& .MuiTab-root": { fontWeight: 600, fontSize: "0.85rem", textTransform: "none", minWidth: "auto", px: 2.5 },
            "& .MuiTabs-indicator": { height: 3, borderRadius: 2 },
          }}
        >
          <Tab label="All" value="All" />
          {CATEGORIES.map(cat => (
            <Tab key={cat} label={cat} value={cat} />
          ))}
        </Tabs>

        {/* GRID */}
        <Grid container spacing={3} sx={{ alignItems: "stretch" }}>
          <AnimatePresence mode="popLayout">
            {filtered.map((product, i) => {
              const color = CATEGORY_COLORS[product.category];
              return (
                <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={product.id}>
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                    style={{ height: "100%", display: "flex", flexDirection: "column" }}
                  >
                    <Card
                      onClick={() => setSelected(product)}
                      sx={{
                        display: "flex", flexDirection: "column", height: "100%",
                        overflow: "hidden", cursor: "pointer",
                        transition: "box-shadow .3s, transform .3s",
                        "&:hover": { boxShadow: 8, transform: "translateY(-6px)" },
                        "&:hover .cover-img": { transform: "scale(1.06)" },
                        "&:hover .view-more": { color: "primary.main", gap: 1 },
                      }}
                    >
                      {/* COVER IMAGE */}
                      <Box sx={{ position: "relative", height: 200, overflow: "hidden", flexShrink: 0 }}>
                        <Box
                          component="img"
                          src={product.images[0]}
                          alt={product.name}
                          className="cover-img"
                          sx={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform .5s ease" }}
                        />
                        <Box sx={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)" }} />

                        {/* category chip on image */}
                        <Box sx={{ position: "absolute", top: 12, left: 12 }}>
                          <Chip
                            label={product.category}
                            size="small"
                            sx={{ bgcolor: color, color: "white", fontWeight: 700, fontSize: "0.7rem" }}
                          />
                        </Box>
                      </Box>

                      {/* CARD BODY */}
                      <CardContent sx={{ p: 3, display: "flex", flexDirection: "column", flexGrow: 1 }}>
                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, lineHeight: 1.3, fontSize: "1rem" }}>
                          {product.name}
                        </Typography>
                        <Typography color="text.secondary" sx={{ fontSize: "0.85rem", lineHeight: 1.7, flexGrow: 1, mb: 2,
                          display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden",
                        }}>
                          {product.description}
                        </Typography>

                        {/* SPEC PREVIEW — first two specs */}
                        <Box sx={{ mb: 2, display: "flex", flexDirection: "column", gap: 0.5 }}>
                          {product.specs.slice(0, 2).map(spec => (
                            <Box key={spec.label} sx={{ display: "flex", gap: 1, fontSize: "0.78rem" }}>
                              <Typography sx={{ fontSize: "inherit", color: "text.disabled", fontWeight: 600, flexShrink: 0 }}>
                                {spec.label}:
                              </Typography>
                              <Typography sx={{ fontSize: "inherit", color: "text.secondary" }}>
                                {spec.value}
                              </Typography>
                            </Box>
                          ))}
                        </Box>

                        {/* VIEW MORE */}
                        <Box
                          className="view-more"
                          sx={{ display: "flex", alignItems: "center", gap: 0.5, color: "text.secondary", fontSize: "0.875rem", fontWeight: 700, transition: "color 0.2s, gap 0.2s", mt: "auto" }}
                        >
                          View Details <ArrowForward sx={{ fontSize: 16 }} />
                        </Box>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              );
            })}
          </AnimatePresence>
        </Grid>
      </Container>

      {/* MODAL */}
      <AnimatePresence>
        {selected && <ProductModal product={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </Box>
  );
}