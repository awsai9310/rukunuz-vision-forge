const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-sky">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-center mb-12 text-primary">
            About Me
          </h2>
          
          <div className="space-y-6 font-body text-lg leading-relaxed text-foreground/90">
            <p>
              I'm <span className="font-semibold text-primary">Rukunuz Zaman</span>, a Cloud Solution Architect 
              and Lead Software Engineer at <span className="font-semibold">EscWorks, Region 4</span>. My work 
              sits at the intersection of cloud architecture, modern software engineering, and meaningful impact—especially 
              in the education sector.
            </p>
            
            <p>
              At EscWorks, I lead the <span className="text-accent font-semibold">modernization initiative</span> that's 
              transforming legacy monolithic systems into cloud-native, microservices-based platforms on AWS. This isn't 
              just about technology—it's about empowering educational institutions with scalable, resilient systems that 
              can adapt to tomorrow's challenges.
            </p>
            
            <p>
              My approach combines <span className="text-primary font-semibold">strategic architecture</span> with 
              hands-on engineering. Whether I'm designing multi-tenant SaaS platforms, integrating AI/ML capabilities, 
              or leading a team through complex technical transformations, I bring both the big-picture vision and the 
              technical depth to make it happen.
            </p>
            
            <p>
              What drives me? The <span className="text-accent font-semibold">impact</span>. Building systems that 
              scale to serve thousands of users. Mentoring teams to excel in cloud-first development. Creating 
              solutions that make education more accessible and effective. Technology is powerful, but it's the 
              human element—the strategy, the collaboration, the purpose—that makes it truly transformative.
            </p>
            
            <p className="text-primary font-semibold text-xl pt-4">
              Let's build what's next—smarter, faster, with impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
