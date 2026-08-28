import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ExpandMore } from "@mui/icons-material";
import { Box, Container, Typography } from "@mui/material";

const FAQS = [
  {
    question: "What types of projects does Befra Engineering handle?",
    answer: "Befra Engineering handles a wide range of projects including HVAC installation and maintenance, mechanical works (ventilation, pumps, generators), electrical installations, steel fabrication, building & construction, and solar energy systems. We serve industrial, commercial, institutional, and agricultural clients across Kenya.",
  },
  {
    question: "Is Befra Engineering registered and certified?",
    answer: "Yes. Befra Engineering Services Limited is incorporated under the Registration of Business Names Act (Cap 499, Section 14) and is a registered vendor on the United Nations Global Marketplace (UNGM) under Registration No. 362091. We adhere to international quality and safety standards on all projects.",
  },
  {
    question: "Do you offer maintenance contracts or one-off services?",
    answer: "We offer both. Many of our long-term clients — including UNHCR and Nazareth Hospital — are on ongoing maintenance contracts spanning years. We also undertake one-off installations, repairs, and commissioning projects. Contact us to discuss the arrangement that best suits your needs.",
  },
  {
    question: "What warranty do you provide on completed works?",
    answer: "Befra Engineering provides a 1-year warranty on all works carried out. We also defend, indemnify, and hold our clients harmless against any defects arising from our workmanship within the warranty period. Pricing is competitive and quoted in Kenya Shillings, exclusive of VAT.",
  },
  {
    question: "Do you work outside Nairobi?",
    answer: "Absolutely. We have successfully delivered projects across Kenya, including Kakuma and Dadaab refugee camps, Naivasha (Olkaria Geothermal Power Plant), Limuru, Ruiru, Thika, Nakuru, Kirinyaga County, and more. We are equipped to mobilise nationally for both short-term and long-term engagements.",
  },
  {
    question: "Can you handle projects for international organisations like the UN?",
    answer: "Yes — and we have an established track record doing so. Befra Engineering has held active maintenance contracts with UNHCR since 2012 and has previously worked with IOM, UNON, and Care International, among others. Our UNGM registration (No. 362091) makes procurement straightforward for UN agencies.",
  },
  {
    question: "Do you install solar energy systems?",
    answer: "Yes. We design, supply, install, and maintain solar energy systems for commercial, institutional, and agricultural clients. This includes off-grid solar systems, solar water pumps, solar street lighting, and solar-powered cooling systems — such as the thermo-eggs cooling facility we built for Kiaga Poultry Farmers Society under the Kirinyaga County Government.",
  },
  {
    question: "How do I request a quote?",
    answer: "You can request a quote directly through our Contact page. Fill in your name, company, email, the service you need, your site location, and a brief project description — and our team will get back to you promptly. You can also reach us by phone at +254 (0) 721 409 324 or by email at info@befraengineering.com.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Box sx={{ py: 12, bgcolor: "background.paper" }} ref={ref}>
      <Container>
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <Box sx={{ textAlign: "center", maxWidth: 680, mx: "auto", mb: 8 }}>
            <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
              <Box sx={{ width: 40, height: 2, bgcolor: "var(--color-green)", mt: 1.5 }} />
            </Box>
            <Typography sx={{ color: "var(--color-green)", fontWeight: "bold", textTransform: "uppercase", letterSpacing: 2, fontSize: "0.875rem", mb: 2 }}>
              Got Questions?
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: "2.25rem", md: "3rem" }, mb: 2 }}>
              Frequently Asked{" "}
              <Box component="span" sx={{ color: "primary.main" }}>Questions</Box>
            </Typography>
            <Typography sx={{ color: "text.secondary", fontSize: "1.075rem", lineHeight: 1.7 }}>
              Answers to common questions about our services, certifications, and how we work.
            </Typography>
          </Box>
        </motion.div>

        {/* FAQ LIST */}
        <Box sx={{ maxWidth: 800, mx: "auto", display: "flex", flexDirection: "column", gap: 2 }}>
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <Box
                  sx={{
                    bgcolor: "background.default",
                    borderRadius: 2,
                    border: "1px solid",
                    borderColor: isOpen ? "primary.main" : "divider",
                    overflow: "hidden",
                    transition: "border-color 0.25s",
                    boxShadow: isOpen ? 3 : 1,
                  }}
                >
                  {/* QUESTION ROW */}
                  <Box
                    component="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    sx={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 2,
                      px: 3,
                      py: 2.5,
                      border: "none",
                      bgcolor: "transparent",
                      cursor: "pointer",
                      textAlign: "left",
                      "&:hover": { bgcolor: "rgba(0,0,0,0.02)" },
                      transition: "background-color 0.2s",
                    }}
                  >
                    <Typography sx={{ fontWeight: 600, fontSize: "1rem", color: isOpen ? "primary.main" : "text.primary", transition: "color 0.25s", lineHeight: 1.5 }}>
                      {faq.question}
                    </Typography>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ flexShrink: 0 }}
                    >
                      <ExpandMore sx={{ color: isOpen ? "primary.main" : "text.secondary", fontSize: 24 }} />
                    </motion.div>
                  </Box>

                  {/* ANSWER */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: "easeInOut" }}
                        style={{ overflow: "hidden" }}
                      >
                        <Box
                          sx={{
                            px: 3,
                            pb: 3,
                            pt: 0,
                            borderTop: "1px solid",
                            borderColor: "divider",
                          }}
                        >
                          <Typography sx={{ color: "text.secondary", lineHeight: 1.85, pt: 2, fontSize: "0.95rem" }}>
                            {faq.answer}
                          </Typography>
                        </Box>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Box>
              </motion.div>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}