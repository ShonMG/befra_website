import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { Box, Container, Typography, Button } from "@mui/material";
import { CalendarToday, ArrowBack } from "@mui/icons-material";
import { BLOG_POSTS } from "@/data/blogPosts";
import type { BlogBlock } from "@/data/blogPosts";

function PostBody({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <Box>
      {blocks.map((block, i) => {
        switch (block.type) {
          case "heading":
            return (
              <Typography key={i} variant="h4" sx={{ fontWeight: 700, mt: 5, mb: 2, color: "text.primary", fontSize: { xs: "1.4rem", md: "1.75rem" } }}>
                {block.text}
              </Typography>
            );
          case "subheading":
            return (
              <Typography key={i} variant="h5" sx={{ fontWeight: 700, mt: 4, mb: 1.5, color: "text.primary", fontSize: { xs: "1.15rem", md: "1.35rem" } }}>
                {block.text}
              </Typography>
            );
          case "paragraph":
            return (
              <Typography key={i} sx={{ fontSize: "1.05rem", lineHeight: 1.9, color: "text.secondary", mb: 3 }}>
                {block.text}
              </Typography>
            );
          case "list":
            return (
              <Box key={i} component="ul" sx={{ pl: 3, mb: 3 }}>
                {block.items?.map((item, j) => (
                  <Box key={j} component="li" sx={{ fontSize: "1.05rem", lineHeight: 1.9, color: "text.secondary", mb: 0.5 }}>
                    {item}
                  </Box>
                ))}
              </Box>
            );
          case "image":
            return (
              <Box key={i} sx={{ my: 4, borderRadius: 2, overflow: "hidden" }}>
                <Box component="img" src={block.src} alt={block.alt ?? ""} sx={{ width: "100%", objectFit: "cover", borderRadius: 2 }} />
              </Box>
            );
          default:
            return null;
        }
      })}
    </Box>
  );
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) return (
    <Box sx={{ pt: { xs: 14, md: 18 }, pb: 12, textAlign: "center" }}>
      <Container>
        <Typography variant="h4" sx={{ mb: 2 }}>Post not found</Typography>
        <Button component={Link} href="/blog" startIcon={<ArrowBack />} variant="outlined">
          Back to Blog
        </Button>
      </Container>
    </Box>
  );

  return (
    <Box sx={{ pt: { xs: 14, md: 18 }, pb: 12, bgcolor: "background.default" }}>
      <Container maxWidth="md">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>

          <Button component={Link} href="/blog" startIcon={<ArrowBack />} sx={{ mb: 4, color: "text.secondary", fontWeight: 600 }}>
            Back to Blog
          </Button>

          {/* COVER */}
          <Box sx={{ borderRadius: 2, overflow: "hidden", mb: 5, maxHeight: 440 }}>
            <Box component="img" src={post.coverImage} alt={post.title} sx={{ width: "100%", objectFit: "cover" }} />
          </Box>

          {/* DATE */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
            <CalendarToday sx={{ fontSize: 14, color: "text.disabled" }} />
            <Typography sx={{ fontSize: "0.85rem", color: "text.disabled" }}>
              {new Date(post.publishedAt).toLocaleDateString("en-KE", { day: "numeric", month: "long", year: "numeric" })}
            </Typography>
          </Box>

          {/* TITLE */}
          <Typography variant="h1" sx={{ fontSize: { xs: "1.9rem", md: "2.75rem" }, fontWeight: 800, lineHeight: 1.2, mb: 3, color: "text.primary" }}>
            {post.title}
          </Typography>

          {/* EXCERPT */}
          <Typography sx={{ fontSize: "1.15rem", color: "text.secondary", lineHeight: 1.8, mb: 5, borderLeft: "4px solid", borderColor: "primary.main", pl: 3, fontStyle: "italic" }}>
            {post.excerpt}
          </Typography>

          <Box sx={{ height: 1, bgcolor: "divider", mb: 5 }} />

          {/* BODY */}
          <PostBody blocks={post.body} />

          {/* FOOTER NAV */}
          <Box sx={{ mt: 8, pt: 4, borderTop: "1px solid", borderColor: "divider" }}>
            <Button component={Link} href="/blog" startIcon={<ArrowBack />} variant="outlined" size="large">
              Back to Blog
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}