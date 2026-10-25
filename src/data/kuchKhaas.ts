export interface MenuItem {
  name: string;
  description: string;
  tags?: string[];
}

export interface MenuCategory {
  title: string;
  subtitle?: string;
  items: MenuItem[];
}

export interface KuchKhaasSession {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  timings: string;
  description: string;
  includes: string[];
  idealFor: string;
}

export const KUCH_KHAAS_DATA = {
  name: "Kuch Khaas",
  subtitle: "An Intimate Indian Home-Cooking & Cultural Dining Experience",
  tagline: "Every dish is prepared fresh, by hand, and shared together at the table.",
  hostStory: `Kuch Khaas is not a commercial cooking school or a busy restaurant—it is an authentic Indian home kitchen opened with genuine warmth and heart.

Guests are welcomed into a vibrant family home to explore the real culinary heritage of Punjab and India. Under the gentle guidance of passionate home cooks, you'll uncover the secrets of warming spices, hand-roll flaky parathas on hot tawas, balance rich gravies, and then sit down together to share the meal around our family table like old friends.`,
  sessions: [
    {
      id: "hands-on-feast",
      title: "The Hands-on Home Feast & Cooking Experience",
      subtitle: "Cook, Learn & Dine Around the Family Table",
      duration: "3.5 to 4 Hours",
      timings: "Lunch Session: 11:30 AM – 3:30 PM | Dinner Session: 5:30 PM – 9:30 PM",
      description: "Step into our family kitchen. Discover the secrets of roasted spice combinations, dough kneading, tawa baking, and slow-simmered curries. Prepare 3 to 4 classic dishes alongside your host, followed by a multi-course dining feast shared together.",
      includes: [
        "Welcome drink (Masala Chai or Masala Soda) with light refreshments",
        "Hands-on cooking participation with dedicated apron and personal spice station",
        "Learning traditional flatbreads: Chapati, Laccha Paratha, or crisp Puri",
        "Preparation of paneer delicacies, dal makhani / tadka, and seasonal accompaniments",
        "Lavish sit-down meal shared around the family dining table",
        "Digital recipe booklet to recreate dishes at home"
      ],
      idealFor: "Couples, small families, curious travelers, and culinary enthusiasts"
    },
    {
      id: "heritage-high-tea",
      title: "The Heritage High Tea & Street Food Gathering",
      subtitle: "Crisp Pakoras, Mumbai Sandwiches & Slow-Brewed Masala Chai",
      duration: "2 to 2.5 Hours",
      timings: "Afternoon: 4:00 PM – 6:30 PM",
      description: "An intimate afternoon celebrating India's beloved street food and chai culture. Savor golden-crisp pakoras fresh off the kadhai, dahi toast with curry-leaf tempering, street-style Mumbai sandwiches, and piping hot Pav Bhaji, paired with unlimited artisanal masala chai.",
      includes: [
        "Freshly fried paneer and vegetable pakoras with sweet imli & mint chutneys",
        "Dahi toast with tempered mustard and curry leaves",
        "Authentic Mumbai grilled sandwich & butter-toasted Pav Bhaji",
        "Tangy street-style Aloo Chaat",
        "Unlimited slow-brewed Kadak Masala Chai & Masala Soda"
      ],
      idealFor: "Afternoon food lovers, casual group get-togethers, and snack connoisseurs"
    }
  ] as KuchKhaasSession[],

  mainMenuCategories: [
    {
      title: "Paneer Specialties",
      subtitle: "Handcrafted cottage cheese in aromatic gravies and homestyle preparations",
      items: [
        {
          name: "Garlic Paneer",
          description: "Fresh garlic sauce with a hint of lemon and yogurt."
        },
        {
          name: "Tomato Paneer",
          description: "Paneer in a flavorful tomato gravy."
        },
        {
          name: "Cream Paneer",
          description: "Paneer in a rich cream-based gravy with butter, cashew paste and onion."
        },
        {
          name: "Kadhai Paneer",
          description: "Paneer cooked with onions, capsicum, tomatoes and freshly ground kadhai spices."
        },
        {
          name: "Methi Paneer",
          description: "Paneer cooked with fenugreek leaves, onions, tomatoes and cream."
        },
        {
          name: "Matar Paneer",
          description: "Paneer cooked with green peas in a rich tomato and onion gravy."
        },
        {
          name: "Palak Paneer",
          description: "Paneer cooked in a creamy spinach gravy with garlic and ginger."
        }
      ]
    },
    {
      title: "Dal & Lentil Specialties",
      subtitle: "Slow-simmered, ghee-tempered lentils capturing the rustic comfort of Punjab",
      items: [
        {
          name: "Yellow Dal Tadka",
          description: "Yellow lentils tempered with ghee, cumin, garlic, onions and tomatoes."
        },
        {
          name: "Amritsari Dry Dal",
          description: "Whole urad dal cooked with onions, tomatoes, ginger, garlic and a touch of ghee."
        },
        {
          name: "Dal Palak",
          description: "Lentils blended with fresh spinach and tomatoes."
        },
        {
          name: "Amritsari Chole",
          description: "Chickpeas simmered in a rich onion and tomato gravy."
        },
        {
          name: "Rajma",
          description: "Red kidney beans slow-cooked in a rich tomato gravy."
        },
        {
          name: "Dal Makhani",
          description: "Black lentils slow-cooked with butter and cream."
        }
      ]
    },
    {
      title: "Indian Breads",
      subtitle: "Freshly rolled whole-wheat breads baked on iron tawas and hot griddles",
      items: [
        {
          name: "Chapati",
          description: "Traditional whole-wheat flatbread, freshly prepared and cooked on a hot griddle."
        },
        {
          name: "Plain Paratha",
          description: "Layered whole-wheat flatbread cooked with butter or ghee until golden and crisp."
        },
        {
          name: "Stuffed Paratha",
          description: "Whole-wheat flatbread stuffed with potato or onion and cooked with butter or ghee."
        },
        {
          name: "Laccha Paratha",
          description: "Layered whole-wheat flatbread cooked with butter or ghee until crisp and flaky."
        },
        {
          name: "Puri",
          description: "Deep-fried whole-wheat bread, served golden, light and crisp."
        },
        {
          name: "Egg Paratha",
          description: "Whole-wheat flatbread stuffed with seasoned eggs and cooked with butter."
        }
      ]
    },
    {
      title: "Rice Specialties",
      subtitle: "Aromatic long-grain basmati rice preparations",
      items: [
        {
          name: "Garlic Coriander Rice",
          description: "Fragrant basmati rice tossed with fresh garlic, coriander and butter."
        },
        {
          name: "Veg Fried Rice",
          description: "Basmati rice stir-fried with fresh vegetables."
        },
        {
          name: "Egg Fried Rice",
          description: "Basmati rice stir-fried with eggs and fresh vegetables."
        },
        {
          name: "Jeera Rice",
          description: "Fragrant basmati rice tempered with cumin seeds and ghee."
        },
        {
          name: "Soya Pulao",
          description: "Basmati rice cooked with seasonal vegetables, soya chunks and whole spices."
        }
      ]
    },
    {
      title: "Egg Specialties",
      subtitle: "Hearty, comforting homestyle egg preparations",
      items: [
        {
          name: "Egg Pizza / Khagina",
          description: "Eggs prepared with onions, capsicum, tomatoes and cheese in a pizza-style preparation."
        },
        {
          name: "Egg Bhurji",
          description: "Scrambled eggs cooked with onions, tomatoes and fresh coriander."
        },
        {
          name: "Egg Masala Curry",
          description: "Eggs simmered in a rich onion and tomato gravy."
        }
      ]
    },
    {
      title: "Raita & Accompaniments",
      subtitle: "Cooling spiced yogurts and refreshing condiments",
      items: [
        {
          name: "Cucumber Raita",
          description: "Creamy yogurt blended with fresh cucumber and coriander."
        },
        {
          name: "Potato Raita",
          description: "Creamy yogurt blended with boiled potatoes and fresh coriander."
        },
        {
          name: "Dates Raita",
          description: "Creamy yogurt blended with chopped dates, roasted cumin and fresh coriander."
        }
      ]
    }
  ] as MenuCategory[],

  highTeaMenuCategories: [
    {
      title: "Pakoras",
      subtitle: "Crispy fritters battered in spiced gram flour and fried to golden perfection",
      items: [
        {
          name: "Paneer Pakora",
          description: "Crispy paneer pieces coated in gram-flour batter and deep-fried."
        },
        {
          name: "Vegetable Pakora",
          description: "Mixed vegetables coated in gram-flour batter and fried until crisp."
        },
        {
          name: "Stuffed Bread Pakora",
          description: "Bread stuffed with spices, coated in gram-flour batter and fried."
        }
      ]
    },
    {
      title: "Street Food Specialties",
      subtitle: "Iconic snacks celebrating urban tea-stall and street favorites",
      items: [
        {
          name: "Potato Rolls",
          description: "Crispy rolls stuffed with seasoned potato filling and fried until golden."
        },
        {
          name: "Dahi Toast",
          description: "Bread coated with a yogurt and gram-flour batter, finished with a curry-leaf tadka."
        },
        {
          name: "Mumbai Style Sandwich",
          description: "Street-style sandwich filled with potatoes, vegetables and chutney, then grilled."
        },
        {
          name: "Pav Bhaji",
          description: "Mumbai street-food classic with spiced vegetable mash served with a buttered bun."
        }
      ]
    },
    {
      title: "Beverages & Accompaniments",
      subtitle: "Refreshing drinks, warming chai, and homemade chutneys",
      items: [
        {
          name: "Masala Chai",
          description: "Traditional Indian tea brewed with milk, tea leaves and warming spices."
        },
        {
          name: "Masala Soda",
          description: "Indian-style soda with lemon, spices and a hint of salt."
        },
        {
          name: "Green Chutney / Mint Sauce",
          description: "Fresh coriander and mint chutney with herbs and lemon."
        },
        {
          name: "Imli Chutney / Tamarind Sauce",
          description: "Sweet and tangy tamarind chutney prepared with tamarind and jaggery."
        },
        {
          name: "Aloo Chaat",
          description: "Fried potatoes served with yogurt, tangy chutney and spices."
        }
      ]
    }
  ] as MenuCategory[]
};
