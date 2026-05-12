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
  mapsUrl: string;
}

const VCC = "Vancouver+Convention+Centre,+1055+Canada+Pl,+Vancouver,+BC";
function mapsDir(destination: string) {
  return `https://www.google.com/maps/dir/${VCC}/${destination}/`;
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
    url: "https://botanistrestaurant.com",
    mapsUrl: mapsDir("Botanist+Restaurant,+1038+Canada+Pl,+Vancouver,+BC")
  },
  {
    id: "dovetail",
    name: "Dovetail Restaurant",
    description: "A quietly exceptional neighbourhood restaurant serving refined, ingredient-driven Pacific Northwest cuisine. Understated room, remarkable cooking — the kind of place locals guard jealously.",
    neighbourhood: "Yaletown",
    walkTime: "18 min from VCC",
    category: "Eat & Drink",
    cuisine: "Pacific Northwest",
    tier: "splurge",
    url: "https://www.dovetailrestaurant.ca/",
    mapsUrl: mapsDir("Dovetail+Restaurant,+Yaletown,+Vancouver,+BC")
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
    url: "https://hawksworthrestaurant.com",
    mapsUrl: mapsDir("Hawksworth+Restaurant,+801+W+Georgia+St,+Vancouver,+BC")
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
    url: "https://www.stlawrencerestaurant.com",
    mapsUrl: mapsDir("St.+Lawrence+Restaurant,+269+Powell+St,+Vancouver,+BC")
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
    url: "https://www.askforluigi.com",
    mapsUrl: mapsDir("Ask+for+Luigi,+305+Alexander+St,+Vancouver,+BC")
  },
  {
    id: "rob-badamatti",
    name: "Robba Da Matti",
    description: "Superb Italian cooking with an emphasis on handmade pasta and wood-fired dishes. A beautiful room and the kind of Italian food that makes you forget every other Italian restaurant.",
    neighbourhood: "Downtown",
    walkTime: "10 min from VCC",
    category: "Eat & Drink",
    cuisine: "Italian",
    tier: "splurge",
    url: "https://robbadamatti.com/",
    mapsUrl: mapsDir("Robba+Da+Matti,+Vancouver,+BC")
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
    url: "https://mikurestaurant.com",
    mapsUrl: mapsDir("Miku+Restaurant,+200+Granville+St,+Vancouver,+BC")
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
    url: "https://www.kegsteakhouse.com",
    mapsUrl: mapsDir("The+Keg+Steakhouse,+1011+Mainland+St,+Vancouver,+BC")
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
    url: "https://blackandbluesteakhouse.ca/vancouver-home/",
    mapsUrl: mapsDir("Black+%2B+Blue,+1032+Alberni+St,+Vancouver,+BC")
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
    url: "https://www.gothamsteakhouse.com",
    mapsUrl: mapsDir("Gotham+Steakhouse,+615+Seymour+St,+Vancouver,+BC")
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
    url: "https://www.cactusclubcafe.com",
    mapsUrl: mapsDir("Cactus+Club+Cafe,+1199+W+Hastings+St,+Vancouver,+BC")
  },
  {
    id: "earls",
    name: "Earls Kitchen + Bar",
    description: "A Vancouver-born chain that actually punches above its weight. Great for a group — diverse menu, strong cocktail list, and reliably solid execution across the board.",
    neighbourhood: "English Bay",
    walkTime: "18 min from VCC",
    category: "Eat & Drink",
    cuisine: "Canadian",
    tier: "casual",
    url: "https://www.earls.ca",
    mapsUrl: mapsDir("Earls+Kitchen+Bar,+1185+Robson+St,+Vancouver,+BC")
  },
  {
    id: "perse-social-corner",
    name: "Perse Social Corner",
    description: "A stylish spot for sharing plates and cocktails with a lively, social atmosphere. A great option when you want something more casual but still considered.",
    neighbourhood: "Downtown",
    walkTime: "10 min from VCC",
    category: "Eat & Drink",
    cuisine: "Canadian",
    tier: "casual",
    url: "https://persesocialcorner.com/",
    mapsUrl: mapsDir("Perse+Social+Corner,+Vancouver,+BC")
  },

  // ── Eat & Drink — Quick Bite ───────────────────────────────────────────────

  {
    id: "tacofino",
    name: "Tacofino",
    description: "A Vancouver institution that started as a food truck in Tofino. Fresh, flavourful tacos and burritos that punch way above their price point. The Gastown location is closest.",
    neighbourhood: "Gastown",
    walkTime: "12 min from VCC",
    category: "Eat & Drink",
    cuisine: "Mexican",
    tier: "quick-bite",
    url: "https://www.tacofino.com",
    mapsUrl: mapsDir("Tacofino,+15+W+Cordova+St,+Vancouver,+BC")
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
    url: "https://www.japadog.com",
    mapsUrl: mapsDir("Japadog,+530+Robson+St,+Vancouver,+BC")
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
    url: "https://www.purebread.ca",
    mapsUrl: mapsDir("Purebread,+233+Abbott+St,+Vancouver,+BC")
  },
  {
    id: "meat-and-bread",
    name: "Meat & Bread",
    description: "A Gastown legend. They do one thing — the porchetta sandwich — and they do it better than anyone. The line moves fast. Absolutely worth it.",
    neighbourhood: "Gastown",
    walkTime: "14 min from VCC",
    category: "Eat & Drink",
    cuisine: "Sandwiches",
    tier: "quick-bite",
    url: "https://www.meatandbread.com/",
    mapsUrl: mapsDir("Meat+and+Bread,+370+Cambie+St,+Vancouver,+BC")
  },

  // ── Coffee ─────────────────────────────────────────────────────────────────

  {
    id: "revolver",
    name: "Revolver",
    description: "A coffee purist's dream. Carefully sourced beans brewed with precision in a beautiful brick-walled Gastown space. Worth every step of the walk.",
    neighbourhood: "Gastown",
    walkTime: "12 min from VCC",
    category: "Coffee",
    url: "https://revolvercoffee.ca",
    mapsUrl: mapsDir("Revolver+Coffee,+325+Cambie+St,+Vancouver,+BC")
  },
  {
    id: "nemesis",
    name: "Nemesis Coffee",
    description: "Excellent pour-overs and some of the best pastries in the city. The W Hastings location is the closest to VCC — bright, energetic, and a great morning launch pad.",
    neighbourhood: "Downtown",
    walkTime: "10 min from VCC",
    category: "Coffee",
    url: "https://www.nemesis.coffee/",
    mapsUrl: mapsDir("Nemesis+Coffee,+302+W+Hastings+St,+Vancouver,+BC")
  },
  {
    id: "elysian",
    name: "Elysian Coffee",
    description: "Reliably excellent espresso in an understated, elegant space. A great quiet spot when you need to catch up between sessions.",
    neighbourhood: "Downtown",
    walkTime: "10 min from VCC",
    category: "Coffee",
    url: "https://elysiancoffee.com",
    mapsUrl: mapsDir("Elysian+Coffee,+Vancouver,+BC")
  },
  {
    id: "angus-t",
    name: "Angus T",
    description: "A warm, welcoming neighbourhood café with thoughtfully prepared coffee and a relaxed vibe. A great spot to settle in and recharge between sessions.",
    neighbourhood: "Downtown",
    walkTime: "12 min from VCC",
    category: "Coffee",
    url: "https://www.angust.com/",
    mapsUrl: mapsDir("Angus+T+Coffee,+Vancouver,+BC")
  },
  {
    id: "analog",
    name: "Analog Coffee",
    description: "A beloved West End café on Davie Street with serious craft and a relaxed, welcoming vibe. Great single-origin options and a spot where you can actually settle in.",
    neighbourhood: "Yaletown",
    walkTime: "18 min from VCC",
    category: "Coffee",
    url: "https://www.analogcoffee.ca",
    mapsUrl: mapsDir("Analog+Coffee,+Yaletown,+Vancouver,+BC")
  },
  {
    id: "kafkas",
    name: "Kafka's Coffee",
    description: "Approachable, consistent, and comfortable. They take their roasting seriously without being precious about it. The W Hastings location is the closest to VCC.",
    neighbourhood: "Gastown",
    walkTime: "14 min from VCC",
    category: "Coffee",
    url: "https://kafkascoffee.ca",
    mapsUrl: mapsDir("Kafka%27s+Coffee,+124+W+Hastings+St,+Vancouver,+BC")
  },

  // ── Things to Do ───────────────────────────────────────────────────────────

  {
    id: "coal-harbour-stroll",
    name: "Coal Harbour Seawall",
    description: "Walk right out the convention centre doors along the water toward Stanley Park. Watch the seaplanes take off against the mountain backdrop. One of the best urban walks in the world.",
    neighbourhood: "Coal Harbour",
    walkTime: "0 min — starts at VCC",
    category: "Things to Do",
    url: "https://www.google.com/maps/place/Coal+Harbour+Seawall",
    mapsUrl: "https://www.google.com/maps/place/Coal+Harbour+Seawall,+Vancouver,+BC/"
  },
  {
    id: "seabus",
    name: "SeaBus to Lonsdale Quay",
    description: "Hop on the SeaBus at Canada Place (right outside VCC) for a 12-minute crossing to North Vancouver. The Lonsdale Quay Public Market is charming, the views back across the inlet are spectacular.",
    neighbourhood: "North Vancouver",
    walkTime: "0 min — boards at VCC",
    category: "Things to Do",
    url: "https://www.translink.ca/rider-guide/transit-system/seabus",
    mapsUrl: mapsDir("Lonsdale+Quay+Public+Market,+123+Carrie+Cates+Ct,+North+Vancouver,+BC")
  },
  {
    id: "gastown-explore",
    name: "Explore Gastown",
    description: "Cobblestone streets, Victorian architecture, and great independent boutiques and bars. Yes, the steam clock is touristy — but the neighbourhood genuinely delivers.",
    neighbourhood: "Gastown",
    walkTime: "10 min from VCC",
    category: "Things to Do",
    url: "https://gastown.org",
    mapsUrl: mapsDir("Gastown,+Vancouver,+BC")
  },
  {
    id: "stanley-park",
    name: "Stanley Park Seawall",
    description: "Rent a bike from Bayshore Rentals and loop the park. Ocean, old-growth forest, Lions Gate Bridge — one of those places that makes you understand why people move to Vancouver.",
    neighbourhood: "West End",
    walkTime: "15 min from VCC",
    category: "Things to Do",
    url: "https://www.google.com/maps/place/Stanley+Park",
    mapsUrl: mapsDir("Stanley+Park,+Vancouver,+BC")
  },
  {
    id: "vancouver-art-gallery",
    name: "Vancouver Art Gallery",
    description: "A large collection of regional and international work right in the centre of the city. A perfect calm escape from the conference floor.",
    neighbourhood: "Downtown",
    walkTime: "12 min from VCC",
    category: "Things to Do",
    url: "https://www.vanartgallery.bc.ca",
    mapsUrl: mapsDir("Vancouver+Art+Gallery,+750+Hornby+St,+Vancouver,+BC")
  },
  {
    id: "granville-island",
    name: "Granville Island Public Market",
    description: "Take the tiny Aquabus ferry from the foot of Hornby Street across False Creek. Fresh produce, local crafts, and excellent food stalls. Plan an hour minimum.",
    neighbourhood: "Granville Island",
    walkTime: "20 min walk + Aquabus",
    category: "Things to Do",
    url: "https://granvilleisland.com",
    mapsUrl: mapsDir("Granville+Island+Public+Market,+1669+Johnston+St,+Vancouver,+BC")
  },

  // ── Nightlife & After Hours ────────────────────────────────────────────────

  {
    id: "portside-pub",
    name: "The Portside Pub",
    description: "A proper Gastown pub with a great selection of local craft beers, a lively crowd, and an easygoing atmosphere. A reliable first stop after a long conference day.",
    neighbourhood: "Gastown",
    walkTime: "10 min from VCC",
    category: "Nightlife & After Hours",
    url: "https://theportsidepub.com/",
    mapsUrl: mapsDir("The+Portside+Pub,+Gastown,+Vancouver,+BC")
  },
  {
    id: "blarney-stone",
    name: "Blarney Stone",
    description: "Vancouver's original Irish pub — loud, fun, and packed most nights. Live music, cold pints, and the kind of crowd that makes the night take on a life of its own.",
    neighbourhood: "Gastown",
    walkTime: "10 min from VCC",
    category: "Nightlife & After Hours",
    url: "https://blarneystone.ca/",
    mapsUrl: mapsDir("Blarney+Stone,+216+Carrall+St,+Vancouver,+BC")
  },
  {
    id: "bartholomew",
    name: "Bartholomew",
    description: "An intimate, beautifully designed cocktail bar in Yaletown. Serious drinks, warm atmosphere, and a place that rewards lingering. One of Vancouver's best kept secrets.",
    neighbourhood: "Yaletown",
    walkTime: "18 min from VCC",
    category: "Nightlife & After Hours",
    url: "https://www.bartholomewbar.com/",
    mapsUrl: mapsDir("Bartholomew,+Yaletown,+Vancouver,+BC")
  },
  {
    id: "good-co",
    name: "Good Co.",
    description: "A fun, unpretentious bar on Granville with strong drinks, a great playlist, and a crowd that's actually there to have a good time. Exactly what you want on a conference night out.",
    neighbourhood: "Granville Strip",
    walkTime: "12 min from VCC",
    category: "Nightlife & After Hours",
    url: "https://goodcobars.com/locations/granville",
    mapsUrl: mapsDir("Good+Co,+Granville+St,+Vancouver,+BC")
  },
  {
    id: "keefer-bar",
    name: "The Keefer Bar",
    description: "Apothecary-inspired cocktails in a dark, moody Chinatown room. Consistently one of the best bars in Canada — the drinks here are genuinely exceptional.",
    neighbourhood: "Chinatown",
    walkTime: "18 min from VCC",
    category: "Nightlife & After Hours",
    url: "https://thekeeferbar.com",
    mapsUrl: mapsDir("The+Keefer+Bar,+135+Keefer+St,+Vancouver,+BC")
  },
  {
    id: "clough-club",
    name: "Clough Club",
    description: "Narrow, dark, atmospheric — a proper Gastown cocktail bar with a speakeasy feel and solid drinks. Great for a late-night debrief.",
    neighbourhood: "Gastown",
    walkTime: "12 min from VCC",
    category: "Nightlife & After Hours",
    url: "https://www.cloughclub.com",
    mapsUrl: mapsDir("Clough+Club,+Gastown,+Vancouver,+BC")
  },
  {
    id: "greta-yvr",
    name: "Greta Bar",
    description: "A high-energy bar and live music venue in the heart of Granville Street. Lively, loud, and exactly what you want when a conference day ends and you just need to cut loose.",
    neighbourhood: "Granville Strip",
    walkTime: "12 min from VCC",
    category: "Nightlife & After Hours",
    url: "https://www.gretabar.ca",
    mapsUrl: mapsDir("Greta+Bar,+1178+Hamilton+St,+Vancouver,+BC")
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
    description: "Standard tipping in Vancouver is 15% and up at restaurants and bars. For larger parties, many restaurants automatically add an 18% gratuity to the bill."
  }
];
