import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const IntroSection = () => {
  const whatsappNumber = "5511995193094";
  const whatsappMessage = encodeURIComponent("Olá! Quero receber mais informações sobre o DIM+ Saúde!");

  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <ScrollReveal>
          <div className="text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight tracking-tight">
              Aqui é do <span className="text-primary">DIM+ Saúde</span>, e queremos te apresentar uma forma mais prática e econômica de cuidar da sua saúde
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed font-light max-w-3xl mx-auto">
              Temos uma assinatura anual por <span className="text-primary font-semibold">R$ 79,90/mês</span>, que garante acesso a todos os benefícios do ano. Você e seus dependentes contam com clínico geral e outros serviços, sem filas e sem depender da UBS.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed font-light max-w-3xl mx-auto">
              O DIM+ Saúde foi criado para quem busca qualidade, rapidez e um atendimento sem burocracia, com benefícios exclusivos.
            </p>
            
            <div className="pt-4">
              <Button
                size="lg"
                className="rounded-xl"
                asChild
              >
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2" />
                  Quero receber mais informações 💙
                </a>
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default IntroSection;
