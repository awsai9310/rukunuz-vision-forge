import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin, Github } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToConnect = () => {
    const element = document.getElementById("connect");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Cloud infrastructure background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background/90 to-background/95" />
      </div>

      {/* Floating Cloud Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl animate-cloud-float" />
        <div className="absolute bottom-32 right-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-cloud-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-primary/10 rounded-full blur-2xl animate-cloud-float" style={{ animationDelay: "4s" }} />
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl leading-tight">
              Engineering Tomorrow's{" "}
              <span className="text-primary">Cloud-First</span> Platforms
            </h1>
            <p className="font-heading text-2xl md:text-3xl text-foreground/80">
              With Strategy, Heart & Precision
            </p>
            <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Cloud Solution Architect | Lead Software Engineer | SaaS & AI/ML at{" "}
              <span className="text-accent font-semibold">Region 4</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button
                size="lg"
                onClick={scrollToConnect}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold text-lg px-8 py-6 shadow-medium hover:shadow-strong transition-all"
              >
                Let's Build Together
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <div className="flex gap-3">
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <a
                    href="https://www.linkedin.com/in/rukunuzzaman"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin size={20} />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <a
                    href="https://github.com/rukunuzzaman"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={20} />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
