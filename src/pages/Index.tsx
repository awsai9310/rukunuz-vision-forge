import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Outcomes from "@/components/Outcomes";
import Process from "@/components/Process";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Connect from "@/components/Connect";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navigation />
      <Hero />
      <Problem />
      <Solution />
      <Outcomes />
      <Process />
      <About />
      <Testimonials />
      <Connect />
      <Footer />
    </div>
  );
};

export default Index;
