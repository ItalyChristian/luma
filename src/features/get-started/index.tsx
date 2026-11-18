import AvatarMap from "@/entities/community/AvatarMap";
import { LinkButton } from "@/shared/components/LinkButton";
import SectionTitle from "@/shared/components/Section/SectionTitle";
import GeometricForeground from "./GeometricForeground";
import { communityFaces } from "./icons.data";

export default function GetStarted() {
  return (
    <section
      id="get-started"
      aria-labelledby="next-learning-title"
      className="relative isolate overflow-hidden bg-cta-background"
    >
      <GeometricForeground />
      <div className="relative mx-auto flex min-h-102.5 w-full max-w-260.5 flex-col items-center justify-center px-4 py-16 text-center">
        <AvatarMap
          path="/images/GetStarted/"
          images={communityFaces}
          size="36px"
          className="relative h-9 w-9 overflow-hidden rounded-full border-2 border-cta-background bg-white"
        />

        <SectionTitle
          text="What will you learn next?"
          variant="center-large"
          id="next-learning-title"
          className="mt-8"
        />
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
