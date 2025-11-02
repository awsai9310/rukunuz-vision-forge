import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";
import heroBg from "@/assets/hero-ecommerce-ai.jpg";

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="AI agents transforming e-commerce"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Animated Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-32 right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-accent/5 rounded-full blur-2xl animate-float" style={{ animationDelay: "4s" }} />
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl leading-tight text-primary">
              Build an Agentic Future for Your{" "}
              <span className="text-accent">E-Commerce Brand</span>
            </h1>
            <p className="font-heading text-2xl md:text-3xl text-foreground">
              We help DTC and retail brands deploy AI agents that think, sell, and serve.
            </p>
            <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Stop losing customers to rising CAC and stagnant conversion rates. The future is agentic commerce — where intelligent AI agents handle recommendations, conversations, and personalization autonomously.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button
                size="lg"
                onClick={scrollToConnect}
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-body font-semibold text-lg px-8 py-6 shadow-medium hover:shadow-strong transition-all"
              >
                Book a Strategy Call
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all font-body font-semibold"
                onClick={scrollToConnect}
              >
                <BookOpen className="mr-2" size={20} />
                Get Agent-Ready
              </Button>
            </div>

            <p className="font-body text-sm text-muted-foreground pt-4">
              <span className="font-semibold text-accent">+4700% YoY</span> growth in AI agent shoppers — Is your brand ready?
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-accent rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
