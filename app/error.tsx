"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Error({ reset }: { reset: () => void }) {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-md text-center space-y-5">
        <h1 className="text-3xl font-bold tracking-tight">
          Etwas ist schiefgelaufen
        </h1>

        <p className="text-muted-foreground text-sm">
          Beim Laden dieser Seite ist ein unerwarteter Fehler aufgetreten. Du
          kannst es erneut versuchen oder zur Startseite zurückkehren.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button onClick={() => reset()}>Erneut versuchen</Button>

          <Button variant="outline">
            <Link href="/">Zur Startseite</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
