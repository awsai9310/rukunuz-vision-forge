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
    <section id="connect" className="py-24 bg-gradient-sky">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-center mb-4 text-primary">
            Let's Connect
          </h2>
          <p className="font-body text-lg text-center text-muted-foreground mb-12">
            Building tomorrow's cloud platforms together — reach out to discuss your next big idea
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
                    Connect on Social
                  </h3>
                  <div className="space-y-3">
                    <Button
                      variant="outline"
                      className="w-full justify-start border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all"
                      asChild
                    >
                      <a
                        href="https://www.linkedin.com/in/rukunuzzaman"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3"
                      >
                        <Linkedin size={20} />
                        <span className="font-body">LinkedIn Profile</span>
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all"
                      asChild
                    >
                      <a
                        href="https://github.com/rukunuzzaman"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3"
                      >
                        <Github size={20} />
                        <span className="font-body">GitHub Repositories</span>
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all"
                      asChild
                    >
                      <a
                        href="mailto:rukunuz@example.com"
                        className="flex items-center gap-3"
                      >
                        <Mail size={20} />
                        <span className="font-body">Email Direct</span>
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-card shadow-soft">
                <CardContent className="p-6">
                  <h3 className="font-heading font-bold text-xl mb-3 text-foreground">
                    Open to Opportunities
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    I'm always interested in ambitious projects that push the boundaries of cloud technology, 
                    especially those making an impact in education and enterprise modernization.
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
