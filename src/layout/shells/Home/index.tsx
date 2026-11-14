import Header from "@/layout/components/Header";

interface HomeShellProps {
  children: React.ReactNode;
}

export default function HomeShell({ children }: HomeShellProps) {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Header />
      <main
        id="courses"
        className="mx-auto flex w-full max-w-260.5 flex-1 flex-col px-4"
      >
        {children}
      </main>
    </div>
  );
}
