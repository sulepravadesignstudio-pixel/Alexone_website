import living01 from './assets/residential/living-01.jpg';
import living02 from './assets/residential/living-02.jpg';
import living03 from './assets/residential/living-03.jpg';
import living04 from './assets/residential/living-04.jpg';
import living05 from './assets/residential/living-05.jpg';
import living06 from './assets/residential/living-06.jpg';
import living07 from './assets/residential/living-07.jpg';
import living08 from './assets/residential/living-08.jpg';
import living09 from './assets/residential/living-09.jpg';
import kitchen01 from './assets/residential/kitchen-01.jpg';
import kitchen02 from './assets/residential/kitchen-02.jpg';
import kitchen03 from './assets/residential/kitchen-03.jpg';

export interface Project {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Hotel' | 'Bar & Lounge' | 'Workspace' | 'Landscape' | 'Swimming Pool' | 'Exterior' | 'Cafe' | 'Saloon';
  image: string;
  description: string;
  subCategory?: string;
}

export interface ResidentialHotspot {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  top: string;
  left: string;
}

export interface ResidentialScene {
  id: string;
  label: string;
  title: string;
  image: string;
  summary: string;
  hotspots: ResidentialHotspot[];
}

export const RESIDENTIAL_HERO_IMAGE = living06;

export const RESIDENTIAL_ENTRY_STACK = [
  {
    image: living01,
    title: 'Living Room',
    caption: 'Warm marble tones with a sculpted media wall',
  },
  {
    image: kitchen01,
    title: 'Modular Kitchen',
    caption: 'Fresh pastel storage with compact spatial planning',
  },
  {
    image: living09,
    title: 'Feature View',
    caption: 'Layered seating, wood textures, and ambient lighting',
  },
];

export const RESIDENTIAL_PANORAMA_SCENES: ResidentialScene[] = [
  {
    id: 'living-room',
    label: 'Living Room',
    title: 'Cinematic Lounge View',
    image: living06,
    summary: 'Move through the primary lounge concept and inspect the layered marble, seating, and ambient lighting composition.',
    hotspots: [
      {
        id: 'living-media',
        title: 'Media Wall',
        subtitle: 'TV Unit',
        description: 'A sculpted entertainment wall with glossy cabinetry, warm light lines, and strong symmetry.',
        top: '46%',
        left: '74%',
      },
      {
        id: 'living-seating',
        title: 'Lounge Seating',
        subtitle: 'Living Zone',
        description: 'A soft neutral seating block designed to keep the room warm, social, and visually calm.',
        top: '56%',
        left: '34%',
      },
      {
        id: 'living-art',
        title: 'Art Wall',
        subtitle: 'Decor',
        description: 'A curated gallery wall that brings personality and balance to the entry-facing elevation.',
        top: '42%',
        left: '54%',
      },
    ],
  },
  {
    id: 'feature-wall',
    label: 'Feature Wall',
    title: 'Statement Detail View',
    image: living01,
    summary: 'Focus on the hero surfaces that define the room through wood ribs, gloss panels, and integrated fire detail.',
    hotspots: [
      {
        id: 'feature-panel',
        title: 'Timber Panelling',
        subtitle: 'Materiality',
        description: 'Vertical timber ribs create depth and rhythm behind the TV composition.',
        top: '40%',
        left: '62%',
      },
      {
        id: 'feature-fire',
        title: 'Ambient Fire Strip',
        subtitle: 'Lighting',
        description: 'A low flame line adds drama and warmth without overpowering the room.',
        top: '52%',
        left: '64%',
      },
      {
        id: 'feature-marble',
        title: 'Coffee Table',
        subtitle: 'Furniture',
        description: 'Rounded marble tables soften the angular media wall and ground the lounge layout.',
        top: '70%',
        left: '48%',
      },
    ],
  },
  {
    id: 'kitchen',
    label: 'Kitchen',
    title: 'Modular Kitchen View',
    image: kitchen01,
    summary: 'Explore the kitchen concept with pastel cabinetry, patterned backsplash, and a bright work surface.',
    hotspots: [
      {
        id: 'kitchen-base',
        title: 'Base Storage',
        subtitle: 'Cabinetry',
        description: 'Minimal handle-less lower cabinets keep the kitchen visually clean and practical.',
        top: '68%',
        left: '52%',
      },
      {
        id: 'kitchen-wall',
        title: 'Wall Units',
        subtitle: 'Storage',
        description: 'Timber-finished upper units bring warmth and balance to the palette.',
        top: '34%',
        left: '50%',
      },
      {
        id: 'kitchen-backsplash',
        title: 'Backsplash Pattern',
        subtitle: 'Finish',
        description: 'Decorative wall tiles add character and break the monotony of flat surfaces.',
        top: '48%',
        left: '58%',
      },
    ],
  },
];

