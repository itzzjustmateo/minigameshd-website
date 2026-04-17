"use client";

import { useRef, useCallback, useEffect, useState } from "react";
import html2canvas from "html2canvas";
import Link from "next/link";
import { toast } from "sonner";

import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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
import { Checkbox } from "@/components/ui/checkbox";

const ROLES = [
  { value: "co-owner", label: "Co-Owner", minAge: 18 },
  { value: "admin", label: "Admin", minAge: 15 },
  { value: "developer", label: "Developer", minAge: 15 },
  { value: "mod", label: "Moderator", minAge: 13 },
  { value: "supporter", label: "Supporter", minAge: 13 },
  { value: "builder", label: "Builder", minAge: 13 },
] as const;

const EXPERIENCE_OPTIONS = [
  "Support",
  "Moderation",
  "Events",
  "Development",
  "Building",
] as const;

const formSchema = z.object({
  mcName: z.string().min(3, "Min 3 characters"),
  discord: z.string().min(2, "Min 2 characters"),
  age: z.string().refine((val) => {
    const num = Number(val);
    return !isNaN(num) && num >= 10;
  }, { message: "Enter a valid age (10+)" }),
  role: z.string(),

  motivationWhy: z.string().min(10, "Min 10 characters"),
  motivationContribution: z.string().min(10, "Min 10 characters"),

  experienceTags: z.array(z.string()).optional(),
  experienceText: z.string().optional(),

  honesty: z.string().min(5, "Min 5 characters"),
  time: z.string().min(1, "Please enter your available time"),

  firstName: z.string().optional(),
  lastName: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function ApplyPage() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      experienceTags: [],
    },
  });

  const experienceTags = watch("experienceTags");
  const selectedRole = watch("role");

  useEffect(() => {
    const errorKeys = Object.keys(errors);
    if (errorKeys.length > 0) {
      if (errorKeys.length >= 4) {
        toast.error("Please fill in all required fields");
      } else {
        const firstError = errors[errorKeys[0] as keyof typeof errors];
        toast.error(firstError?.message || "Invalid input");
      }
    }
  }, [errors]);

  const onSubmit = useCallback(async (data: FormValues) => {
    if (!data.role) {
      toast.error("Please select a role");
      return;
    }

    setIsSubmitting(true);

    const minAge = ROLES.find(r => r.value === data.role)?.minAge || 10;
    const age = Number(data.age);
    if (isNaN(age) || age < minAge) {
      toast.error(`Must be at least ${minAge} years old for this role`);
      setIsSubmitting(false);
      return;
    }

    const embed = {
      title: "New Application",
      color: 5763714,
      fields: [
        { name: "Minecraft", value: data.mcName, inline: true },
        { name: "Discord", value: data.discord, inline: true },
        { name: "Age", value: data.age, inline: true },
        { name: "Role", value: data.role, inline: true },
        {
          name: "Why this server?",
          value: data.motivationWhy || "N/A",
        },
        {
          name: "What can you contribute?",
          value: data.motivationContribution || "N/A",
        },
        {
          name: "Experience",
          value:
            data.experienceTags?.length || data.experienceText
              ? `${
                  data.experienceTags?.join(", ") || ""
                }${data.experienceText ? `\n${data.experienceText}` : ""}`
              : "None",
        },
        {
          name: "What do you find difficult?",
          value: data.honesty || "N/A",
        },
        {
          name: "Time per week",
          value: data.time || "N/A",
        },
      ],
    };

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ embeds: [embed] }),
      });

      if (!res.ok) throw new Error("Failed");

      toast.success("Application submitted!");
    } catch {
      toast.error("Failed to submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }

    if (!cardRef.current) return;

    cardRef.current.classList.add("screenshot-safe");

    try {
      const canvas = await html2canvas(cardRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
      });

      const image = canvas.toDataURL("image/png");
      const link = document.createElement("a");

      link.href = image;
      link.download = "minigameshd-application.png";
      link.click();

      toast.success("Screenshot saved!");
    } catch {
      toast.error("Screenshot failed");
    } finally {
      cardRef.current.classList.remove("screenshot-safe");
    }
  }, []);

  return (
    <main className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4">
      <Card ref={cardRef} className="w-full max-w-lg shadow-lg">
        <CardHeader className="space-y-4">
          <CardTitle>Application</CardTitle>
          <CardDescription className="text-center">
            Apply now to join the MiniGamesHD Team!
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <Field
                label="Minecraft Name"
                required
                error={errors.mcName?.message}
              >
                <Input
                  {...register("mcName")}
                  placeholder="Your In-Game name"
                />
              </Field>
              <Field label="Discord" required error={errors.discord?.message}>
                <Input {...register("discord")} placeholder="Username" />
              </Field>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Field label="Age" required error={errors.age?.message}>
                <Input
                  {...register("age")}
                  placeholder="18"
                />
              </Field>
              <Field label="Role" required error={errors.role?.message}>
                <Controller
                  name="role"
                  control={control}
                  render={({ field }) => (
                    <Select
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a role" />
                      </SelectTrigger>
                      <SelectContent>
                        {ROLES.map((r) => (
                          <SelectItem key={r.value} value={r.value}>
                            {r.label} (age {r.minAge}+)
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
              </Field>
            </div>

            <Field
              label="Why our server?"
              required
              error={errors.motivationWhy?.message}
            >
              <Textarea
                {...register("motivationWhy")}
                placeholder="Why do you want to join our team?"
                className="min-h-[80px]"
              />
            </Field>

            <Field
              label="What can you contribute?"
              required
              error={errors.motivationContribution?.message}
            >
              <Textarea
                {...register("motivationContribution")}
                placeholder="What skills do you bring?"
                className="min-h-[80px]"
              />
            </Field>

            <Field label="Experience (optional)">
              <Controller
                name="experienceTags"
                control={control}
                render={({ field }) => (
                  <div className="flex flex-wrap gap-2">
                    {EXPERIENCE_OPTIONS.map((opt) => {
                      const checked = field.value?.includes(opt);
                      return (
                        <label
                          key={opt}
                          className={`
                            flex items-center gap-2 px-3 py-1.5 rounded-md border text-sm cursor-pointer transition-colors
                            ${
                              checked
                                ? "bg-primary text-primary-foreground"
                                : "bg-background hover:bg-accent"
                            }
                          `}
                        >
                          <Checkbox
                            checked={checked}
                            onCheckedChange={(v) => {
                              if (v) {
                                field.onChange([...(field.value ?? []), opt]);
                              } else {
                                field.onChange(
                                  field.value?.filter((x) => x !== opt),
                                );
                              }
                            }}
                            className="sr-only"
                          />
                          {opt}
                        </label>
                      );
                    })}
                  </div>
                )}
              />

              {experienceTags && experienceTags.length > 0 && (
                <Textarea
                  {...register("experienceText")}
                  placeholder={`Tell us about your ${experienceTags.join(", ")} experience`}
                  className="mt-3"
                />
              )}
            </Field>

            <div className="grid grid-cols-2 gap-4">
              <Field
                label="What do you find difficult?"
                required
                error={errors.honesty?.message}
              >
                <Textarea
                  {...register("honesty")}
                  placeholder="Be honest..."
                  className="min-h-[60px]"
                />
              </Field>
              <Field label="Time/week" required error={errors.time?.message}>
                <Input {...register("time")} placeholder="e.g. 10 hours" />
              </Field>
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </Button>

            <div className="text-center text-sm text-muted-foreground">
              <Link
                href="/discord"
                className="underline underline-offset-4 hover:text-primary"
              >
                Questions? Join our Discord
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label>
        {label}
        {required && <span className="text-destructive"> *</span>}
      </Label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}