import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const CTASection = () => {
  const whatsappNumber = "5511995193094";
  const whatsappMessage = encodeURIComponent("Olá! Quero cuidar da minha saúde com o DIM+ Saúde!");

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <ScrollReveal>
          <div className="gradient-primary rounded-3xl p-12 text-center relative overflow-hidden">
            {/* Subtle background effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            
            <div className="relative z-10 space-y-6">
              <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
                Pronto para cuidar da sua saúde?
              </h2>
              <p className="text-xl text-white/80 font-light">
                Fale com nosso time agora e comece a economizar ainda hoje!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button 
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 rounded-xl"
                  asChild
                >
                  <a 
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Falar no WhatsApp
                  </a>
                </Button>
                
                <Button 
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white/30 text-white hover:bg-white/10 rounded-xl"
                  asChild
                >
                  <a href="#planos">
                    <ArrowRight className="mr-2 h-5 w-5" />
                    Ver planos
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTASection;
