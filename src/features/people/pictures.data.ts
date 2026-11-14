export interface PictureProps {
  src: string;
  position: string;
}

export const pictures: PictureProps[] = [
  {
    src: "photo-1434030216411-0b793f4b4173",
    position: "col-start-1 row-start-2 row-span-2",
  },
  {
    src: "photo-1522202176988-66273c2fd55f",
    position: "col-start-2 row-start-1 row-span-2",
  },
  {
    src: "photo-1523240795612-9a054b0db644",
    position: "col-start-3 row-start-1 row-span-2",
  },
  {
    src: "photo-1517841905240-472988babdf9",
    position: "col-start-4 row-start-2 row-span-2",
  },
  {
    src: "photo-1521737711867-e3b97375f902",
    position: "col-start-2 row-start-3 row-span-2",
  },
  {
    src: "photo-1531482615713-2afd69097998",
    position: "col-start-3 row-start-3 row-span-2",
  },
  {
    src: "photo-1516321318423-f06f85e504b3",
    position: "col-start-4 row-start-4",
  },
  {
    src: "photo-1498243691581-b145c3f54a5a",
    position: "col-start-1 row-start-4 row-span-3",
  },
  {
    src: "photo-1517486808906-6ca8b3f04846",
    position: "col-start-2 row-start-6",
  },
  {
    src: "photo-1529070538774-1843cb3265df",
    position: "col-start-3 row-start-6",
  },
] as const;
