
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Linkedin, Github, Globe, CircleHelp } from "lucide-react";

interface Member {
  id: string;
  name: string;
  role: string[];
  avatarUrl: string;
  avatarFallback: string;
  socials: {
    linkedin?: string;
    github?: string;
    website?: string;
  };
  imageHint: string;
}

const teachers: Member[] = [
    { id: "t2", name: "DEEPTI CHANDIRAMANI", role: ["Teacher Incharge"], avatarUrl: "/images/deepti-maam.jpg", avatarFallback: "DC", socials: {}, imageHint: "female teacher" },
    { id: "t3", name: "SEEMA SRIVASTAVA", role: ["Teacher Incharge"], avatarUrl: "/images/seema-maam.jpg", avatarFallback: "SS", socials: {}, imageHint: "female teacher" },
    { id: "t1", name: "DEEPESH SHARMA", role: ["Teacher Incharge"], avatarUrl: "/images/depeesh-sir.jpg", avatarFallback: "DS", socials: {}, imageHint: "male teacher" }
];

const communityMembers: Member[] = [
    { id: "1", name: "HAYAN AFTAB", role: ["President", "Head of Creative", "Vice Head of Cryptic Hunt"], avatarUrl: "/images/team/chutiya.jpeg", avatarFallback: "HA", socials: {}, imageHint: "student leader" },
    { id: "2", name: "NAMAN SOIN", role: ["Vice President", "Head of Splice", "Vice Head of Cryptic Hunt"], avatarUrl: "/images/team/naman.jpeg", avatarFallback: "NS", socials: {}, imageHint: "student leader" },
    { id: "3", name: "BHARAT ANAND", role: ["Vice President"], avatarUrl: "/images/team/patel.jpeg", avatarFallback: "BA", socials: {}, imageHint: "student leader" },
    { id: "4", name: "ADITYA GOEL", role: ["Creative Vice Head"], avatarUrl: "/images/team/brother.jpeg", avatarFallback: "AG", socials: {}, imageHint: "student designer" },
    { id: "5", name: "AADYA JAIN", role: ["Head of PowerPoint"], avatarUrl: "/images/team/aadya.jpeg", avatarFallback: "AJ", socials: {}, imageHint: "student presenter" },
    { id: "6", name: "DIVANSHI AGGARWAL", role: ["Vice Head of PowerPoint"], avatarUrl: "/images/team/divanshi.jpeg", avatarFallback: "DA", socials: {}, imageHint: "student presenter" },
    { id: "7", name: "ADVIKA JAIN", role: ["Head of Programming"], avatarUrl: "/images/team/advika.jpeg", avatarFallback: "AJ", socials: {}, imageHint: "student programmer" },
    { id: "8", name: "AARIZ HOSSAIN", role: ["Vice Head of Programming"], avatarUrl: "/images/team/aariz.jpeg", avatarFallback: "AH", socials: {}, imageHint: "student programmer" },
    { id: "9", name: "AARAV JAIN", role: ["Programming Assistant"], avatarUrl: "/images/team/aarav.jpeg", avatarFallback: "AJ", socials: {}, imageHint: "student programmer" },
    { id: "10", name: "KABIR ARORA", role: ["Head of Surprise"], avatarUrl: "/images/team/shubh.jpeg", avatarFallback: "KA", socials: {}, imageHint: "student organizer" },
    { id: "11", name: "SHAURYA CHATURVEDI", role: ["Head of Cryptic Hunt", "Vice Head of Splice", "Vice Head of Surprise"], avatarUrl: "/images/team/shiv.jpeg", avatarFallback: "SC", socials: {}, imageHint: "student puzzler" },
    { id: "12", name: "SWARIT KUMAR", role: ["Head of Hackathon"], avatarUrl: "/images/team/swarit.jpeg", avatarFallback: "SK", socials: {}, imageHint: "student coder" },
    { id: "13", name: "AMAN MALHOTRA", role: ["Vice Head of Hackathon", "Creative Assistant"], avatarUrl: "/images/team/aman.jpeg", avatarFallback: "AM", socials: {}, imageHint: "student coder" },
    { id: "14", name: "ARYAMAN NIJHAWAN", role: ["Head of Group Discussion"], avatarUrl: "/images/team/shabang.jpeg", avatarFallback: "AN", socials: {}, imageHint: "student debater" },
    { id: "15", name: "VAIDHEHI BHUSHAN", role: ["Vice Head of Group Discussion"], avatarUrl: "/images/team/vaidehi.jpeg", avatarFallback: "VB", socials: {}, imageHint: "student debater" },
    { id: "16", name: "ARSH SINHA", role: ["Head of Quizzing"], avatarUrl: "/images/team/arsh.jpeg", avatarFallback: "AS", socials: {}, imageHint: "student quizzer" },
    { id: "17", name: "AANYA THUKRAL", role: ["Vice Head of Quizzing"], avatarUrl: "/images/team/aanya.jpeg", avatarFallback: "AT", socials: {}, imageHint: "student quizzer" },
    { id: "18", name: "ANAY DANG", role: ["Quizzing Assistant"], avatarUrl: "/images/team/anay.jpeg", avatarFallback: "AD", socials: {}, imageHint: "student quizzer" },
    { id: "19", name: "RANVIR JAIN", role: ["Gaming Head"], avatarUrl: "/images/team/ranvir.jpeg", avatarFallback: "RJ", socials: {}, imageHint: "student gamer" },
    { id: "20", name: "SHIVEN SHARMA", role: ["Gaming Vice Head"], avatarUrl: "/images/team/shiven.jpeg", avatarFallback: "SS", socials: {}, imageHint: "student gamer" },
    { id: "21", name: "ARHAAN PAINTAL", role: ["Gaming Assistant"], avatarUrl: "/images/team/arhaan.jpeg", avatarFallback: "AP", socials: {}, imageHint: "student gamer" },
    { id: "22", name: "KABEEIR KHATTAR", role: ["Photography Head"], avatarUrl: "/images/team/khattar.jpeg", avatarFallback: "KK", socials: {}, imageHint: "student photographer" },
    { id: "23", name: "PRISHA GOYAL", role: ["Photography Vice Head"], avatarUrl: "/images/team/prisha.jpeg", avatarFallback: "PG", socials: {}, imageHint: "student photographer" },
    { id: "24", name: "SHAURYA VERMA", role: ["Social Media Head", "Movie Making Head"], avatarUrl: "/images/team/verma.jpeg", avatarFallback: "SV", socials: {}, imageHint: "student media" },
    { id: "25", name: "VISHWAG TANEJA", role: ["Movie Making Vice Head", "Surprise Assistant"], avatarUrl: "/images/team/vishwag.jpeg", avatarFallback: "VT", socials: {}, imageHint: "student media" },
    { id: "26", name: "VIN CHADHA", role: ["Social Media Head"], avatarUrl: "/images/team/vin.jpeg", avatarFallback: "VC", socials: {}, imageHint: "student media" },
    { id: "27", name: "AISHA GIRDHAR", role: ["Social Media Vice Head"], avatarUrl: "/images/team/aisha.jpeg", avatarFallback: "AG", socials: {}, imageHint: "student media" },
    { id: "28", name: "SAHANA MALIK", role: ["Social Media Assistant"], avatarUrl: "/images/team/sahana.jpeg", avatarFallback: "SM", socials: {}, imageHint: "student media" },
]


