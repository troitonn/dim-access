import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const CTASection = () => {
  const whatsappNumber = "5511995193094";
  const whatsappMessage = encodeURIComponent(
    "Olá! Quero cuidar da minha saúde com o DIM+ Saúde!"
  );

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-primary/10 to-primary-dark/10">
      <div className="container mx-auto max-w-4xl">
        <div className="gradient-primary rounded-3xl p-12 text-center shadow-hover relative overflow-hidden">
          
          {/* Animated background circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Pronto para cuidar da sua saúde?
            </h2>
            <p className="text-xl text-white/90">
              Fale com nosso time agora e comece a economizar ainda hoje!
            </p>
            
            <Button 
              variant="float"
              size="lg"
              className="bg-primary text-white hover:bg-primary/90 mt-4" 
              asChild
            >
              <a 
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white flex items-center"
              >
                <MessageCircle className="mr-2 text-white" />
                Falar no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
