export type Category = "Eat & Drink" | "Coffee" | "Things to Do" | "Nightlife & After Hours";

export interface Pick {
  id: string;
  name: string;
  description: string;
  neighbourhood: string;
  walkTime: string;
  category: Category;
}

export const picks: Pick[] = [
  // Eat & Drink
  {
    id: "botanist",
    name: "Botanist",
    description: "Incredible Pacific Northwest cuisine inside the Fairmont Pacific Rim. The room is gorgeous, the cocktails are science experiments, and the seafood is flawless.",
    neighbourhood: "Coal Harbour",
    walkTime: "2 min walk",
    category: "Eat & Drink"
  },
  {
    id: "ask-for-luigi",
    name: "Ask for Luigi",
    description: "Cozy, intimate, and constantly busy. They serve family-style Italian dishes and fresh handmade pasta. It's worth the wait.",
    neighbourhood: "Railtown",
    walkTime: "15 min walk",
    category: "Eat & Drink"
  },
  {
    id: "miku",
    name: "Miku",
    description: "Famous for their Aburi (flame-seared) sushi. Get a table by the window for stunning views of the harbour and North Shore mountains while you eat.",
    neighbourhood: "Waterfront",
    walkTime: "5 min walk",
    category: "Eat & Drink"
  },
  {
    id: "st-lawrence",
    name: "St. Lawrence",
    description: "Classic French-Canadian cuisine in a charming, rustic setting. Hearty, rich, and unforgettable meals.",
    neighbourhood: "Japantown",
    walkTime: "20 min walk",
    category: "Eat & Drink"
  },
  {
    id: "hawsworth",
    name: "Hawksworth",
    description: "Contemporary Canadian cuisine in the Rosewood Hotel Georgia. Elegant dining perfect for client meetings or treating yourself.",
    neighbourhood: "Downtown Center",
    walkTime: "10 min walk",
    category: "Eat & Drink"
  },

  // Coffee
  {
    id: "nemesis",
    name: "Nemesis Coffee",
    description: "Excellent pour-overs and some of the best pastries in the city. The space is bright, energetic, and perfect for a quick morning start.",
    neighbourhood: "Gastown",
    walkTime: "12 min walk",
    category: "Coffee"
  },
  {
    id: "revolver",
    name: "Revolver",
    description: "A coffee purist's dream. They carefully source beans from around the world and brew them with precision in a beautiful brick-walled space.",
    neighbourhood: "Gastown",
    walkTime: "15 min walk",
    category: "Coffee"
  },
  {
    id: "elysian",
    name: "Elysian Coffee",
    description: "Reliably excellent coffee and understated, elegant spaces. A great quiet spot to catch up on emails.",
    neighbourhood: "Downtown Center",
    walkTime: "10 min walk",
    category: "Coffee"
  },
  {
    id: "kafkas",
    name: "Kafka's Coffee",
    description: "Approachable, consistent, and comfortable. They take their roasting seriously without being pretentious about it.",
    neighbourhood: "Gastown",
    walkTime: "12 min walk",
    category: "Coffee"
  },

  // Things to Do
  {
    id: "stanley-park",
    name: "Stanley Park Seawall",
    description: "Rent a bike or just walk a section of it. The views of the ocean, mountains, and Lion's Gate Bridge are spectacular.",
    neighbourhood: "West End",
    walkTime: "15 min walk",
    category: "Things to Do"
  },
  {
    id: "gastown-explore",
    name: "Explore Gastown",
    description: "Cobblestone streets, historic architecture, and incredible independent boutiques. Yes, the steam clock is touristy, but the neighbourhood is genuinely great.",
    neighbourhood: "Gastown",
    walkTime: "10 min walk",
    category: "Things to Do"
  },
  {
    id: "vancouver-art-gallery",
    name: "Vancouver Art Gallery",
    description: "A massive collection of regional and international art right in the center of the city. A perfect calm escape from the conference.",
    neighbourhood: "Downtown Center",
    walkTime: "8 min walk",
    category: "Things to Do"
  },
  {
    id: "granville-island",
    name: "Granville Island Public Market",
    description: "Take the tiny Aquabus ferry across False Creek to wander through fresh produce, local crafts, and great food stalls.",
    neighbourhood: "Granville Island",
    walkTime: "25 min walk / transit",
    category: "Things to Do"
  },
  {
    id: "coal-harbour-stroll",
    name: "Coal Harbour Stroll",
    description: "Walk right out of the convention center along the water toward Stanley Park. Watch the seaplanes take off against the mountain backdrop.",
    neighbourhood: "Coal Harbour",
    walkTime: "0 min walk",
    category: "Things to Do"
  },

  // Nightlife & After Hours
  {
    id: "keefer-bar",
    name: "The Keefer Bar",
    description: "Apothecary-style cocktails in a dark, moody room. Consistently ranked as one of the best bars in Canada.",
    neighbourhood: "Chinatown",
    walkTime: "20 min walk",
    category: "Nightlife & After Hours"
  },
  {
    id: "botanist-bar",
    name: "Botanist Bar",
    description: "If you want high-end cocktail theater without leaving the convention center area, this is it. Brilliant mixology.",
    neighbourhood: "Coal Harbour",
    walkTime: "2 min walk",
    category: "Nightlife & After Hours"
  },
  {
    id: "clough-club",
    name: "Clough Club",
    description: "A dark, narrow Gastown cocktail bar with great atmosphere, solid drinks, and a speakeasy feel.",
    neighbourhood: "Gastown",
    walkTime: "12 min walk",
    category: "Nightlife & After Hours"
  },
  {
    id: "guilt-and-co",
    name: "Guilt & Co.",
    description: "Underground live music venue in Gastown. Great energy, intimate feel, and excellent bands most nights of the week.",
    neighbourhood: "Gastown",
    walkTime: "10 min walk",
    category: "Nightlife & After Hours"
  }
];

export const tips = [
  {
    title: "Bring a light rain jacket",
    description: "Vancouver locals rarely use umbrellas. A good water-resistant shell is the actual uniform of the Pacific Northwest."
  },
  {
    title: "Tap to pay on transit",
    description: "You don't need to buy a transit card. Just tap your credit card or phone at the gates of the SkyTrain or on buses."
  },
  {
    title: "The Convention Center is huge",
    description: "Make sure you know if your session is in the East or West building — they are connected, but it's a long walk between them."
  },
  {
    title: "Tipping",
    description: "Standard tipping in Vancouver is 15-20% at restaurants and bars."
  }
];
