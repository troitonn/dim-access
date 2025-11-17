const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              DIM<span className="text-primary-light">+</span>
            </h3>
            <p className="text-lg mb-2">Saúde</p>
            <p className="text-sm text-secondary-foreground/80">
              Saúde de qualidade ao seu alcance
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li>(11) 2730-0500</li>
              <li>contato@dimeg.com.br</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Ouvidoria</h4>
            <p className="text-sm text-secondary-foreground/80">
              ouvidoria@dimeg.com.br
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Trabalhe Conosco</h4>
            <p className="text-sm text-secondary-foreground/80">
              vagas@dimeg.com.br
            </p>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8">
          <p className="text-sm text-secondary-foreground/60 mb-4">
            <strong>Aviso Legal:</strong> O cartão DIM+ Saúde não é um plano de saúde, mas oferece benefícios em consultas, exames e telemedicina.
          </p>
          <p className="text-sm text-secondary-foreground/60 text-center">
            © 2025 DIM+ Saúde. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
