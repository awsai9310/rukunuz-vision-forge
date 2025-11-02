const Footer = () => {
  return (
    <footer className="bg-graphite py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="font-body text-sm text-muted-foreground">
            © {new Date().getFullYear()} Rukunuz Zaman. Building tomorrow's cloud platforms with strategy, heart & precision.
          </p>
          <p className="font-body text-xs text-muted-foreground mt-2">
            Cloud Solution Architect | Lead Software Engineer | EscWorks, Region 4
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
