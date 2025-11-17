import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Plans from "@/components/Plans";
import { Check, X } from "lucide-react";

const PlanosDetalhados = () => {
  const comparison = [
    { feature: "Pronto Atendimento em Clínico Geral", basico: "Até 30% de desconto", plus: "Ilimitado grátis" },
    { feature: "Consulta Médica eletiva em Clínico Geral", basico: "Até 60% de desconto", plus: "Ilimitada grátis" },
    { feature: "Telemedicina em Clínico Geral", basico: "Até 60% de desconto", plus: "Ilimitada grátis" },
    { feature: "Consultas em outras especialidades", basico: "Até 30% de desconto", plus: "Até 60% de desconto" },
    { feature: "Exames laboratoriais e de imagem", basico: "Até 30% de desconto", plus: "Até 50% de desconto" },
    { feature: "Terapias", basico: "Até 30% de desconto", plus: "Até 50% de desconto" },
    { feature: "Rede conveniada", basico: "Até 30% de desconto", plus: "Até 30% de desconto" },
    { feature: "Clube de Benefícios", basico: true, plus: true },
    { feature: "Dependentes", basico: "Até 5", plus: "Até 5" },
    { feature: "Carência", basico: "Sem carência", plus: "Sem carência" },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20 gradient-primary">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white text-center mb-6">
            Nossos Planos
          </h1>
          <p className="text-xl text-white/90 text-center max-w-3xl mx-auto">
            Compare e escolha o melhor plano para você e sua família
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <Plans />
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary-dark text-center mb-12">
            Comparação Detalhada
          </h2>
          
          <div className="max-w-5xl mx-auto card-elevated rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="gradient-primary text-white">
                    <th className="p-4 text-left font-semibold">Benefício</th>
                    <th className="p-4 text-center font-semibold">DIM+ BÁSICO</th>
                    <th className="p-4 text-center font-semibold">DIM+ BÁSICO PLUS</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-muted/20" : ""}>
                      <td className="p-4 font-medium text-foreground">{item.feature}</td>
                      <td className="p-4 text-center text-foreground/70">
                        {typeof item.basico === "boolean" ? (
                          item.basico ? <Check className="w-6 h-6 text-green-500 mx-auto" /> : <X className="w-6 h-6 text-red-500 mx-auto" />
                        ) : (
                          item.basico
                        )}
                      </td>
                      <td className="p-4 text-center text-foreground/70">
                        {typeof item.plus === "boolean" ? (
                          item.plus ? <Check className="w-6 h-6 text-green-500 mx-auto" /> : <X className="w-6 h-6 text-red-500 mx-auto" />
                        ) : (
                          item.plus
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PlanosDetalhados;
