import Hero from "@/features/hero";
import People from "@/features/people";
import HomeShell from "@/layout/shells/Home";

export default function Home() {
  return (
    <HomeShell>
      <Hero />
      <People />
    </HomeShell>
  );
}
