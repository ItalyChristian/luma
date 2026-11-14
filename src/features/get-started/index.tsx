import { LinkButton } from "@/shared/components/LinkButton";
import Image from "next/image";
import GeometricForeground from "./GeometricForeground";
import { communityFaces } from "./icons.data";

export default function GetStarted() {
  return (
    <section
      id="get-started"
      aria-labelledby="next-learning-title"
      className="relative isolate overflow-hidden bg-accent-yellow"
    >
      <GeometricForeground />
      <div className="relative mx-auto flex min-h-102.5 w-full max-w-260.5 flex-col items-center justify-center px-4 py-16 text-center">
        <div aria-hidden="true" className="flex -space-x-2">
          {communityFaces.map((src) => (
            <span
              key={src}
              className="relative h-9 w-9 overflow-hidden rounded-full border-2 border-accent-yellow bg-white"
            >
              <Image
                src={`https://images.unsplash.com/${src}?auto=format&fit=crop&w=96&h=96&q=80`}
                alt=""
                fill
                unoptimized
                sizes="36px"
                className="object-cover"
              />
            </span>
          ))}
        </div>

        <h2
          id="next-learning-title"
          className="mt-8 text-4xl font-bold tracking-[-0.04em] text-foreground md:text-5xl"
        >
          What will you learn next?
        </h2>
        <p className="mt-3 text-base text-muted">
          Start with one course. Build from there.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <LinkButton href="#courses" size="large">
            Explore all courses
          </LinkButton>
          <LinkButton
            href="#login"
            variant="outline"
            size="large"
            className="min-w-28"
          >
            Join Luma
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
