import { Shield, TrendingDown, Zap, Users, MapPin, Headphones } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const WhyChoose = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Confiança e Segurança",
      description: "Rede credenciada com profissionais qualificados em Osasco e região",
    },
    {
      icon: TrendingDown,
      title: "Economia Real",
      description: "Até 70% de desconto em consultas, exames e procedimentos",
    },
    {
      icon: Zap,
      title: "Sem Carência",
      description: "Use seus benefícios imediatamente após a ativação",
    },
    {
      icon: Users,
      title: "Para Toda Família",
      description: "Planos que cabem no seu bolso e atendem todos",
    },
    {
      icon: MapPin,
      title: "Cobertura Regional",
      description: "Unidades em Osasco, Itapevi e Cajamar",
    },
    {
      icon: Headphones,
      title: "Suporte Dedicado",
      description: "Atendimento rápido e humanizado quando você precisar",
    },
  ];

  return (
    <section className="py-24 px-4 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-4 tracking-tight">
              Por que escolher o DIM+ Saúde?
            </h2>
            <p className="text-xl text-muted-foreground font-light">
              Mais de 50 mil famílias já confiam no DIM+ para cuidar da sua saúde
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <ScrollReveal key={index} delay={index * 80}>
                <div className="group relative">
                  <div className="relative bg-card rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-border/30 hover:border-primary/30 hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {reason.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed font-light">
                      {reason.description}
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

export default WhyChoose;
