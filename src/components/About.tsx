import { Card, CardContent } from "@/components/ui/card";
import { Award, Cloud, Users } from "lucide-react";

const About = () => {
  const credentials = [
    {
      icon: Cloud,
      title: "Cloud & AI Expertise",
      description: "Deep background in AWS, SaaS modernization, and enterprise AI/ML deployments.",
    },
    {
      icon: Users,
      title: "E-Commerce Focus",
      description: "Specialized in data-driven commerce, personalization engines, and customer experience automation.",
    },
    {
      icon: Award,
      title: "Proven Leader",
      description: "Led transformative platform builds serving education and enterprise sectors at scale.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-6">
                Meet Your <span className="text-accent">Agentic Commerce</span> Partner
              </h2>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
                Founded by a Cloud Solution Architect and AI Strategist with a track record of building cloud-first, data-driven platforms that scale. 
              </p>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
                I've led SaaS modernization initiatives, deployed AI/ML systems on AWS, and built microservices architectures powering critical applications for enterprise and education sectors.
              </p>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
                Now, I'm bringing that expertise to e-commerce founders and teams who want to lead — not follow — in the age of agentic commerce.
              </p>
              <div className="bg-secondary/70 rounded-lg p-6 border-l-4 border-accent">
                <p className="font-body text-foreground italic">
                  "We love working with founders who dream big and build smarter. If you're ready to transform how you sell, serve, and scale — let's talk."
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {credentials.map((cred, index) => {
                const Icon = cred.icon;
                return (
                  <Card
                    key={index}
                    className="border-border bg-card shadow-soft hover:shadow-medium transition-all"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-accent/10 rounded-lg flex-shrink-0">
                          <Icon className="text-accent" size={24} />
                        </div>
                        <div>
                          <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                            {cred.title}
                          </h3>
                          <p className="font-body text-muted-foreground leading-relaxed">
                            {cred.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}

              <Card className="border-primary/30 bg-primary/5 shadow-soft">
                <CardContent className="p-6 text-center">
                  <h3 className="font-heading font-bold text-lg text-primary mb-2">
                    Background at a Glance
                  </h3>
                  <p className="font-body text-muted-foreground text-sm">
                    Lead Software Engineer & Cloud Solution Architect with AWS, Python, .NET, React, and AI/ML deployment experience across education tech and enterprise SaaS platforms.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
