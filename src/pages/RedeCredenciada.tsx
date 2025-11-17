import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Building2, Hospital, FlaskConical, Stethoscope, MapPin } from "lucide-react";

const RedeCredenciada = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
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

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card-elevated rounded-2xl p-8 text-center space-y-4">
              <div className="w-16 h-16 mx-auto gradient-primary rounded-full flex items-center justify-center">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-primary-dark">Clínicas Próprias</h3>
              <p className="text-foreground/70">
                Atendimento completo nas clínicas DIMEG
              </p>
            </div>

            <div className="card-elevated rounded-2xl p-8 text-center space-y-4">
              <div className="w-16 h-16 mx-auto gradient-primary rounded-full flex items-center justify-center">
                <Hospital className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-primary-dark">Clínicas Conveniadas</h3>
              <p className="text-foreground/70">
                Ampla rede de parceiros credenciados
              </p>
            </div>

            <div className="card-elevated rounded-2xl p-8 text-center space-y-4">
              <div className="w-16 h-16 mx-auto gradient-primary rounded-full flex items-center justify-center">
                <FlaskConical className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-primary-dark">Laboratórios</h3>
              <p className="text-foreground/70">
                Exames com até 70% de desconto
              </p>
            </div>

            <div className="card-elevated rounded-2xl p-8 text-center space-y-4">
              <div className="w-16 h-16 mx-auto gradient-primary rounded-full flex items-center justify-center">
                <Stethoscope className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-primary-dark">Especialidades</h3>
              <p className="text-foreground/70">
                Diversas especialidades médicas disponíveis
              </p>
            </div>
          </div>

          <div className="mt-16 card-elevated rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <MapPin className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold text-primary-dark">Encontre uma unidade</h2>
            </div>
            <p className="text-foreground/70 mb-8">
              Entre em contato conosco para saber quais unidades estão mais próximas de você.
            </p>
            <div className="aspect-video bg-muted rounded-xl flex items-center justify-center">
              <p className="text-muted-foreground">Mapa interativo em breve</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RedeCredenciada;
