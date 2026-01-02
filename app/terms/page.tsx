import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function TermsPage() {
  return (
    <main className="min-h-screen flex justify-center p-6">
      <div className="w-full max-w-4xl space-y-10">
        {/* Header */}
        <header className="text-center space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">
            Nutzungsbedingungen
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Regeln und Bedingungen für die Nutzung unserer Dienste
          </p>
        </header>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>1. Geltungsbereich</CardTitle>
              <CardDescription>
                Diese Nutzungsbedingungen gelten für alle Nutzer unserer Website
                und angebotenen Dienste.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Nutzung der Dienste</CardTitle>
              <CardDescription>
                Die Nutzung unserer Dienste ist nur im Rahmen der geltenden
                Gesetze erlaubt. Missbrauch oder Manipulation ist untersagt.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Inhalte und Verhalten</CardTitle>
              <CardDescription>
                Nutzer verpflichten sich zu einem respektvollen Umgang. Inhalte,
                die gegen geltendes Recht oder gute Sitten verstoßen, sind
                verboten.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Haftung</CardTitle>
              <CardDescription>
                Wir übernehmen keine Haftung für Schäden, die durch die Nutzung
                unserer Dienste entstehen, soweit gesetzlich zulässig.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Änderungen der Bedingungen</CardTitle>
              <CardDescription>
                Wir behalten uns das Recht vor, diese Nutzungsbedingungen
                jederzeit zu ändern. Änderungen werden mit Veröffentlichung
                wirksam.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Schlussbestimmungen</CardTitle>
              <CardDescription>
                Sollten einzelne Bestimmungen unwirksam sein, bleibt die
                Wirksamkeit der übrigen Regelungen unberührt.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </main>
  );
}
