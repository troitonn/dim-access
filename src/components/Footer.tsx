import { MessageCircle, Phone, Mail } from "lucide-react";

const Footer = () => {
  const whatsappNumber = "5511995193094";

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              DIM<span className="text-primary-light">+</span> Saúde
            </h3>
            <p className="text-sm text-secondary-foreground/70 font-light leading-relaxed">
              Saúde de qualidade ao seu alcance. Cuidando de você e sua família desde 2002.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm text-secondary-foreground/70">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                (11) 99519-3094
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                contato@dimeg.com.br
              </li>
              <li>
                <a 
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Links Úteis</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li><a href="/faq" className="hover:text-primary transition-colors">Dúvidas Frequentes</a></li>
              <li><a href="/rede-credenciada" className="hover:text-primary transition-colors">Rede Credenciada</a></li>
              <li><a href="/planos" className="hover:text-primary transition-colors">Nossos Planos</a></li>
              <li><a href="/seja-parceiro" className="hover:text-primary transition-colors">Seja um Parceiro</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Institucional</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li><a href="/quem-somos" className="hover:text-primary transition-colors">Quem Somos</a></li>
              <li><a href="mailto:ouvidoria@dimeg.com.br" className="hover:text-primary transition-colors">Ouvidoria</a></li>
              <li><a href="mailto:vagas@dimeg.com.br" className="hover:text-primary transition-colors">Trabalhe Conosco</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 pt-8">
          <p className="text-sm text-secondary-foreground/50 mb-4 font-light">
            <strong>Aviso Legal:</strong> O cartão DIM+ Saúde não é um plano de saúde, mas oferece benefícios em consultas, exames e telemedicina.
          </p>
          <p className="text-sm text-secondary-foreground/50 text-center font-light">
            © 2025 DIM+ Saúde. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
