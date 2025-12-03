import { Button } from "@/components/ui/button";
import { Apple, Smartphone, CheckCircle } from "lucide-react";
import appImg from "@/assets/app.png";

const AppDownload = () => {
  return (
    <section className="relative overflow-hidden py-16 bg-gradient-to-br from-[#f4f6ff] via-white to-[#e9ecff]">
      
      {/* ELEMENTOS DE FUNDO */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-light/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center md:items-center gap-6">

          {/* LADO ESQUERDO — TEXTO */}
          <div className="space-y-6 animate-fade-in-up text-left md:text-center md:mx-auto">

            <h2 className="text-4xl md:text-5xl font-bold text-primary-dark leading-tight">
              Baixe o aplicativo DIM<span className="text-primary-light">+</span> Saúde
            </h2>

            <p className="text-lg md:text-xl text-gray-600 max-w-md mx-auto leading-relaxed">
              Acesse consultas, telemedicina, carteirinha digital, rede credenciada
              e diversos benefícios diretamente pelo seu celular.
            </p>

            {/* BENEFÍCIOS */}
            <div className="space-y-3 text-gray-700 md:mx-auto w-fit">
              {[
                "Carteirinha Digital sempre disponível",
                "Telemedicina integrada",
                "Rede credenciada com geolocalização",
                "Praticidade e rapidez no atendimento",
              ].map((txt, i) => (
                <p key={i} className="flex items-center gap-2 text-base justify-start md:justify-center">
                  <CheckCircle className="text-primary h-5 w-5" /> {txt}
                </p>
              ))}
            </div>

            {/* BOTÕES */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              
              {/* GOOGLE PLAY */}
              <a
                href="https://play.google.com/store/apps/details?id=com.javenessi.dimmsaude&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <div className="flex items-center justify-center gap-3 bg-black text-white px-6 py-3 rounded-xl shadow-lg hover:bg-gray-900 transition">
                  <Smartphone className="h-5 w-5" />
                  <div className="text-left">
                    <span className="text-xs">Disponível no</span>
                    <p className="text-base font-semibold -mt-1">Google Play</p>
                  </div>
                </div>
              </a>

              {/* APP STORE */}
              <a
                href="https://apps.apple.com/br/app/dim-saúde/id6749953259"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <div className="flex items-center justify-center gap-3 bg-black text-white px-6 py-3 rounded-xl shadow-lg hover:bg-gray-900 transition">
                  <Apple className="h-6 w-6" />
                  <div className="text-left">
                    <span className="text-xs">Baixar na</span>
                    <p className="text-base font-semibold -mt-1">App Store</p>
                  </div>
                </div>
              </a>

            </div>
          </div>

          {/* LADO DIREITO — IMAGEM DO APP */}
          <div className="flex justify-center md:justify-end">
            <img
              src={appImg}
              alt="Aplicativo DIM+ Saúde"
              className="max-h-[480px] w-auto drop-shadow-2xl animate-fade-in-up"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AppDownload;
