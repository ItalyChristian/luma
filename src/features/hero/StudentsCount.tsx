import Image from "next/image";

const studentAvatars = [
  "photo-1534528741775-53994a69daeb",
  "photo-1500648767791-00dcc994a43e",
  "photo-1517841905240-472988babdf9",
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
              src={`https://images.unsplash.com/${avatar}?auto=format&fit=crop&w=56&h=56&q=80`}
              alt=""
              fill
              unoptimized
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