export const CATEGORIES = [
  {
    id: 'residential',
    title: 'Residential',
    description: 'Personalized living spaces crafted for comfort, sophistication, and lifestyle.',
    image: RESIDENTIAL_HERO_IMAGE,
  },
  {
    id: 'commercial',
    title: 'Commercial',
    description: 'High-performance business environments designed for impact and efficiency.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 'hotel',
    title: 'Hotel',
    description: 'Hospitality spaces that elevate ambience, luxury, and guest experience.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 'bar-lounge',
    title: 'Bar & Lounge',
    description: 'Mood-rich interiors with dramatic aesthetics and unforgettable atmosphere.',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 'workspace',
    title: 'Workspace',
    description: 'Modern, intelligent spaces built for focus, collaboration, and innovation.',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 'landscape',
    title: 'Landscape',
    description: 'Curated outdoor environments that blend nature, structure, and serenity.',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 'swimming-pool',
    title: 'Swimming Pool',
    description: 'Resort-style aquatic spaces designed for luxury, leisure, and visual drama.',
    image: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 'exterior',
    title: 'Exterior',
    description: 'Bold facades and exterior finishes that make a powerful first impression.',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 'cafe',
    title: 'Café',
    description: 'Warm, character-rich café interiors that invite people to slow down and savour.',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: 'saloon',
    title: 'Saloon',
    description: 'Stylish salon and grooming spaces that combine luxury with effortless functionality.',
    image: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&q=80&w=1200',
  },
];

/** Labels for enquiry / contact forms — kept in sync with `CATEGORIES` (all project types on the site). */
export const ENQUIRY_PROJECT_TYPE_OPTIONS = CATEGORIES.map((c) => ({
  value: c.title,
  label: c.title,
}));

