const IntroSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-6 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Somos a DIM+ SAÚDE 
          </h2>
          
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              DIM+ SAÚDE é uma solução da <span className="font-semibold text-foreground">EASYDOCTOR REPRESENTAÇÕES LTDA</span>, parte do Grupo DIMEG. Nossa missão é proporcionar acesso a serviços de saúde de qualidade por um preço justo, alcançando especialmente os mais de 70% dos brasileiros que dependem do SUS.
            </p>

            <p>
              Temos uma assinatura anual por <span className="text-primary font-semibold">R$ 79,90/mês</span>, que garante acesso a todos os benefícios do ano. Você e seus dependentes contam com clínico geral e outros serviços, sem filas e sem depender da UBS.
            </p>
            
            <p>
              Além disso, você terá acesso a um serviço particular, rápido, acessível e personalizado, feito para caber no seu bolso.
            </p>
            
            <p className="font-medium text-foreground">
              O DIM+ Saúde foi criado para quem busca qualidade, rapidez e um atendimento sem burocracia, com benefícios exclusivos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
