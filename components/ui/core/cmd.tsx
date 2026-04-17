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
import {
  Home,
  Gamepad2,
  ScrollText,
  HelpCircle,
  UserPlus,
  Users,
  Shield,
  FileText,
  Copyright,
  Copy,
  ExternalLink,
} from "lucide-react";

const PAGES = [
  {
    label: "Home",
    href: "/",
    description: "Main landing page",
    icon: Home,
  },
  {
    label: "Status",
    href: "/status",
    description: "Server status & info",
    icon: Gamepad2,
  },
  {
    label: "Rules",
    href: "/rules",
    description: "Server rules",
    icon: ScrollText,
  },
  {
    label: "FAQ",
    href: "/faq",
    description: "Frequently asked questions",
    icon: HelpCircle,
  },
  {
    label: "Apply",
    href: "/apply",
    description: "Join the team",
    icon: UserPlus,
  },
  {
    label: "Discord",
    href: "/discord",
    description: "Join community",
    icon: ExternalLink,
  },
  {
    label: "Privacy Policy",
    href: "/privacy",
    description: "Privacy policy",
    icon: Shield,
  },
  {
    label: "Terms of Service",
    href: "/terms",
    description: "Terms of service",
    icon: FileText,
  },
  {
    label: "Imprint",
    href: "/impressum",
    description: "Legal information",
    icon: Copyright,
  },
];

const ACTIONS = [
  {
    label: "Copy Server IP",
    description: "minigameshd.minecraft.to",
    icon: Copy,
    action: async () => {
      await navigator.clipboard.writeText("minigameshd.minecraft.to");
      toast.success("Server IP copied!");
    },
  },
  {
    label: "Copy Discord Invite",
    description: "discord.gg/minigameshd",
    icon: Copy,
    action: async () => {
      await navigator.clipboard.writeText("discord.gg/minigameshd");
      toast.success("Discord invite copied!");
    },
  },
];

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
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

return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput
        placeholder="Search pages and actions..."
        className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground"
      />
      <CommandList className="max-h-[350px] overflow-y-auto p-2">
        <CommandEmpty className="py-6 text-sm text-muted-foreground">
          No results found. Try a different search term.
        </CommandEmpty>

        <CommandGroup
          heading="Pages"
          className="mb-2 px-2 text-xs font-medium text-muted-foreground"
        >
          {PAGES.map((page) => {
            const Icon = page.icon;
            return (
              <CommandItem
                key={page.href}
                onSelect={() => {
                  router.push(page.href);
                  setOpen(false);
                }}
                className="group relative flex cursor-pointer items-center gap-3 rounded-md px-2 py-2.5 text-sm aria-selected:bg-accent aria-selected:text-accent-foreground"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-zinc-800 group-hover:bg-zinc-700 group-aria-selected:bg-primary group-aria-selected:text-primary-foreground">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="flex flex-col">
                  <span className="font-medium">{page.label}</span>
                  <span className="text-xs text-muted-foreground">
                    {page.description}
                  </span>
                </div>
              </CommandItem>
            );
          })}
        </CommandGroup>

        <CommandSeparator className="-mx-2 my-2" />

        <CommandGroup
          heading="Quick Actions"
          className="mb-2 px-2 text-xs font-medium text-muted-foreground"
        >
          {ACTIONS.map((action) => {
            const Icon = action.icon;
            return (
              <CommandItem
                key={action.label}
                onSelect={() => {
                  action.action();
                  setOpen(false);
                }}
                className="group relative flex cursor-pointer items-center gap-3 rounded-md px-2 py-2.5 text-sm aria-selected:bg-accent aria-selected:text-accent-foreground"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-zinc-800 group-hover:bg-zinc-700 group-aria-selected:bg-primary group-aria-selected:text-primary-foreground">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="flex flex-col">
                  <span className="font-medium">{action.label}</span>
                  <span className="text-xs text-muted-foreground">
                    {action.description}
                  </span>
                </div>
              </CommandItem>
            );
          })}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}