export default function FormTextArea({ ...rest }) {
  return (
    <textarea
      className="h-[120px] w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-[14px] leading-6 font-normal placeholder:text-subtle focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      {...rest}
    />
  );
}
