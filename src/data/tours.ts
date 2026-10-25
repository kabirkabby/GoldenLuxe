export interface TourDay {
  dayNumber: number;
  title: string;
  phases: {
    period: "Morning" | "Afternoon" | "Evening" | "Full Day" | string;
    description: string;
  }[];
  insiderTip?: string;
}

export interface TourItinerary {
  id: string;
  slug: string;
  itineraryCode: string;
  title: string;
  subtitle: string;
  durationNights: number;
  durationDays: number;
  durationLabel: string;
  category: "Spiritual & Iconic" | "Rural & Cultural" | "Sacred Pilgrimage" | "Culinary & Living" | "Old City Flavors";
  tagline: string;
  overview: string;
  highlights: string[];
  heroImage: string;
  gallery: string[];
  bestFor: string;
  pace: "Relaxed" | "Moderate" | "Immersive";
  pickupDrop: string;
  pricingNote: string;
  inclusions: string[];
  exclusions: string[];
  days: TourDay[];
}

export const TOURS_DATA: TourItinerary[] = [
  {
    id: "tour-01",
    slug: "02-nights-amritsar-wagah-border",
    itineraryCode: "Itinerary 01",
    title: "Amritsar Tour with Wagah Border",
    subtitle: "02 Nights Amritsar with Wagah Border Ceremony & Partition Heritage",
    durationNights: 2,
    durationDays: 3,
    durationLabel: "02 Nights / 03 Days",
    category: "Spiritual & Iconic",
    tagline: "The essential private introduction to Amritsar's sacred center and patriotic frontier.",
    overview: "Designed for travelers seeking a seamless, deeply authentic introduction to Amritsar. From the electric patriotism of the Wagah Border Beating Retreat ceremony to the tranquil sanctum of Sri Harmandir Sahib and the poignant memories preserved at Jallianwala Bagh and Partition Museum, this private itinerary balances sacred contemplation with lively bazaar exploration.",
    highlights: [
      "Wagah Border Retreat Ceremony with reserved-seating assistance and private AC transfer",
      "Serene sunrise or morning darshan at the Golden Temple with licensed cultural guide",
      "Reflective walk through Jallianwala Bagh and the historic Partition Museum",
      "Curated shopping trail for authentic Amritsari juttis, phulkaris, and heirloom wadiyan",
      "Dedicated luxury private chauffeur for all transfers and city movement"
    ],
    heroImage: "/images/tours/itinerary-01.jpg",
    gallery: [
      "/images/tours/itinerary-01.jpg",
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1608976328267-e673d3ec06ce?auto=format&fit=crop&w=1000&q=80"
    ],
    bestFor: "First-time visitors, families, couples, and weekend travelers",
    pace: "Relaxed",
    pickupDrop: "Hotel Pick-up & Drop-off in Amritsar (Airport / Railway transfers available upon request)",
    pricingNote: "Custom private quote tailored to vehicle preference and hotel tier",
    inclusions: [
      "Private air-conditioned luxury vehicle (Innova Crysta / Luxury Sedan) with chauffeur",
      "Hotel pick-up and drop-off by dedicated private chauffeur for all scheduled sightseeing",
      "All toll taxes, parking fees, interstate permits, and chauffeur allowances",
      "Assistance with Wagah Border VIP timing and ceremony coordination",
      "Chilled bottled Himalayan spring water & wet towels in vehicle",
      "Flexible private pacing without group rush"
    ],
    exclusions: [
      "Airfare / train fare to and from Amritsar",
      "Hotel accommodation (can be arranged upon request in boutique 4★/5★ properties)",
      "Meals outside scheduled itinerary",
      "Personal shopping expenses, tips, and personal gratuities"
    ],
    days: [
      {
        dayNumber: 1,
        title: "Arrival in Amritsar & Wagah Border Retreat Ceremony",
        phases: [
          {
            period: "Morning",
            description: "Welcome to Amritsar! Check in to your hotel and take time to relax and freshen up."
          },
          {
            period: "Afternoon",
            description: "Your private chauffeur will pick you up from your hotel in a climate-controlled vehicle towards the India-Pakistan border at Wagah-Attari. Experience the thunderous patriotism and synchronized military drill of the Beating Retreat ceremony as the national flags are lowered in unison."
          },
          {
            period: "Evening",
            description: "Return comfortably to your hotel. Relax over dinner and enjoy an overnight stay in Amritsar."
          }
        ],
        insiderTip: "We depart for Wagah early in the afternoon to secure optimal stadium seating before general crowds arrive."
      },
      {
        dayNumber: 2,
        title: "Golden Temple, Jallianwala Bagh, Partition Museum & Old Bazaars",
        phases: [
          {
            period: "Morning",
            description: "After breakfast, proceed for a peaceful morning visit to the Golden Temple (Harmandir Sahib). Walk the holy parikrama around the shimmering holy Sarovar, experience the soul-stirring hymns, and observe the community spirit of Guru Ka Langar."
          },
          {
            period: "Afternoon",
            description: "Step into Jallianwala Bagh, a somber memorial dedicated to the martyrs of the 1919 massacre, observing the historic bullet marks and the Martyr's Well. Followed by a comprehensive walk through the Partition Museum at Town Hall, chronicling poignant personal stories and historical archives."
          },
          {
            period: "Evening",
            description: "Explore the bustling heritage bazaars of the walled city—Katra Jaimal Singh and Hall Bazaar—guided to authentic local artisans for hand-embroidered phulkaris, traditional juttis, and authentic Amritsari papad and wadiyan. Return to hotel for dinner."
          }
        ],
        insiderTip: "Modest head covering is required inside the Golden Temple complex; we provide clean, traditional cotton headscarves in our vehicles."
      },
      {
        dayNumber: 3,
        title: "Departure from Amritsar",
        phases: [
          {
            period: "Morning",
            description: "Enjoy a leisurely breakfast at your hotel followed by check-out. Depending on your schedule, indulge in a final cup of creamy Amritsari lassi before your chauffeur assists you with your onward travel arrangements from the hotel."
          }
        ],
        insiderTip: "If you have an evening departure, our chauffeur can store your luggage securely while you enjoy an optional culinary tasting."
      }
    ]
  },
  {
    id: "tour-02",
    slug: "02-nights-amritsar-wagah-palki-sahib",
    itineraryCode: "Itinerary 02",
    title: "Amritsar Tour with Wagah Border and Palki Sahib Night View of Golden Temple",
    subtitle: "02 Nights Amritsar with Wagah Border & Sacred Palki Sahib Evening Darshan",
    durationNights: 2,
    durationDays: 3,
    durationLabel: "02 Nights / 03 Days",
    category: "Spiritual & Iconic",
    tagline: "Behold the golden sanctuary glowing under starlight during the revered night procession.",
    overview: "A deeply spiritual journey crafted for travelers who wish to experience the two most profound spiritual moments at Harmandir Sahib: the serene golden sunset reflection over the sacred Sarovar, and the deeply moving night-time Palki Sahib ceremony, where the Guru Granth Sahib is carried in a flower-bedecked palanquin to its resting sanctuary amid sacred chants.",
    highlights: [
      "Witness the enchanting Sunset & Night Illumination of Sri Harmandir Sahib",
      "Attend the sacred night-time Palki Sahib Sukhasan procession",
      "Wagah Border Retreat Ceremony with synchronized military precision",
      "Guided walk through Jallianwala Bagh memorial and the Town Hall Partition Museum",
      "Exploration of the vibrant heritage bazaars with local food tasting"
    ],
    heroImage: "/images/tours/itinerary-02.jpg",
    gallery: [
      "/images/tours/itinerary-02.jpg",
      "https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=1000&q=80"
    ],
    bestFor: "Pilgrims, spiritual seekers, couples, and photography enthusiasts",
    pace: "Relaxed",
    pickupDrop: "Hotel Pick-up & Drop-off in Amritsar (Airport / Railway transfers available upon request)",
    pricingNote: "Custom quote based on party size & private car preference",
    inclusions: [
      "Private chauffeur-driven luxury vehicle throughout your stay",
      "Hotel pick-up and drop-off by dedicated private chauffeur for all scheduled visits",
      "Late-evening coordination for the Palki Sahib night procession",
      "Tolls, parking, and chauffeur allowances included",
      "Curated insider itinerary with heritage narrative"
    ],
    exclusions: [
      "Flights and trains to/from Amritsar",
      "Hotel accommodations (available upon request)",
      "Meals not specifically stated",
      "Monument fees or personal donation offerings"
    ],
    days: [
      {
        dayNumber: 1,
        title: "Arrival in Amritsar & Sunset at the Golden Temple",
        phases: [
          {
            period: "Morning",
            description: "Welcome to Amritsar! Check in at your hotel, unpack, and take time to relax and refresh. Your private chauffeur will pick you up from your hotel for your scheduled visits."
          },
          {
            period: "Evening",
            description: "In the magical twilight hours, arrive at the Golden Temple. Witness the golden domes reflecting upon the shimmering holy Sarovar as the marble colonnades light up. Soak in the spiritual calm and return for dinner and overnight stay."
          }
        ],
        insiderTip: "Evening twilight (Amrit Vela to dusk) is when the Golden Temple reflections are most breathtaking for photography."
      },
      {
        dayNumber: 2,
        title: "Morning Golden Temple, Jallianwala Bagh, Partition Museum & Bazaars",
        phases: [
          {
            period: "Morning",
            description: "Return early in the morning for peaceful contemplation and morning prayers. Feel the tranquil vibrations across the holy complex. From there, walk into the historic grounds of Jallianwala Bagh."
          },
          {
            period: "Afternoon",
            description: "Visit the Partition Museum with its profound collection of personal letters, photographs, and oral histories. Spend the afternoon browsing authentic local bazaars for handicrafts, spices, and sweets."
          },
          {
            period: "Evening",
            description: "Optional late evening visit to witness the revered Palki Sahib ceremony as the holy scripture is borne on a golden palanquin accompanied by drums, conch sounds, and heartfelt devotional hymns."
          }
        ],
        insiderTip: "The night Palki ceremony typically begins around 9:30-10:00 PM; our chauffeur stays on standby to escort you comfortably back."
      },
      {
        dayNumber: 3,
        title: "Departure from Amritsar",
        phases: [
          {
            period: "Morning",
            description: "Enjoy a leisurely breakfast at your hotel followed by checkout. Your private chauffeur will assist you with luggage and onward travel arrangements from the hotel (airport / railway transfer available on request)."
          }
        ]
      }
    ]
  },
  {
    id: "tour-03",
    slug: "amritsar-city-tour-punjabi-village-excursion",
    itineraryCode: "Itinerary 03",
    title: "Amritsar City Tour with Punjabi Village Excursion",
    subtitle: "03 Nights / 04 Days Amritsar City Tour with Authentic Rural Village Immersion",
    durationNights: 3,
    durationDays: 4,
    durationLabel: "03 Nights / 04 Days",
    category: "Rural & Cultural",
    tagline: "Experience both the regal golden city and the rustic soul of Punjab's verdant farm heartland.",
    overview: "This immersive four-day itinerary bridges Amritsar's royal and spiritual landmarks with the true rural soul of Punjab. Beyond monuments, spend an unforgettable day inside an authentic Punjabi agricultural village—walking lush mustard and wheat fields, riding a tractor, witnessing tandoor bread making, and sharing heartfelt conversations with warm village families.",
    highlights: [
      "Full-day authentic Punjabi Village Excursion with farm walks and rural hospitality",
      "Witness traditional clay tandoor cooking and sample fresh farm churned butter (makhan)",
      "Evening Palki Sahib Ceremony at the Golden Temple",
      "Wagah-Attari Border Retreat Ceremony with private chauffeur service",
      "Comprehensive heritage circuit: Harmandir Sahib, Jallianwala Bagh, and Old Bazaars"
    ],
    heroImage: "/images/tours/itinerary-03.jpg",
    gallery: [
      "/images/tours/itinerary-03.jpg",
      "https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=80"
    ],
    bestFor: "Families, NRI travelers introducing children to Punjab, and cultural explorers",
    pace: "Moderate",
    pickupDrop: "Hotel Pick-up & Drop-off in Amritsar (Airport / Railway transfers available upon request)",
    pricingNote: "Bespoke private experience with village host coordination",
    inclusions: [
      "All transfers and sightseeing by private luxury AC vehicle",
      "Hotel pick-up and drop-off by dedicated private chauffeur for all scheduled visits",
      "Village tour entry and local village host facilitation",
      "Authentic rural hospitality experience with fresh farm refreshments",
      "Driver allowances, highway tolls, and monument parking charges",
      "Palki Sahib ceremony late-evening vehicle availability"
    ],
    exclusions: [
      "Flight or rail transportation",
      "Hotel accommodations (available upon request)",
      "Meals unless specified during farm visit",
      "Personal purchases and tipping"
    ],
    days: [
      {
        dayNumber: 1,
        title: "Arrival in Amritsar & Palki Sahib Ceremony at the Golden Temple",
        phases: [
          {
            period: "Morning",
            description: "Welcome to Amritsar! Check in to your hotel and take time to relax and freshen up. In the evening, your private chauffeur will pick you up from your hotel."
          },
          {
            period: "Evening",
            description: "Head to the Golden Temple to witness the serene and soul-stirring Palki Sahib Ceremony. Experience the spiritual procession carrying the Guru Granth Sahib from the sanctum to its resting room with sacred recitations."
          }
        ]
      },
      {
        dayNumber: 2,
        title: "Golden Temple, Jallianwala Bagh & Wagah Border Ceremony",
        phases: [
          {
            period: "Morning",
            description: "Peaceful morning visit to Harmandir Sahib to experience morning kirtan. Afterward, walk through the sacred memorial grounds of Jallianwala Bagh."
          },
          {
            period: "Afternoon",
            description: "Private drive out to the Wagah Border. Marvel at the synchronized footwork, trumpet calls, and patriotic fervor as soldiers of India and Pakistan conduct the Beating Retreat."
          },
          {
            period: "Evening",
            description: "Return to hotel. Enjoy an authentic Punjabi dinner and overnight stay."
          }
        ]
      },
      {
        dayNumber: 3,
        title: "Authentic Punjabi Village Tour & Rural Culture",
        phases: [
          {
            period: "Morning",
            description: "Journey into the picturesque rural countryside surrounding Amritsar. Visit agricultural farms, see tubewells and open canal irrigation, meet local farmers, and experience rural Punjabi hospitality."
          },
          {
            period: "Afternoon",
            description: "Watch how traditional village food is prepared on mud chulhas (hearths), taste fresh seasonal greens, churned buttermilk (chaas), and homemade makhan. Spend the late afternoon taking in village crafts and stories."
          },
          {
            period: "Evening",
            description: "Drive back to Amritsar city in the evening for a restful night at the hotel."
          }
        ],
        insiderTip: "Wear comfortable walking shoes for farm paths. Village hosts welcome curious questions about crops, seasons, and farming traditions."
      },
      {
        dayNumber: 4,
        title: "Departure from Amritsar",
        phases: [
          {
            period: "Morning",
            description: "After breakfast, check out from your hotel. Your private chauffeur will assist with your luggage and onward travel arrangements from your hotel (airport / railway transfer available upon request)."
          }
        ]
      }
    ]
  },
  {
    id: "tour-04",
    slug: "amritsar-sikh-gurudwaras-circuit",
    itineraryCode: "Itinerary 04",
    title: "Amritsar with Sikh Gurudwaras Around Amritsar",
    subtitle: "03 Nights / 04 Days Amritsar with Historic Gurudwaras of Punjab",
    durationNights: 3,
    durationDays: 4,
    durationLabel: "03 Nights / 04 Days",
    category: "Sacred Pilgrimage",
    tagline: "A profound pilgrimage through the historic Sikh shrines of Tarn Taran, Goindwal, and Khadur Sahib.",
    overview: "A transformative spiritual circuit connecting the Golden Temple with the monumental historical gurdwaras in the Majha region. Visit Gurudwara Tarn Taran Sahib with the world's largest sacred Sarovar, Gurudwara Goindwal Sahib with the revered 84-step Baoli Sahib, and Gurudwara Khadur Sahib, steeped in the sacred legacy of the second Sikh Guru, Sri Guru Angad Dev Ji.",
    highlights: [
      "Darshan at Gurudwara Tarn Taran Sahib, home to the largest sacred Sarovar in the Sikh world",
      "Descend the historic 84-step Baoli (step-well) at Gurudwara Goindwal Sahib",
      "Visit Gurudwara Khadur Sahib, the sacred seat of Guru Angad Dev Ji and Gurmukhi script development",
      "Extended spiritual time at Sri Harmandir Sahib (Golden Temple) in Amritsar",
      "Wagah Border Retreat Ceremony with private chauffeur coordination"
    ],
    heroImage: "/images/tours/itinerary-04.jpg",
    gallery: [
      "/images/tours/itinerary-04.jpg",
      "https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1000&q=80"
    ],
    bestFor: "Devotees, pilgrims, multi-generational Sikh families, and history scholars",
    pace: "Relaxed",
    pickupDrop: "Hotel Pick-up & Drop-off in Amritsar (Airport / Railway transfers available upon request)",
    pricingNote: "Custom quote inclusive of regional highway permits & chauffeur service",
    inclusions: [
      "Full private AC vehicle for the outstation Gurudwara circuit",
      "Experienced chauffeur with deep knowledge of Gurudwara etiquette and customs",
      "Hotel pick-up and drop-off by dedicated private chauffeur for all scheduled Gurudwara circuits and city visits",
      "Tolls, highway taxes, and parking fees",
      "Comfort stops and bottled water throughout the pilgrimage"
    ],
    exclusions: [
      "Travel tickets to Amritsar",
      "Hotel bookings (can be arranged on request)",
      "Personal religious donations (matha tekna) or karah prasad offerings",
      "Personal laundry and miscellaneous expenses"
    ],
    days: [
      {
        dayNumber: 1,
        title: "Arrival in Amritsar & Wagah Border Retreat Ceremony",
        phases: [
          {
            period: "Morning",
            description: "Welcome to Amritsar! Check in to your hotel and take time to settle in and relax."
          },
          {
            period: "Afternoon",
            description: "Afternoon drive from your hotel to Wagah Border to experience the high-octane Beating Retreat ceremony and coordination of border guards before returning to the hotel."
          }
        ]
      },
      {
        dayNumber: 2,
        title: "Golden Temple, Jallianwala Bagh & Heritage Bazaar Walk",
        phases: [
          {
            period: "Morning",
            description: "Morning darshan at the Golden Temple, spending contemplative time by the Sarovar and witnessing the devotion of thousands. Afterward, visit the historic Jallianwala Bagh memorial."
          },
          {
            period: "Afternoon",
            description: "Leisurely afternoon exploring the historic bazaars of Amritsar for religious books, traditional karas, kirpans, dry fruits, and souvenirs."
          }
        ]
      },
      {
        dayNumber: 3,
        title: "Historic Gurudwaras Circuit: Tarn Taran, Goindwal & Khadur Sahib",
        phases: [
          {
            period: "Morning",
            description: "Depart after an early breakfast toward Tarn Taran Sahib (25 km), founded by Guru Arjan Dev Ji, featuring the largest holy water sarovar in the world. Spend quiet time doing parikrama."
          },
          {
            period: "Afternoon",
            description: "Proceed to Goindwal Sahib, the first focal center of Sikhism founded by Guru Amar Das Ji. Descend the famous Baoli Sahib (sacred step-well with 84 steps). Then travel to Khadur Sahib, a shrine enriched with the service and life of Guru Angad Dev Ji."
          },
          {
            period: "Evening",
            description: "Return to Amritsar in time for dinner at your hotel."
          }
        ],
        insiderTip: "Partake in Guru Ka Langar at Goindwal Sahib or Tarn Taran Sahib for an authentic communal dining experience."
      },
      {
        dayNumber: 4,
        title: "Departure from Amritsar",
        phases: [
          {
            period: "Morning",
            description: "Breakfast at hotel, luggage assistance, checkout, and onward travel arrangements from your hotel (airport / railway transfer available upon request)."
          }
        ]
      }
    ]
  },
  {
    id: "tour-05",
    slug: "amritsar-city-tour-cooking-class",
    itineraryCode: "Itinerary 05",
    title: "Amritsar City Tour with Home Culinary / Cooking Class",
    subtitle: "02 Nights / 03 Days Amritsar City Tour with Home Culinary & Cooking Class",
    durationNights: 2,
    durationDays: 3,
    durationLabel: "02 Nights / 03 Days",
    category: "Culinary & Living",
    tagline: "Go beyond sightseeing: step into a welcoming Punjabi family kitchen to cook, laugh, and dine together.",
    overview: "Step into an authentic Punjabi kitchen and experience genuine Amritsari hospitality alongside the city's iconic landmarks. Beyond monuments, join a local host family for a hands-on cooking session to learn beloved traditional recipes, share stories, and enjoy a freshly prepared homemade meal, complete with Wagah Border and optional night Golden Temple darshan.",
    highlights: [
      "Hands-on cooking session and homemade feast with a welcoming local Punjabi family",
      "Learn to prepare traditional favorites: Amritsari kulcha, makki di roti, and sarson da saag",
      "Witness the high-energy Wagah Border Beating Retreat Ceremony",
      "Comprehensive city tour: Sri Harmandir Sahib (Golden Temple), Jallianwala Bagh & local bazaars",
      "Optional evening visit to experience the revered Golden Temple Palki Sahib Ceremony"
    ],
    heroImage: "/images/tours/itinerary-05.jpg",
    gallery: [
      "/images/tours/itinerary-05.jpg",
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1000&q=80"
    ],
    bestFor: "Foodies, cultural travelers, families, and guests looking for authentic local hospitality",
    pace: "Relaxed",
    pickupDrop: "Hotel Pick-up & Drop-off in Amritsar (Airport / Railway transfers available upon request)",
    pricingNote: "All-inclusive private experience covering culinary materials & family feast",
    inclusions: [
      "Dedicated private AC vehicle and chauffeur throughout",
      "Hotel pick-up and drop-off by dedicated private chauffeur for all scheduled sightseeing",
      "Hands-on cooking session and family dining experience with a local Punjabi host family",
      "All fresh cooking ingredients and traditional recipe guidance",
      "Wagah Border, Golden Temple, and Jallianwala Bagh sightseeing coordination",
      "Optional night chauffeur assistance for the Golden Temple Palki Sahib ceremony"
    ],
    exclusions: [
      "Flights or railway tickets to/from Amritsar",
      "Hotel accommodations (can be arranged upon request)",
      "Personal bazaar shopping",
      "Gratuities"
    ],
    days: [
      {
        dayNumber: 1,
        title: "Arrival in Amritsar & Wagah Border Retreat Ceremony",
        phases: [
          {
            period: "Morning / Afternoon",
            description: "Welcome to Amritsar! After arriving, check in to your hotel and relax."
          },
          {
            period: "Afternoon",
            description: "In the afternoon, get ready for a thrilling experience at the Wagah Border, where Indian and Pakistani soldiers put on a powerful and patriotic flag-lowering ceremony. The energy, cheers, and military precision make it an unforgettable experience."
          },
          {
            period: "Evening",
            description: "Return to your hotel and unwind. Overnight stay in Amritsar."
          }
        ]
      },
      {
        dayNumber: 2,
        title: "Amritsar City Tour – Golden Temple, Jallianwala Bagh & Local Bazaars",
        phases: [
          {
            period: "Morning",
            description: "After breakfast, begin your day at the iconic Golden Temple – the spiritual heart of Sikhism. Walk around the shimmering sarovar (holy tank), witness the devotion of the people, and soak in the peaceful vibes. Next, visit Jallianwala Bagh, a moving memorial to the 1919 massacre. Reflect at the site, see the preserved bullet marks, and pay your respects."
          },
          {
            period: "Afternoon & Evening",
            description: "In the afternoon, explore the bustling local bazaars of Amritsar. Pick up beautiful Punjabi juttis, phulkari dupattas, handcrafted souvenirs, or try some irresistible local snacks. Overnight stay in Amritsar."
          }
        ]
      },
      {
        dayNumber: 3,
        title: "Cook with a Local Family + Optional Golden Temple Night Visit",
        phases: [
          {
            period: "Daytime",
            description: "Today, go beyond sightseeing — and step into a Punjabi kitchen! Join a welcoming local family for a hands-on cooking session. Learn to make favorites like Amritsari kulcha, makki di roti, sarson da saag, and more. It's not just about food — it's a chance to share laughs, stories, and connect with the real heart of Punjab. Once done, sit down together and enjoy the meal you've helped cook."
          },
          {
            period: "Evening (Optional)",
            description: "Optional (but magical): In the evening, revisit the Golden Temple to witness the Palki Sahib Ceremony, where the holy book is carried in a gold palanquin with hymns and heartfelt devotion. It's peaceful, emotional, and deeply moving. Overnight stay in Amritsar."
          }
        ]
      }
    ]
  },
  {
    id: "tour-06",
    slug: "amritsar-food-craft-old-city-walk",
    itineraryCode: "Itinerary 06",
    title: "Amritsar with Food Craft Old City Walk",
    subtitle: "03 Nights / 04 Days Amritsar with Iconic Old City Flavors & Artisan Craft Walk",
    durationNights: 3,
    durationDays: 4,
    durationLabel: "03 Nights / 04 Days",
    category: "Old City Flavors",
    tagline: "Taste your way through century-old alleys: creamy lassi, buttery kulchas, sizzling jalebis, and handmade crafts.",
    overview: "A sensory feast crafted for culinary enthusiasts and cultural observers. Alongside the Golden Temple and Wagah Border, spend an entire curated day exploring the storied alleys of the walled city. Relish rich creamy lassi at Gian di Lassi, crisp buttery potato kulchas at Kulwant De Kulche, golden jalebis at Jalebi Chowk, and traditional pinni & rabri from heritage halwais while watching copper and brass craftsmen at work.",
    highlights: [
      "Legendary food trail: Gian di Lassi, Kulwant De Kulche, Jalebi Chowk, and heritage sweet shops",
      "Witness generational artisans handcrafting brassware, Punjabi juttis, and wedding ornaments",
      "Evening Palki Sahib ceremony at Sri Harmandir Sahib on Day 01",
      "High-energy Wagah Border Beating Retreat Ceremony",
      "Guided walk through the historical katras (neighborhoods) of the old walled city"
    ],
    heroImage: "/images/tours/itinerary-06.jpg",
    gallery: [
      "/images/tours/itinerary-06.jpg",
      "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&w=1000&q=80"
    ],
    bestFor: "Food enthusiasts, photographers, cultural explorers, and culinary writers",
    pace: "Moderate",
    pickupDrop: "Hotel Pick-up & Drop-off in Amritsar (Airport / Railway transfers available upon request)",
    pricingNote: "Custom private itinerary with guided food and craft curation",
    inclusions: [
      "Private air-conditioned vehicle with chauffeur for all hotel pick-ups, city transit and transfers",
      "Curated guided walking tour through the Old City food and craft lanes",
      "Tasting recommendations at the most hygienic and iconic heritage outlets",
      "Palki Sahib ceremony evening chauffeur assistance",
      "Wagah Border coordination and highway tolls"
    ],
    exclusions: [
      "Flights / train fares to and from Amritsar",
      "Hotel accommodations (available on request)",
      "Direct food purchases at vendor stalls (guests can select items to their dietary preference)",
      "Gratuities"
    ],
    days: [
      {
        dayNumber: 1,
        title: "Arrival in Amritsar & Palki Sahib Ceremony at the Golden Temple",
        phases: [
          {
            period: "Morning",
            description: "Welcome to Amritsar! Check in to your hotel and take time to freshen up. Your private chauffeur will be at your service from your hotel."
          },
          {
            period: "Evening",
            description: "Evening visit to the Golden Temple to experience the Palki Sahib Ceremony and observe the night rituals with devotional kirtan."
          }
        ]
      },
      {
        dayNumber: 2,
        title: "Morning Golden Temple, Jallianwala Bagh & Wagah Border",
        phases: [
          {
            period: "Morning",
            description: "Morning prayers at the Golden Temple and reflective walk through Jallianwala Bagh."
          },
          {
            period: "Afternoon",
            description: "Drive out to Wagah Border for the thrilling military retreat ceremony."
          },
          {
            period: "Evening",
            description: "Return to hotel for a restful night."
          }
        ]
      },
      {
        dayNumber: 3,
        title: "Amritsar Old City Culinary Walk – Food & Craft Experience",
        phases: [
          {
            period: "Morning",
            description: "Begin the food trail at Gian di Lassi for rich, creamy sweet lassi served in traditional kulhads. Continue to Kulwant De Kulche for crispy, tandoor-baked Amritsari kulchas stuffed with spiced potatoes and topped with fresh butter and tangy tamarind-onion chutney."
          },
          {
            period: "Afternoon",
            description: "Walk down to Jalebi Chowk to watch hot, golden-crisp jalebis fried in pure desi ghee. Savor authentic Pinni and Rabri from generational sweetmakers."
          },
          {
            period: "Evening",
            description: "Meander through the artisan alleys of Thathiaran Wali Gali (traditional brass coppersmiths recognized by UNESCO) and embroidery workshops. Pick up authentic handcrafted souvenirs before returning to your hotel."
          }
        ],
        insiderTip: "Kulwant De Kulche is best visited around 11:00 AM when the tandoor is at optimal heat and the kulchas are freshly puffed."
      },
      {
        dayNumber: 4,
        title: "Departure from Amritsar",
        phases: [
          {
            period: "Morning",
            description: "Breakfast at hotel, checkout, and onward travel arrangements from your hotel with private chauffeur assistance (airport / railway transfer available upon request)."
          }
        ]
      }
    ]
  }
];
