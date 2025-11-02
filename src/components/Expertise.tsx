import { Cloud, Server, Brain, Database, Code, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const expertiseAreas = [
  {
    icon: Cloud,
    title: "Cloud & SaaS Modernization",
    description: "AWS-native architectures, multi-tenant platforms, serverless solutions",
    color: "text-primary",
  },
  {
    icon: Server,
    title: "Microservices Architecture",
    description: ".NET 6, Python, Flask - designing scalable, resilient distributed systems",
    color: "text-accent",
  },
  {
    icon: Brain,
    title: "AI/ML & Generative AI",
    description: "Integrating intelligent features, vector databases, LLM applications",
    color: "text-primary",
  },
  {
    icon: Database,
    title: "Data Engineering & Analytics",
    description: "Data lakehouse architecture, AWS QuickSight, real-time analytics",
    color: "text-accent",
  },
  {
    icon: Code,
    title: "DevOps & Infrastructure",
    description: "IaC, AWS ECS/Lambda, CI/CD pipelines, container orchestration",
    color: "text-primary",
  },
  {
    icon: Shield,
    title: "Identity & Access Management",
    description: "OIDC, SSO, OKTA integration, Redis-backed distributed sessions",
    color: "text-accent",
  },
];

const Expertise = () => {
  return (
    <section id="expertise" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-center mb-4 text-primary">
            Core Expertise
          </h2>
          <p className="font-body text-lg text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Deep technical knowledge across the full cloud-native stack, from architecture to deployment
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertiseAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <Card
                  key={area.title}
                  className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border-border bg-card"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col items-start space-y-4">
                      <div className={`p-3 rounded-lg bg-sky-light ${area.color}`}>
                        <Icon size={32} strokeWidth={2} />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-xl mb-2 text-foreground">
                          {area.title}
                        </h3>
                        <p className="font-body text-muted-foreground leading-relaxed">
                          {area.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
