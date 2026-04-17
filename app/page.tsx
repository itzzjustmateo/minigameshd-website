"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ServerIP } from "@/components/ui/core/server-ip";
import { ServerStatus } from "@/components/ui/core/server-status";

const features = [
  { title: "Cooperative Game Modes", desc: "Play with your team" },
  { title: "Daily Events", desc: "New challenges every day" },
  { title: "Fair Play", desc: "Anti-cheat & moderation" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function HomePage() {
  return (
    <main className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center p-6">
      <div className="container flex flex-col items-center space-y-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Server is online
          </div>

          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight bg-gradient-to-r from-primary via-primary to-primary/60 bg-clip-text text-transparent">
            MiniGamesHD
          </h1>

          <p className="text-xl text-muted-foreground max-w-xl mx-auto">
            Your modern Minecraft minigame experience. Play with friends,
            join the team, and create unforgettable memories.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Button size="lg" asChild>
            <Link href="/apply">Apply now</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="/discord" target="_blank" rel="noreferrer">
              Join Discord
            </a>
          </Button>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="w-full max-w-2xl space-y-6"
        >
          <motion.div variants={item}>
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Server Info</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center gap-6">
                <div className="flex flex-col items-center gap-4">
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-sm text-muted-foreground">Server IP</span>
                    <ServerIP />
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-sm text-muted-foreground">Players</span>
                    <ServerStatus />
                  </div>
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
                <div className="flex justify-between border-b pb-2">
                  <span className="text-muted-foreground">Version</span>
                  <span>1.20.4</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-muted-foreground">Location</span>
                  <span>Falkenstein, DE</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="text-muted-foreground">Status</span>
                  <span className="text-green-500">Online</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Uptime</span>
                  <span>24/7</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl w-full"
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={item}
              className="p-6 rounded-xl border bg-card/50 backdrop-blur-sm"
            >
              <h3 className="font-semibold mb-1">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}