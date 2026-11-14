import Community from "@/features/community";
import Courses from "@/features/courses";
import Hero from "@/features/hero";
import HomeShell from "@/layout/shells/Home";

export default function Home() {
  return (
    <HomeShell>
      <Hero />
      <Courses />
      <Community />
    </HomeShell>
  );
}
