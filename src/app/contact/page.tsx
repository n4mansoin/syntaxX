"use client";

import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Mail, MapPin, Phone, Send, Info } from "lucide-react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  subject: z.string().min(5, "Subject must be at least 5 characters."),
  message: z.string().min(10, "Message must be at least 10 characters long."),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactUsPage() {
  const { toast } = useToast();
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log(data);
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out to Syntax. We'll get back to you soon.",
    });
    reset();
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-12 text-center">
        <h1 className="font-headline text-5xl md:text-6xl text-primary mb-4">Contact Syntax</h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
          Have questions about our inter-school or intra-school competitions, workshops, or want to collaborate with Syntax? We&apos;d love to hear from you.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <Card className="glass-card rounded-2xl transition-all duration-300 ease-out hover:shadow-2xl hover:-translate-y-1">
          <CardHeader>
            <CardTitle className="font-headline text-3xl text-accent flex items-center gap-2">
              <Send className="h-7 w-7" /> Send a Message
            </CardTitle>
            <CardDescription className="text-foreground/70">Fill out the form below and our club representatives will get back to you regarding competitions or other queries.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-foreground/90 font-medium">Full Name</Label>
                <Input id="name" {...register("name")} placeholder="Your Name" className="mt-1 bg-background/30 border-primary/30 focus:border-accent focus:ring-accent" />
                {errors.name && <p className="text-destructive text-sm mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <Label htmlFor="email" className="text-foreground/90 font-medium">Email Address</Label>
                <Input id="email" type="email" {...register("email")} placeholder="your.email@example.com" className="mt-1 bg-background/30 border-primary/30 focus:border-accent focus:ring-accent" />
                {errors.email && <p className="text-destructive text-sm mt-1">{errors.email.message}</p>}
              </div>
              <div>
                <Label htmlFor="subject" className="text-foreground/90 font-medium">Subject</Label>
                <Input id="subject" {...register("subject")} placeholder="Inquiry about Coding Competition" className="mt-1 bg-background/30 border-primary/30 focus:border-accent focus:ring-accent" />
                {errors.subject && <p className="text-destructive text-sm mt-1">{errors.subject.message}</p>}
              </div>
              <div>
                <Label htmlFor="message" className="text-foreground/90 font-medium">Message</Label>
                <Textarea id="message" {...register("message")} rows={5} placeholder="Your message here..." className="mt-1 bg-background/30 border-primary/30 focus:border-accent focus:ring-accent" />
                {errors.message && <p className="text-destructive text-sm mt-1">{errors.message.message}</p>}
              </div>
              <Button type="submit" disabled={isSubmitting} className="w-full rounded-lg bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3 text-base h-12 transition-transform duration-150 ease-in-out hover:scale-[1.02] active:scale-[0.98] glass-card">
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-8">
          <Card id="registration-info" className="glass-card rounded-2xl transition-all duration-300 ease-out hover:shadow-2xl hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-accent flex items-center gap-2"><Info className="h-6 w-6"/> Event Registration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-foreground/80">
                <p>To register for upcoming inter-school and intra-school competitions, please check the specific event details on our <Link href="/events" className="text-primary hover:text-accent underline">Events page</Link>.</p>
                <p>Registration links will be provided there, or you can join our Discord server for the latest announcements.</p>
            </CardContent>
          </Card>
          <Card className="glass-card rounded-2xl transition-all duration-300 ease-out hover:shadow-2xl hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-accent">Club Contact Info</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-foreground/80">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-primary/90">Club Email</h3>
                  <a href="mailto:syntax@dpsi.ac.in" className="hover:text-accent transition-colors">syntax@dpsi.ac.in</a>
                </div>
              </div>
               <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-primary/90">Contact Number</h3>
                  <a href="tel:+919910504888" className="hover:text-accent transition-colors">+91 99105 04888</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-1 shrink-0" />
                <div>
                  <h3 className="font-semibold text-primary/90">Location</h3>
                  <p>P-37, Birla Vidya Niketan Marg, Sector 6, Pushp Vihar, New Delhi, Delhi 110017</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <br />
      <section id="location" className="max-w-4xl mx-auto text-center">
        <h2 className="font-headline text-4xl md:text-5xl text-primary mb-8">Location</h2>
        <div className="glass-card rounded-2xl overflow-hidden shadow-xl mb-8 transition-all duration-300 ease-out hover:shadow-2xl hover:-translate-y-1" data-ai-hint="school map location">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3870.5309578697907!2d77.22408930000002!3d28.528096400000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce18969dc1267%3A0x8ed8465dad0667a5!2sDPS%20International!5e1!3m2!1sen!2sin!4v1750425729248!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border:0 }}
            allowFullScreen={false}
            loading="lazy"
            title="Syntax Location at School"
            className="opacity-90 hover:opacity-100 transition-opacity duration-300"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
