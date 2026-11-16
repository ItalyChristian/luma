export default function FormInput({ ...rest }) {
  return (
    <input
      className="h-12 w-full rounded-lg border border-border bg-background px-4 text-[14px] leading-6 font-normal placeholder:text-subtle focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      {...rest}
    />
  );
}
