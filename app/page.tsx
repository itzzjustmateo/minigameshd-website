"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function HomePage() {
  const [role, setRole] = useState<string>("");

  const handleSubmit = () => {
    alert(
      "Danke! Bitte erstelle jetzt einen Screenshot deiner Bewerbung und eröffne damit ein Ticket auf unserem Discord-Server. Viel Erfolg!",
    );
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-900 via-indigo-950 to-zinc-900 p-4">
      <Card className="w-full max-w-xl bg-black/60 text-white shadow-2xl border-white/10">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">MinigamesHD Bewerbungen</CardTitle>
          <CardDescription className="text-zinc-300">
            Bewirb dich für unser Team! Fülle das Formular ehrlich aus.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Minecraft Name</Label>
            <Input placeholder="Dein Ingame-Name" />
          </div>

          <div className="space-y-2">
            <Label>Discord Name</Label>
            <Input placeholder="Name#0000" />
          </div>

          <div className="space-y-2">
            <Label>Alter</Label>
            <Input type="number" placeholder="Dein Alter" />
          </div>

          <div className="space-y-2">
            <Label>Bewerbungsrolle</Label>
            <Select onValueChange={setRole}>
              <SelectTrigger>
                <SelectValue placeholder="Bitte auswählen" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="co-owner">Co-Owner</SelectItem>
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="mod">Moderator</SelectItem>
                <SelectItem value="support">Support</SelectItem>
                <SelectItem value="builder">Builder</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {role === "co-owner" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Echter Vorname</Label>
                <Input placeholder="Vorname" />
              </div>
              <div className="space-y-2">
                <Label>Echter Nachname</Label>
                <Input placeholder="Nachname" />
              </div>
            </div>
          )}

          <div className="space-y-2">
            <Label>Erfahrung</Label>
            <Textarea placeholder="Erzähle uns von deiner Erfahrung" />
          </div>

          <div className="space-y-2">
            <Label>Warum möchtest du ins Team?</Label>
            <Textarea placeholder="Deine Motivation" />
          </div>

          <div className="space-y-2">
            <Label>Zeit pro Woche</Label>
            <Input placeholder="z.B. 5–10 Stunden" />
          </div>

          <Button onClick={handleSubmit} className="w-full mt-4">
            Bewerbung abschicken
          </Button>

          <p className="text-xs text-center text-zinc-400 pt-2">
            © MinigamesHD – Bewerbungsseite
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
