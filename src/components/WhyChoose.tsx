import { Shield, TrendingDown, Zap, Users, MapPin, Headphones } from "lucide-react";

const WhyChoose = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Confiança e Segurança",
      description: "Rede credenciada com profissionais qualificados em todo Brasil",
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
      title: "Cobertura Nacional",
      description: "Milhares de estabelecimentos credenciados em todo país",
    },
    {
      icon: Headphones,
      title: "Suporte Dedicado",
      description: "Atendimento rápido e humanizado quando você precisar",
    },
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Por que escolher o DIM+ Saúde?
          </h2>
          <p className="text-xl text-muted-foreground">
            Mais de 50 mil brasileiros já confiam no DIM+ para cuidar da sua saúde
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="group relative"
              >
                <div className="absolute inset-0 gradient-primary rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity" />
                
                <div className="relative bg-card rounded-3xl p-6 shadow-card hover:shadow-hover transition-smooth border border-border/50 hover:border-primary/50 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4 shadow-float">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {reason.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {reason.description}
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

export default WhyChoose;
