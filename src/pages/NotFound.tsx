import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Search, ArrowLeft } from "lucide-react";
import SEO from "@/components/SEO";

const NotFound = () => {
  return (
    <>
      <SEO
        title="404 - Page Non Trouvée"
        description="La page que vous recherchez n'existe pas."
        path="/404"
      />
      <div className="min-h-screen flex items-center justify-center p-4 bg-muted/30">
        <Card className="max-w-lg w-full shadow-strong text-center">
          <CardContent className="pt-12 pb-8">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full gradient-hero mb-4">
                <Search className="w-12 h-12 text-primary-foreground" />
              </div>
              <h1 className="text-6xl font-bold text-primary mb-2">404</h1>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                Page Non Trouvée
              </h2>
              <p className="text-muted-foreground mb-3">
                Désolé, la page que vous recherchez n'existe pas.
              </p>
              <p className="text-sm text-muted-foreground mb-8">
                Elle a peut-être été déplacée ou supprimée.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/">
                <Button variant="hero" size="lg" className="w-full sm:w-auto">
                  <Home className="w-5 h-5 mr-2" />
                  Retour à l'accueil
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.history.back()}
                className="w-full sm:w-auto"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Page précédente
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default NotFound;
