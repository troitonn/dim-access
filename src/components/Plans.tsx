import { Button } from "@/components/ui/button";
import { Check, MessageCircle, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const Plans = () => {
  const whatsappNumber = "5511995193094";

  const plans = [
    {
      name: "DIM+ BÁSICO",
      price: "39,90",
      adhesionFee: "29,90",
      purchaseLink: "https://dimeg.clouddivision.com.br/AliancaAppNet2/Site/autenticacao/login?t=AVII&d=site%2FautoContratacaoVII&plano=1&qtmaxdep=5&tpcontratacao=2&tpplano=S&smt=4326&VDPEC=S",
      features: [
        "1 Titular e até 5 Dependentes",
        "Até 60% de desconto em consultas eletivas",
        "Até 60% de desconto em Telemedicina",
        "Até 30% de desconto em Pronto Atendimento",
        "Até 30% de desconto em exames",
        "Acesso à rede conveniada",
        "Acesso ao Clube de Benefícios",
      ],
      highlighted: false,
    },
    {
      name: "DIM+ BÁSICO PLUS",
      price: "79,90",
      adhesionFee: "29,90",
      purchaseLink: "https://dimeg.clouddivision.com.br/AliancaAppNet2/Site/autenticacao/login?t=AVII&d=site%2FautoContratacaoVII&plano=2&qtmaxdep=5&tpcontratacao=2&tpplano=S&smt=4326&VDPEC=S",
      features: [
        "1 Titular e até 5 Dependentes",
        "Pronto Atendimento ilimitado",
        "Consulta Médica eletiva ilimitada",
        "Telemedicina ilimitada",
        "Até 60% de desconto nas especialidades",
        "Até 50% de desconto em exames",
        "Acesso à rede conveniada",
        "Acesso ao Clube de Benefícios",
      ],
      highlighted: true,
    },
  ];

  return (
    <section id="planos" className="py-24 px-4 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-4 tracking-tight">
              Nossos Planos
            </h2>
            <p className="text-xl text-muted-foreground font-light">
              Escolha o cartão que combina com você
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <ScrollReveal key={index} delay={index * 150}>
              <div
                className={`relative rounded-2xl overflow-hidden bg-card ${
                  plan.highlighted 
                    ? 'ring-2 ring-primary shadow-lg' 
                    : 'border border-border/50 shadow-sm'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 right-0 gradient-primary text-white px-6 py-2 text-sm font-medium rounded-bl-2xl">
                    MAIS POPULAR
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    {plan.name}
                  </h3>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-muted-foreground text-sm">Taxa de adesão:</span>
                      <span className="text-lg font-semibold text-foreground">R$ {plan.adhesionFee}</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent">
                        R$ {plan.price}
                      </span>
                      <span className="text-muted-foreground">/mês</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">12 parcelas</p>
                  </div>

                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-foreground/80 text-sm leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3">
                    <Button 
                      variant={plan.highlighted ? "default" : "outline"}
                      size="lg"
                      className="w-full rounded-xl"
                      asChild
                    >
                      <a href={plan.purchaseLink} target="_blank" rel="noopener noreferrer">
                        <ArrowRight className="mr-2 h-4 w-4" />
                        Contratar agora
                      </a>
                    </Button>
                    
                    <Button 
                      variant="ghost"
                      size="lg"
                      className="w-full rounded-xl text-muted-foreground"
                      asChild
                    >
                      <a 
                        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Olá! Gostaria de saber mais sobre o plano ${plan.name}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Tirar dúvidas
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={300}>
          <p className="text-center text-muted-foreground mt-8 max-w-3xl mx-auto font-light">
            Ambos os planos oferecem acesso imediato após adesão. Retire sua carteirinha em uma de nossas clínicas.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Plans;
