import { MapPin, Navigation, Building2 } from "lucide-react";

const unidades = [
  {
    nome: "Unidade Osasco",
    endereco: "Rua João Crudo, 120 – Centro, Osasco",
    desc: "Localizada em um dos maiores centros comerciais do Estado de São Paulo, a poucos metros da CPTM e shoppings.",
    rota: "https://www.google.com/maps/dir/?api=1&destination=Rua+João+Crudo,+120+Osasco",
  },
  {
    nome: "Unidade Itapevi",
    endereco: "Rua Leopoldina de Camargo, 190 – Centro, Itapevi",
    desc: "Há mais de 16 anos no mesmo endereço, referência em saúde na região e estrutura moderna.",
    rota: "https://www.google.com/maps/dir/?api=1&destination=Rua+Leopoldina+de+Camargo,+190+Itapevi",
  },
  {
    nome: "Unidade Cajamar",
    endereco: "Rua Silvério Augusto Tavares, 5 – Polvilho, Cajamar",
    desc: "Localização estratégica, próxima às principais indústrias e com estrutura ampla e moderna.",
    rota: "https://www.google.com/maps/dir/?api=1&destination=Rua+Silvério+Augusto+Tavares,+5+Cajamar",
  },
];

const UnidadesMapa = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-[#f4f7ff] via-white to-[#e9ecff]">

      {/* ELEMENTOS DE FUNDO */}
      <div className="absolute top-20 left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-20 w-[450px] h-[450px] bg-primary-light/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative">
        
        <h2 className="text-4xl md:text-5xl font-bold text-primary-dark text-center mb-14">
          Nossas Unidades
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {unidades.map((u, i) => (
            <div
              key={i}
              className="bg-white shadow-xl rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl transition group"
            >
              
              {/* MAPA PERSONALIZADO */}
              <div className="relative w-full h-60 bg-gradient-to-br from-primary/20 to-primary-light/30 p-6 flex items-center justify-center">
                
                {/* Fundo estilizado em SVG */}
                <svg
                  className="absolute inset-0 opacity-20"
                  viewBox="0 0 500 500"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 150 Q200 50 400 150 T800 150"
                    fill="none"
                    stroke="white"
                    strokeWidth="40"
                  />
                  <circle cx="150" cy="300" r="80" fill="white" />
                  <circle cx="350" cy="250" r="60" fill="white" />
                  <rect x="200" y="100" width="120" height="120" fill="white" />
                </svg>

                {/* Ícone de localização central */}
                <div className="relative z-10">
                  <MapPin className="w-16 h-16 text-primary drop-shadow-xl" />
                </div>
              </div>

              {/* CONTEÚDO */}
              <div className="p-6 space-y-4">
                
                <h3 className="text-2xl font-bold text-primary-dark flex items-center gap-2">
                  <Building2 className="text-primary" />
                  {u.nome}
                </h3>

                <p className="text-gray-700 flex gap-2">
                  <MapPin className="text-primary h-5 w-5" />
                  {u.endereco}
                </p>

                <p className="text-gray-600 leading-relaxed">{u.desc}</p>

                {/* BOTÃO DE ROTA */}
                <a
                  href={u.rota}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary text-white font-medium shadow-md hover:bg-primary-dark transition"
                >
                  <Navigation className="h-5 w-5" />
                  Traçar rota
                </a>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default UnidadesMapa;
