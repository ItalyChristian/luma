import Community from "@/features/community";
import Hero from "@/features/hero";
import HomeShell from "@/layout/shells/Home";

export default function Home() {
  return (
    <HomeShell>
      <Hero />
      <Community />
    </HomeShell>
  );
}
