import Image from "next/image";

interface AvatarMapProps {
  className?: string;
  images: string[];
  size: string;
  path: string;
}

export default function AvatarMap({
  images,
  size,
  path,
  className = "relative h-9 w-9 overflow-hidden rounded-full border-2 border-cta-background bg-white",
}: AvatarMapProps) {
  return (
    <div aria-hidden="true" className="flex -space-x-2">
      {images.map((avatar) => (
        <span key={avatar} className={className}>
          <Image
            src={`${path}${avatar}`}
            alt=""
            fill
            sizes={size}
            className="object-cover"
          />
        </span>
      ))}
    </div>
  );
}
