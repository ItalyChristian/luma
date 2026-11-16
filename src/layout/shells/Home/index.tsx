import GetStarted from "@/features/get-started";
import Footer from "@/layout/components/Footer";
import Header from "@/layout/components/Header";

interface HomeShellProps {
  children: React.ReactNode;
}

export default function HomeShell({ children }: HomeShellProps) {
  return (
    <div className="flex min-h-dvh flex-col bg-background font-sans text-foreground">
      <Header />
      <main className="flex w-full flex-1 flex-col">
        {children}
      </main>
      <GetStarted />
      <Footer />
    </div>
  );
}
