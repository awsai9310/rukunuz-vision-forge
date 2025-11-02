import { Card, CardContent } from "@/components/ui/card";
import { TrendingDown, Users, Database, DollarSign } from "lucide-react";

const Problem = () => {
  const painPoints = [
    {
      icon: TrendingDown,
      title: "Shrinking ROAS",
      description: "Traffic costs keep climbing while conversion rates stay flat or decline. Traditional marketing isn't cutting it anymore.",
    },
    {
      icon: Users,
      title: "Support Overload",
      description: "Your customer service team is drowning in repetitive queries while complex issues get delayed, hurting satisfaction.",
    },
    {
      icon: Database,
      title: "Data Silos & Chaos",
      description: "Product data scattered across systems. Recommendations feel generic. Personalization is a pipe dream.",
    },
    {
      icon: DollarSign,
      title: "Rising CAC, Flat LTV",
      description: "Customer acquisition costs are up 30%+ while lifetime value stagnates. The math isn't working.",
    },
  ];

  return (
    <section id="problem" className="py-24 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-4">
            The E-Commerce Growth Paradox
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            You're working harder than ever, but growth feels stuck. Sound familiar?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <Card
                key={index}
                className="border-border bg-card shadow-soft hover:shadow-medium transition-all"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Icon className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                        {point.title}
                      </h3>
                      <p className="font-body text-muted-foreground leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="max-w-3xl mx-auto mt-12 text-center">
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
            <p className="font-body text-lg text-foreground leading-relaxed">
              <span className="font-semibold text-accent">Here's the reality:</span> AI agent shoppers are up{" "}
              <span className="font-bold text-primary">4700% year-over-year</span>. Consumers are already using agents to research, compare, and buy. Brands that aren't agent-ready will be invisible to this massive shift.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
