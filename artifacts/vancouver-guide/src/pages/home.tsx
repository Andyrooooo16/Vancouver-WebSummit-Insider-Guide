import { picks, tips, Category } from "@/data";
import { AnimatedCard } from "@/components/animated-card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const eatAndDrink = picks.filter(p => p.category === "Eat & Drink");
  const coffee = picks.filter(p => p.category === "Coffee");
  const thingsToDo = picks.filter(p => p.category === "Things to Do");
  const nightlife = picks.filter(p => p.category === "Nightlife & After Hours");

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20 selection:text-primary">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] w-full flex items-end justify-center overflow-hidden pb-24">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/images/hero.png" 
            alt="Vancouver skyline at golden hour" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>
        
        <div className="container relative z-10 mx-auto px-6 md:px-12 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Badge variant="outline" className="mb-6 border-primary/30 text-primary uppercase tracking-widest text-xs px-4 py-1.5 backdrop-blur-md bg-background/50">
              Web Summit 2026
            </Badge>
            <h1 className="text-6xl md:text-8xl font-serif text-foreground mb-6 leading-tight">
              Vancouver, <br/><span className="text-primary italic">Right Now.</span>
            </h1>
            <p className="text-lg md:text-2xl text-foreground/80 max-w-2xl mx-auto font-light leading-relaxed">
              A curated insider's guide to the city. No tourist traps. Just the real spots a local would send you.
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
            description="From quick bites between sessions to the finest Pacific Northwest dining."
            image="/images/eat.png"
            imageAlt="Moody elegant dining room"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {eatAndDrink.map((pick, i) => (
              <PickCard key={pick.id} pick={pick} index={i} />
            ))}
          </div>
        </section>

        {/* Coffee */}
        <section>
          <SectionHeader 
            title="Coffee" 
            description="The fuel. Vancouver takes its roasting seriously. Here are the best spots to recharge."
            image="/images/coffee.png"
            imageAlt="Warm artisan coffee shop"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl">
            {coffee.map((pick, i) => (
              <PickCard key={pick.id} pick={pick} index={i} />
            ))}
          </div>
        </section>

        {/* Things to Do */}
        <section>
          <SectionHeader 
            title="Things to Do" 
            description="Got a couple of hours? Step out of the convention center and experience the city."
            image="/images/do.png"
            imageAlt="Lush green seawall"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {thingsToDo.map((pick, i) => (
              <PickCard key={pick.id} pick={pick} index={i} />
            ))}
          </div>
        </section>

        {/* Nightlife */}
        <section>
          <SectionHeader 
            title="Nightlife & After Hours" 
            description="Where the conversations continue after the sun goes down."
            image="/images/nightlife.png"
            imageAlt="Moody cocktail bar"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl">
            {nightlife.map((pick, i) => (
              <PickCard key={pick.id} pick={pick} index={i} />
            ))}
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

      </main>

      <footer className="border-t border-border/50 py-12 text-center text-muted-foreground mt-24">
        <p className="font-serif italic text-lg">Enjoy your stay in Vancouver.</p>
      </footer>
    </div>
  );
}

function SectionHeader({ title, description, image, imageAlt }: { title: string, description: string, image: string, imageAlt: string }) {
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

function PickCard({ pick, index }: { pick: any, index: number }) {
  return (
    <AnimatedCard delay={index * 0.1} className="group relative bg-card hover:bg-muted/50 border border-border/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-md h-full flex flex-col">
      <div className="mb-4">
        <h3 className="text-2xl font-serif text-foreground group-hover:text-primary transition-colors">{pick.name}</h3>
      </div>
      <p className="text-foreground/80 font-light mb-6 flex-grow leading-relaxed">
        {pick.description}
      </p>
      <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mt-auto">
        <div className="flex items-center gap-1.5 bg-background rounded-full px-3 py-1 border border-border/50">
          <MapPin className="w-3.5 h-3.5 text-primary" />
          <span>{pick.neighbourhood}</span>
        </div>
        <div className="flex items-center gap-1.5 bg-background rounded-full px-3 py-1 border border-border/50">
          <Clock className="w-3.5 h-3.5 text-primary" />
          <span>{pick.walkTime}</span>
        </div>
      </div>
    </AnimatedCard>
  );
}
