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
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-24 md:pt-32">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-primary opacity-90 z-0" />

      {/* Background image with overlay */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `url(${heroDoctor})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Círculos animados */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-light/20 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto px-4 z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">

          {/* Imagem à esquerda */}
          <div className="w-full flex justify-center md:justify-start">
            <img
              src={heroPerson}
              alt="Profissional DIM+ Saúde"
              className="h-[90%] max-h-[550px] w-auto object-contain drop-shadow-2xl"
            />
          </div>

          {/* Conteúdo à direita */}
          <div className="space-y-6 text-left animate-fade-in-up md:-ml-[190px] -ml-[140px]">

            {/* Título */}
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              DIM<span className="text-primary-light">+</span> Saúde
            </h1>

            {/* Subtítulo */}
            <p className="text-xl md:text-2xl text-white/90 font-medium">
              Seu cartão de acesso à saúde
            </p>

            {/* Descrição */}
            <p className="text-lg md:text-xl text-white/80 leading-snug max-w-md">
              Uma forma mais prática e econômica de cuidar da sua saúde e da saúde da sua família.
            </p>

            {/* Botão azul escuro */}
            <div className="pt-2">
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

            {/* Cards em QUADRO */}
            <div className="grid grid-cols-2 gap-4 pt-6 max-w-md border-2 border-white/20 rounded-3xl p-4 backdrop-blur-sm bg-white/5">
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
                  <div className="text-xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-white/80 mt-1 text-sm">
                    {stat.label}
                  </div>
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
