import { MapPin, Navigation, Building2 } from "lucide-react";

const unidades = [
  {
    nome: "Unidade Osasco",
    endereco: "Rua João Crudo, 120 – Centro, Osasco",
    desc: "Localizada em um dos maiores centros comerciais do Estado de São Paulo, a poucos metros da CPTM e perto de três Shoppings. Atende como Pronto Atendimento 24h.",
    rota: "https://www.google.com/maps/dir/?api=1&destination=Rua+João+Crudo,+120+Osasco",
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.589325299604!2d-46.777984!3d-23.470606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf0022912e2e1d%3A0x2a1e8e9c7097!2sRua%20Jo%C3%A3o%20Crudo%2C%20120%20-%20Centro%2C%20Osasco",
  },
  {
    nome: "Unidade Itapevi",
    endereco: "Rua Leopoldina de Camargo, 190 – Centro, Itapevi",
    desc: "Há mais de 16 anos no mesmo endereço, referência em saúde na região. Bem localizada e com estrutura moderna, atrai novos clientes diariamente.",
    rota: "https://www.google.com/maps/dir/?api=1&destination=Rua+Leopoldina+de+Camargo,+190+Itapevi",
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.16539210818!2d-46.932359!3d-23.536089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf01fd1dd12d89%3A0x4c6ab5a2b1fb!2sRua%20Leopoldina%20de%20Camargo%2C%20190%20-%20Centro%2C%20Itapevi",
  },
  {
    nome: "Unidade Cajamar",
    endereco: "Rua Silvério Augusto Tavares, 5 – Polvilho, Cajamar",
    desc: "No coração comercial da cidade, próxima a grandes indústrias como Natura, SKF e Marabraz. Ampla, moderna e com diversos serviços no mesmo local.",
    rota: "https://www.google.com/maps/dir/?api=1&destination=Rua+Silvério+Augusto+Tavares,+5+Cajamar",
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.093426087713!2d-46.872343!3d-23.613128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf012763a1e707%3A0x610d8f3f1df2!2sR.+Silv%C3%A9rio+Augusto+Tavares%2C+5+-+Polvilho%2C+Cajamar",
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
              className="bg-white shadow-xl rounded-3xl overflow-hidden border border-gray-200 hover:shadow-2xl transition group backdrop-blur-xl"
            >
              {/* MAPA INTERATIVO */}
              <div className="w-full h-64">
                <iframe
                  src={u.mapa}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
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
