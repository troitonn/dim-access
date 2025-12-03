import { Video, FileText, Gift, Zap } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

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
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-4 tracking-tight">
              Benefícios do DIM+ Saúde
            </h2>
            <p className="text-xl text-muted-foreground font-light">
              Tenha acesso a uma rede completa de serviços de saúde com economia e qualidade
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="group relative overflow-hidden rounded-2xl bg-card border border-border/30 p-8 hover:border-primary/30 transition-colors">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed font-light">
                        {benefit.description}
                      </p>
                    </div>
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

export default DetailedBenefits;
