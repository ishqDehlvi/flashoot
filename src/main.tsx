import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Router, Route } from "wouter";
import Features from "./pages/Features";
import Press from "./pages/Press";
import AppShowcase from "./pages/App";
import Patent from "./pages/Patent";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import ComingSoon from "./pages/ComingSoon";
import Discover from "./pages/Discover";
import Journey from "./pages/Journey";
import WeddingPackages from "./pages/WeddingPackages";
import CorporatePackages from "./pages/CorporatePackages";
import OneDayPackages from "./pages/OneDayPackages";
import Enquiry from "./pages/Enquiry";
import "./index.css";
import Privacy from "./pages/privacy";
import Terms from "./pages/terms";
import Cookies from "./pages/cookies";
import Partner from "./pages/Partner";
import Landing from "./pages/Landing";
import OurStory from "./pages/OurStory";
import Test from "./pages/test";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router>
        <Route path="/" component={Landing} />
        <Route path="/coming-soon" component={ComingSoon} />
        <Route path="/discover" component={Discover} />
        <Route path="/features" component={Features} />
        <Route path="/press" component={Press} />
        <Route path="/app" component={AppShowcase} />
        <Route path="/patent" component={Patent} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/:slug" component={BlogPost} />
        <Route path="/contact" component={Contact} />
        <Route path="/journey" component={Journey} />
        <Route path="/wedding-packages" component={WeddingPackages} />
        <Route path="/corporate-packages" component={CorporatePackages} />
        <Route path="/one-day-packages" component={OneDayPackages} />
        <Route path="/enquiry" component={Enquiry} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/terms" component={Terms} />
        <Route path="/cookies" component={Cookies} />
        <Route path="/partner" component={Partner} />
        <Route path="/landing" component={Landing} />
        <Route path="/our-story" component={OurStory} />
        <Route path="/test" component={Test} />
      </Router>
    </QueryClientProvider>
  </StrictMode>
);
