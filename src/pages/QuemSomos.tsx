import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Target, Eye, Heart, Users, Award, Shield } from "lucide-react";

const QuemSomos = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20 gradient-primary">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white text-center mb-6">
            Quem Somos
          </h1>
          <p className="text-xl text-white/90 text-center max-w-3xl mx-auto">
            Conheça a história e os valores do DIM+ Saúde
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="card-elevated rounded-2xl p-8 space-y-4">
              <h2 className="text-3xl font-bold text-primary-dark">Nossa História</h2>
              <p className="text-foreground/70 text-lg leading-relaxed">
                As clínicas DIMEG, desde 2002, são compostas por equipes de profissionais preparados e aptos para atender as necessidades individuais e coletivas dos pacientes. Sabemos dos desafios que envolvem cuidar do bem mais valioso de cada pessoa, a saúde, e por isso nos capacitamos tecnicamente e investimos em estruturas cada vez mais acessíveis, modernas e humanas.
              </p>
              <p className="text-foreground/70 text-lg leading-relaxed">
                O DIM+ Saúde nasceu dessa experiência de mais de 20 anos no setor de saúde, com o objetivo de tornar o acesso a serviços médicos de qualidade mais prático e econômico para todos os brasileiros.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="card-elevated rounded-2xl p-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto gradient-primary rounded-full flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary-dark">Missão</h3>
                <p className="text-foreground/70">
                  Democratizar o acesso à saúde de qualidade, oferecendo benefícios acessíveis e atendimento humanizado.
                </p>
              </div>

              <div className="card-elevated rounded-2xl p-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto gradient-primary rounded-full flex items-center justify-center">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary-dark">Visão</h3>
                <p className="text-foreground/70">
                  Ser referência nacional em soluções de saúde acessíveis, reconhecidos pela qualidade e inovação.
                </p>
              </div>

              <div className="card-elevated rounded-2xl p-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto gradient-primary rounded-full flex items-center justify-center">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary-dark">Valores</h3>
                <p className="text-foreground/70">
                  Humanização, ética, qualidade, acessibilidade e compromisso com a saúde.
                </p>
              </div>
            </div>

            <div className="card-elevated rounded-2xl p-8 space-y-6">
              <h2 className="text-3xl font-bold text-primary-dark">Por que escolher o DIM+ Saúde?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <Users className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary-dark mb-2">Equipe Experiente</h4>
                    <p className="text-foreground/70">Mais de 20 anos de experiência em atendimento médico</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Award className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary-dark mb-2">Qualidade Reconhecida</h4>
                    <p className="text-foreground/70">Milhares de clientes satisfeitos em todo Brasil</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Shield className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary-dark mb-2">Segurança e Confiança</h4>
                    <p className="text-foreground/70">Compromisso com ética e transparência</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Heart className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary-dark mb-2">Atendimento Humanizado</h4>
                    <p className="text-foreground/70">Cuidado personalizado para cada paciente</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-elevated rounded-2xl p-8 space-y-4">
              <h2 className="text-3xl font-bold text-primary-dark">Dados Oficiais</h2>
              <div className="space-y-2 text-foreground/70">
                <p><strong>Razão Social:</strong> DIMEG Clínicas Médicas</p>
                <p><strong>CNPJ:</strong> Disponível mediante solicitação</p>
                <p><strong>Fundação:</strong> 2002</p>
                <p><strong>Atuação:</strong> Nacional</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QuemSomos;
