export type Category = "Eat & Drink" | "Coffee" | "Things to Do" | "Nightlife & After Hours";
export type Tier = "splurge" | "casual" | "quick-bite";

export interface Pick {
  id: string;
  name: string;
  description: string;
  neighbourhood: string;
  walkTime: string;
  category: Category;
  cuisine?: string;
  tier?: Tier;
  url: string;
}

export const picks: Pick[] = [

  // ── Eat & Drink — Splurge ──────────────────────────────────────────────────

  {
    id: "botanist",
    name: "Botanist",
    description: "Incredible Pacific Northwest cuisine inside the Fairmont Pacific Rim — practically attached to the convention centre. The cocktails are science experiments and the seafood is flawless.",
    neighbourhood: "Coal Harbour",
    walkTime: "2 min from VCC",
    category: "Eat & Drink",
    cuisine: "Pacific Northwest",
    tier: "splurge",
    url: "https://botanistrestaurant.com"
  },
  {
    id: "dovetail",
    name: "Dovetail Restaurant",
    description: "A quietly exceptional neighbourhood restaurant serving refined, ingredient-driven Pacific Northwest cuisine. Understated room, remarkable cooking — the kind of place locals guard jealously.",
    neighbourhood: "North Vancouver",
    walkTime: "15 min via SeaBus",
    category: "Eat & Drink",
    cuisine: "Pacific Northwest",
    tier: "splurge",
    url: "https://www.dovetailrestaurant.ca/"
  },
  {
    id: "hawsworth",
    name: "Hawksworth",
    description: "Contemporary Canadian fine dining in the Rosewood Hotel Georgia. Perfect for a proper business dinner or when you want to treat yourself to something genuinely special.",
    neighbourhood: "Downtown",
    walkTime: "12 min from VCC",
    category: "Eat & Drink",
    cuisine: "Canadian",
    tier: "splurge",
    url: "https://hawksworthrestaurant.com"
  },
  {
    id: "st-lawrence",
    name: "St. Lawrence",
    description: "Classic French-Canadian cuisine in a rustic, candlelit room. Rich, hearty, and completely unforgettable. Make a reservation — this one books up well in advance.",
    neighbourhood: "Japantown",
    walkTime: "22 min from VCC",
    category: "Eat & Drink",
    cuisine: "French-Canadian",
    tier: "splurge",
    url: "https://www.stlawrencerestaurant.com"
  },
  {
    id: "ask-for-luigi",
    name: "Ask for Luigi",
    description: "Cozy, intimate, and always packed. Handmade pasta and family-style Italian done with genuine care. Worth the walk — or grab a cab.",
    neighbourhood: "Railtown",
    walkTime: "20 min from VCC",
    category: "Eat & Drink",
    cuisine: "Italian",
    tier: "splurge",
    url: "https://www.askforluigi.com"
  },
  {
    id: "rob-badamatti",
    name: "Rob Badamatti",
    description: "Superb Italian cooking with an emphasis on handmade pasta and wood-fired dishes. A beautiful room and the kind of Italian food that makes you forget every other Italian restaurant.",
    neighbourhood: "Coal Harbour",
    walkTime: "5 min from VCC",
    category: "Eat & Drink",
    cuisine: "Italian",
    tier: "splurge",
    url: "https://robbadamatti.com/"
  },
  {
    id: "miku",
    name: "Miku",
    description: "Famous for Aburi (flame-seared) sushi. Book a window seat for stunning harbour and mountain views while you eat. A Vancouver institution.",
    neighbourhood: "Waterfront",
    walkTime: "5 min from VCC",
    category: "Eat & Drink",
    cuisine: "Japanese",
    tier: "splurge",
    url: "https://mikurestaurant.com/locations/vancouver/"
  },
  {
    id: "the-keg",
    name: "The Keg Steakhouse",
    description: "The definitive Canadian steakhouse experience. Consistently excellent cuts, generous pours, and a lively atmosphere. The Yaletown location is the go-to for a group dinner.",
    neighbourhood: "Yaletown",
    walkTime: "18 min from VCC",
    category: "Eat & Drink",
    cuisine: "Steakhouse",
    tier: "splurge",
    url: "https://www.kegsteakhouse.com"
  },
  {
    id: "black-and-blue",
    name: "Black + Blue",
    description: "A high-energy steakhouse and sushi bar on Alberni Street. Stunning room, incredible prime cuts, and an extensive wine program. A downtown institution for big nights out.",
    neighbourhood: "Downtown",
    walkTime: "10 min from VCC",
    category: "Eat & Drink",
    cuisine: "Steakhouse",
    tier: "splurge",
    url: "https://www.glowbalgroup.com/blackandblue/"
  },
  {
    id: "gotham",
    name: "Gotham Steakhouse",
    description: "Old-school glamour in a dramatic basement room on Seymour. Classic steakhouse vibes — big cuts, strong cocktails, and a room that makes every dinner feel like an occasion.",
    neighbourhood: "Downtown",
    walkTime: "10 min from VCC",
    category: "Eat & Drink",
    cuisine: "Steakhouse",
    tier: "splurge",
    url: "https://www.gothamsteakhouse.com"
  },

  // ── Eat & Drink — Casual ───────────────────────────────────────────────────

  {
    id: "cactus-club",
    name: "Cactus Club Cafe",
    description: "A Vancouver staple. Solid food, lively atmosphere, and consistently good cocktails. The Coal Harbour location has one of the best patios in the city with direct waterfront views.",
    neighbourhood: "Coal Harbour",
    walkTime: "3 min from VCC",
    category: "Eat & Drink",
    cuisine: "Canadian",
    tier: "casual",
    url: "https://www.cactusclubcafe.com"
  },
  {
    id: "earls",
    name: "Earls Kitchen + Bar",
    description: "A Vancouver-born chain that actually punches above its weight. Great for a group — diverse menu, strong cocktail list, and reliably solid execution across the board.",
    neighbourhood: "Downtown",
    walkTime: "14 min from VCC",
    category: "Eat & Drink",
    cuisine: "Canadian",
    tier: "casual",
    url: "https://www.earls.ca"
  },

  // ── Eat & Drink — Quick Bite ───────────────────────────────────────────────

  {
    id: "tacofino",
    name: "Tacofino",
    description: "A Vancouver institution that started as a food truck in Tofino. Fresh, flavourful tacos and burritos that punch way above their price point. Perfect between sessions.",
    neighbourhood: "Hastings",
    walkTime: "12 min from VCC",
    category: "Eat & Drink",
    cuisine: "Mexican",
    tier: "quick-bite",
    url: "https://www.tacofino.com"
  },
  {
    id: "japadog",
    name: "Japadog",
    description: "The iconic Vancouver hot dog elevated with Japanese toppings — teriyaki, oroshi, nori. Genuinely delicious and one of those only-in-Vancouver experiences.",
    neighbourhood: "Downtown",
    walkTime: "8 min from VCC",
    category: "Eat & Drink",
    cuisine: "Japanese Street Food",
    tier: "quick-bite",
    url: "https://www.japadog.com"
  },
  {
    id: "purebread",
    name: "Purebread",
    description: "Arguably the best bakery in Vancouver. Everything — from the chocolate things to the savoury scones — is outstanding. Go early, the good stuff disappears fast.",
    neighbourhood: "Gastown",
    walkTime: "14 min from VCC",
    category: "Eat & Drink",
    cuisine: "Bakery",
    tier: "quick-bite",
    url: "https://www.purebread.ca"
  },
  {
    id: "noodle-box",
    name: "Noodle Box",
    description: "Fast, filling noodle boxes done right. Great for a quick solo lunch when you have 30 minutes and need something hot and genuinely satisfying.",
    neighbourhood: "Downtown",
    walkTime: "10 min from VCC",
    category: "Eat & Drink",
    cuisine: "Asian",
    tier: "quick-bite",
    url: "https://www.noodlebox.ca"
  },

  // ── Coffee ─────────────────────────────────────────────────────────────────

  {
    id: "revolver",
    name: "Revolver",
    description: "A coffee purist's dream. Carefully sourced beans brewed with precision in a beautiful brick-walled Gastown space. Worth every step of the walk.",
    neighbourhood: "Gastown",
    walkTime: "12 min from VCC",
    category: "Coffee",
    url: "https://revolvercoffee.ca"
  },
  {
    id: "nemesis",
    name: "Nemesis Coffee",
    description: "Excellent pour-overs and some of the best pastries in the city. Bright, energetic, and a great morning launch pad.",
    neighbourhood: "Gastown",
    walkTime: "13 min from VCC",
    category: "Coffee",
    url: "https://nemesiscoffee.com"
  },
  {
    id: "elysian",
    name: "Elysian Coffee",
    description: "Reliably excellent espresso in an understated, elegant space. A great quiet spot when you need to catch up between sessions.",
    neighbourhood: "Downtown",
    walkTime: "10 min from VCC",
    category: "Coffee",
    url: "https://elysiancoffee.com"
  },
  {
    id: "analog",
    name: "Analog Coffee",
    description: "A beloved neighbourhood coffee shop on Davie Street with serious craft and a relaxed, welcoming vibe. Great single-origin options and a spot where you can actually settle in.",
    neighbourhood: "West End",
    walkTime: "18 min from VCC",
    category: "Coffee",
    url: "https://www.analogcoffee.ca"
  },
  {
    id: "kafkas",
    name: "Kafka's Coffee",
    description: "Approachable, consistent, and comfortable. They take their roasting seriously without being precious about it. A local's everyday spot.",
    neighbourhood: "Gastown",
    walkTime: "14 min from VCC",
    category: "Coffee",
    url: "https://kafkascoffee.ca"
  },
  {
    id: "matchstick",
    name: "Matchstick Coffee",
    description: "Outstanding roaster with a beautifully designed space. If you care about where your beans come from, this is the answer. Exceptional filter coffee.",
    neighbourhood: "Chinatown",
    walkTime: "18 min from VCC",
    category: "Coffee",
    url: "https://www.matchstick.ca"
  },

  // ── Things to Do ───────────────────────────────────────────────────────────

  {
    id: "coal-harbour-stroll",
    name: "Coal Harbour Seawall",
    description: "Walk right out the convention centre doors along the water toward Stanley Park. Watch the seaplanes take off against the mountain backdrop. One of the best urban walks in the world.",
    neighbourhood: "Coal Harbour",
    walkTime: "0 min — starts at VCC",
    category: "Things to Do",
    url: "https://www.google.com/maps/place/Coal+Harbour+Seawall"
  },
  {
    id: "seabus",
    name: "SeaBus to Lonsdale Quay",
    description: "Hop on the SeaBus at Canada Place (right outside VCC) for a 12-minute crossing to North Vancouver. The Lonsdale Quay Public Market is charming, the views back across the inlet are spectacular, and it's a genuinely lovely way to spend an hour.",
    neighbourhood: "North Vancouver",
    walkTime: "0 min — boards at VCC",
    category: "Things to Do",
    url: "https://www.translink.ca/rider-guide/transit-system/seabus"
  },
  {
    id: "gastown-explore",
    name: "Explore Gastown",
    description: "Cobblestone streets, Victorian architecture, and great independent boutiques and bars. Yes, the steam clock is touristy — but the neighbourhood genuinely delivers.",
    neighbourhood: "Gastown",
    walkTime: "10 min from VCC",
    category: "Things to Do",
    url: "https://gastown.org"
  },
  {
    id: "stanley-park",
    name: "Stanley Park Seawall",
    description: "Rent a bike from Bayshore Rentals and loop the park. Ocean, old-growth forest, Lions Gate Bridge — one of those places that makes you understand why people move to Vancouver.",
    neighbourhood: "West End",
    walkTime: "15 min from VCC",
    category: "Things to Do",
    url: "https://www.google.com/maps/place/Stanley+Park"
  },
  {
    id: "vancouver-art-gallery",
    name: "Vancouver Art Gallery",
    description: "A large collection of regional and international work right in the centre of the city. A perfect calm escape from the conference floor.",
    neighbourhood: "Downtown",
    walkTime: "12 min from VCC",
    category: "Things to Do",
    url: "https://www.vanartgallery.bc.ca"
  },
  {
    id: "granville-island",
    name: "Granville Island Public Market",
    description: "Take the tiny Aquabus ferry from the foot of Hornby Street across False Creek. Fresh produce, local crafts, and excellent food stalls. Plan an hour minimum.",
    neighbourhood: "Granville Island",
    walkTime: "20 min walk + Aquabus",
    category: "Things to Do",
    url: "https://granvilleisland.com"
  },

  // ── Nightlife & After Hours ────────────────────────────────────────────────

  {
    id: "botanist-bar",
    name: "Botanist Bar",
    description: "High-end cocktail theater without leaving the VCC neighbourhood. Brilliant mixology, a beautiful room, and an impressive wine list. The perfect start to the evening.",
    neighbourhood: "Coal Harbour",
    walkTime: "2 min from VCC",
    category: "Nightlife & After Hours",
    url: "https://botanistrestaurant.com/bar"
  },
  {
    id: "bartholomew",
    name: "Bartholomew",
    description: "An intimate, beautifully designed cocktail bar in Gastown. Serious drinks, warm atmosphere, and a place that rewards lingering. One of Vancouver's best kept secrets.",
    neighbourhood: "Gastown",
    walkTime: "10 min from VCC",
    category: "Nightlife & After Hours",
    url: "https://www.bartholomewyvr.com"
  },
  {
    id: "guilt-and-co",
    name: "Guilt & Co.",
    description: "Underground live music venue in Gastown. Intimate, energetic, and great bands most nights. One of those spots that makes you feel like you found something real.",
    neighbourhood: "Gastown",
    walkTime: "10 min from VCC",
    category: "Nightlife & After Hours",
    url: "https://www.guiltandco.com"
  },
  {
    id: "keefer-bar",
    name: "The Keefer Bar",
    description: "Apothecary-inspired cocktails in a dark, moody Chinatown room. Consistently one of the best bars in Canada — the drinks here are genuinely exceptional.",
    neighbourhood: "Chinatown",
    walkTime: "18 min from VCC",
    category: "Nightlife & After Hours",
    url: "https://thekeeferbar.com"
  },
  {
    id: "clough-club",
    name: "Clough Club",
    description: "Narrow, dark, atmospheric — a proper Gastown cocktail bar with a speakeasy feel and solid drinks. Great for a late-night debrief.",
    neighbourhood: "Gastown",
    walkTime: "12 min from VCC",
    category: "Nightlife & After Hours",
    url: "https://www.cloughclub.com"
  },
  {
    id: "greta-yvr",
    name: "Greta Bar",
    description: "A high-energy bar and live music venue in the heart of Granville Street. Lively, loud, and exactly what you want when a conference day ends and you just need to cut loose.",
    neighbourhood: "Granville Strip",
    walkTime: "12 min from VCC",
    category: "Nightlife & After Hours",
    url: "https://www.gretabar.ca"
  }
];

export const tips = [
  {
    title: "Always check the forecast",
    description: "Vancouver weather is famously unpredictable. Even on a clear sunny morning, light drizzle can roll in by the afternoon. Always check before you head out — a light rain jacket is your best friend here."
  },
  {
    title: "Tap to pay on transit",
    description: "No transit card needed. Tap your credit card or phone at SkyTrain gates and bus doors. It calculates the best fare automatically."
  },
  {
    title: "VCC has two buildings",
    description: "Make sure you know if your session is in the East or West building — they're connected, but it's a longer walk between them than you'd expect."
  },
  {
    title: "Tipping",
    description: "Standard tipping in Vancouver is 15-20% at restaurants and bars. Most terminals default to 18-20%, which is perfectly normal to accept."
  }
];
