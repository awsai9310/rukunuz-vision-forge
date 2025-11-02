import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

const projects = [
  {
    title: "EscWorks Platform Modernization",
    role: "Lead Cloud Architect & Engineer",
    description: "Complete transformation of legacy monolithic system into cloud-native microservices architecture",
    impact: [
      "Architected multi-tenant SaaS platform serving 10,000+ concurrent users",
      "Achieved 99.9% uptime with AWS ECS auto-scaling and load balancing",
      "Reduced infrastructure costs by 35% through serverless optimization",
      "Successfully listed on AWS Marketplace as verified SaaS solution",
    ],
    tech: ["AWS", ".NET 6", "Python", "React", "ECS", "Lambda", "RDS"],
  },
  {
    title: "Multi-Application Integration Hub",
    role: "Integration Architect",
    description: "Unified identity and data layer across Django, .NET, and React applications",
    impact: [
      "Implemented SSO with OKTA and OIDC for seamless user experience",
      "Built Redis-backed distributed session management",
      "Integrated 5+ disparate systems with event-driven architecture",
      "Reduced authentication overhead by 60%",
    ],
    tech: ["Django", ".NET", "React", "OKTA", "Redis", "RabbitMQ"],
  },
  {
    title: "AI-Powered Analytics Platform",
    role: "ML Solutions Architect",
    description: "Data lakehouse and AI/ML pipeline for educational insights and predictive analytics",
    impact: [
      "Processed 10M+ educational data points daily",
      "Deployed GPT-based recommendation engine for personalized learning",
      "Built real-time dashboards with AWS QuickSight",
      "Improved decision-making speed by 3x for administrators",
    ],
    tech: ["AWS Glue", "S3", "Athena", "SageMaker", "QuickSight", "Python"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-gradient-sky">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-center mb-4 text-primary">
            Projects & Impact
          </h2>
          <p className="font-body text-lg text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Transforming education technology through strategic architecture and hands-on engineering
          </p>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="hover:shadow-medium transition-all duration-300 border-border bg-card"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                    <CardTitle className="font-heading font-bold text-2xl text-foreground">
                      {project.title}
                    </CardTitle>
                    <Badge className="bg-accent text-accent-foreground w-fit font-body">
                      {project.role}
                    </Badge>
                  </div>
                  <p className="font-body text-muted-foreground text-lg">
                    {project.description}
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-heading font-semibold text-sm uppercase tracking-wide text-primary mb-3">
                      Key Impact
                    </h4>
                    <ul className="space-y-2">
                      {project.impact.map((item) => (
                        <li key={item} className="flex items-start gap-2 font-body text-foreground/90">
                          <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={18} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-sm uppercase tracking-wide text-primary mb-3">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="border-primary/30 text-foreground font-body"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
