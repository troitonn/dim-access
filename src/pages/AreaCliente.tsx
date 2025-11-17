import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, Mail } from "lucide-react";

const AreaCliente = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="py-20 gradient-primary">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white text-center mb-6">
            Área do Cliente
          </h1>
          <p className="text-xl text-white/90 text-center max-w-3xl mx-auto">
            Acesse sua conta e gerencie seus benefícios
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto card-elevated rounded-2xl p-8 space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold text-primary-dark">Login</h2>
              <p className="text-foreground/70">Entre com suas credenciais</p>
            </div>

            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="seu@email.com"
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Senha</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input 
                    id="password" 
                    type="password" 
                    placeholder="••••••••"
                    className="pl-10"
                  />
                </div>
              </div>

              <Button variant="float" size="lg" className="w-full">
                Entrar
              </Button>
            </form>

            <div className="text-center space-y-4">
              <a href="#" className="text-primary hover:underline text-sm block">
                Esqueci minha senha
              </a>
              <div className="pt-4 border-t border-border">
                <p className="text-foreground/70 text-sm mb-4">
                  Ainda não tem uma conta?
                </p>
                <Button variant="outline" size="lg" className="w-full">
                  Criar conta
                </Button>
              </div>
            </div>

            <div className="mt-8 p-6 bg-muted/30 rounded-xl">
              <h3 className="font-semibold text-primary-dark mb-3">O que você pode fazer:</h3>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>• Ver extrato de uso</li>
                <li>• Gerenciar dependentes</li>
                <li>• Emitir segunda via de pagamento</li>
                <li>• Atualizar dados cadastrais</li>
                <li>• Consultar histórico de atendimentos</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AreaCliente;
