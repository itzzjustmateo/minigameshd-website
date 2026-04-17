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

type CommandAction = () => void;

interface CommandEntry {
  label: string;
  action: CommandAction;
}

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const isCmd = e.ctrlKey || e.metaKey;
      const key = e.key.toLowerCase();

      // Ctrl/Cmd + K (official) and Ctrl/Cmd + J (secret)
      if (isCmd && (key === "k" || key === "j")) {
        e.preventDefault();
        setOpen(true);
      }
    };

    const onOpenCommand = () => setOpen(true);

    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("open-command-menu", onOpenCommand);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("open-command-menu", onOpenCommand);
    };
  }, []);

  const navigate =
    (path: string): CommandAction =>
    () => {
      router.push(path);
      setOpen(false);
    };

  // All pages
  const navigationCommands: CommandEntry[] = [
    { label: "Home", action: navigate("/") },
    { label: "Team", action: navigate("/team") },
    { label: "Status", action: navigate("/status") },
    { label: "Rules", action: navigate("/rules") },
    { label: "FAQ", action: navigate("/faq") },
    { label: "Apply", action: navigate("/apply") },

    // Legal / Info
    { label: "Privacy Policy", action: navigate("/privacy") },
    { label: "Terms of Service", action: navigate("/terms") },
    { label: "Imprint", action: navigate("/impressum") },
  ];

  const actionCommands: CommandEntry[] = [
    {
      label: "Copy Server IP",
      action: async () => {
        await navigator.clipboard.writeText("minigameshd.minecraft.to");
        toast.success("Server IP copied");
        setOpen(false);
      },
    },
  ];

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Search command or page..." />
      <CommandList>
        <CommandEmpty>No results.</CommandEmpty>

        <CommandGroup heading="Navigation">
          {navigationCommands.map((cmd) => (
            <CommandItem key={cmd.label} onSelect={cmd.action}>
              {cmd.label}
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Actions">
          {actionCommands.map((cmd) => (
            <CommandItem key={cmd.label} onSelect={cmd.action}>
              {cmd.label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
