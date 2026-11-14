import Image from "next/image";
import { PictureProps, pictures } from "./pictures.data";

export default function PeopleCollage() {
  return (
    <div
      role="img"
      aria-label="A collage of people studying and learning together"
      className="relative mx-auto aspect-[1.06] w-full max-w-120"
    >
      <div
        aria-hidden="true"
        className="absolute inset-[3%] rounded-full bg-accent-lavender"
      />
      <div className="relative grid h-full grid-cols-4 grid-rows-6 gap-2.5 p-[5%] sm:gap-3">
        {pictures.map(({ src, position }: PictureProps) => (
          <div
            key={src}
            className={`relative overflow-hidden rounded-md bg-white shadow-[0_3px_8px_rgba(27,30,43,0.2)] ${position}`}
          >
            <Image
              src={`https://images.unsplash.com/${src}?auto=format&fit=crop&w=320&q=80`}
              alt=""
              fill
              unoptimized
              sizes="(max-width: 767px) 22vw, 120px"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
