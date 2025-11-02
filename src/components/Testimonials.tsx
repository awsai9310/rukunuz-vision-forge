import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "AI agent shoppers are the next consumer revolution. Brands that build for this shift will capture outsized market share.",
      source: "Gartner Research",
      context: "2024 E-Commerce Technology Trends Report",
    },
    {
      quote: "Agentic commerce isn't hype — it's happening now. Retailers who delay risk being invisible to a massive, growing segment of AI-powered shoppers.",
      source: "Forrester",
      context: "The Future of Digital Commerce",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-4">
            The Industry <span className="text-accent">Agrees</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Leading analysts and early adopters validate the agentic commerce shift:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-border bg-card shadow-medium hover:shadow-strong transition-all"
            >
              <CardContent className="p-8">
                <Quote className="text-accent mb-4" size={32} />
                <p className="font-body text-lg text-foreground italic leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-body text-sm font-semibold text-accent">
                    {testimonial.source}
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    {testimonial.context}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
