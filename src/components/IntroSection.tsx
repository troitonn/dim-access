import { Button } from "@/components/ui/button";
import { Apple, Smartphone } from "lucide-react";
import appImage from "../assets/app.png";

const AppDownload = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">

        {/* --- LADO ESQUERDO: TEXTO + BOTÕES --- */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark leading-tight">
            Baixe o aplicativo DIM+ Saúde
          </h2>

          <p className="text-lg text-gray-700 max-w-lg">
            Tenha acesso a carteirinha digital, rede credenciada, autorizações,
            boletos, área do cliente, suporte e muito mais — tudo na palma da sua mão.
            Rápido, prático e seguro.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              variant="float"
              size="lg"
              className="bg-primary-dark text-white hover:bg-primary/80 w-full sm:w-auto shadow-lg"
              asChild
            >
              <a
                href="https://play.google.com/store/apps/details?id=com.javenessi.dimmsaude&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Smartphone className="mr-2 h-5 w-5" />
                Baixar na Google Play
              </a>
            </Button>

            <Button
              variant="float"
              size="lg"
              className="bg-primary-dark text-white hover:bg-primary/80 w-full sm:w-auto shadow-lg"
              asChild
            >
              <a
                href="https://apps.apple.com/br/app/dim-saúde/id6749953259"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Apple className="mr-2 h-5 w-5" />
                Baixar na App Store
              </a>
            </Button>
          </div>
        </div>

        {/* --- LADO DIREITO: IMAGEM DO APP --- */}
        <div className="flex justify-center md:justify-end">
          <img
            src={appImage}
            alt="App DIM+ Saúde"
            className="w-[85%] max-w-md drop-shadow-2xl rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
