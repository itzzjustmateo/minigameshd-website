"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const rules = [
  {
    title: "General Behavior",
    rules: [
      "Treat all players and members with respect",
      "Insults, bullying, discrimination, or provocation are prohibited",
      "Friendly and factual behavior is expected",
      "Use common sense - intentionally disruptive behavior is not allowed",
    ],
  },
  {
    title: "Gameplay & Fairplay",
    rules: [
      "Cheating, hacks, unauthorized mods, or exploits are strictly forbidden",
      "Bug abuse is prohibited and must be reported to the team",
      "Teaming in solo modes is not allowed",
      "Intentionally disrupting game sessions is prohibited",
    ],
  },
  {
    title: "Chat & Communication",
    rules: [
      "No spam, flood, unnecessary pinging, or caps spam",
      "No advertising for other servers, projects, or social media",
      "Content must fit the respective channel",
      "Political, extreme, or inappropriate content is forbidden",
    ],
  },
  {
    title: "Voice Chat",
    rules: [
      "No screaming, trolling, or soundboard spam",
      "Do not disrupt ongoing conversations or recordings",
      "Being considerate of other participants is mandatory",
    ],
  },
  {
    title: "Discord & Community",
    rules: [
      "Owners and Co-Owners may not be tagged, mentioned, or directly messaged",
      "Contact Support or other team members for questions",
      "Follow the team's instructions at all times",
      "Cheating, bug abuse, or exploits are also prohibited outside the game",
    ],
  },
  {
    title: "Accounts & Security",
    rules: [
      "Each player may only use one account",
      "Account sharing is prohibited",
      "Using other people's accounts will result in severe penalties",
    ],
  },
  {
    title: "Violations & Penalties",
    rules: [
      "Rule violations may result in warnings, mutes, kicks, or bans",
      "Penalties can be temporary or permanent",
      "Discussions about penalties do not belong in public channels",
      "The team reserves the right to decide individually in special cases",
    ],
  },
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

export default function RulesPage() {
  return (
    <main className="min-h-screen flex justify-center p-6">
      <div className="w-full max-w-4xl space-y-10">
        <header className="space-y-2 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold tracking-tight"
          >
            Server Rules
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground mx-auto max-w-2xl"
          >
            These rules apply to the Minecraft server and the official MiniGamesHD
            Discord. Ignorance does not protect against punishments.
          </motion.p>
        </header>

        <motion.section
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-6"
        >
          {rules.map((section, i) => (
            <motion.div key={i} variants={item}>
              <Card>
                <CardHeader>
                  <CardTitle>{section.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  {section.rules.map((rule, j) => (
                    <motion.p
                      key={j}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 + j * 0.05 }}
                    >
                      • {rule}
                    </motion.p>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.section>
      </div>
    </main>
  );
}