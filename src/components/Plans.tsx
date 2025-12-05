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
                relative rounded-3xl p-[2px] overflow-hidden transition-all duration-300 group hover:shadow-lg
                ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-blue-400 to-blue-700 shadow-xl scale-[1.02]"
                    : "bg-border/50 hover:bg-blue-200/50"
                }
              `}
            >
              {/* Fundo branco interno */}
              <div className="rounded-3xl bg-card p-8 h-full relative z-10 flex flex-col">
                {plan.highlighted && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-2 text-sm font-bold rounded-bl-2xl z-20 shadow-md">
                    MAIS POPULAR
                  </div>
                )}

                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {plan.name}
                </h3>

                <div className="mb-8 pb-8 border-b border-border/50">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-muted-foreground text-sm font-medium uppercase tracking-wide">
                      Taxa de adesão:
                    </span>
                    <span className="text-lg font-semibold text-blue-600">
                      R$ {plan.adhesionFee}
                    </span>
                  </div>

                  {/* Preço com Design Clean e Moderno */}
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-muted-foreground">
                      R$
                    </span>
                    <span className="text-6xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                      {plan.price.split(",")[0]}
                    </span>
                    <div className="flex flex-col items-start leading-none">
                      <span className="text-2xl font-bold text-blue-500">
                        ,{plan.price.split(",")[1]}
                      </span>
                      <span className="text-muted-foreground font-medium text-sm">
                        /mês
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-xs text-muted-foreground mt-2 font-medium bg-blue-50 text-blue-600 inline-block px-2 py-1 rounded">
                    Parcele em até 12x
                  </p>
                </div>

                {/* Features - Flex grow para empurrar o botão para baixo */}
                <div className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center mt-0.5">
                        <Check className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="text-muted-foreground text-sm leading-relaxed font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Botão */}
                <Button
                  variant={plan.highlighted ? "default" : "outline"}
                  size="lg"
                  className={`w-full h-12 text-base font-semibold rounded-xl transition-all duration-300 ${
                    plan.highlighted
                      ? "bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-lg shadow-blue-500/25"
                      : "hover:bg-blue-50 hover:text-blue-600 border-2"
                  }`}
                  asChild
                >
                  <a href={plan.link} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 w-5 h-5" />
                    Quero este plano
                  </a>
                </Button>
              </div>

              {/* Brilho externo (glow) do destaque */}
              {plan.highlighted && (
                <div className="absolute inset-0 rounded-3xl bg-blue-500 blur-2xl opacity-10 z-0"></div>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-12 max-w-3xl mx-auto text-sm">
          Ambos os planos oferecem acesso imediato após adesão e são perfeitos
          para quem busca saúde acessível sem burocracia.
        </p>
      </div>
    </section>
  );
};

export default Plans;
