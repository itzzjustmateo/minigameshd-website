import Link from "next/link";

interface FooterLink {
  title: string;
  href: string;
  display?: string;
}

interface FooterProps {
  copyRightHolder?: string;
  creationYear?: number;
  allRightsReserved?: boolean;
  links?: FooterLink[];
}

const DEFAULT_LINKS: FooterLink[] = [
  { title: "Terms", href: "/terms" },
  { title: "Privacy", href: "/privacy" },
  { title: "Impressum", href: "/impressum", display: "Imprint" },
];

export function Footer({
  copyRightHolder = "MiniGamesHD",
  creationYear = 2024,
  allRightsReserved = true,
  links = DEFAULT_LINKS,
}: FooterProps) {
  const currentYear = new Date().getFullYear();
  const yearRange =
    creationYear === currentYear
      ? String(creationYear)
      : `${creationYear} – ${currentYear}`;

  return (
    <footer className="border-t mt-auto">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:justify-between sm:items-center">
          <div className="flex flex-col gap-1 text-sm text-muted-foreground">
            <span>
              © {yearRange} {copyRightHolder}
              {allRightsReserved && ". All rights reserved."}
            </span>
          </div>

          <nav className="flex items-center gap-4 text-sm">
            {links.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-foreground transition-colors"
              >
                {link.display || link.title}
              </Link>
            ))}
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">Built by DevFlare</span>
          </nav>
        </div>
      </div>
    </footer>
  );
}