import Header from "@/components/Header";

interface HomeShellProps {
  children: React.ReactNode;
}

export default function HomeShell({ children }: HomeShellProps) {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Header />
      <main
        id="courses"
        className="mx-auto flex w-full max-w-260.5 flex-col gap-8 px-4 pb-12 pt-12 md:min-h-[calc(100vh-60px)] md:flex-row md:items-center md:gap-10 md:px-4 md:py-16"
      >
        {children}
      </main>
    </div>
  );
}
