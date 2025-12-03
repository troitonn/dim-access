import { Stethoscope, Pill, Clock } from "lucide-react";

const BenefitsCards = () => {
  const benefits = [
    {
      icon: Stethoscope,
      title: "Consultas Gratuitas",
      description: "Clínico geral presencial e telemedicina sem custo adicional",
      gradient: "from-primary to-primary-dark",
    },
    {
      icon: Pill,
      title: "Descontos em Farmácias",
      description: "Economia garantida em medicamentos e produtos",
      gradient: "from-primary-light to-primary",
    },
    {
      icon: Clock,
      title: "Sem Carência",
      description: "Atendimento rápido e imediato quando você precisar",
      gradient: "from-primary-dark to-secondary",
    },
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative bg-card rounded-3xl p-8 shadow-card hover:shadow-hover transition-smooth hover:-translate-y-2 border border-border/50">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-6 shadow-float`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsCards;