export default function MembersPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-12 text-center">
        <h1 className="font-headline text-5xl md:text-6xl text-primary mb-4">Our Team</h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
          Meet the dedicated students and faculty who drive Syntax forward, organizing competitions and fostering a vibrant tech community.
        </p>
      </header>

      <section id="teachers" className="mb-20">
        <h2 className="font-headline text-4xl text-accent text-center mb-10">Faculty Advisors</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center max-w-4xl mx-auto">
          {teachers.map((member) => (
            <Card key={member.id} className="glass-card rounded-2xl text-center overflow-hidden transform hover:scale-[1.02] transition-transform duration-300 ease-out" style={{backdropFilter: 'blur(10px) saturate(180%)', WebkitBackdropFilter: 'blur(10px) saturate(180%)'}}>
              <CardHeader className="pt-8 pb-4">
                <Avatar className="h-24 w-24 mx-auto mb-4 ring-2 ring-accent/50 p-0.5">
                  <AvatarImage src={member.avatarUrl} alt={member.name} data-ai-hint={member.imageHint} className="rounded-full object-cover"/>
                  <AvatarFallback className="text-2xl bg-primary/20 text-primary">{member.avatarFallback}</AvatarFallback>
                </Avatar>
                 <CardTitle className="font-headline text-2xl text-accent">{member.name}</CardTitle>
                <div className="text-sm text-primary/90 font-medium space-y-1">
                {member.role.map((r, i) => (
                  <p key={i}>{r}</p>
                ))}
              </div>
              </CardHeader>
              <CardContent className="pb-8 pt-2">
                <div className="flex justify-center space-x-3 h-5"> 
                  {/* Socials can be added later */}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="students">
        <h2 className="font-headline text-4xl text-accent text-center mb-10">Student Council</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {communityMembers.map((member) => (
            <Card key={member.id} className="glass-card rounded-2xl text-center overflow-hidden transform hover:scale-[1.02] transition-transform duration-300 ease-out" style={{backdropFilter: 'blur(10px) saturate(180%)', WebkitBackdropFilter: 'blur(10px) saturate(180%)'}}>
              <CardHeader className="pt-8 pb-4">
                <Avatar className="h-24 w-24 mx-auto mb-4 ring-2 ring-accent/50 p-0.5">
                  <AvatarImage src={member.avatarUrl} alt={member.name} data-ai-hint={member.imageHint} className="rounded-full object-cover" />
                  <AvatarFallback className="text-2xl bg-primary/20 text-primary">{member.avatarFallback}</AvatarFallback>
                </Avatar>
                <CardTitle className="font-headline text-2xl text-accent">{member.name}</CardTitle>
                <div className="text-sm text-primary/90 font-medium space-y-1">
                  {member.role.map((r, i) => (
                    <p key={i}>{r}</p>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="pb-8 pt-2">
                <div className="flex justify-center space-x-3 h-5">
                  {member.socials.github && (
                    <a href={member.socials.github} target="_blank" rel="noopener noreferrer" aria-label={`${member.name}'s Github`} className="text-foreground/60 hover:text-accent transition-colors">
                      <CircleHelp className="h-5 w-5" />
                    </a>
                  )}
                  {member.socials.linkedin && (
                    <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${member.name}'s LinkedIn`} className="text-foreground/60 hover:text-accent transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  )}
                  {member.socials.website && (
                    <a href={member.socials.website} target="_blank" rel="noopener noreferrer" aria-label={`${member.name}'s Website`} className="text-foreground/60 hover:text-accent transition-colors">
                      <Globe className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
