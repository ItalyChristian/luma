interface WrapperProps {
  children: React.ReactNode;
}

export default function SectionWrapper({ children }: WrapperProps) {
  return (
    <div className="mx-auto w-full max-w-[1280px] px-5 md:px-20">
      {children}
    </div>
  );
}
