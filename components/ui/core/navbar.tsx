"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export function Navbar() {
  return (
    <header className="w-full border-b sticky top-0 bg-transparent backdrop-blur-xs">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="font-bold text-lg">
          MiniGamesHD
        </Link>

        <nav className="flex items-center gap-2">
          {/* Search / Command */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => window.dispatchEvent(new Event("open-command-menu"))}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
            aria-label="Suche öffnen (Strg + K)"
          >
            <Search className="h-4 w-4" />
            <span className="hidden sm:inline">Suche</span>
            <kbd className="hidden sm:inline-flex items-center rounded border px-1.5 py-0.5 text-[10px] font-mono text-muted-foreground">
              Ctrl&nbsp;K
            </kbd>
          </Button>

          <Button asChild variant="ghost">
            <Link href="/apply">Bewerben</Link>
          </Button>

          <Button asChild variant="outline">
            <Link href="/discord" target="_blank" rel="noreferrer">
              Discord
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
