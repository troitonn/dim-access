import { Star } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carla Mendes",
      location: "Osasco, SP",
      text: "O cartão DIM+ Saúde mudou a forma como cuido da minha família. Consultas acessíveis e atendimento de qualidade aqui pertinho de casa!",
      rating: 5,
    },
    {
      name: "Roberto Almeida",
      location: "Osasco, SP",
      text: "Uso o DIM+ há 2 anos e economizo muito nas consultas e exames. A clínica de Osasco é muito bem localizada e organizada.",
      rating: 5,
    },
    {
      name: "Fernanda Costa",
      location: "Osasco, SP",
      text: "A telemedicina é super prática! Resolvo consultas simples sem sair de casa. Recomendo para todos aqui da região.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-4 tracking-tight">
              O que nossos clientes dizem
            </h2>
            <p className="text-xl text-muted-foreground font-light">
              Milhares de famílias em Osasco já confiam no DIM+ Saúde
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-border/30 h-full">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t border-border/50 pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
