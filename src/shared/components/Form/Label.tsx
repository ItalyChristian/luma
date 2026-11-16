interface LabelProps {
  text: string;
}

export default function FormLabel({ text }: LabelProps) {
  return (
    <label className="flex flex-col gap-2 text-[14px] leading-6 font-bold">
      {text}
    </label>
  );
}
