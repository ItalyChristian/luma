interface WrapperProps {
  children: React.ReactNode;
}

export default function SectionWrapper({ children }: WrapperProps) {
  return <div className="mx-auto w-full max-w-260.5 px-4">{children}</div>;
}
