type SocialLink = {
  label: string;
  href: string;
  icon: React.ReactNode;
};
export const SocialLinks: SocialLink[] = [
  {
    label: "Twitter",
    href: "#",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M22 5.8c-.7.4-1.5.7-2.3.8a4 4 0 0 0 1.7-2.2 8 8 0 0 1-2.5 1A4 4 0 0 0 12 9.1a11.4 11.4 0 0 1-8.3-4.2 4 4 0 0 0 1.2 5.4A3.9 3.9 0 0 1 3 9.8v.1a4 4 0 0 0 3.2 3.9 4 4 0 0 1-1.8.1 4 4 0 0 0 3.7 2.8A8 8 0 0 1 2 18.3a11.3 11.3 0 0 0 6.1 1.8c7.4 0 11.9-6.4 11.7-12.1A8.3 8.3 0 0 0 22 5.8" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-5v-7a1 1 0 0 0-2 0v7h-5V9h5v1.7A4.5 4.5 0 0 1 16 8Z" />
        <path d="M2 9h5v12H2Z" />
        <path d="M4.5 6.5A1.5 1.5 0 1 0 4.5 3a1.5 1.5 0 0 0 0 3.5Z" />
      </svg>
    ),
  },
  {
    label: "Dribbble",
    href: "#",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M7.5 8.4c3 1 5.4 3 7 5.8" />
        <path d="M7 16.8c2.6-2.1 6.3-2.9 10-2.3" />
        <path d="M9.2 4.1c2.1 2.7 3.7 5.9 4.7 9.1" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];
