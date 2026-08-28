import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { Box, Tooltip } from "@mui/material";

const PHONE_NUMBER = "254721409342"; // 254 prefix, no + or spaces
const MESSAGE = encodeURIComponent("Hello, I'd like to enquire about Befra Engineering Services.");

export function WhatsAppFAB() {
  return (
    <Tooltip title="Chat with us on WhatsApp" placement="left">
      <Box
        component={motion.a}
        href={`https://wa.me/${PHONE_NUMBER}?text=${MESSAGE}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Befra on WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.93 }}
        sx={{
          position: "fixed",
          bottom: 28,
          right: 28,
          zIndex: 999,
          width: 56,
          height: 56,
          borderRadius: "50%",
          bgcolor: "#25D366",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 20px rgba(37,211,102,0.45)",
          cursor: "pointer",
          textDecoration: "none",
          "&:hover": {
            bgcolor: "#1ebe5d",
            boxShadow: "0 6px 28px rgba(37,211,102,0.6)",
          },
          transition: "background-color 0.2s, box-shadow 0.2s",
        }}
      >
        <FaWhatsapp size={28} color="white" />
      </Box>
    </Tooltip>
  );
}