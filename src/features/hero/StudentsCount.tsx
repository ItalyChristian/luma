import Image from "next/image";

const studentAvatars = [
  "Image (13).png",
  "Image (14).png",
  "Image (15).png",
];

export default function StudentsCount() {
  return (
    <div className="mt-7 flex items-center gap-3 text-[12px]">
      <div aria-hidden="true" className="flex -space-x-2">
        {studentAvatars.map((avatar) => (
          <span
            key={avatar}
            className="relative h-7 w-7 overflow-hidden rounded-full border-2 border-background bg-image-placeholder"
          >
            <Image
            src={`/images/Hero/${avatar}`}
              alt=""
              fill
              sizes="28px"
              className="object-cover"
            />
          </span>
        ))}
      </div>
      <p>
        <strong>Trusted by 24,000+</strong>
        <span className="ml-1 text-muted">learners</span>
      </p>
    </div>
  );
}
