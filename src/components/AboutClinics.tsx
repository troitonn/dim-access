import { Users, Building, Heart, Award } from "lucide-react";
import teamMedical from "@/assets/team-medical.jpg";
import { Button } from "./ui/button";
import { MessageCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

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
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-4 tracking-tight">
              Nossas Clínicas
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <ScrollReveal>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                As clínicas DIMEG desde <span className="text-primary font-semibold">2002</span> são compostas por equipes de profissionais preparados e aptos para atender as necessidades individuais e coletivas dos pacientes.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                Sabemos dos desafios que envolvem cuidar do bem mais valioso de cada pessoa, a saúde, e por isso nos capacitamos tecnicamente e investimos em estruturas cada vez mais acessíveis, modernas e humanas.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img 
                src={teamMedical} 
                alt="Equipe médica DIMEG"
                className="w-full h-full object-cover"
              />
            </div>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="text-center p-6 bg-card rounded-2xl border border-border/30 hover:border-primary/30 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground font-light">{feature.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={400}>
          <div className="text-center">
            <Button 
              size="lg"
              className="rounded-xl"
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
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AboutClinics;
