import { Card, CardContent } from "@/components/ui/card";
import { Search, Lightbulb, Rocket } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: Search,
      number: "01",
      title: "Discover",
      description: "We audit your tech stack, customer data, and commerce flows to identify where AI agents can deliver maximum ROI — fast.",
      duration: "1-2 weeks",
    },
    {
      icon: Lightbulb,
      number: "02",
      title: "Prototype",
      description: "Rapid pilot development with a focused use case — recommendation engine, chat agent, or support automation — to prove value.",
      duration: "3-4 weeks",
    },
    {
      icon: Rocket,
      number: "03",
      title: "Deploy & Scale",
      description: "Launch, measure, iterate, and expand successful agents across your customer journey for sustained growth and efficiency.",
      duration: "Ongoing",
    },
  ];

  return (
    <section id="process" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-4">
            Simple, <span className="text-accent">Proven Process</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            From insight to impact in weeks, not months. Here's how we work together:
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card
                  key={index}
                  className="border-border bg-card shadow-soft hover:shadow-medium transition-all relative group"
                >
                  <CardContent className="p-8 text-center">
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-medium group-hover:scale-110 transition-transform">
                        <Icon className="text-accent-foreground" size={24} />
                      </div>
                    </div>
                    <div className="font-heading font-bold text-6xl text-accent/20 mb-2 mt-6">
                      {step.number}
                    </div>
                    <h3 className="font-heading font-bold text-2xl text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="font-body text-muted-foreground leading-relaxed mb-4">
                      {step.description}
                    </p>
                    <div className="inline-block px-3 py-1 bg-secondary rounded-full">
                      <span className="font-body text-sm font-semibold text-foreground">
                        {step.duration}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Card className="border-primary/30 bg-primary/5 shadow-soft max-w-3xl mx-auto">
              <CardContent className="p-6">
                <h3 className="font-heading font-bold text-xl text-primary mb-3">
                  30-Day Proof of Value Pilot
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  Not ready for a full commitment? Start with a focused pilot. We'll implement one high-impact AI agent use case, measure results, and chart a roadmap for scale — all within 30 days.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
