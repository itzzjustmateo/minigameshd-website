import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export default function FAQPage() {
  return (
    <main className="min-h-screen flex justify-center p-6">
      <div className="w-full max-w-4xl space-y-10">
        <header className="text-center space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">FAQ</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Frequently asked questions about MiniGamesHD
          </p>
        </header>

        <Card>
          <CardContent className="pt-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  How can I play on the server?
                </AccordionTrigger>
                <AccordionContent>
                  Use the server IP <strong>minigameshd.de</strong> for{" "}
                  <strong>Java</strong> or{" "}
                  <strong>minigameshd.minecraft.to</strong> for{" "}
                  <strong>both</strong>.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>Is there a minimum age?</AccordionTrigger>
                <AccordionContent>
                  We recommend a minimum age of 12 years.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>How can I apply?</AccordionTrigger>
                <AccordionContent>
                  Applications are currently processed via our Discord via ticket
                  or through our{" "}
                  <Button
                    variant="link"
                    className="p-0 inline-block text-blue-400"
                  >
                    <Link href={"/apply"}>application page</Link>
                  </Button>
                  .
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>
                  What happens when rules are broken?
                </AccordionTrigger>
                <AccordionContent>
                  Depending on severity, there are warnings, mutes, or bans.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
