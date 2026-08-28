import { Link } from "wouter";
import { Box, Typography } from "@mui/material";
import { SvgIconComponent } from "@mui/icons-material";

interface SectionFloatingButtonProps {
  href: string;
  label: string;
  icon: SvgIconComponent;
}

export function SectionFloatingButton({ href, label, icon: Icon }: SectionFloatingButtonProps) {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: { xs: 16, md: 32 },
        right: { xs: 16, md: 32 },
        zIndex: 20,
      }}
    >
      <Link href={href}>
        <Box
          component="a"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            px: 2.5,
            py: 1.25,
            borderRadius: "999px",
            bgcolor: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.3)",
            backdropFilter: "blur(6px)",
            color: "red",
            textDecoration: "none",
            whiteSpace: "nowrap",
            cursor: "pointer",
            boxShadow: "0 4px 14px rgba(0,0,0,0.25)",
            transition: "all 0.25s ease",
            "&:hover": {
              bgcolor: "primary.main",
              borderColor: "primary.main",
              color: "secondary.main",
              transform: "translateY(-2px)",
            },
          }}
        >
          <Typography sx={{ fontSize: "0.85rem", fontWeight: 600, display: { xs: "none", sm: "block" } }}>
            {label}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 32,
              height: 32,
              borderRadius: "50%",
              bgcolor: "rgba(255,255,255,0.12)",
              flexShrink: 0,
            }}
          >
            <Icon fontSize="small" />
          </Box>
        </Box>
      </Link>
    </Box>
  );
}