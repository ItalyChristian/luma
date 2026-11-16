import Community from "@/features/community";
import Courses from "@/features/courses";
import Contact from "@/features/contact";
import Hero from "@/features/hero";
import Highlights from "@/features/highlights";
import HowItWorks from "@/features/how-it-works";
import Testimonials from "@/features/testimonials";
import HomeShell from "@/layout/shells/Home";
import { Section } from "@/shared/components/Section";

export default function Home() {
  return (
    <HomeShell>
      <Section.Wrapper>
        <Hero />
      </Section.Wrapper>

      <Courses />

      <Highlights />

      <Section.Wrapper>
        <HowItWorks />
      </Section.Wrapper>

      <Testimonials />

      <Section.Wrapper>
        <Community />
      </Section.Wrapper>

      <Contact />
    </HomeShell>
  );
}
