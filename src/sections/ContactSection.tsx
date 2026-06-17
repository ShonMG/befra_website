import { useState, type ChangeEvent, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  LocationOn as MapPin,
  Email as Mail,
  Phone,
  Send,
  CheckCircle as CheckCircle2,
  Error as AlertCircle,
} from "@mui/icons-material";
import {
  Box, Container, Grid, Button, TextField, Select, MenuItem,
  FormControl, InputLabel, Alert, CircularProgress, Typography,
} from "@mui/material";

const SERVICES_LIST = [
  "Refrigeration & Air Conditioning",
  "Mechanical Works",
  "Electrical Works",
  "Fabrication Works",
  "Building & Construction",
  "Solar Installation",
  "Generator Maintenance",
  "Other / General Enquiry",
];

type FormStatus = "idle" | "loading" | "success" | "error";

const EMPTY_FORM = { name: "", company: "", email: "", phone: "", service: "", location: "", message: "" };

export function ContactSection() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | { name?: string; value: unknown }>) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name) setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json() as { success?: boolean; error?: string };
      if (!res.ok || !data.success) {
        throw new Error(data.error ?? "Submission failed. Please try again.");
      }
      setStatus("success");
      setForm(EMPTY_FORM);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <Box id="contact" sx={{ py: 12, bgcolor: "background.default" }}>
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="mb-10"
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="flex items-center gap-3 mb-4">
            <Box sx={{ width: 40, height: 2, bgcolor: "var(--color-green)" }} />
            <Typography sx={{ color: "var(--color-green)", fontWeight: "bold", textTransform: "uppercase", letterSpacing: 2, fontSize: "0.875rem" }}>
              Get In Touch
            </Typography>
          </motion.div>
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
            <Typography variant="h2" sx={{ fontSize: { xs: "2.25rem", md: "3rem" } }}>Request a Quote</Typography>
          </motion.div>
        </motion.div>

        <Grid container spacing={6} sx={{ alignItems: "flex-start" }}>
          <Grid size={{ xs: 12, lg: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              className="flex flex-col gap-6"
            >
              <Box sx={{ border: "2px solid", borderColor: "divider", overflow: "hidden", height: 340, boxShadow: 3 }}>
                <iframe
                  title="Befra Engineering Services Limited Location — Nairobi, Kenya"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=36.72%2C-1.35%2C36.92%2C-1.18&layer=mapnik&marker=-1.286389%2C36.817223"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: "block" }}
                  loading="lazy"
                  data-testid="map-nairobi"
                />
              </Box>

              <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 4 }}>
                  <Box sx={{ p: 2, border: "1px solid", borderColor: "divider", bgcolor: "rgba(0,0,0,0.02)", height: "100%" }}>
                    <MapPin sx={{ color: "primary.main", mb: 1 }} />
                    <Typography sx={{ fontSize: "0.75rem", fontWeight: "bold", textTransform: "uppercase", color: "text.secondary", mb: 0.5 }}>Location</Typography>
                    <Typography sx={{ fontSize: "0.875rem", fontWeight: 600 }}>Nairobi, Kenya</Typography>
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, sm: 4 }}>
                  <Box sx={{ p: 2, border: "1px solid", borderColor: "divider", bgcolor: "rgba(0,0,0,0.02)", height: "100%" }}>
                    <Mail sx={{ color: "primary.main", mb: 1 }} />
                    <Typography sx={{ fontSize: "0.75rem", fontWeight: "bold", textTransform: "uppercase", color: "text.secondary", mb: 0.5 }}>Email</Typography>
                    <Typography
                      component="a"
                      href="mailto:info@befraengineering.com"
                      sx={{ fontSize: "0.875rem", fontWeight: 600, color: "text.primary", textDecoration: "none", wordBreak: "break-word",  overflowWrap: "anywhere",  display: "block",  "&:hover": { color: "primary.main" } }}
                      data-testid="link-email"
                    >
                      befraeng.services@gmail.com
                    </Typography>
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, sm: 4 }}>
                  <Box sx={{ p: 2, border: "1px solid", borderColor: "divider", bgcolor: "rgba(0,0,0,0.02)", height: "100%" }}>
                    <Phone sx={{ color: "primary.main", mb: 1 }} />
                    <Typography sx={{ fontSize: "0.75rem", fontWeight: "bold", textTransform: "uppercase", color: "text.secondary", mb: 0.5 }}>Office Line</Typography>
                    <Typography sx={{ fontSize: "0.875rem", fontWeight: 600 }}>0721409324</Typography>
                  </Box>
                </Grid>
              </Grid>

              <Box sx={{ p: 3, borderLeft: "4px solid", borderColor: "primary.main", bgcolor: "rgba(21,101,192,0.05)" }}>
                <Typography variant="body2" color="text.secondary">
                  <Typography component="span" fontWeight="bold" color="text.primary">1-Year Warranty</Typography> on all works. Competitive pricing in Kenya Shillings (exclusive of VAT). Payment due within 30 days of invoice.
                </Typography>
              </Box>
            </motion.div>
          </Grid>

          <Grid size={{ xs: 12, lg: 6 }}>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }}>
              {status === "success" ? (
                <Box
                  sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", py: 10, border: "2px solid", borderColor: "rgba(21,101,192,0.3)", bgcolor: "rgba(21,101,192,0.05)", gap: 2 }}
                  data-testid="form-success"
                >
                  <CheckCircle2 sx={{ fontSize: 56, color: "primary.main" }} />
                  <Typography variant="h4" fontWeight="bold">Quote Request Sent</Typography>
                  <Typography color="text.secondary" sx={{ maxWidth: 300 }}>
                    Thank you. Our team will review your request and get back to you promptly.
                  </Typography>
                  <Button variant="contained" color="secondary" onClick={() => setStatus("idle")} sx={{ mt: 2 }} data-testid="button-send-another">
                    Send Another Request
                  </Button>
                </Box>
              ) : (
                <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2.5 }} data-testid="form-quote">
                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField required fullWidth id="name" name="name" label="Full Name" placeholder="John Kamau" value={form.name} onChange={handleChange} data-testid="input-name" />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField fullWidth id="company" name="company" label="Company / Organisation" placeholder="UNHCR, MP Shah Hospital…" value={form.company} onChange={handleChange} data-testid="input-company" />
                    </Grid>
                  </Grid>
                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField required fullWidth type="email" id="email" name="email" label="Email" placeholder="you@example.com" value={form.email} onChange={handleChange} data-testid="input-email" />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField fullWidth type="tel" id="phone" name="phone" label="Phone" placeholder="+254 7XX XXX XXX" value={form.phone} onChange={handleChange} data-testid="input-phone" />
                    </Grid>
                  </Grid>
                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <FormControl fullWidth>
                        <InputLabel id="service-label">Service Required</InputLabel>
                        <Select labelId="service-label" id="service" name="service" value={form.service} label="Service Required" onChange={handleChange} data-testid="select-service">
                          <MenuItem value=""><em>Select a service…</em></MenuItem>
                          {SERVICES_LIST.map(s => <MenuItem key={s} value={s}>{s}</MenuItem>)}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField fullWidth id="location" name="location" label="Site / Location" placeholder="Nairobi, Kakuma, Naivasha…" value={form.location} onChange={handleChange} data-testid="input-location" />
                    </Grid>
                  </Grid>
                  <TextField
                    required fullWidth multiline rows={5}
                    id="message" name="message" label="Project Description"
                    placeholder="Describe your project, scope of work, and any specific requirements…"
                    value={form.message} onChange={handleChange} data-testid="textarea-message"
                  />

                  {status === "error" && (
                    <Alert severity="error" icon={<AlertCircle />} data-testid="form-error">{errorMsg}</Alert>
                  )}

                  <Button
                    type="submit" variant="contained" color="primary"
                    disabled={status === "loading"} size="large"
                    sx={{ py: 2, display: "flex", gap: 1 }}
                    data-testid="button-submit-quote"
                  >
                    {status === "loading"
                      ? <><CircularProgress size={20} color="inherit" /> Sending…</>
                      : <><Send /> Send Quote Request</>}
                  </Button>
                </Box>
              )}
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
