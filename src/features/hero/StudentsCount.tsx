export default function StudentsCount() {
  return (
    <div className="mt-7 hidden items-center gap-3 text-[12px] md:flex">
      <div className="flex -space-x-2">
        <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-background bg-avatar-peach text-[9px] font-bold text-white">
          AM
        </span>
        <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-background bg-avatar-blue text-[9px] font-bold text-white">
          JS
        </span>
        <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-background bg-avatar-charcoal text-[9px] font-bold text-white">
          KL
        </span>
      </div>
      <p>
        <strong>Trusted by 24,000+</strong>
        <span className="ml-1 text-muted">learners</span>
      </p>
    </div>
  );
}
