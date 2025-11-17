import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroDoctor from "@/assets/hero-doctor.jpg";
import heroPerson from "@/assets/hero-person.png";

const Hero = () => {
  const whatsappNumber = "5511983730500";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de saber mais sobre o DIM+ Saúde.");

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-primary opacity-90 z-0" />
      
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `url(${heroDoctor})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Hero Person Image - Overlaying everything */}
      <div className="absolute right-0 bottom-0 z-20 h-full w-full md:w-1/2 flex items-end justify-end pointer-events-none">
        <img 
          src={heroPerson} 
          alt="Profissional DIM+ Saúde" 
          className="h-[90%] w-auto object-contain"
        />
      </div>

      {/* Animated circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-light/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            DIM<span className="text-primary-light">+</span> Saúde
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 font-medium">
            Seu cartão de acesso à saúde
          </p>
          
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Uma forma mais prática e econômica de cuidar da sua saúde e da saúde da sua família
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              variant="float" 
              size="lg"
              className="bg-white text-primary hover:bg-white/90 shadow-hover"
              asChild
            >
              <a 
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2" />
                Fale no WhatsApp
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12">
            {[
              { value: "Clínico geral", label: "ilimitado" },
              { value: "Telemedicina", label: "para titular" },
              { value: "Até 5", label: "dependentes" },
              { value: "Descontos", label: "em exames e farmácias" },
            ].map((stat, index) => (
              <div 
                key={index}
                className="glassmorphism rounded-2xl p-6 backdrop-blur-md"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary-dark">{stat.value}</div>
                <div className="text-primary-dark/90 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
