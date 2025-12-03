import { Stethoscope, Pill, Clock } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const BenefitsCards = () => {
  const benefits = [
    {
      icon: Stethoscope,
      title: "Consultas Gratuitas",
      description: "Clínico geral presencial e telemedicina sem custo adicional",
    },
    {
      icon: Pill,
      title: "Descontos em Farmácias",
      description: "Economia garantida em medicamentos e produtos",
    },
    {
      icon: Clock,
      title: "Sem Carência",
      description: "Atendimento rápido e imediato quando você precisar",
    },
  ];

  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="group relative">
                  <div className="relative bg-card rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-border/30 hover:-translate-y-1">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {benefit.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed font-light">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsCards;