export const PROJECTS: Project[] = [
  {
    id: 'chandrasekharpur-lounge',
    title: 'Chandrasekharpur Lounge',
    category: 'Residential',
    subCategory: 'Living Room',
    image: living06,
    description: 'A cinematic living room with marble, mood lighting, and a layered seating composition.',
  },
  {
    id: 'chandrasekharpur-tv-wall',
    title: 'Signature TV Wall',
    category: 'Residential',
    subCategory: 'TV Unit',
    image: living01,
    description: 'Glossy cabinetry and vertical panelling shape a refined entertainment focal point.',
  },
  {
    id: 'chandrasekharpur-conversation-zone',
    title: 'Conversation Corner',
    category: 'Residential',
    subCategory: 'Living Room',
    image: living03,
    description: 'A relaxed social setting designed around warmth, softness, and balanced illumination.',
  },
  {
    id: 'chandrasekharpur-texture-wall',
    title: 'Texture Wall Feature',
    category: 'Residential',
    subCategory: 'Feature Wall',
    image: living09,
    description: 'Wood ribs, metallic textures, and fireplace detailing create a memorable residential accent.',
  },
  {
    id: 'chandrasekharpur-entry-view',
    title: 'Entry Perspective',
    category: 'Residential',
    subCategory: 'Living Room',
    image: living07,
    description: 'A welcoming view that frames the room through texture, symmetry, and soft contrast.',
  },
  {
    id: 'chandrasekharpur-lounge-detail',
    title: 'Lounge Detail Study',
    category: 'Residential',
    subCategory: 'TV Unit',
    image: living08,
    description: 'A closer study of media-wall integration, display styling, and architectural lighting.',
  },
  {
    id: 'chandrasekharpur-kitchen-concept',
    title: 'Fresh Modular Kitchen',
    category: 'Residential',
    subCategory: 'Kitchen',
    image: kitchen01,
    description: 'Mint and timber finishes bring brightness to a compact modular kitchen composition.',
  },
  {
    id: 'chandrasekharpur-kitchen-minimal',
    title: 'Minimal Kitchen Line',
    category: 'Residential',
    subCategory: 'Kitchen',
    image: kitchen02,
    description: 'Clean white planes and pastel lower cabinetry create a calm everyday workspace.',
  },
  {
    id: 'chandrasekharpur-kitchen-detail',
    title: 'Kitchen Storage Detail',
    category: 'Residential',
    subCategory: 'Kitchen',
    image: kitchen03,
    description: 'A crisp storage-focused layout that keeps the room open, airy, and highly usable.',
  },
  {
    id: 'aurelia-studio',
    title: 'Aurelia Commercial Studio',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800',
    description: 'A strategic showroom design focused on brand impact and customer flow.',
  },
  {
    id: 'pinnacle-retail-store',
    title: 'Pinnacle Retail Store',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&q=80&w=800',
    description: 'A high-end retail space with curated display zones and luxury material finishes.',
  },
  {
    id: 'nexus-corporate-lobby',
    title: 'Nexus Corporate Lobby',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800',
    description: 'A grand corporate lobby that commands authority through scale and materiality.',
  },
  {
    id: 'elara-boutique-showroom',
    title: 'Elara Boutique Showroom',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
    description: 'An intimate boutique showroom with bespoke display systems and warm lighting.',
  },
  {
    id: 'velvet-lounge',
    title: 'Velvet Lounge Concept',
    category: 'Bar & Lounge',
    image: 'https://images.unsplash.com/photo-1574096079513-d8259312b785?auto=format&fit=crop&q=80&w=800',
    description: 'Dramatic lighting and rich materials create an unforgettable nightlife atmosphere.',
  },
  {
    id: 'ember-cocktail-bar',
    title: 'Ember Cocktail Bar',
    category: 'Bar & Lounge',
    image: 'https://images.unsplash.com/photo-1525268323446-0505b6fe7778?auto=format&fit=crop&q=80&w=800',
    description: 'A moody cocktail bar with copper accents, dark timber, and layered ambient lighting.',
  },
  {
    id: 'noir-whiskey-lounge',
    title: 'Noir Whiskey Lounge',
    category: 'Bar & Lounge',
    image: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&q=80&w=800',
    description: 'A sophisticated whiskey lounge with leather seating, stone bar top, and subdued tones.',
  },
  {
    id: 'prism-rooftop-bar',
    title: 'Prism Rooftop Bar',
    category: 'Bar & Lounge',
    image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&q=80&w=800',
    description: 'An open-air rooftop bar concept with dramatic city views and statement furniture.',
  },
  {
    id: 'grand-horizon',
    title: 'Grand Horizon Hotel',
    category: 'Hotel',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800',
    description: 'Luxury hospitality design that elevates the guest experience to new heights.',
  },
  {
    id: 'azure-resort-suite',
    title: 'Azure Resort Suite',
    category: 'Hotel',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=800',
    description: 'A resort suite with breezy coastal tones, premium linens, and ocean-view terraces.',
  },
  {
    id: 'palazzo-hotel-lobby',
    title: 'Palazzo Hotel Lobby',
    category: 'Hotel',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=800',
    description: 'A palatial hotel lobby with soaring ceilings, marble floors, and bespoke chandeliers.',
  },
  {
    id: 'nomad-boutique-hotel',
    title: 'Nomad Boutique Hotel',
    category: 'Hotel',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800',
    description: 'A thoughtfully designed boutique hotel room that balances intimacy with refined luxury.',
  },
  {
    id: 'axis-workspace',
    title: 'Axis Workspace Suite',
    category: 'Workspace',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800',
    description: 'A contemporary office environment built for focus and collaboration.',
  },
  {
    id: 'hive-co-working',
    title: 'Hive Co-Working Studio',
    category: 'Workspace',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
    description: 'A vibrant co-working space with breakout zones, biophilic elements, and natural light.',
  },
  {
    id: 'zenith-executive-office',
    title: 'Zenith Executive Office',
    category: 'Workspace',
    image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?auto=format&fit=crop&q=80&w=800',
    description: 'A premium executive office with bespoke joinery, leather accents, and art integration.',
  },
  {
    id: 'flow-creative-studio',
    title: 'Flow Creative Studio',
    category: 'Workspace',
    image: 'https://images.unsplash.com/photo-1572025442646-866d16c84a54?auto=format&fit=crop&q=80&w=800',
    description: 'An open creative studio with flexible zones designed to inspire and energise teams.',
  },
  // Landscape
  {
    id: 'verdure-garden-design',
    title: 'Verdure Garden Design',
    category: 'Landscape',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800',
    description: 'A lush landscape composition blending structured planting with natural flow.',
  },
  {
    id: 'zen-terrace-garden',
    title: 'Zen Terrace Garden',
    category: 'Landscape',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&q=80&w=800',
    description: 'A rooftop garden retreat with stone pathways, water features, and curated greenery.',
  },
  {
    id: 'courtyard-landscape',
    title: 'Courtyard Landscape',
    category: 'Landscape',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4aaae?auto=format&fit=crop&q=80&w=800',
    description: 'An intimate courtyard space framed with sculptural planting and ambient lighting.',
  },
  // Swimming Pool
  {
    id: 'infinity-pool-concept',
    title: 'Infinity Pool Concept',
    category: 'Swimming Pool',
    image: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?auto=format&fit=crop&q=80&w=800',
    description: 'A resort-style infinity pool that merges the horizon with the water line.',
  },
  {
    id: 'villa-lap-pool',
    title: 'Villa Lap Pool',
    category: 'Swimming Pool',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800',
    description: 'A sleek residential lap pool with stone decking and integrated lounge zones.',
  },
  {
    id: 'rooftop-pool-suite',
    title: 'Rooftop Pool Suite',
    category: 'Swimming Pool',
    image: 'https://images.unsplash.com/photo-1540541338537-1220059c2264?auto=format&fit=crop&q=80&w=800',
    description: 'A dramatic rooftop pool with panoramic city views and luxury lounging.',
  },
  // Exterior
  {
    id: 'modern-villa-exterior',
    title: 'Modern Villa Exterior',
    category: 'Exterior',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=800',
    description: 'A bold contemporary facade with clean lines, stone cladding, and statement lighting.',
  },
  {
    id: 'tropical-residence-exterior',
    title: 'Tropical Residence',
    category: 'Exterior',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800',
    description: 'A warm tropical exterior with timber screens, lush plantings, and open terraces.',
  },
  {
    id: 'commercial-facade',
    title: 'Commercial Facade Design',
    category: 'Exterior',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=800',
    description: 'A striking glass and metal facade that projects a brand of authority and sophistication.',
  },
  // Café
  {
    id: 'artisan-cafe-design',
    title: 'Artisan Café Design',
    category: 'Cafe',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800',
    description: 'A warm café interior with exposed brick, timber furniture, and ambient pendant lights.',
  },
  {
    id: 'minimalist-brew-bar',
    title: 'Minimalist Brew Bar',
    category: 'Cafe',
    image: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&q=80&w=800',
    description: 'A pared-back brew bar concept that celebrates craft coffee in an elegant setting.',
  },
  {
    id: 'garden-cafe-concept',
    title: 'Garden Café Concept',
    category: 'Cafe',
    image: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&q=80&w=800',
    description: 'An alfresco café environment where lush greenery and natural light define the mood.',
  },
  // Saloon
  {
    id: 'luxury-salon-interior',
    title: 'Luxury Salon Interior',
    category: 'Saloon',
    image: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&q=80&w=800',
    description: 'A premium salon space that exudes elegance through marble surfaces and curated lighting.',
  },
  {
    id: 'modern-barbershop',
    title: 'Modern Barbershop',
    category: 'Saloon',
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=800',
    description: 'A bold, masculine barbershop with industrial accents and polished finishes.',
  },
  {
    id: 'boutique-beauty-studio',
    title: 'Boutique Beauty Studio',
    category: 'Saloon',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800',
    description: 'A soft, feminine studio space designed around comfort, mirrors, and warm neutrals.',
  },
];

export const MATERIALS = {
  interiorSolutions: [
    'Modular Kitchen', 'Wardrobe', 'TV Unit', 'Crockery Unit', 
    'Vanity / Dressing Unit', 'Headboard & Wall Panelling', 
    'Bed Styles', 'Doors & Windows', 'Ceiling Solutions'
  ],
  materialTypes: [
    'Acrylic', 'Laminate', 'PVC Laminate', 'Lamination', 'PU', 'Veneer', 
    'Lacquered Glass', 'Toughened Glass', 'Texture Laminate', 'Louvers', 
    'UPVC', 'WPC', 'Aluminium', 'Gypsum', 'POP', 'Stretch Finish'
  ],
  partners: [
    'Godrej', 'Ebco', 'Hettich', 'Livspace', 'Tandem', 'Hafele', 
    'Century', 'Green Panel', 'Austin', 'Black Cobra', 'VANM', 
    'Airolam', 'Fenesta', 'Saint-Gobain'
  ],
  decorLighting: [
    'Decor Items', 'Profile Light', 'Cylinder Light', 'Focus Light', 
    'Strip Light', 'Surface Light', 'Fountain', 'Automation'
  ]
};
