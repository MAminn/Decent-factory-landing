/* =========================================================================
   DECENT — Content data module
   Single source of truth for confirmed company content.
   Only contains facts sourced from the company profile.
   ========================================================================= */

export interface Company {
  name: string;
  established: number;
  tagline: string;
  positioning: string;
  website: string;
}

export interface JourneyMilestone {
  year: number;
  label: string;
}

export interface FacilityFloor {
  floor: string;
  use: string;
}

export interface ProductLine {
  name: string;
  description: string;
  categories: readonly string[];
}

export interface Capacity {
  current: string;
  team: string;
  scalable: string;
}

export interface ValueItem {
  title: string;
  body: string;
}

export interface FutureItem {
  title: string;
  body: string;
}

export interface Leader {
  name: string;
  role: string;
  image?: string;
}

export interface Leadership {
  ceo: {
    name: string;
    role: string;
    quote: string;
    message: string;
    image: string;
  };
  team: readonly Leader[];
}

export interface ContactPhone {
  label: string;
  number: string;
}

export interface Contact {
  phones: ContactPhone[];
  emails: string[];
  locations: string[];
  website: string;
}

export const company: Company = {
  name: "Decent",
  established: 2017,
  tagline: "Crafted with commitment. Built to last.",
  positioning: "second-best factory in the local market, closing the gap",
  website: "decenteg.com",
};

export const founders: readonly string[] = ["Osama Maher", "Khalil Elsayed"];

export const journey: readonly JourneyMilestone[] = [
  { year: 2017, label: "Single production line, rented facility" },
  { year: 2019, label: "Acquired own building" },
  { year: 2020, label: "Built 2nd floor & moved packaging to ground floor" },
  { year: 2022, label: "Built 3rd floor for packaging" },
  { year: 2024, label: "Built 4th floor for warehousing & storage" },
  { year: 2025, label: "Built annex building" },
];

export const productLines: readonly ProductLine[] = [
  {
    name: "Gabardine & Slit-Pocket Line",
    description:
      "Chinos, dress trousers, and casual bottoms, produced on two dedicated ground-floor lines.",
    categories: [
      "Chinos",
      "Dress Trousers",
      "Casual Trousers",
      "Tailored Bottom-wear",
    ],
  },
  {
    name: "Denim & Five-Pocket Line",
    description:
      "Jeans with heavy-duty stitching and riveting, produced on two dedicated second-floor lines.",
    categories: ["Jeans", "Five-Pocket Jeans", "Denim Shorts"],
  },
];

export const process: readonly string[] = [
  "Cutting",
  "Production",
  "Washing",
  "Finishing",
  "Packaging",
  "QC",
];

export const facility: readonly FacilityFloor[] = [
  {
    floor: "Ground Floor",
    use: "Two production lines dedicated to gabardine trousers and slit-pocket bottoms",
  },
  {
    floor: "2nd Floor",
    use: "Two production lines dedicated to denim and five-pocket jeans",
  },
  { floor: "3rd Floor", use: "Finishing, quality inspection & packaging" },
  { floor: "4th Floor", use: "Training Academy & warehousing" },
  {
    floor: "Annex building",
    use: "Dedicated cutting facility with fabric spreading and cutting operations",
  },
];

export const capacity: Capacity = {
  current: "100K pieces/month",
  team: "600+ personnel",
  scalable: "Up to 180K pieces/month within 2 years",
};

export const values: readonly ValueItem[] = [
  {
    title: "Commitment",
    body: "We honor our word. When we agree to a deadline, a specification, or a standard, we deliver.",
  },
  {
    title: "Quality",
    body: "Quality isn't a department, it's a culture. From the fabric we source to the final stitch, every decision is made with the end product in mind.",
  },
  {
    title: "Flexibility",
    body: "We adapt to each client's order size, timeline, and requirements.",
  },
];

export const whyDecent: readonly string[] = [
  "A trusted partner to some of the biggest names in the local fashion market",
  "Scalable capacity designed to grow alongside your business",
  "Flexible operations that adapt to your order size, timeline, and requirements",
  "Best-in-class quality control across every production stage",
  "Proven commitment to deadlines and specifications",
];

export const clients: readonly string[] = [
  "Walker",
  "Coup",
  "Dalydress",
  "Carina",
  "Steng Jeans Wear",
  "Town Team",
  "Cuba Jeans",
  "Tomato",
  "Men's Club",
  "Khotwh",
  "U-Turn",
  "Hover Jeans",
];

export const partners: readonly string[] = [
  "KB Family Denim",
  "Sharabati Denim",
  "ISKO",
];

export const future: readonly FutureItem[] = [
  {
    title: "Scaling Production",
    body: "Growing monthly capacity from 100,000 to 180,000 pieces within two years.",
  },
  {
    title: "Entering International Markets",
    body: "Preparing to export to overseas markets, bringing Decent's manufacturing quality to a global audience.",
  },
  {
    title: "New Product Lines",
    body: "Expanding beyond core bottom-wear into cotton-based product lines while maintaining the same standard of excellence.",
  },
];

export const leadership: Leadership = {
  ceo: {
    name: "Osama Maher",
    role: "Chief Executive Officer",
    quote:
      "Great denim is never an accident; it is the result of passion, precision, and an uncompromising commitment to quality.",
    message:
      "Every pair we produce reflects our dedication to quality, consistency, and attention to detail — and our belief that lasting partnerships are built on trust, reliability, and shared success.",
    image: "/leader-ceo.png",
  },
  team: [
    { name: "Mossad", role: "Head of Finance", image: "/leader-mossad.png" },
    { name: "Karim", role: "Head of Quality", image: "/leader-karim.png" },
    { name: "Hesham", role: "Head of Operations", image: "/leader-hesham.png" },
    {
      name: "Amr Bassiuny",
      role: "Head of Investment",
      image: "/leader-amr-bassiuny.png",
    },
    { name: "Bakr", role: "Head of People", image: "/leader-bakr.png" },
  ],
};

export const contact: Contact = {
  phones: [
    { label: "Amr Bassiuny", number: "+20 122 108 2520" },
    { label: "Merchandising", number: "+20 108 086 7231" },
  ],
  emails: [
    "osama.maher@decenteg.com",
    "amr.bassiuny@decenteg.com",
    "merchandising@decenteg.com",
  ],
  locations: [
    "Belbes, Sharqiyah, Egypt",
    "New factory: Obour, Qalyubiyah, Egypt",
  ],
  website: "decenteg.com",
};
