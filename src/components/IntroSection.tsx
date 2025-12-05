import { Button } from "@/components/ui/button";
import { Apple, Smartphone, CheckCircle } from "lucide-react";
import appImg from "@/assets/app.png";

const AppDownload = () => {
  return (
    <section className="relative overflow-hidden py-20 bg-gradient-to-br from-[#eef1ff] via-white to-[#dfe3ff]">
      {/* ELEMENTOS DE FUNDO */}
      <div className="absolute top-20 left-10 w-[420px] h-[420px] bg-primary/20 rounded-full blur-3xl opacity-70 animate-pulse" />
      <div className="absolute bottom-10 right-10 w-[520px] h-[520px] bg-primary-light/20 rounded-full blur-3xl opacity-70 animate-pulse" />

      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 items-end gap-16" items-end gap-16">

          {/* LADO ESQUERDO — TEXTO */}
          <div className="space-y-8 animate-fade-in-up text-center md:text-right order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-dark leading-tight animate-fade-in">
              Baixe o aplicativo DIM<span className="text-primary-light">+</span> Saúde
            </h2>

            <p className="text-lg md:text-xl text-gray-600 max-w-lg md:ml-auto leading-relaxed animate-fade-in-up">
              Acesse consultas, telemedicina, carteirinha digital e rede credenciada diretamente pelo seu celular.
            </p>

            <div className="space-y-3 text-gray-700 md:ml-auto">
              {[
                "Carteirinha Digital sempre disponível",
                "Telemedicina integrada",
                "Rede credenciada com geolocalização",
                "Praticidade e rapidez no atendimento",
              ].map((txt, i) => (
                <p key={i} className="flex items-center justify-center md:justify-end gap-2 text-base animate-fade-in-up">
                  <CheckCircle className="text-primary h-5 w-5" /> {txt}
                </p>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-end animate-fade-in-up">
              <a
                href="https://play.google.com/store/apps/details?id=com.javenessi.dimmsaude&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <div className="flex items-center justify-center gap-3 bg-black text-white px-6 py-3 rounded-2xl shadow-xl hover:scale-105 hover:bg-gray-900 transition-transform">
                  <Smartphone className="h-5 w-5" />
                  <div className="text-left">
                    <span className="text-xs">Disponível no</span>
                    <p className="text-base font-semibold -mt-1">Google Play</p>
                  </div>
                </div>
              </a>

              <a
                href="https://apps.apple.com/br/app/dim-saúde/id6749953259"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <div className="flex items-center justify-center gap-3 bg-black text-white px-6 py-3 rounded-2xl shadow-xl hover:scale-105 hover:bg-gray-900 transition-transform">
                  <Apple className="h-6 w-6" />
                  <div className="text-left">
                    <span className="text-xs">Baixar na</span>
                    <p className="text-base font-semibold -mt-1">App Store</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* LADO DIREITO — IMAGEM, sempre embaixo mas com espaçamento */}
          <div className="flex justify-center md:justify-center order-1 md:order-2 self-end animate-fade-in-up mt-10 md:mt-0 md:self-end pb-6">
            <img
              src={appImg}
              alt="Aplicativo DIM+ Saúde"
              className="max-h-[650px] w-auto drop-shadow-3xl scale-110 md:scale-125 animate-float"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AppDownload;
