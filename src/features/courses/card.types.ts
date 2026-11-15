export interface CardLink {
  href: string;
  label: string;
}

export interface CardProps {
  number: number;
  title: string;
  description: string;
  link: CardLink;
}