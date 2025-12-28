import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center space-y-4">
      <h1 className="text-5xl font-bold">404</h1>
      <p>Diese Seite existiert nicht.</p>
      <Button asChild>
        <Link href="/">Zurück zur Startseite</Link>
      </Button>
    </main>
  );
}
