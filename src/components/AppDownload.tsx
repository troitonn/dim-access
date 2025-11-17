import { Button } from "@/components/ui/button";
import { Apple, Smartphone } from "lucide-react";

const AppDownload = () => {
  return (
    <section className="py-20 gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Baixe nosso aplicativo
          </h2>
          <p className="text-xl text-white/90">
            Tenha acesso a todos os benefícios do DIM+ Saúde na palma da sua mão
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              variant="float"
              size="lg"
              className="bg-white text-primary hover:bg-white/90 w-full sm:w-auto"
              asChild
            >
              <a
                href="https://play.google.com/store/apps/details?id=com.javenessi.dimmsaude&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Smartphone className="mr-2 h-5 w-5" />
                Baixar na Google Play
              </a>
            </Button>

            <Button
              variant="float"
              size="lg"
              className="bg-white text-primary hover:bg-white/90 w-full sm:w-auto"
              asChild
            >
              <a
                href="https://apps.apple.com/br/app/dim-saúde/id6749953259"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Apple className="mr-2 h-5 w-5" />
                Baixar na App Store
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
