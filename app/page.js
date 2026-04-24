import Nav from './Nav';
import Hero from './Hero';
import LogoStrip from './LogoStrip';
import LiveDemo from './LiveDemo';
import HowItWorks from './HowItWorks';
import UseCases from './UseCases';
import TestimonialMarquee from './TestimonialMarquee';
import Metrics from './Metrics';
import CTA from './CTA';
import Footer from './Footer';
import ScrollJourney from './ScrollJourney';

export default function Home() {
  return (
    <>
      <Nav />
      <div className="scroll-journey-wrap"><ScrollJourney /></div>
      <main>
        <div id="top">
          <Hero />
          <LogoStrip />
        </div>
        <LiveDemo />
        <section id="how">
          <HowItWorks />
        </section>
        <UseCases />
        <section style={{ padding: "60px 0 0" }}>
          <TestimonialMarquee />
        </section>
        <section id="metrics">
          <Metrics />
        </section>
        <section id="cta">
          <CTA />
        </section>
      </main>
      <Footer />
    </>
  );
}
