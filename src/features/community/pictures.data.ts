export interface PictureProps {
  src: string;
  position: string;
}

export const pictures: PictureProps[] = [
  {
    src: "Image (2).png",
    position: "col-start-1 row-start-2 row-span-2",
  },
  {
    src: "Image.png",
    position: "col-start-2 row-start-1 row-span-2",
  },
  {
    src: "Image (1).png",
    position: "col-start-3 row-start-1 row-span-2",
  },
  {
    src: "Image (3).png",
    position: "col-start-4 row-start-2 row-span-2",
  },
  {
    src: "Image (5).png",
    position: "col-start-2 row-start-3 row-span-2",
  },
  {
    src: "Image (8).png",
    position: "col-start-3 row-start-3 row-span-2",
  },
  {
    src: "Image (10).png",
    position: "col-start-4 row-start-4 row-span-2",
  },
  {
    src: "Image (4).png",
    position: "col-start-1 row-start-4 row-span-3",
  },
  {
    src: "Image (6).png",
    position: "col-start-2 row-start-5 row-span-2",
  },
  {
    src: "Image (7).png",
    position: "col-start-3 row-start-5 row-span-2",
  },
] as const;
