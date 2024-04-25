export type MenuLink = {
  name: string;
  goto: string;
};

export const menuLinks: MenuLink[] = [
  {
    name: "About us",
    goto: "/about",
  },
  {
    name: "Adoption",
    goto: "/adoption",
  },
  {
    name: "Lost",
    goto: "/lost",
  },
  {
    name: "Reunited",
    goto: "/reunited",
  },
  {
    name: "Gallery",
    goto: "/gallery",
  },
  {
    name: "Contact",
    goto: "/#contact",
  },
];
