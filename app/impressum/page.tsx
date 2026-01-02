import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function ImpressumPage() {
  return (
    <main className="min-h-screen flex justify-center p-6">
      <div className="w-full max-w-4xl space-y-10">
        {/* Header */}
        <header className="text-center space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Impressum</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Angaben gemäß § 5 TMG
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Diese Website wird privat betrieben. Die nachfolgenden Angaben
            erfolgen nach bestem Wissen und Gewissen.
          </p>
        </header>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Angaben zum Anbieter</CardTitle>
              <CardDescription>
                <p>
                  <strong>MiniGamesHD</strong> (privat)
                </p>
                <p>
                  Betreiber: <strong>Benisomat</strong>
                </p>
                <p>
                  Standort: <strong>Wien, Österreich (AT)</strong>
                </p>
                <p>
                  Website:{" "}
                  <strong>
                    <a
                      href="https://minigameshd.vercel.app"
                      className="underline hover:text-foreground"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      minigameshd.vercel.app
                    </a>
                  </strong>
                </p>
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Kontakt</CardTitle>
              <CardDescription>
                <p>
                  E-Mail: <strong>minigameshdmgh@gmail.com</strong>
                </p>
                <p>
                  Discord: <strong>@benisomat</strong>
                </p>
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Verantwortlich für den Inhalt</CardTitle>
              <CardDescription>
                Verantwortlich für den Inhalt gemäß § 55 Abs. 2 RStV:
                <br />
                <strong>Benisomat (MiniGamesHD)</strong>
                <br />
                Wien, Österreich
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Haftung für Inhalte</CardTitle>
              <CardDescription>
                Als Diensteanbieter sind wir für eigene Inhalte auf diesen
                Seiten nach den allgemeinen Gesetzen verantwortlich. Für die
                Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann
                jedoch keine Gewähr übernommen werden.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Haftung für Links</CardTitle>
              <CardDescription>
                Diese Website enthält Links zu externen Websites Dritter, auf
                deren Inhalte kein Einfluss besteht. Für diese fremden Inhalte
                wird daher keine Haftung übernommen.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Urheberrecht</CardTitle>
              <CardDescription>
                Die auf dieser Website erstellten Inhalte und Werke unterliegen
                dem Urheberrecht. Jede Art der Verwertung außerhalb der Grenzen
                des Urheberrechts bedarf der vorherigen Zustimmung des
                jeweiligen Betreibers.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </main>
  );
}
