import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t mt-12">
      <div className="mx-auto max-w-7xl px-6 py-6 text-sm flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center">
        <span>
          © 2024 – {new Date().getFullYear()} MiniGamesHD. Alle Rechte
          vorbehalten.
        </span>

        <div className="flex items-center gap-4 text-muted-foreground">
          <Link
            href="/impressum"
            className="hover:text-foreground transition-colors"
          >
            Impressum
          </Link>

          <Link
            href="/privacy"
            className="hover:text-foreground transition-colors"
          >
            Datenschutz
          </Link>

          <Link
            href="/terms"
            className="hover:text-foreground transition-colors"
          >
            Nutzungsbedingungen
          </Link>

          <span className="hidden sm:inline">•</span>

          <span className="hidden sm:inline">Website by DevFlare</span>
        </div>
      </div>
    </footer>
  );
}
