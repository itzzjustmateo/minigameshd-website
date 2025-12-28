"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { toast } from "sonner";

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (
        (e.key === "k" && (e.ctrlKey || e.metaKey)) ||
        (e.key === "j" && (e.ctrlKey || e.metaKey))
      ) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Befehl oder Seite suchen…" />
      <CommandList>
        <CommandEmpty>Keine Ergebnisse.</CommandEmpty>

        <CommandGroup heading="Navigation">
          <CommandItem onSelect={() => router.push("/")}>Home</CommandItem>
          <CommandItem onSelect={() => router.push("/apply")}>
            Bewerben
          </CommandItem>
          <CommandItem onSelect={() => router.push("/rules")}>
            Regeln
          </CommandItem>
          <CommandItem onSelect={() => router.push("/team")}>Team</CommandItem>
          <CommandItem onSelect={() => router.push("/status")}>
            Server Status
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Aktionen">
          <CommandItem
            onSelect={() => {
              navigator.clipboard.writeText("minigameshd.minecraft.to");
              toast.success("Server-IP kopiert");
              setOpen(false);
            }}
          >
            Server-IP kopieren
          </CommandItem>

          <CommandItem
            onSelect={() => {
              window.open("/discord", "_blank");
              setOpen(false);
            }}
          >
            Discord öffnen
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
