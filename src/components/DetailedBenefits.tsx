import { Video, FileText, Gift, Zap } from "lucide-react";

const DetailedBenefits = () => {
  const benefits = [
    {
      icon: Video,
      title: "Consultas e Telemedicina",
      description: "Acesso a consultas médicas presenciais e online, com especialistas qualificados.",
    },
    {
      icon: FileText,
      title: "Exames com Desconto",
      description: "Realize exames e procedimentos com até 70% de desconto em laboratórios credenciados.",
    },
    {
      icon: Gift,
      title: "Clube de Benefícios",
      description: "Descontos exclusivos em farmácias, academias, óticas e muito mais.",
    },
    {
      icon: Zap,
      title: "Sem Carência",
      description: "Utilize seus benefícios imediatamente após a ativação do cartão.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Benefícios do DIM+ Saúde
          </h2>
          <p className="text-xl text-muted-foreground">
            Tenha acesso a uma rede completa de serviços de saúde com economia e qualidade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl bg-gradient-card border border-border/50 p-8 hover:border-primary/50 transition-smooth"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center shadow-float group-hover:scale-110 transition-smooth">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DetailedBenefits;
