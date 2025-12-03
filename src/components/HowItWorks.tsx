import { CreditCard, Building2, CheckCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      icon: CreditCard,
      title: "Escolha o plano",
      description: "Selecione o plano que melhor se adapta às suas necessidades e faça sua contratação online.",
    },
    {
      number: "2",
      icon: Building2,
      title: "Retire na clínica",
      description: "Após a contratação, retire sua carteirinha em uma de nossas clínicas em Osasco, Itapevi ou Cajamar.",
    },
    {
      number: "3",
      icon: CheckCircle,
      title: "Aproveite os benefícios",
      description: "Comece a usar imediatamente em nossa rede credenciada. Sem carência!",
    },
  ];

  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-4 tracking-tight">
              Como Funciona?
            </h2>
            <p className="text-xl text-muted-foreground font-light">
              Em apenas 3 passos simples, você já pode ter acesso a todos os benefícios
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <ScrollReveal key={index} delay={index * 150}>
                <div className="relative">
                  {/* Connection line */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-20 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/50 to-transparent" />
                  )}
                  
                  <div className="relative bg-card rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-all duration-300 border border-border/30">
                    {/* Number badge */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-white font-semibold text-lg">
                      {step.number}
                    </div>
                    
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 mt-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      {step.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed font-light">
                      {step.description}
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

export default HowItWorks;
