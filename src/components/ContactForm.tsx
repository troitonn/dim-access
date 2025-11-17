import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.email) {
      toast.error("Por favor, preencha todos os campos");
      return;
    }

    // Send to WhatsApp
    const whatsappNumber = "5511983730500";
    const message = encodeURIComponent(
      `Olá! Gostaria de saber mais sobre o DIM+ Saúde.\n\nNome: ${formData.name}\nTelefone: ${formData.phone}\nE-mail: ${formData.email}`
    );
    
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
    
    toast.success("Redirecionando para o WhatsApp...");
    
    // Reset form
    setFormData({ name: "", phone: "", email: "" });
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-primary-dark/5">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Preencha o formulário
          </h2>
          <p className="text-xl text-muted-foreground">
            Nosso time entrará em contato com você
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-card rounded-3xl p-8 shadow-card border border-border/50">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
              Nome completo *
            </label>
            <Input
              id="name"
              type="text"
              placeholder="Seu nome"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="h-12 rounded-xl"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
              Telefone *
            </label>
            <Input
              id="phone"
              type="tel"
              placeholder="(00) 00000-0000"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="h-12 rounded-xl"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              E-mail *
            </label>
            <Input
              id="email"
              type="email"
              placeholder="seu@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="h-12 rounded-xl"
              required
            />
          </div>

          <Button type="submit" variant="float" size="lg" className="w-full">
            Quero saber mais
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
