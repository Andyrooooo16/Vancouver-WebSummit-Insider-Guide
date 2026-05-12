import { picks, tips, Pick } from "@/data";
import { AnimatedCard } from "@/components/animated-card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, ExternalLink, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const splurge = sortByCuisine(picks.filter(p => p.category === "Eat & Drink" && p.tier === "splurge"));
  const casual = sortByCuisine(picks.filter(p => p.category === "Eat & Drink" && p.tier === "casual"));
  const quickBite = sortByCuisine(picks.filter(p => p.category === "Eat & Drink" && p.tier === "quick-bite"));
  const coffee = picks.filter(p => p.category === "Coffee");
  const thingsToDo = picks.filter(p => p.category === "Things to Do");
  const nightlife = picks.filter(p => p.category === "Nightlife & After Hours");

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20 selection:text-primary">

      {/* Hero */}
      <section className="relative h-[90vh] min-h-[600px] w-full flex items-end justify-center overflow-hidden pb-24">
        <div className="absolute inset-0 w-full h-full">
          <img src="/images/hero.png" alt="Vancouver skyline at golden hour" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>
        <div className="container relative z-10 mx-auto px-6 md:px-12 text-center max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
            <div className="mb-8 flex justify-center">
              <img
                src="/images/websummit.png"
                alt="Web Summit Vancouver"
                className="h-16 md:h-20 w-auto rounded-xl shadow-lg"
              />
            </div>
            <h1 className="text-6xl md:text-8xl font-serif text-foreground mb-6 leading-tight">
              Vancouver, <br /><span className="text-primary italic">Right Now.</span>
            </h1>
            <p className="text-lg md:text-2xl text-foreground/80 max-w-2xl mx-auto font-light leading-relaxed">
              A curated quick guide by a Vancouverite techie hoping you enjoy your stay in his home town.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-6 md:px-12 py-12 md:py-24 max-w-6xl space-y-32">

        {/* Eat & Drink */}
        <section>
          <SectionHeader
            title="Eat & Drink"
            description="From a quick bite between sessions to the finest Pacific Northwest dining. All walk times from Vancouver Convention Centre."
            image="/images/eat.png"
            imageAlt="Moody elegant dining room"
          />

          <div className="mt-12 space-y-14">
            <TierGroup label="Worth the Splurge" description="Sit-down restaurants — book ahead where you can">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {splurge.map((pick, i) => <PickCard key={pick.id} pick={pick} index={i} />)}
              </div>
            </TierGroup>

            <TierGroup label="Casual & Social" description="Great atmosphere, solid food, and no stress about getting a reservation">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
                {casual.map((pick, i) => <PickCard key={pick.id} pick={pick} index={i} />)}
              </div>
            </TierGroup>

            <TierGroup label="Quick & Good" description="Fast, satisfying, and won't break the bank">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {quickBite.map((pick, i) => <PickCard key={pick.id} pick={pick} index={i} compact />)}
              </div>
            </TierGroup>
          </div>
        </section>

        {/* Coffee */}
        <section>
          <SectionHeader
            title="Coffee"
            description="The fuel. Vancouver takes its roasting seriously — here are the best spots to recharge."
            image="/images/coffee.png"
            imageAlt="Warm artisan coffee shop"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {coffee.map((pick, i) => <PickCard key={pick.id} pick={pick} index={i} />)}
          </div>
        </section>

        {/* Things to Do */}
        <section>
          <SectionHeader
            title="Things to Do"
            description="Got a spare hour? Step out of the convention centre and see what makes Vancouver worth moving to."
            image="/images/do.png"
            imageAlt="Lush green seawall"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {thingsToDo.map((pick, i) => <PickCard key={pick.id} pick={pick} index={i} />)}
          </div>
        </section>

        {/* Nightlife */}
        <section>
          <SectionHeader
            title="Nightlife & After Hours"
            description="Keep the energy going. Great spots to continue conversations with colleagues, new friends, and potential collaborators."
            image="/images/nightlife.png"
            imageAlt="Moody cocktail bar"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {nightlife.map((pick, i) => <PickCard key={pick.id} pick={pick} index={i} />)}
          </div>
        </section>

        {/* Tips */}
        <section className="bg-secondary text-secondary-foreground rounded-3xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="lg:col-span-2 h-64 lg:h-auto">
              <img src="/images/tips.png" alt="Vancouver urban transit" className="w-full h-full object-cover" />
            </div>
            <div className="lg:col-span-3 p-8 md:p-16">
              <h2 className="text-4xl font-serif mb-8 text-primary-foreground">Tips from a Local</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {tips.map((tip, i) => (
                  <AnimatedCard key={i} delay={i * 0.1}>
                    <h3 className="font-semibold text-lg mb-2 text-primary-foreground">{tip.title}</h3>
                    <p className="text-secondary-foreground/80 text-sm leading-relaxed">{tip.description}</p>
                  </AnimatedCard>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* About the Guide */}
        <AnimatedCard>
          <section className="flex flex-col md:flex-row items-center gap-10 md:gap-16 border-t border-border pt-16">
            <div className="shrink-0">
              <img
                src="/images/andrew.png"
                alt="Andrew Feng"
                data-testid="img-andrew"
                className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover object-top shadow-lg ring-4 ring-border/30"
              />
            </div>
            <div className="text-center md:text-left">
              <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-2">Your Guide</p>
              <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">Andrew Feng</h2>
              <p className="text-foreground/75 font-light leading-relaxed max-w-xl mb-6">
                Born and raised in Vancouver, I've spent years exploring the city while building in the startup and tech space, and I genuinely believe there's nowhere better to be right now. As a Vancouverite, I really see this city emerging as an exciting hub for technology, startups, and ambitious people building new things.
              <br /><br />
              These are some of my personal favourite spots and recommendations from years of living here and experiencing the city myself. If you're visiting for Web Summit, I hope this helps you experience a bit of what makes Vancouver special.
              <br /><br />
              Feel free to connect with me on LinkedIn — I'd love to hear what you're working on and meet more people building interesting things.
              </p>
              <a
                href="https://www.linkedin.com/in/andrew-feng/"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-andrew-linkedin"
                className="inline-flex items-center gap-2.5 bg-foreground text-background px-5 py-2.5 rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                Connect on LinkedIn
              </a>
            </div>
          </section>
        </AnimatedCard>

      </main>

      <footer className="border-t border-border/50 py-12 text-center text-muted-foreground mt-24">
        <p className="font-serif italic text-lg">Enjoy your stay in Vancouver.</p>
      </footer>
    </div>
  );
}

