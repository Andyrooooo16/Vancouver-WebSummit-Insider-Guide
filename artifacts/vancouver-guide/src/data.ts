export type Category = "Eat & Drink" | "Coffee" | "Things to Do" | "Nightlife & After Hours";
export type Tier = "splurge" | "quick-bite";

export interface Pick {
  id: string;
  name: string;
  description: string;
  neighbourhood: string;
  walkTime: string;
  category: Category;
  tier?: Tier;
  url: string;
}

export const picks: Pick[] = [
  // Eat & Drink — Splurge
  {
    id: "botanist",
    name: "Botanist",
    description: "Incredible Pacific Northwest cuisine inside the Fairmont Pacific Rim — which is practically attached to the convention centre. The cocktails are science experiments and the seafood is flawless.",
    neighbourhood: "Coal Harbour",
    walkTime: "2 min from VCC",
    category: "Eat & Drink",
    tier: "splurge",
    url: "https://botanistrestaurant.com"
  },
  {
    id: "miku",
    name: "Miku",
    description: "Famous for Aburi (flame-seared) sushi. Get a window table for stunning views of the harbour and North Shore mountains. An easy walk along the waterfront.",
    neighbourhood: "Waterfront",
    walkTime: "5 min from VCC",
    category: "Eat & Drink",
    tier: "splurge",
    url: "https://mikurestaurant.com/locations/vancouver/"
  },
  {
    id: "hawsworth",
    name: "Hawksworth",
    description: "Contemporary Canadian fine dining inside the Rosewood Hotel Georgia. The kind of place for a proper business dinner or when you want to treat yourself.",
    neighbourhood: "Downtown",
    walkTime: "12 min from VCC",
    category: "Eat & Drink",
    tier: "splurge",
    url: "https://hawksworthrestaurant.com"
  },
  {
    id: "ask-for-luigi",
    name: "Ask for Luigi",
    description: "Cozy, intimate, and always packed. Handmade pasta and family-style Italian dishes done with real care. Worth the 20-minute walk or a quick cab.",
    neighbourhood: "Railtown",
    walkTime: "20 min from VCC",
    category: "Eat & Drink",
    tier: "splurge",
    url: "https://www.askforluigi.com"
  },
  {
    id: "st-lawrence",
    name: "St. Lawrence",
    description: "Classic French-Canadian cuisine in a rustic, candlelit room. Rich, hearty, unforgettable. Make a reservation — this one books up.",
    neighbourhood: "Japantown",
    walkTime: "22 min from VCC",
    category: "Eat & Drink",
    tier: "splurge",
    url: "https://www.stlawrencerestaurant.com"
  },

  // Eat & Drink — Quick Bite
  {
    id: "tacofino",
    name: "Tacofino",
    description: "A Vancouver institution that started as a food truck in Tofino. Fresh, flavourful tacos and burritos that punch way above their price point. Perfect between sessions.",
    neighbourhood: "Hastings",
    walkTime: "12 min from VCC",
    category: "Eat & Drink",
    tier: "quick-bite",
    url: "https://www.tacofino.com"
  },
  {
    id: "japadog",
    name: "Japadog",
    description: "The iconic Vancouver hot dog cart elevated with Japanese toppings — teriyaki, oroshi, nori. Genuinely delicious and one of those only-in-Vancouver things.",
    neighbourhood: "Downtown",
    walkTime: "8 min from VCC",
    category: "Eat & Drink",
    tier: "quick-bite",
    url: "https://www.japadog.com"
  },
  {
    id: "purebread",
    name: "Purebread",
    description: "Arguably the best bakery in Vancouver. The chocolate things, the savoury scones — everything is outstanding. Go early, the good stuff goes fast.",
    neighbourhood: "Gastown",
    walkTime: "14 min from VCC",
    category: "Eat & Drink",
    tier: "quick-bite",
    url: "https://www.purebread.ca"
  },
  {
    id: "noodle-box",
    name: "Noodle Box",
    description: "Fast, filling noodle boxes done right. Great for a quick solo lunch when you have 30 minutes and need something hot and satisfying.",
    neighbourhood: "Downtown",
    walkTime: "10 min from VCC",
    category: "Eat & Drink",
    tier: "quick-bite",
    url: "https://www.noodlebox.ca"
  },

  // Coffee
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
    description: "Reliably excellent espresso in an understated, elegant space. A great quiet spot when you need to catch up on emails between sessions.",
    neighbourhood: "Downtown",
    walkTime: "10 min from VCC",
    category: "Coffee",
    url: "https://elysiancoffee.com"
  },
  {
    id: "kafkas",
    name: "Kafka's Coffee",
    description: "Approachable, consistent, and comfortable. They take their roasting seriously without being precious about it.",
    neighbourhood: "Gastown",
    walkTime: "14 min from VCC",
    category: "Coffee",
    url: "https://kafkascoffee.ca"
  },

  // Things to Do
  {
    id: "coal-harbour-stroll",
    name: "Coal Harbour Seawall",
    description: "Walk right out the convention centre doors along the water toward Stanley Park. Watch the seaplanes take off against the mountain backdrop. Genuinely one of the best urban walks in the world.",
    neighbourhood: "Coal Harbour",
    walkTime: "0 min — starts at VCC",
    category: "Things to Do",
    url: "https://www.google.com/maps/place/Coal+Harbour+Seawall"
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
    description: "Rent a bike from Bayshore Rentals and loop the park. The ocean, the forest, Lions Gate Bridge — it's one of those places that makes you understand why people move here.",
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

  // Nightlife & After Hours
  {
    id: "keefer-bar",
    name: "The Keefer Bar",
    description: "Apothecary-inspired cocktails in a dark, moody room in Chinatown. Consistently one of the best bars in Canada — full stop.",
    neighbourhood: "Chinatown",
    walkTime: "18 min from VCC",
    category: "Nightlife & After Hours",
    url: "https://thekeeferbar.com"
  },
  {
    id: "botanist-bar",
    name: "Botanist Bar",
    description: "If you want high-end cocktail theater without leaving the VCC neighbourhood, this is it. Brilliant mixology, beautiful room, impressive wine list.",
    neighbourhood: "Coal Harbour",
    walkTime: "2 min from VCC",
    category: "Nightlife & After Hours",
    url: "https://botanistrestaurant.com/bar"
  },
  {
    id: "clough-club",
    name: "Clough Club",
    description: "Narrow, dark, and atmospheric — a proper Gastown cocktail bar with a speakeasy feel and solid drinks. Great for a late-night debrief.",
    neighbourhood: "Gastown",
    walkTime: "12 min from VCC",
    category: "Nightlife & After Hours",
    url: "https://www.cloughclub.com"
  },
  {
    id: "guilt-and-co",
    name: "Guilt & Co.",
    description: "Underground live music venue in Gastown. Intimate, energetic, and great bands most nights. One of those spots that makes you feel like you found something.",
    neighbourhood: "Gastown",
    walkTime: "10 min from VCC",
    category: "Nightlife & After Hours",
    url: "https://www.guiltandco.com"
  }
];

export const tips = [
  {
    title: "Bring a light rain jacket",
    description: "Vancouver locals rarely use umbrellas. A good water-resistant shell is the actual uniform of the Pacific Northwest."
  },
  {
    title: "Tap to pay on transit",
    description: "You don't need to buy a transit card. Just tap your credit card or phone at the SkyTrain gates or on buses. It calculates the best fare automatically."
  },
  {
    title: "VCC has two buildings",
    description: "Make sure you know if your session is in the East or West building — they're connected, but it's a long walk between them."
  },
  {
    title: "Tipping",
    description: "Standard tipping in Vancouver is 15-20% at restaurants and bars. Most terminals default to 18-20%, which is perfectly normal to accept."
  }
];
