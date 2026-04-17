"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ServerIP } from "@/components/ui/core/server-ip";
import { ServerStatus } from "@/components/ui/core/server-status";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function StatusPage() {
  return (
    <main className="min-h-[calc(100vh-4rem)] flex justify-center p-6">
      <div className="w-full max-w-3xl space-y-10">
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-2"
        >
          <h1 className="text-4xl font-bold tracking-tight">Server Status</h1>
          <p className="text-muted-foreground">
            Current status of MiniGamesHD
          </p>
        </motion.header>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-6"
        >
          <motion.div variants={item}>
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Minecraft Server</CardTitle>
              </CardHeader>

              <CardContent className="flex flex-col items-center gap-6">
                <div className="flex flex-col items-center gap-4">
                  <motion.div
                    variants={item}
                    className="flex flex-col items-center gap-2"
                  >
                    <span className="text-sm text-muted-foreground">Server IP</span>
                    <ServerIP />
                  </motion.div>

                  <motion.div
                    variants={item}
                    className="flex flex-col items-center gap-2"
                  >
                    <span className="text-sm text-muted-foreground">Players</span>
                    <ServerStatus />
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card>
              <CardHeader>
                <CardTitle>Server Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <motion.div
                  variants={item}
                  className="flex justify-between border-b pb-2"
                >
                  <span className="text-muted-foreground">Version</span>
                  <span>1.20.4</span>
                </motion.div>
                <motion.div
                  variants={item}
                  className="flex justify-between border-b pb-2"
                >
                  <span className="text-muted-foreground">Location</span>
                  <span>Falkenstein, DE</span>
                </motion.div>
                <motion.div
                  variants={item}
                  className="flex justify-between border-b pb-2"
                >
                  <span className="text-muted-foreground">Status</span>
                  <span className="text-green-500">Online</span>
                </motion.div>
                <motion.div variants={item} className="flex justify-between">
                  <span className="text-muted-foreground">Uptime</span>
                  <span>24/7</span>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card>
              <CardHeader>
                <CardTitle>How to Connect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <motion.li variants={item} className="list-disc list-inside">
                  Open Minecraft Launcher
                </motion.li>
                <motion.li variants={item} className="list-disc list-inside">
                  Select Multiplayer
                </motion.li>
                <motion.li variants={item} className="list-disc list-inside">
                  Click &quot;Add Server&quot;
                </motion.li>
                <motion.li variants={item} className="list-disc list-inside">
                  Enter IP: <code>minigameshd.minecraft.to</code>
                </motion.li>
                <motion.li variants={item} className="list-disc list-inside">
                  Join the server
                </motion.li>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}