import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import theme from "./theme";

import { ScrollToTop } from "@/components/ScrollToTop";
import { WhatsAppFAB } from "@/components/WhatsAppFAB";


import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

import NotFound   from "@/pages/not-found";
import Home       from "@/pages/Home";
import AboutPage    from "@/pages/AboutPage";
import ServicesPage from "@/pages/ServicesPage";
import ProductsPage from "@/pages/ProductsPage";
import ProjectsPage from "@/pages/ProjectsPage";
import ContactPage  from "@/pages/ContactsPage";
import BlogPage     from "@/pages/BlogPage";
import BlogPostPage from "@/pages/BlogPostPage";
import { HelmetProvider } from "react-helmet-async";


const queryClient = new QueryClient();

function Router() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <Box sx={{ minHeight: "100vh", overflowX: "hidden" }}>
          <ScrollToTop />
          <Navbar />
          <Switch>
            <Route path="/"         component={Home} />
            <Route path="/about"    component={AboutPage} />
            <Route path="/services" component={ServicesPage} />
            <Route path="/products" component={ProductsPage} />
            <Route path="/projects" component={ProjectsPage} />
            {/* <Route path="/team"     component={TeamPage} /> */}
            <Route path="/contact"  component={ContactPage} />
            <Route path="/blog"       component={BlogPage} />
            <Route path="/blog/:slug" component={BlogPostPage} />
            <Route                  component={NotFound} />
          </Switch>
          <Footer />
          <WhatsAppFAB />
        </Box>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;