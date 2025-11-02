import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Award, MessageSquare, ExternalLink } from "lucide-react";

const insights = [
  {
    icon: BookOpen,
    title: "Technical Blog",
    description: "Deep dives into cloud architecture patterns, microservices design, and AI/ML integration strategies",
    link: "#",
    linkText: "Read Articles",
  },
  {
    icon: Award,
    title: "Certifications & Recognition",
    description: "AWS Solutions Architect, AWS Community Builder, recognized for innovation in cloud-native education tech",
    link: "#",
    linkText: "View Credentials",
  },
  {
    icon: MessageSquare,
    title: "Speaking & Workshops",
    description: "Conference talks on AI in education, cloud modernization strategies, and building scalable SaaS platforms",
    link: "#",
    linkText: "See Engagements",
  },
];

const Insights = () => {
  return (
    <section id="insights" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-center mb-4 text-primary">
            Thought Leadership
          </h2>
          <p className="font-body text-lg text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Sharing knowledge and insights from the frontlines of cloud innovation
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {insights.map((insight, index) => {
              const Icon = insight.icon;
              return (
                <Card
                  key={insight.title}
                  className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border-border bg-card flex flex-col"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <div className="p-4 rounded-full bg-gradient-hero text-primary-foreground">
                        <Icon size={32} strokeWidth={2} />
                      </div>
                    </div>
                    <CardTitle className="font-heading font-bold text-xl text-center text-foreground">
                      {insight.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow">
                    <p className="font-body text-muted-foreground text-center mb-6 flex-grow">
                      {insight.description}
                    </p>
                    <Button
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground group-hover:shadow-soft transition-all"
                      asChild
                    >
                      <a href={insight.link} className="flex items-center justify-center gap-2">
                        {insight.linkText}
                        <ExternalLink size={16} />
                      </a>
                    </Button>
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

export default Insights;
