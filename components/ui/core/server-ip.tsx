"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Check, Copy } from "lucide-react";

const SERVER_IP = "minigameshd.minecraft.to";

export function ServerIP() {
  const [copied, setCopied] = useState(false);

  const copyIp = async () => {
    await navigator.clipboard.writeText(SERVER_IP);
    setCopied(true);
    toast.success("Server IP copied!", {
      description: SERVER_IP,
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full max-w-xs">
      <Input
        value={SERVER_IP}
        readOnly
        onClick={(e) => (e.currentTarget as HTMLInputElement).select()}
        className="pr-10 cursor-pointer"
      />
      <button
        type="button"
        onClick={copyIp}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
        aria-label="Copy server IP"
      >
        {copied ? (
          <Check className="h-4 w-4 text-green-500" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </button>
    </div>
  );
}