import { MetricProps, metrics } from "./metrics.data";

export default function Metrics() {
  return (
    <ul
      aria-label="Luma learning statistics"
      className="grid grid-cols-3 gap-3 md:flex md:w-[320px] md:flex-col md:gap-2 md:border-l md:border-border md:pl-10"
    >
      {metrics.map(({ value, label }: MetricProps) => (
        <li key={value} className="flex flex-col">
          <span className="font-jakarta text-[28px] leading-9 font-extrabold tracking-[-0.6px] text-primary md:text-[48px] md:leading-14 md:tracking-[-1.2px]">
            {value}
          </span>
          <span className="text-[11px] leading-4 text-subtle md:text-[12px]">
            {label}
          </span>
        </li>
      ))}
    </ul>
  );
}
