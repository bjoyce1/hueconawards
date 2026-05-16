import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Awards from "./pages/Awards";
import Conference from "./pages/Conference";
import Artists from "./pages/Artists";
import Culinary from "./pages/Culinary";
import Schedule from "./pages/Schedule";
import Sponsors from "./pages/Sponsors";
import Tickets from "./pages/Tickets";
import Presenters from "./pages/Presenters";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import MobileBottomNav from "./components/MobileBottomNav";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/conference" element={<Conference />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/culinary" element={<Culinary />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/presenters" element={<Presenters />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <MobileBottomNav />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
