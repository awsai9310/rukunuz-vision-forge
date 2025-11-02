import { Card, CardContent } from "@/components/ui/card";
import { Brain, MessageSquare, ShoppingCart, Headphones, BarChart } from "lucide-react";

const Solution = () => {
  const services = [
    {
      icon: Brain,
      title: "Agentic Readiness Assessment",
      description: "Audit your data, platforms, and customer journey to identify quick wins and strategic opportunities for AI agent deployment.",
    },
    {
      icon: ShoppingCart,
      title: "AI Product Recommendations",
      description: "Deploy intelligent recommendation engines that learn from behavior, predict needs, and drive cross-sell and upsell autonomously.",
    },
    {
      icon: MessageSquare,
      title: "Conversational Shopping Agents",
      description: "Voice and chat agents that guide shoppers through discovery, answer questions, and close sales — 24/7, in any language.",
    },
    {
      icon: Headphones,
      title: "Post-Purchase Automation",
      description: "Smart agents that handle order tracking, returns, upsells, and support — reducing tickets by 25%+ while boosting satisfaction.",
    },
    {
      icon: BarChart,
      title: "Custom Merchandising Copilots",
      description: "AI copilots for your team to optimize pricing, inventory, campaigns, and analytics — making data-driven decisions effortless.",
    },
  ];

  return (
    <section id="solution" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-4">
            Your AI Agents — <span className="text-accent">Strategy, Build, Scale</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            We help you deploy practical, measurable AI agent systems that transform how you sell, serve, and grow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="border-border bg-card shadow-soft hover:shadow-medium transition-all group"
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex p-4 bg-accent/10 rounded-full mb-4 group-hover:bg-accent/20 transition-colors">
                    <Icon className="text-accent" size={32} />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-secondary/50 rounded-lg p-8">
            <h3 className="font-heading font-bold text-2xl text-primary mb-4">
              Built for Your Stack
            </h3>
            <p className="font-body text-muted-foreground mb-4">
              We work with leading e-commerce platforms and integrate seamlessly into your existing infrastructure:
            </p>
            <div className="flex flex-wrap justify-center gap-4 font-body font-semibold text-foreground">
              <span className="px-4 py-2 bg-background rounded-md shadow-soft">Shopify</span>
              <span className="px-4 py-2 bg-background rounded-md shadow-soft">Magento</span>
              <span className="px-4 py-2 bg-background rounded-md shadow-soft">WooCommerce</span>
              <span className="px-4 py-2 bg-background rounded-md shadow-soft">Custom Platforms</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
