export interface MetricProps {
  value: number;
  suffix: string;
  label: string;
}

export const metrics: MetricProps[] = [
  { value: 24, suffix: "K+", label: "active learners" },
  { value: 120, suffix: "+", label: "expert-led courses" },
  { value: 92, suffix: "%", label: "complete their first course" },
];
