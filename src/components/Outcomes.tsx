import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, UserCheck, Clock, Heart } from "lucide-react";

const Outcomes = () => {
  const metrics = [
    {
      icon: TrendingUp,
      stat: "+15-30%",
      label: "Conversion Rate Lift",
      description: "Intelligent recommendations and personalized guidance drive more sales from existing traffic.",
    },
    {
      icon: UserCheck,
      stat: "−25%",
      label: "Support Ticket Reduction",
      description: "AI agents handle routine queries instantly, freeing your team for high-value interactions.",
    },
    {
      icon: Clock,
      stat: "24/7",
      label: "Always-On Service",
      description: "Never miss a sale. AI agents work around the clock, across time zones and languages.",
    },
    {
      icon: Heart,
      stat: "+20%",
      label: "Customer LTV Growth",
      description: "Better experiences and smarter upsells increase lifetime value and repeat purchases.",
    },
  ];

  return (
    <section id="outcomes" className="py-24 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-4">
            Real Results, <span className="text-accent">Measurable Impact</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Early adopters are seeing transformative gains. Here's what our AI agent systems deliver:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <Card
                key={index}
                className="border-border bg-card shadow-soft hover:shadow-medium transition-all text-center group"
              >
                <CardContent className="p-6">
                  <div className="inline-flex p-3 bg-accent/10 rounded-full mb-4 group-hover:bg-accent/20 transition-colors">
                    <Icon className="text-accent" size={28} />
                  </div>
                  <div className="font-heading font-bold text-4xl text-accent mb-2">
                    {metric.stat}
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                    {metric.label}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {metric.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="border-primary/30 bg-card shadow-medium">
            <CardContent className="p-8">
              <h3 className="font-heading font-bold text-2xl text-primary mb-4 text-center">
                Early Adopter Success Stories
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-accent pl-4">
                  <p className="font-body text-muted-foreground italic">
                    "We piloted an AI shopping assistant and saw a 22% jump in CVR within 30 days. Customer satisfaction scores went up, and our support team finally has breathing room."
                  </p>
                  <p className="font-body text-sm text-foreground font-semibold mt-2">
                    — Mid-market DTC Fashion Brand
                  </p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <p className="font-body text-muted-foreground italic">
                    "The agentic readiness audit revealed quick wins we implemented in weeks. Revenue per visitor is up 18%, and we're just getting started."
                  </p>
                  <p className="font-body text-sm text-foreground font-semibold mt-2">
                    — Home Goods Retailer, $15M ARR
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Outcomes;
