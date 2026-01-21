import { Users, Building, Heart, Award } from "lucide-react";
import teamMedical from "@/assets/team-medical.jpg";
import { Button } from "./ui/button";
import { MessageCircle } from "lucide-react";

const AboutClinics = () => {
  const features = [
    {
      icon: Users,
      title: "Equipe Qualificada",
      description: "Profissionais preparados e aptos desde 2002",
    },
    {
      icon: Building,
      title: "Estrutura Moderna",
      description: "Clínicas acessíveis e bem equipadas",
    },
    {
      icon: Heart,
      title: "Atendimento Humanizado",
      description: "Cuidado individual e coletivo",
    },
    {
      icon: Award,
      title: "Excelência Técnica",
      description: "Capacitação contínua da equipe",
    },
  ];

  const whatsappNumber = "5511995193094";
  const whatsappMessage = encodeURIComponent("Olá! Quero saber mais sobre as clínicas DIMEG!");

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nossas Clínicas
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              As clínicas DIMEG desde <span className="text-primary font-semibold">2002</span> são compostas por equipes de profissionais preparados e aptos para atender as necessidades individuais e coletivas dos pacientes.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sabemos dos desafios que envolvem cuidar do bem mais valioso de cada pessoa, a saúde, e por isso nos capacitamos tecnicamente e investimos em estruturas cada vez mais acessíveis, modernas e humanas.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-hover">
            <img 
              src={teamMedical} 
              alt="Equipe médica DIMEG"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center p-6 bg-gradient-card rounded-2xl border border-border/50 hover:border-primary/50 transition-smooth"
              >
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mx-auto mb-4 shadow-float">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button 
            variant="float" 
            size="lg"
            asChild
          >
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2" />
              Quero saber mais!
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutClinics;
