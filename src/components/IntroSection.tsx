const IntroSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-6 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Aqui é do DIM+ Saúde
          </h2>
          
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              Temos uma assinatura anual por <span className="text-primary font-semibold">R$ 79,90/mês</span>, que garante acesso a todos os benefícios do ano. Você e seus dependentes contam com clínico geral e outros serviços, sem filas e sem depender da UBS.
            </p>
            
            <p>
              Além disso, você terá acesso a um serviço particular e personalizado que cabe no seu bolso.
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
