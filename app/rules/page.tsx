import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function RulesPage() {
  return (
    <main className="min-h-screen flex justify-center p-6">
      <div className="w-full max-w-4xl space-y-10">
        {/* Header */}
        <header className="space-y-2 text-center">
          <h1 className="text-4xl font-bold tracking-tight">Serverregeln</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Diese Regeln gelten für den Minecraft-Server sowie den offiziellen
            MinigamesHD Discord. Unwissenheit schützt nicht vor Strafen.
          </p>
        </header>

        {/* Content */}
        <section className="space-y-6">
          {/* Allgemeines Verhalten */}
          <Card>
            <CardHeader>
              <CardTitle>Allgemeines Verhalten</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p>• Respektvoller Umgang mit allen Spielern und Mitgliedern</p>
              <p>
                • Beleidigungen, Mobbing, Diskriminierung oder Provokationen
                sind verboten
              </p>
              <p>• Freundliches und sachliches Verhalten wird erwartet</p>
              <p>
                • Nutzt gesunden Menschenverstand – absichtlich störendes
                Verhalten ist untersagt
              </p>
            </CardContent>
          </Card>

          {/* Gameplay & Fairplay */}
          <Card>
            <CardHeader>
              <CardTitle>Gameplay & Fairplay</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p>
                • Cheating, Hacks, unerlaubte Mods oder Exploits sind
                strengstens verboten
              </p>
              <p>• Bugusing ist untersagt und muss dem Team gemeldet werden</p>
              <p>• Teaming in Solo-Modi ist nicht erlaubt</p>
              <p>• Das absichtliche Stören von Spielabläufen ist verboten</p>
            </CardContent>
          </Card>

          {/* Chat & Kommunikation */}
          <Card>
            <CardHeader>
              <CardTitle>Chat & Textkommunikation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p>• Kein Spam, Flood, unnötiges Pingen oder Caps-Spam</p>
              <p>
                • Keine Werbung für andere Server, Projekte oder
                Social-Media-Kanäle
              </p>
              <p>• Inhalte müssen zum jeweiligen Channel passen</p>
              <p>
                • Politische, extreme oder unangemessene Inhalte sind verboten
              </p>
            </CardContent>
          </Card>

          {/* Voicechat */}
          <Card>
            <CardHeader>
              <CardTitle>Voicechat-Regeln</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p>• Kein Rumschreien, Trolling oder Soundboard-Spam</p>
              <p>• Stört keine laufenden Gespräche oder Aufnahmen</p>
              <p>• Rücksichtnahme auf andere Teilnehmer ist Pflicht</p>
            </CardContent>
          </Card>

          {/* Discord & Community */}
          <Card>
            <CardHeader>
              <CardTitle>Discord & Community</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p>
                • Owner und Co-Owner dürfen nicht getaggt, erwähnt oder direkt
                angeschrieben werden
              </p>
              <p>
                • Wendet euch bei Fragen an Supporter oder andere Teammitglieder
              </p>
              <p>• Den Anweisungen des Teams ist jederzeit Folge zu leisten</p>
              <p>
                • Cheating, Bugusing oder Exploits sind auch außerhalb des
                Spiels untersagt
              </p>
            </CardContent>
          </Card>

          {/* Accounts & Sicherheit */}
          <Card>
            <CardHeader>
              <CardTitle>Accounts & Sicherheit</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p>• Jeder Spieler darf nur einen Account verwenden</p>
              <p>• Account-Sharing ist verboten</p>
              <p>• Das Ausnutzen fremder Accounts führt zu harten Strafen</p>
            </CardContent>
          </Card>

          {/* Strafen */}
          <Card>
            <CardHeader>
              <CardTitle>Verstöße & Strafen</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p>
                • Regelverstöße können Verwarnungen, Mutes, Kicks oder Bans nach
                sich ziehen
              </p>
              <p>• Strafen können temporär oder permanent sein</p>
              <p>
                • Diskussionen über Strafen gehören nicht in öffentliche
                Channels
              </p>
              <p>
                • Das Team behält sich vor, in Einzelfällen individuell zu
                entscheiden
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}
