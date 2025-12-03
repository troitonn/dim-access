import { MapPin, Navigation, Building2 } from "lucide-react";

const unidades = [
  {
    nome: "Unidade Osasco",
    endereco: "Rua João Crudo, 120 – Centro, Osasco",
    desc: "Localizada em um dos maiores centros comerciais do Estado de São Paulo, a poucos metros da CPTM e shoppings.",
    rota: "https://www.google.com/maps/dir/?api=1&destination=Rua+João+Crudo,+120+Osasco",
    mapa: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.9829855859443!2d-46.782644490057365!3d-23.53311436046493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ceff0f3efeee77%3A0x7de906595c267065!2sDIMEG!5e0!3m2!1spt-BR!2sbr!4v1764766686072!5m2!1spt-BR!2sbr`,
  },
  {
    nome: "Unidade Itapevi",
    endereco: "Rua Leopoldina de Camargo, 190 – Centro, Itapevi",
    desc: "Há mais de 16 anos no mesmo endereço, referência em saúde na região e estrutura moderna.",
    rota: "https://www.google.com/maps/dir/?api=1&destination=Rua+Leopoldina+de+Camargo,+190+Itapevi",
    mapa: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.618009642601!2d-46.935491290056795!3d-23.546237660946492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf068f0cb679e5%3A0xc78ad136e42820c5!2sCl%C3%ADnica%20Dimeg%20Itapevi!5e0!3m2!1spt-BR!2sbr!4v1764766774559!5m2!1spt-BR!2sbr`,
  },
  {
    nome: "Unidade Cajamar",
    endereco: "Rua Silvério Augusto Tavares, 5 – Polvilho, Cajamar",
    desc: "Localização estratégica, próxima às principais indústrias e com estrutura moderna.",
    rota: "https://www.google.com/maps/dir/?api=1&destination=Rua+Silvério+Augusto+Tavares,+5+Cajamar",
    mapa: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.408741800799!2d-46.84087859006277!3d-23.409597555944366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf1d19a035dca7%3A0xc64660baa9dd558f!2sCl%C3%ADnica%20Dimeg%20Cajamar!5e0!3m2!1spt-BR!2sbr!4v1764766805723!5m2!1spt-BR!2sbr`,
  },
];

const UnidadesMapa = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-[#f4f7ff] via-white to-[#e9ecff]">

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
              className="bg-white shadow-xl rounded-3xl overflow-hidden border border-gray-200 hover:shadow-2xl transition group"
            >
              {/* MAPA EMBED CORRETO */}
              <div className="w-full h-64">
                <iframe
                  src={u.mapa}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

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
