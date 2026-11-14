export interface GroupProps {
  title: string;
  links: { label: string; href: string }[];
}

export const footerGroups: GroupProps[] = [
  {
    title: "Explore",
    links: [
      { label: "Courses", href: "#courses" },
      { label: "Categories", href: "#categories" },
      { label: "Instructors", href: "#instructors" },
      { label: "For Teams", href: "#teams" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Careers", href: "#careers" },
      { label: "Journal", href: "#journal" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "#help" },
      { label: "Contact", href: "#contact" },
      { label: "Terms", href: "#terms" },
      { label: "Privacy", href: "#privacy" },
    ],
  },
];
