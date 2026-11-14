import GetStarted from "@/features/get-started";
import Footer from "@/layout/components/Footer";
import Header from "@/layout/components/Header";

interface HomeShellProps {
  children: React.ReactNode;
}

export default function HomeShell({ children }: HomeShellProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans text-foreground">
      <Header />
      <main
        id="courses"
        className="mx-auto flex w-full max-w-260.5 flex-1 flex-col px-4"
      >
        {children}
      </main>
      <GetStarted />
      <Footer />
    </div>
  );
}
