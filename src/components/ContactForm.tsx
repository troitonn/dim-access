import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";
import { MessageCircle, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const whatsappNumber = "5511995193094";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.email) {
      toast.error("Por favor, preencha todos os campos");
      return;
    }

    const message = encodeURIComponent(
      `Olá! Gostaria de saber mais sobre o DIM+ Saúde.\n\nNome: ${formData.name}\nTelefone: ${formData.phone}\nE-mail: ${formData.email}`
    );
    
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
    
    toast.success("Redirecionando para o WhatsApp...");
    setFormData({ name: "", phone: "", email: "" });
  };

  return (
    <section className="py-24 px-4 bg-muted/20">
      <div className="container mx-auto max-w-2xl">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-4 tracking-tight">
              Fale Conosco
            </h2>
            <p className="text-xl text-muted-foreground font-light">
              Preencha o formulário e nosso time entrará em contato
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <form onSubmit={handleSubmit} className="space-y-6 bg-card rounded-2xl p-8 shadow-sm border border-border/30">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Nome completo
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Seu nome"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="h-12 rounded-xl border-border/50"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                Telefone
              </label>
              <Input
                id="phone"
                type="tel"
                placeholder="(11) 99999-9999"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="h-12 rounded-xl border-border/50"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                E-mail
              </label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="h-12 rounded-xl border-border/50"
                required
              />
            </div>

            <Button type="submit" size="lg" className="w-full rounded-xl">
              <MessageCircle className="mr-2 h-5 w-5" />
              Enviar mensagem
            </Button>
          </form>
        </ScrollReveal>

        {/* Quick contact CTA */}
        <ScrollReveal delay={200}>
          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4 font-light">Ou fale diretamente conosco:</p>
            <Button variant="outline" size="lg" className="rounded-xl" asChild>
              <a 
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                (11) 99519-3094
              </a>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactForm;
