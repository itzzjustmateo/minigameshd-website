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
            Häufig gestellte Fragen rund um MiniGamesHD
          </p>
        </header>

        <Card>
          <CardContent className="pt-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Wie kann ich auf dem Server spielen?
                </AccordionTrigger>
                <AccordionContent>
                  Nutze die Server-IP <strong>minigameshd.de</strong> für{" "}
                  <strong>Java</strong> oder{" "}
                  <strong>minigameshd.minecraft.to</strong> für{" "}
                  <strong>beides</strong>.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>Gibt es ein Mindestalter?</AccordionTrigger>
                <AccordionContent>
                  Wir empfehlen ein Mindestalter von 12 Jahren.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Wie kann ich mich bewerben?</AccordionTrigger>
                <AccordionContent>
                  Bewerbungen laufen aktuell über unseren Discord per Ticket
                  oder über unsere{" "}
                  <Button
                    variant="link"
                    className="p-0 inline-block text-blue-400"
                  >
                    <Link href={"/apply"}>Bewerbungsseite</Link>
                  </Button>
                  .
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Was passiert bei Regelverstößen?
                </AccordionTrigger>
                <AccordionContent>
                  Je nach Schwere gibt es Verwarnungen, Mutes oder Bans.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
