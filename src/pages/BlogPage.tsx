import { motion } from "framer-motion";
import { Link } from "wouter";
import { Box, Container, Grid, Typography } from "@mui/material";
import { CalendarToday, ArrowForward } from "@mui/icons-material";
import { PageHero } from "@/components/PageHero";
import { BLOG_POSTS } from "@/data/blogPosts";
import engineeringAbstract from "@/assets/about_2.png";

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Blog"
        subtitle="Engineering insights, project highlights, and company news from Befra"
        slides={[engineeringAbstract]}
      />

      <Box sx={{ py: 12, bgcolor: "background.default" }}>
        <Container>
          <Box sx={{ mb: 8 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
              <Box sx={{ width: 40, height: 2, bgcolor: "var(--color-green)" }} />
              <Typography sx={{ color: "var(--color-green)", fontWeight: "bold", textTransform: "uppercase", letterSpacing: 2, fontSize: "0.875rem" }}>
                Latest Posts
              </Typography>
            </Box>
            <Typography variant="h2" sx={{ fontSize: { xs: "2rem", md: "3rem" } }}>
              From the{" "}
              <Box component="span" sx={{ color: "primary.main" }}>Befra Team</Box>
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {BLOG_POSTS.map((post, i) => (
              <Grid size={{ xs: 12, md: 6, lg: 4 }} key={post.slug}>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  style={{ height: "100%" }}
                >
                  <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none", display: "flex", height: "100%" }}>
                    <Box
                      sx={{
                        display: "flex", flexDirection: "column", width: "100%",
                        bgcolor: "background.paper", borderRadius: 2,
                        border: "1px solid", borderColor: "divider",
                        overflow: "hidden", cursor: "pointer",
                        transition: "box-shadow .3s, transform .3s",
                        "&:hover": { boxShadow: 6, transform: "translateY(-6px)" },
                        "&:hover .read-more": { color: "primary.main" },
                        "&:hover .cover-img": { transform: "scale(1.05)" },
                      }}
                    >
                      {/* COVER IMAGE */}
                      <Box sx={{ height: 220, overflow: "hidden", flexShrink: 0 }}>
                        <Box
                          component="img"
                          src={post.coverImage}
                          alt={post.title}
                          className="cover-img"
                          sx={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform .5s ease" }}
                        />
                      </Box>

                      {/* CARD BODY */}
                      <Box sx={{ p: 3, display: "flex", flexDirection: "column", flexGrow: 1 }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.5 }}>
                          <CalendarToday sx={{ fontSize: 13, color: "text.disabled" }} />
                          <Typography sx={{ fontSize: "0.78rem", color: "text.disabled" }}>
                            {new Date(post.publishedAt).toLocaleDateString("en-KE", { day: "numeric", month: "long", year: "numeric" })}
                          </Typography>
                        </Box>
                        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, lineHeight: 1.35, color: "text.primary" }}>
                          {post.title}
                        </Typography>
                        <Typography sx={{ color: "text.secondary", fontSize: "0.9rem", lineHeight: 1.75, flexGrow: 1, mb: 2 }}>
                          {post.excerpt}
                        </Typography>
                        <Box className="read-more" sx={{ display: "flex", alignItems: "center", gap: 0.75, color: "text.secondary", fontSize: "0.875rem", fontWeight: 600, transition: "color 0.2s" }}>
                          Read More <ArrowForward sx={{ fontSize: 16 }} />
                        </Box>
                      </Box>
                    </Box>
                  </Link>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}