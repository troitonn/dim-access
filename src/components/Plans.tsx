import { Button } from "@/components/ui/button";
import { Check, MessageCircle } from "lucide-react";

const Plans = () => {
  const plans = [
    {
      name: "DIM+ BÁSICO",
      price: "39,90",
      adhesionFee: "29,90",
      link: "https://dimeg.clouddivision.com.br/AliancaAppNet2/Site/autenticacao/login?t=AVII&d=site%2FautoContratacaoVII&plano=1&qtmaxdep=5&tpcontratacao=2&tpplano=S&smt=4326&VDPEC=S",
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
      link: "https://dimeg.clouddivision.com.br/AliancaAppNet2/Site/autenticacao/login?t=AVII&d=site%2FautoContratacaoVII&plano=2&qtmaxdep=5&tpcontratacao=2&tpplano=S&smt=4326&VDPEC=S",
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
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nossos Planos
          </h2>
          <p className="text-xl text-muted-foreground">
            Escolha o cartão que combina com você
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`
                relative rounded-3xl p-[2px] overflow-hidden transition-all duration-300
                ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-blue-400 to-blue-700 shadow-xl"
                    : "bg-border/50"
                }
              `}
            >
              {/* Fundo branco interno */}
              <div className="rounded-3xl bg-card p-8 h-full relative z-10">
                {plan.highlighted && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-2 text-sm font-bold rounded-bl-2xl z-20 shadow-md">
                    MAIS POPULAR
                  </div>
                )}

                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-muted-foreground">
                      Taxa de adesão:
                    </span>
                    <span className="text-2xl font-bold text-primary">
                      R$ {plan.adhesionFee}
                    </span>
                  </div>

                  {/* Preço destacado */}
                  <div className="flex items-baseline gap-2 mt-2">
                    <span
                      className="
                        text-4xl font-bold 
                        bg-gradient-to-r from-[#0057FF] to-[#00C2FF] 
                        text-white px-3 py-1 rounded-lg shadow-sm
                      "
                    >
                      R$ {plan.price}
                    </span>
                    <span className="text-muted-foreground">/mês</span>
                  </div>

                  <p className="text-sm text-muted-foreground mt-1">
                    12 parcelas
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-foreground text-sm leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Botão */}
                <Button
                  variant={plan.highlighted ? "default" : "outline"}
                  size="lg"
                  className={`w-full ${
                    plan.highlighted
                      ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:opacity-90"
                      : ""
                  }`}
                  asChild
                >
                  <a href={plan.link} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2" />
                    Quero este plano
                  </a>
                </Button>
              </div>

              {/* Brilho externo (glow) do destaque */}
              {plan.highlighted && (
                <div className="absolute inset-0 rounded-3xl bg-blue-500 blur-2xl opacity-20 z-0"></div>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-8 max-w-3xl mx-auto">
          Ambos os planos oferecem acesso imediato após adesão e são perfeitos
          para quem busca saúde acessível sem burocracia.
        </p>
      </div>
    </section>
  );
};

export default Plans;
