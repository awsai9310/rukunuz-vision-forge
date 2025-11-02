import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Github, Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Connect = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a backend
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="connect" className="py-24 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-center mb-4 text-primary">
            Let's Build Your Agentic Future
          </h2>
          <p className="font-body text-lg text-center text-muted-foreground mb-12">
            Ready to transform your e-commerce brand with AI agents? Let's discuss your next big idea.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="border-border bg-card shadow-medium">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="font-body text-sm font-medium text-foreground block mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="font-body"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="font-body text-sm font-medium text-foreground block mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                      className="font-body"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="font-body text-sm font-medium text-foreground block mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell me about your project or idea..."
                      rows={5}
                      className="font-body"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold"
                  >
                    Send Message
                    <Send className="ml-2" size={16} />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Social Links & Info */}
            <div className="space-y-6">
              <Card className="border-border bg-card shadow-soft">
                <CardContent className="p-6">
                  <h3 className="font-heading font-bold text-xl mb-4 text-foreground">
                    Quick Start Options
                  </h3>
                  <div className="space-y-3">
                    <div className="p-4 bg-secondary/50 rounded-lg border border-border">
                      <h4 className="font-body font-semibold text-foreground mb-2">📅 30-Minute Strategy Call</h4>
                      <p className="font-body text-sm text-muted-foreground">
                        Free consultation to assess your agentic readiness and identify quick wins.
                      </p>
                    </div>
                    <div className="p-4 bg-secondary/50 rounded-lg border border-border">
                      <h4 className="font-body font-semibold text-foreground mb-2">🚀 30-Day Pilot Program</h4>
                      <p className="font-body text-sm text-muted-foreground">
                        Proof-of-value implementation with measurable results in one month.
                      </p>
                    </div>
                    <div className="p-4 bg-secondary/50 rounded-lg border border-border">
                      <h4 className="font-body font-semibold text-foreground mb-2">📘 AI Agent ROI Calculator</h4>
                      <p className="font-body text-sm text-muted-foreground">
                        Download our free calculator to estimate impact for your brand.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-card shadow-soft">
                <CardContent className="p-6">
                  <h3 className="font-heading font-bold text-xl mb-3 text-foreground">
                    Who We Work With
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    E-commerce brands doing $1M–$50M in annual revenue on Shopify, Magento, WooCommerce, or custom platforms — ready to lead in the era of agentic commerce.
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

export default Connect;
