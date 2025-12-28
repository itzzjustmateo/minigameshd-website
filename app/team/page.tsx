import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import {
  Card,
  CardTitle,
  CardHeader,
  CardDescription,
} from "@/components/ui/card";

export default function TeamPage() {
  return (
    <main className="min-h-screen flex justify-center p-6">
      <div className="w-full max-w-4xl space-y-10">
        {/* Header */}
        <header className="space-y-2 text-center">
          <h1 className="text-4xl font-bold tracking-tight">Unser Team</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Wer steck eigentlich hinter dem Server?
          </p>
        </header>

        {/* Content */}
        <section className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Avatar className="mx-auto">
                  <AvatarImage
                    src="https://cdn.discordapp.com/avatars/1078395011382640651/b2328e67cc4ba6a8d1e1a6b39697d219.webp?size=64"
                    className="rounded-full"
                  />
                  <AvatarFallback>B</AvatarFallback>
                </Avatar>
                <CardTitle>Benisomat</CardTitle>
                <CardDescription>Owner</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Avatar className="mx-auto">
                  <AvatarImage
                    src="https://cdn.discordapp.com/avatars/1342495634586075146/71fb91c1d1c5c294c83e0944a31612bb.webp?size=64"
                    className="rounded-full"
                  />
                  <AvatarFallback>CG</AvatarFallback>
                </Avatar>
                <CardTitle>Crones Gott</CardTitle>
                <CardDescription>Co-Owner</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Avatar className="mx-auto">
                  <AvatarImage
                    src="https://cdn.discordapp.com/avatars/1198314027126894785/2a94f1f0bedc5ecee1461f7b3d6d0212.webp?size=64"
                    className="rounded-full"
                  />
                  <AvatarFallback>FK</AvatarFallback>
                </Avatar>
                <CardTitle>Fischkopf</CardTitle>
                <CardDescription>Co-Owner</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Avatar className="mx-auto">
                  <AvatarImage
                    src="https://cdn.discordapp.com/avatars/1008413436763443330/fc555bc2ace69f98d1fb19c2d788deea.webp?size=64"
                    className="rounded-full"
                  />
                  <AvatarFallback>A</AvatarFallback>
                </Avatar>
                <CardTitle>alvqrr</CardTitle>
                <CardDescription>Co-Owner</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Avatar className="mx-auto">
                  <AvatarImage
                    src="https://cdn.discordapp.com/avatars/1335246935413624934/6c5996770c985bcd6e5b68131ff2ba04.webp?size=64"
                    className="rounded-full"
                  />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
                <CardTitle>Uschebtii</CardTitle>
                <CardDescription>Co-Owner</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Avatar className="mx-auto">
                  <AvatarImage
                    src="https://cdn.discordapp.com/avatars/1111350763982172311/03b216f883f92f6e752383800a1eb541.webp?size=64"
                    className="rounded-full"
                  />
                  <AvatarFallback>FP</AvatarFallback>
                </Avatar>
                <CardTitle>FLEIPLEI</CardTitle>
                <CardDescription>Co-Owner</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>
      </div>
    </main>
  );
}
