import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "É plano de saúde?",
      answer: "Não, o DIM+ Saúde não é um plano de saúde. É um cartão de benefícios que oferece descontos e acesso facilitado a consultas, exames e telemedicina em nossa rede credenciada.",
    },
    {
      question: "Como funciona a telemedicina?",
      answer: "A telemedicina permite que você tenha consultas médicas online com clínicos gerais através do nosso aplicativo. Basta agendar seu horário e o médico te atenderá por videochamada.",
    },
    {
      question: "Como adicionar dependentes?",
      answer: "Você pode adicionar até 5 dependentes ao seu plano, sem necessidade de vínculo familiar. Basta informar os dados dos dependentes no momento da contratação ou posteriormente através do nosso atendimento.",
    },
    {
      question: "Tem carência?",
      answer: "Não! O DIM+ Saúde não possui carência. Você pode começar a usar todos os benefícios imediatamente após a ativação do seu cartão.",
    },
    {
      question: "Como cancelar?",
      answer: "O cancelamento pode ser solicitado a qualquer momento através do nosso atendimento por WhatsApp ou e-mail. Não cobramos multa de cancelamento.",
    },
    {
      question: "Como usar nas clínicas parceiras?",
      answer: "Basta apresentar seu cartão DIM+ Saúde ou informar seu CPF no momento do atendimento em qualquer clínica da nossa rede credenciada. Os descontos serão aplicados automaticamente.",
    },
    {
      question: "Qual a diferença entre o Básico e o Básico Plus?",
      answer: "O plano Básico oferece descontos de até 60% em consultas e 30% em exames. Já o Básico Plus oferece consultas de clínico geral e telemedicina ilimitadas gratuitamente, além de descontos maiores (até 60% em especialidades e 50% em exames).",
    },
    {
      question: "Posso usar em qualquer cidade?",
      answer: "Sim! Nossa rede credenciada está presente em diversas cidades. Entre em contato para verificar as unidades disponíveis na sua região.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20 gradient-primary">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white text-center mb-6">
            Dúvidas Frequentes
          </h1>
          <p className="text-xl text-white/90 text-center max-w-3xl mx-auto">
            Tire suas dúvidas sobre o DIM+ Saúde
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="card-elevated rounded-2xl px-6 border-none"
              >
                <AccordionTrigger className="text-lg font-semibold text-primary-dark hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
