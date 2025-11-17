import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Building2, FileCheck, Handshake, TrendingUp } from "lucide-react";

const SejaParceiro = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20 gradient-primary">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white text-center mb-6">
            Seja um Parceiro
          </h1>
          <p className="text-xl text-white/90 text-center max-w-3xl mx-auto">
            Faça parte da nossa rede credenciada e aumente seu faturamento
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="card-elevated rounded-2xl p-6 text-center space-y-4">
                <div className="w-16 h-16 mx-auto gradient-primary rounded-full flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-primary-dark">Aumente sua receita</h3>
                <p className="text-sm text-foreground/70">
                  Mais pacientes e fluxo constante
                </p>
              </div>

              <div className="card-elevated rounded-2xl p-6 text-center space-y-4">
                <div className="w-16 h-16 mx-auto gradient-primary rounded-full flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-primary-dark">Rede consolidada</h3>
                <p className="text-sm text-foreground/70">
                  Mais de 50 mil clientes ativos
                </p>
              </div>

              <div className="card-elevated rounded-2xl p-6 text-center space-y-4">
                <div className="w-16 h-16 mx-auto gradient-primary rounded-full flex items-center justify-center">
                  <Handshake className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-primary-dark">Suporte completo</h3>
                <p className="text-sm text-foreground/70">
                  Assistência em todo processo
                </p>
              </div>

              <div className="card-elevated rounded-2xl p-6 text-center space-y-4">
                <div className="w-16 h-16 mx-auto gradient-primary rounded-full flex items-center justify-center">
                  <FileCheck className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-primary-dark">Sem burocracia</h3>
                <p className="text-sm text-foreground/70">
                  Credenciamento rápido e simples
                </p>
              </div>
            </div>

            <div className="card-elevated rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-primary-dark mb-6">Requisitos</h2>
              <ul className="space-y-3 text-foreground/70">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Clínica, consultório ou laboratório regularizado</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>CNPJ ativo e documentação em dia</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Profissionais com registro ativo no conselho de classe</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Infraestrutura adequada para atendimento</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Compromisso com qualidade no atendimento</span>
                </li>
              </ul>
            </div>

            <div className="card-elevated rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-primary-dark mb-6">Formulário de Credenciamento</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="nome">Nome do Responsável *</Label>
                    <Input id="nome" placeholder="Seu nome completo" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="empresa">Nome da Empresa *</Label>
                    <Input id="empresa" placeholder="Nome da clínica/laboratório" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="cnpj">CNPJ *</Label>
                    <Input id="cnpj" placeholder="00.000.000/0000-00" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="telefone">Telefone *</Label>
                    <Input id="telefone" placeholder="(00) 00000-0000" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">E-mail *</Label>
                  <Input id="email" type="email" placeholder="contato@empresa.com" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="endereco">Endereço Completo *</Label>
                  <Input id="endereco" placeholder="Rua, número, bairro, cidade, estado" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="especialidades">Especialidades/Serviços Oferecidos *</Label>
                  <Textarea 
                    id="especialidades" 
                    placeholder="Liste as especialidades médicas ou serviços que sua empresa oferece"
                    rows={4}
                    required 
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mensagem">Mensagem (opcional)</Label>
                  <Textarea 
                    id="mensagem" 
                    placeholder="Conte-nos mais sobre sua empresa e por que deseja ser parceiro"
                    rows={4}
                  />
                </div>

                <Button variant="float" size="lg" className="w-full">
                  Enviar Solicitação
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SejaParceiro;
