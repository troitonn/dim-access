import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Building2, Hospital, FlaskConical, Stethoscope, MapPin, Navigation } from "lucide-react";

const unidades = [
  {
    nome: "Unidade Osasco",
    endereco: "Rua João Crudo, 120 – Centro, Osasco",
    desc: "Localizada em um dos maiores centros comerciais de SP, próxima à CPTM, Rua Antônio Agu e três Shoppings.",
    rota: "https://www.google.com/maps/dir/?api=1&destination=Rua+João+Crudo,+120+Osasco",
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.9829855859443!2d-46.782644490057365!3d-23.53311436046493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ceff0f3efeee77%3A0x7de906595c267065!2sDIMEG!5e0!3m2!1spt-BR!2sbr!4v1764766686072!5m2!1spt-BR!2sbr"
  },
  {
    nome: "Unidade Itapevi",
    endereco: "Rua Leopoldina de Camargo, 190 – Centro, Itapevi",
    desc: "Há mais de 16 anos referência em saúde na região, estrutura moderna e localização estratégica.",
    rota: "https://www.google.com/maps/dir/?api=1&destination=Rua+Leopoldina+de+Camargo,+190+Itapevi",
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.618009642601!2d-46.935491290056795!3d-23.546237660946492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf068f0cb679e5%3A0xc78ad136e42820c5!2sCl%C3%ADnica%20Dimeg%20Itapevi!5e0!3m2!1spt-BR!2sbr!4v1764766774559!5m2!1spt-BR!2sbr"
  },
  {
    nome: "Unidade Cajamar",
    endereco: "Rua Silvério Augusto Tavares, 5 – Polvilho, Cajamar",
    desc: "Localizada no centro comercial, próxima à Natura, SKF e Marabraz. Estrutura ampla e moderna.",
    rota: "https://www.google.com/maps/dir/?api=1&destination=Rua+Silvério+Augusto+Tavares,+5+Cajamar",
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.408741800799!2d-46.84087859006277!3d-23.409597555944366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf1d19a035dca7%3A0xc64660baa9dd558f!2sCl%C3%ADnica%20Dimeg%20Cajamar!5e0!3m2!1spt-BR!2sbr!4v1764766805723!5m2!1spt-BR!2sbr"
  }
];

const RedeCredenciada = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* HERO */}
      <section className="py-20 gradient-primary">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white text-center mb-6">
            Rede Credenciada
          </h1>
          <p className="text-xl text-white/90 text-center max-w-3xl mx-auto">
            Conheça onde você pode usar seu cartão DIM+ Saúde
          </p>
        </div>
      </section>

      {/* CARDS DE CATEGORIAS */}
      <section className="py-20">
        <div className="container mx-auto px-4">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="card-elevated rounded-2xl p-8 text-center space-y-4">
              <div className="w-16 h-16 mx-auto gradient-primary rounded-full flex items-center justify-center">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-primary-dark">Clínicas Próprias</h3>
              <p className="text-foreground/70">Atendimento completo nas clínicas DIMEG</p>
            </div>

            <div className="card-elevated rounded-2xl p-8 text-center space-y-4">
              <div className="w-16 h-16 mx-auto gradient-primary rounded-full flex items-center justify-center">
                <Hospital className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-primary-dark">Clínicas Conveniadas</h3>
              <p className="text-foreground/70">Ampla rede de parceiros credenciados</p>
            </div>

            <div className="card-elevated rounded-2xl p-8 text-center space-y-4">
              <div className="w-16 h-16 mx-auto gradient-primary rounded-full flex items-center justify-center">
                <FlaskConical className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-primary-dark">Laboratórios</h3>
              <p className="text-foreground/70">Exames com até 70% de desconto</p>
            </div>

            <div className="card-elevated rounded-2xl p-8 text-center space-y-4">
              <div className="w-16 h-16 mx-auto gradient-primary rounded-full flex items-center justify-center">
                <Stethoscope className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-primary-dark">Especialidades</h3>
              <p className="text-foreground/70">Diversas especialidades médicas disponíveis</p>
            </div>

          </div>

          {/* MAPA APPLE-LIKE */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-primary-dark flex items-center gap-3 mb-6">
              <MapPin className="w-7 h-7 text-primary" />
              Encontre uma unidade DIMEG próxima de você
            </h2>

            <div className="rounded-3xl overflow-hidden shadow-2xl backdrop-blur-2xl border border-white/40 bg-white/30">
              <div className="w-full h-[600px]">
                {/* MAPA GRANDE */}
                <iframe
                  src="https://www.google.com/maps/d/embed?mid=1qE8A6bdqZX-APPLE-EXEMPLO" 
                  className="w-full h-full"
                  loading="lazy"
                  style={{ border: 0 }}
                ></iframe>
              </div>
            </div>

            {/* LISTA DE UNIDADES */}
            <div className="grid md:grid-cols-3 gap-10 mt-12">
              {unidades.map((u, i) => (
                <div key={i} className="p-6 rounded-2xl shadow-xl bg-white/70 backdrop-blur-xl border border-gray-200">
                  
                  <h3 className="text-2xl font-bold text-primary-dark">{u.nome}</h3>
                  <p className="text-gray-700 mt-2">{u.endereco}</p>
                  <p className="text-gray-600 mt-4">{u.desc}</p>

                  <a
                    href={u.rota}
                    target="_blank"
                    className="mt-6 inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-primary text-white shadow hover:bg-primary-dark transition text-sm font-medium"
                  >
                    <Navigation className="w-5 h-5" />
                    Traçar rota
                  </a>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RedeCredenciada;