function sortByCuisine(items: Pick[]): Pick[] {
  return [...items].sort((a, b) => (a.cuisine ?? "").localeCompare(b.cuisine ?? ""));
}

function SectionHeader({ title, description, image, imageAlt }: { title: string; description: string; image: string; imageAlt: string }) {
  return (
    <AnimatedCard className="flex flex-col md:flex-row gap-8 items-center border-b border-border pb-8">
      <div className="flex-1 space-y-4">
        <h2 className="text-4xl md:text-5xl font-serif text-foreground">{title}</h2>
        <p className="text-lg text-muted-foreground font-light max-w-xl leading-relaxed">{description}</p>
      </div>
      <div className="w-full md:w-1/3 aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
        <img src={image} alt={imageAlt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out" />
      </div>
    </AnimatedCard>
  );
}

function TierGroup({ label, description, children }: { label: string; description: string; children: React.ReactNode }) {
  return (
    <AnimatedCard>
      <div className="flex items-baseline gap-3 mb-6">
        <h3 className="text-xl font-semibold text-foreground">{label}</h3>
        <span className="text-sm text-muted-foreground font-light hidden sm:inline">{description}</span>
      </div>
      {children}
    </AnimatedCard>
  );
}

function PickCard({ pick, index, compact = false }: { pick: Pick; index: number; compact?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: "easeOut" }}
      className="h-full"
    >
      <div
        data-testid={`card-pick-${pick.id}`}
        className="group relative bg-card border border-border/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/20 h-full flex flex-col"
      >
        <a
          href={pick.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start justify-between gap-2 mb-2 hover:text-primary transition-colors"
        >
          <h3 className={`font-serif text-foreground group-hover:text-primary transition-colors leading-tight ${compact ? "text-xl" : "text-2xl"}`}>
            {pick.name}
          </h3>
          <ExternalLink className="w-4 h-4 text-muted-foreground/30 group-hover:text-primary transition-colors shrink-0 mt-1" />
        </a>

        {pick.cuisine && (
          <span className="text-[11px] uppercase tracking-widest text-primary/70 font-medium mb-3 block">{pick.cuisine}</span>
        )}

        <p className={`text-foreground/75 font-light mb-5 flex-grow leading-relaxed text-sm ${compact ? "line-clamp-3" : ""}`}>
          {pick.description}
        </p>

        <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground mt-auto">
          <a
            href={pick.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-testid={`map-link-${pick.id}`}
            onClick={e => e.stopPropagation()}
            className="flex items-center gap-1.5 bg-background rounded-full px-3 py-1 border border-border/50 hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-colors"
          >
            <MapPin className="w-3 h-3 text-primary" />
            <span>{pick.neighbourhood}</span>
          </a>
          <div className="flex items-center gap-1.5 bg-background rounded-full px-3 py-1 border border-border/50">
            <Clock className="w-3 h-3 text-primary" />
            <span>{pick.walkTime}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
