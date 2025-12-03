import { CreditCard, Mail, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      icon: CreditCard,
      title: "Escolha o plano",
      description: "Selecione o plano que melhor se adapta às suas necessidades e entre em contato conosco.",
    },
    {
      number: "2",
      icon: Mail,
      title: "Receba seu cartão",
      description: "Após a contratação, você receberá seu cartão DIM+ Saúde rapidamente pelo correio.",
    },
    {
      number: "3",
      icon: CheckCircle,
      title: "Aproveite os benefícios",
      description: "Comece a usar imediatamente em nossa rede credenciada. Sem carência!",
    },
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Como Funciona?
          </h2>
          <p className="text-xl text-muted-foreground">
            Em apenas 3 passos simples, você já pode ter acesso a todos os benefícios
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index}
                className="relative"
              >
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-20 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary to-primary-light" />
                )}
                
                <div className="relative bg-card rounded-3xl p-8 text-center shadow-card hover:shadow-hover transition-smooth border border-border/50 hover:border-primary/50">
                  {/* Number badge */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-xl shadow-float">
                    {step.number}
                  </div>
                  
                  <div className="w-20 h-20 rounded-2xl gradient-secondary flex items-center justify-center mx-auto mb-6 mt-4 shadow-float">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
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

export default HowItWorks;
