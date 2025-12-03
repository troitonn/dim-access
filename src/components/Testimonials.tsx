import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      location: "São Paulo, SP",
      text: "O cartão DIM+ Saúde me ajudou muito! Consegui fazer consultas e exames com preços acessíveis. Recomendo para todos!",
      rating: 5,
    },
    {
      name: "João Santos",
      location: "Rio de Janeiro, RJ",
      text: "Excelente custo-benefício. Uso para toda a família e economizo muito nas consultas e exames de rotina.",
      rating: 5,
    },
    {
      name: "Ana Oliveira",
      location: "Belo Horizonte, MG",
      text: "A telemedicina é muito prática! Já fiz várias consultas online e o atendimento foi sempre ótimo.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-muted-foreground">
            Milhares de brasileiros já confiam no DIM+ Saúde
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-3xl p-8 shadow-card hover:shadow-hover transition-smooth border border-border/50"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              
              <div className="border-t border-border pt-4">
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
