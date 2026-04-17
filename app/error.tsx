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
          Something went wrong
        </h1>

        <p className="text-muted-foreground text-sm">
          An unexpected error occurred while loading this page. You can try again
          or return to the homepage.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button onClick={() => reset()}>Try again</Button>

          <Button variant="outline">
            <Link href="/">Go to homepage</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
