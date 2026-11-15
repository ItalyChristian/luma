export interface StepProps {
  number: string;
  marker: "focus" | "experience" | "practice";
  title: string;
  description: string;
}

export const steps: StepProps[] = [
  {
    number: "01",
    marker: "focus",
    title: "Choose your focus",
    description:
      "Find courses based on the skill you want to build, not endless content categories.",
  },
  {
    number: "02",
    marker: "experience",
    title: "Learn from experience",
    description:
      "Follow concise lessons created by professionals who use these skills.",
  },
  {
    number: "03",
    marker: "practice",
    title: "Put it into practice",
    description:
      "Every course includes practical exercises designed to turn knowledge into action.",
  },
] as const;
