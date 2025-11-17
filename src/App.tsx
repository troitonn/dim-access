import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import RedeCredenciada from "./pages/RedeCredenciada";
import FAQ from "./pages/FAQ";
import QuemSomos from "./pages/QuemSomos";
import PlanosDetalhados from "./pages/PlanosDetalhados";
import AreaCliente from "./pages/AreaCliente";
import SejaParceiro from "./pages/SejaParceiro";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/rede-credenciada" element={<RedeCredenciada />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/quem-somos" element={<QuemSomos />} />
          <Route path="/planos" element={<PlanosDetalhados />} />
          <Route path="/area-cliente" element={<AreaCliente />} />
          <Route path="/seja-parceiro" element={<SejaParceiro />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
