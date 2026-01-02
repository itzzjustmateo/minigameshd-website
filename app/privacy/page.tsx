import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen flex justify-center p-6">
      <div className="w-full max-w-4xl space-y-10">
        {/* Header */}
        <header className="text-center space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">
            Datenschutzerklärung
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Informationen zum Umgang mit personenbezogenen Daten
          </p>
        </header>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>1. Allgemeine Hinweise</CardTitle>
              <CardDescription>
                Der Schutz deiner persönlichen Daten ist uns wichtig. Diese
                Datenschutzerklärung informiert dich darüber, welche Daten wir
                erheben und wie wir sie verwenden.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Erhebung und Verarbeitung von Daten</CardTitle>
              <CardDescription>
                Wir erheben personenbezogene Daten nur, wenn du uns diese
                freiwillig zur Verfügung stellst, zum Beispiel bei der
                Kontaktaufnahme oder Registrierung.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Verwendung der Daten</CardTitle>
              <CardDescription>
                Die erhobenen Daten werden ausschließlich zur Bereitstellung und
                Verbesserung unserer Dienste verwendet. Eine Weitergabe an
                Dritte erfolgt nicht ohne deine ausdrückliche Zustimmung.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Cookies</CardTitle>
              <CardDescription>
                Unsere Website kann Cookies verwenden, um bestimmte Funktionen
                bereitzustellen und die Benutzererfahrung zu verbessern.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Deine Rechte</CardTitle>
              <CardDescription>
                Du hast jederzeit das Recht auf Auskunft, Berichtigung oder
                Löschung deiner gespeicherten personenbezogenen Daten.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Änderungen</CardTitle>
              <CardDescription>
                Wir behalten uns vor, diese Datenschutzerklärung jederzeit zu
                ändern, um sie an neue rechtliche Anforderungen anzupassen.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </main>
  );
}
