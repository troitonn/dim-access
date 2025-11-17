import { Button } from "@/components/ui/button";
import { Apple, Smartphone } from "lucide-react";
import appImage from "../assets/app.png";

const AppDownload = () => {
  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-br from-[#f8f9ff] via-white to-[#eef1ff]">
      
      {/*  --- ELEMENTOS DE FUNDO (shapes + brilhos) --- */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#3454d1]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-[#6f7cff]/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#2e3a8c]/10 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">

        {/* ======================= LADO ESQUERDO ======================= */}
        <div className="space-y-8">

          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1b2559] leading-tight drop-shadow-sm">
            Baixe o App DIM+ Saúde
          </h2>

          <p className="text-lg text-[#3b446a] max-w-lg leading-relaxed">
            Acompanhe sua carteirinha digital, rede credenciada, histórico,
            teleatendimentos, autorizações, boletos e tudo o que você precisa —
            sempre na palma da mão. Rápido, intuitivo e moderno.
          </p>

          {/* --- CARDS DE DESTAQUE --- */}
          <div className="grid grid-cols-2 gap-4 max-w-md">
            {[
              { t: "Carteirinha Digital", s: "acesso instantâneo" },
              { t: "Rede Credenciada", s: "mapa inteligente" },
              { t: "Faturas", s: "em tempo real" },
              { t: "Telemedicina", s: "24h disponível" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/70 shadow-md backdrop-blur rounded-xl p-4 border border-white/50 text-center hover:shadow-lg transition-all"
              >
                <h3 className="font-semibold text-[#1a2570]">{item.t}</h3>
                <p className="text-sm text-[#4b5589]">{item.s}</p>
              </div>
            ))}
          </div>

          {/* --- BOTÕES REAIS ESTILO PREMIUM --- */}
          <div className="flex flex-col sm:flex-row gap-5 pt-4">

            {/* Google Play Button */}
            <a
              href="https://play.google.com/store/apps/details?id=com.javenessi.dimmsaude&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <div className="
                bg-[#121212] text-white px-6 py-3 rounded-xl shadow-xl
                flex items-center gap-3 hover:scale-105 transition-all
                border border-black/40
              ">
                <Smartphone className="h-6 w-6" />
                <div className="text-left leading-tight">
                  <span className="text-xs">Disponível no</span><br />
                  <span className="text-lg font-semibold">Google Play</span>
                </div>
              </div>
            </a>

            {/* App Store Button */}
            <a
              href="https://apps.apple.com/br/app/dim-saúde/id6749953259"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <div className="
                bg-[#121212] text-white px-6 py-3 rounded-xl shadow-xl
                flex items-center gap-3 hover:scale-105 transition-all
                border border-black/40
              ">
                <Apple className="h-7 w-7" />
                <div className="text-left leading-tight">
                  <span className="text-xs">Baixar na</span><br />
                  <span className="text-lg font-semibold">App Store</span>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* ======================= LADO DIREITO ======================= */}
        <div className="flex justify-center md:justify-end relative">

          {/* Glow atrás do celular */}
          <div className="absolute inset-0 w-80 h-80 bg-[#5260ff]/20 blur-3xl rounded-full -z-10"></div>

          <img
            src={appImage}
            alt="App DIM+ Saúde"
            className="w-[80%] max-w-lg drop-shadow-2xl rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
