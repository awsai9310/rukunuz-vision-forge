const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-heading font-bold text-xl mb-4">Agentic Commerce</h3>
            <p className="font-body text-sm opacity-90">
              Helping e-commerce brands deploy AI agents that think, sell, and serve. Building the future of retail, one agent at a time.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="font-body text-sm space-y-2 opacity-90">
              <li><a href="#problem" className="hover:text-accent transition-colors">The Problem</a></li>
              <li><a href="#solution" className="hover:text-accent transition-colors">Our Solution</a></li>
              <li><a href="#process" className="hover:text-accent transition-colors">How We Work</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#connect" className="hover:text-accent transition-colors">Get Started</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Resources</h4>
            <ul className="font-body text-sm space-y-2 opacity-90">
              <li><a href="#" className="hover:text-accent transition-colors">AI Agent ROI Calculator</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Agentic Commerce Blog</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="font-body text-sm opacity-80">
            © {new Date().getFullYear()} Agentic Commerce Consulting. Building the future of e-commerce with AI agents.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
