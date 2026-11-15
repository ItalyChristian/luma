import { steps } from "./steps.data";

type MarkerKind = (typeof steps)[number]["marker"];

export function StepMarker({ kind }: { kind: MarkerKind }) {
  if (kind === "focus") {
    return (
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-lavender">
        <span className="h-5 w-5 rounded-[5px] bg-primary" />
      </div>
    );
  }

  if (kind === "experience") {
    return (
      <div className="flex h-12 w-12 rotate-12 items-end justify-end rounded-lg bg-[#ffc99f] p-1.5">
        <span className="h-6 w-6 rounded-full bg-[#ff7356]" />
      </div>
    );
  }

  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-yellow">
      <span className="h-4.5 w-4.5 rounded-full bg-[#ead448]" />
    </div>
  );
}
