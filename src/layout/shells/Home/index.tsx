import Header from "@/layout/components/Header";
import Footer from "@/layout/components/Footer";

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
      <Footer />
    </div>
  );
}
