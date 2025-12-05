import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroDoctor from "@/assets/hero-doctor.jpg";
import heroPerson from "@/assets/hero-person.png";

const Hero = () => {
  const whatsappNumber = "5511983730500";
  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de saber mais sobre o DIM+ Saúde."
  );

  return (
    <section className="relative min-h-[90vh] flex items-end overflow-hidden pt-24 md:pt-32">
      <div className="absolute inset-0 gradient-primary opacity-90 z-0" />

      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `url(${heroDoctor})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-light/20 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto px-4 z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 items-end gap-10">

          {/* Imagem fixa NO FINAL da seção */}
          <div className="w-full flex justify-center md:justify-start order-2 md:order-1">
            <img
              src={heroPerson}
              alt="Profissional DIM+ Saúde"
              className="w-auto max-h-[500px] object-contain drop-shadow-2xl mt-10 md:mt-0"
            />
          </div>

          {/* Texto */}
          <div className="flex flex-col items-center text-center space-y-4 md:ml-[-96px] order-1 md:order-2">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight">
              DIM<span className="text-primary-light">+</span> Saúde
            </h1>

            <p className="text-xl md:text-2xl text-white/90 font-medium leading-snug -mt-2">
              Seu cartão de acesso à saúde
            </p>

            <p className="text-lg md:text-xl text-white/80 max-w-md leading-snug -mt-2">
              Uma forma mais prática e econômica de cuidar da sua saúde e da saúde da sua família.
            </p>

            <div className="pt-1">
              <Button
                variant="float"
                size="lg"
                className="bg-[#0A2A43] text-white hover:bg-[#091f33] shadow-hover"
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

            <div className="grid grid-cols-2 gap-4 pt-4 border-2 border-white/20 rounded-3xl p-4 pl-6 backdrop-blur-sm bg-white/5 w-full max-w-sm">
              {[
                { value: "Clínico geral", label: "ilimitado" },
                { value: "Telemedicina", label: "para titular" },
                { value: "Até 5", label: "dependentes" },
                { value: "Descontos", label: "em exames e farmácias" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="rounded-xl p-5 bg-white/10 border border-white/20 shadow-md backdrop-blur-md text-center hover:bg-white/20"
                >
                  <div className="text-xl font-bold text-white">{stat.value}</div>
                  <div className="text-white/80 mt-1 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
