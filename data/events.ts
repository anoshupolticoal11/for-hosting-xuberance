import {
  Trophy,
  Goal,
  Swords,
  Crown,
  Target,
  Dumbbell,
  CircleDot,
  Gamepad2,
  Film,
  Paintbrush,
  Palette,
  SprayCan,
  PenTool,
  BookOpen,
  Camera,
  Video,
  Puzzle,
  Code,
  Gavel,
  HelpCircle,
  Briefcase,
  ChefHat,
  Music,
  MapPin,
  FlaskConical,
  FileImage,
  Lightbulb,
  Music2,
  Footprints,
  Drama,
  MessageCircle,
  Mic,
  Guitar,
  Shirt,
  Scale,
  Megaphone,
  Sparkles,
  Star,
  type LucideIcon,
} from "lucide-react";

export interface EventData {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  participants: string;
  tags: string[];
  category: "sporting" | "off-stage" | "on-stage";
}

export const sportingEvents: EventData[] = [
  {
    title: "X-GOAL BOYS",
    subtitle: "FOOTBALL (BOYS)",
    description:
      "A knockout football tournament organized for boys. Teams compete in short matches wearing official school jerseys.",
    icon: Goal,
    participants: "6 + 4 substitutes",
    tags: ["KNOCKOUT", "TEAM"],
    category: "sporting",
  },
  {
    title: "X-GOAL GIRLS",
    subtitle: "FOOTBALL (GIRLS)",
    description:
      "A knockout football tournament organized for girls. Teams compete in short matches wearing official school jerseys.",
    icon: Goal,
    participants: "6 + 4 substitutes",
    tags: ["KNOCKOUT", "TEAM"],
    category: "sporting",
  },
  {
    title: "X-HOOP BOYS",
    subtitle: "BASKETBALL (BOYS)",
    description:
      "A knockout basketball tournament held for boys. Teams play with official school jerseys and rolling substitutions.",
    icon: CircleDot,
    participants: "5 + 4 substitutes",
    tags: ["KNOCKOUT", "TEAM"],
    category: "sporting",
  },
  {
    title: "X-HOOP GIRLS",
    subtitle: "BASKETBALL (GIRLS)",
    description:
      "A knockout basketball tournament held for girls. Teams play with official school jerseys and rolling substitutions.",
    icon: CircleDot,
    participants: "5 + 4 substitutes",
    tags: ["KNOCKOUT", "TEAM"],
    category: "sporting",
  },
  {
    title: "X-KHO BOYS",
    subtitle: "KHO KHO (BOYS)",
    description:
      "A knockout kho kho tournament conducted for boys. Teams compete with 9 players on the field and 3 reserves.",
    icon: Swords,
    participants: "12",
    tags: ["KNOCKOUT", "TEAM"],
    category: "sporting",
  },
  {
    title: "X-KHO GIRLS",
    subtitle: "KHO KHO (GIRLS)",
    description:
      "A knockout kho kho tournament conducted for girls. Teams compete with 9 players on the field and 3 reserves.",
    icon: Swords,
    participants: "12",
    tags: ["KNOCKOUT", "TEAM"],
    category: "sporting",
  },
  {
    title: "X-MATE",
    subtitle: "CHESS",
    description:
      "A knockout chess tournament where each school fields a team. Matches are played in blitz and rapid formats.",
    icon: Crown,
    participants: "2",
    tags: ["STRATEGY", "INDIVIDUAL"],
    category: "sporting",
  },
  {
    title: "X-PONG",
    subtitle: "TABLE TENNIS",
    description:
      "A knockout table tennis tournament organized separately for boys and girls. Teams compete in singles and doubles matches.",
    icon: Target,
    participants: "4",
    tags: ["KNOCKOUT", "MIXED"],
    category: "sporting",
  },
  {
    title: "X-PULL BOYS",
    subtitle: "TUG OF WAR (BOYS)",
    description:
      "A knockout tug of war competition held for boys. Teams compete in best of three pulls on the field.",
    icon: Dumbbell,
    participants: "10 + 2 substitutes",
    tags: ["STRENGTH", "TEAM"],
    category: "sporting",
  },
  {
    title: "X-PULL GIRLS",
    subtitle: "TUG OF WAR (GIRLS)",
    description:
      "A knockout tug of war competition held for girls. Teams compete in best of three pulls on the field.",
    icon: Dumbbell,
    participants: "10 + 2 substitutes",
    tags: ["STRENGTH", "TEAM"],
    category: "sporting",
  },
  {
    title: "X-WICKET",
    subtitle: "CRICKET",
    description:
      "A knockout cricket tournament exclusively for boys. Teams play short limited over matches in cricket attire.",
    icon: Trophy,
    participants: "6 + 3 substitutes",
    tags: ["KNOCKOUT", "TEAM"],
    category: "sporting",
  },
];

export const offStageEvents: EventData[] = [
  {
    title: "X-FIFA",
    subtitle: "FIFA",
    description:
      "An EAFC 25 (PS5) football gaming tournament on knockout basis. Players compete in short matches with penalties as tiebreakers.",
    icon: Gamepad2,
    participants: "2",
    tags: ["GAMING", "TEAM"],
    category: "off-stage",
  },
  {
    title: "X-REEL",
    subtitle: "REEL MAKING",
    description:
      "A short reel making competition on Instagram. Participants create creative reels on non-objectionable audio.",
    icon: Film,
    participants: "1",
    tags: ["CREATIVE", "DIGITAL"],
    category: "off-stage",
  },
  {
    title: "X-PAINTING",
    subtitle: "PAINTING",
    description:
      "A painting competition where participants create artwork on a given theme. Artists work with their own stationery on provided sheets.",
    icon: Paintbrush,
    participants: "1",
    tags: ["ART", "INDIVIDUAL"],
    category: "off-stage",
  },
  {
    title: "X-DIGI",
    subtitle: "DIGITAL ART",
    description:
      "A digital art competition where participants create artwork on given topics. Artists work on their devices and submit digital files.",
    icon: Palette,
    participants: "1",
    tags: ["ART", "DIGITAL"],
    category: "off-stage",
  },
  {
    title: "X-SPRAY",
    subtitle: "SPRAY PAINTING",
    description:
      "A spray painting competition on canvas. Participants create artwork on a given theme.",
    icon: SprayCan,
    participants: "2",
    tags: ["ART", "TEAM"],
    category: "off-stage",
  },
  {
    title: "X-SCRIPT",
    subtitle: "CREATIVE WRITING",
    description:
      "A creative writing and recitation competition in English and Hindi. Participants write and present their original pieces.",
    icon: PenTool,
    participants: "1 (each)",
    tags: ["LITERARY", "INDIVIDUAL"],
    category: "off-stage",
  },

  {
    title: "X-PIXEL",
    subtitle: "PHOTOGRAPHY",
    description:
      "A photography competition where participants capture images on given themes. Photographers submit edited photos with suitable captions.",
    icon: Camera,
    participants: "2",
    tags: ["CREATIVE", "DIGITAL"],
    category: "off-stage",
  },
  {
    title: "X-RAPPORTEUR",
    subtitle: "VLOGGING & JOURNALISM",
    description:
      "A vlogging and journalism event requiring balanced video content. Participants record interviews and submit edited videos.",
    icon: Video,
    participants: "2",
    tags: ["MEDIA", "TEAM"],
    category: "off-stage",
  },
  {
    title: "X-PUZZLE",
    subtitle: "PUZZLE GAME",
    description:
      "A multi-round puzzle solving competition. Teams solve Sudoku, crossword, and math puzzles sequentially.",
    icon: Puzzle,
    participants: "3",
    tags: ["BRAIN", "TEAM"],
    category: "off-stage",
  },
  {
    title: "X-HACK",
    subtitle: "HACKATHON",
    description:
      "A hackathon where participants develop an app or website. Teams work on a given problem statement and present their solution.",
    icon: Code,
    participants: "2",
    tags: ["TECH", "TEAM"],
    category: "off-stage",
  },
  {
    title: "X-BID",
    subtitle: "CRICKET AUCTION",
    description:
      "A cricket auction and pitching event where teams bid for players. Participants present their team strategy in a pitching round.",
    icon: Gavel,
    participants: "2",
    tags: ["STRATEGY", "TEAM"],
    category: "off-stage",
  },
  {
    title: "X-QUIZITE",
    subtitle: "QUIZ",
    description:
      "A quiz competition with a preliminary written round and finals. Teams compete using a street scoring system.",
    icon: HelpCircle,
    participants: "3",
    tags: ["BRAIN", "TEAM"],
    category: "off-stage",
  },
  {
    title: "X-NEGOTIUM",
    subtitle: "BOARDROOM CRISIS",
    description:
      "A multi-round business competition for students of classes 11-12. Teams participate in various business challenges and case studies.",
    icon: Briefcase,
    participants: "3",
    tags: ["BUSINESS", "TEAM"],
    category: "off-stage",
  },
  {
    title: "X-COOK",
    subtitle: "FIRELESS COOKING",
    description:
      "A fireless cooking competition requiring one drink, one snack, and one dessert. Participants prepare vegetarian dishes without using fire.",
    icon: ChefHat,
    participants: "2",
    tags: ["CULINARY", "TEAM"],
    category: "off-stage",
  },
  {
    title: "X-ALAAP",
    subtitle: "HINDI ANTAKSHARI",
    description:
      "A Hindi Antakshari event with multiple rounds of songs. Teams compete in this musical word chain game.",
    icon: Music,
    participants: "4",
    tags: ["MUSIC", "TEAM"],
    category: "off-stage",
  },
  {
    title: "X-HUNT",
    subtitle: "TREASURE HUNT",
    description:
      "A campus-wide treasure hunt event for school representatives only. Teams solve clues to reach the final destination.",
    icon: MapPin,
    participants: "2",
    tags: ["ADVENTURE", "TEAM"],
    category: "off-stage",
  },
  {
    title: "X-HIBIT",
    subtitle: "SCIENTIFIC MODELS",
    description:
      "A science exhibition where students display working models or projects. Participants explain scientific concepts through their exhibits.",
    icon: FlaskConical,
    participants: "3",
    tags: ["SCIENCE", "TEAM"],
    category: "off-stage",
  },
  {
    title: "X-PRESS",
    subtitle: "POSTER MAKING",
    description:
      "A poster making competition on a given topic. Participants design posters and explain their ideas to judges.",
    icon: FileImage,
    participants: "2",
    tags: ["ART", "TEAM"],
    category: "off-stage",
  },
];

export const onStageEvents: EventData[] = [
  {
    title: "X-AVRITTI",
    subtitle: "HINDI ELOCUTION",
    description:
      "A Hindi poetry recitation competition. Participants recite self-composed or published poems.",
    icon: BookOpen,
    participants: "2",
    tags: ["LITERARY", "HINDI"],
    category: "on-stage",
  },
  {
    title: "X-INNOVATE",
    subtitle: "SHARK TANK",
    description:
      "A startup pitching and business plan competition for classes 11-12. Teams present innovative business ideas and joint ventures.",
    icon: Lightbulb,
    participants: "2",
    tags: ["BUSINESS", "TEAM"],
    category: "on-stage",
  },
  {
    title: "X-TRAVAGANCE",
    subtitle: "WESTERN DANCE",
    description:
      "A western dance group performance competition. Teams present high-energy choreographed dance routines.",
    icon: Music2,
    participants: "10",
    tags: ["DANCE", "GROUP"],
    category: "on-stage",
  },
  {
    title: "X-HOP",
    subtitle: "DANCE FACE OFF",
    description:
      "A knockout dance face-off competition. Participants perform any dance form of their choice.",
    icon: Footprints,
    participants: "2",
    tags: ["DANCE", "KNOCKOUT"],
    category: "on-stage",
  },
  {
    title: "X-KALA",
    subtitle: "EASTERN DANCE",
    description:
      "An eastern/folk dance group performance competition. Teams present choreographed dance performances.",
    icon: Sparkles,
    participants: "8",
    tags: ["DANCE", "GROUP"],
    category: "on-stage",
  },
  {
    title: "X-GOLPO",
    subtitle: "BENGALI STORYTELLING",
    description:
      "A Bengali storytelling competition. Participants create and narrate original stories on the spot.",
    icon: BookOpen,
    participants: "1",
    tags: ["LITERARY", "BENGALI"],
    category: "on-stage",
  },
  {
    title: "X-PROSHNOTTOR",
    subtitle: "BENGALI QUIZ",
    description:
      "A Bengali language quiz competition. Teams compete in a quiz conducted primarily in Bengali.",
    icon: HelpCircle,
    participants: "2",
    tags: ["BRAIN", "BENGALI"],
    category: "on-stage",
  },
  {
    title: "X-TORKOBITORKO",
    subtitle: "BENGALI DEBATE",
    description:
      "A Bengali debate competition. Teams debate motions given one hour before the event.",
    icon: MessageCircle,
    participants: "2",
    tags: ["DEBATE", "BENGALI"],
    category: "on-stage",
  },
  {
    title: "X-KOBITA",
    subtitle: "BENGALI POETRY",
    description: "A Bengali poetry competition.",
    icon: PenTool,
    participants: "1",
    tags: ["LITERARY", "BENGALI"],
    category: "on-stage",
  },
  {
    title: "X-ACOUSTIC",
    subtitle: "WESTERN MUSIC",
    description:
      "A western music band performance competition. Bands perform live with their own instruments.",
    icon: Guitar,
    participants: "8",
    tags: ["MUSIC", "GROUP"],
    category: "on-stage",
  },
  {
    title: "X-RAGA",
    subtitle: "EASTERN MUSIC",
    description:
      "An eastern music competition featuring classical and semi-classical songs. Participants perform with live instruments and jugalbandi.",
    icon: Music,
    participants: "5",
    tags: ["MUSIC", "GROUP"],
    category: "on-stage",
  },
  {
    title: "X-VIBRANCE",
    subtitle: "ETHNIC DISPLAY",
    description:
      "An ethnic display and fashion walk competition. Participants showcase traditional attire and themed presentations.",
    icon: Shirt,
    participants: "12",
    tags: ["FASHION", "GROUP"],
    category: "on-stage",
  },
  {
    title: "X-CALIBRE",
    subtitle: "DEBATE",
    description:
      "An Oxford-style parliamentary debate competition. Teams debate motions in multiple rounds.",
    icon: Scale,
    participants: "2",
    tags: ["DEBATE", "TEAM"],
    category: "on-stage",
  },
  {
    title: "X-TEMPORE",
    subtitle: "EXTEMPORE",
    description:
      "An extempore speaking competition in English. Participants speak on topics given through lucky draw.",
    icon: Mic,
    participants: "1",
    tags: ["SPEAKING", "INDIVIDUAL"],
    category: "on-stage",
  },
  {
    title: "X-NATAK",
    subtitle: "STAGE PLAY",
    description: "A Bengali stage play competition.",
    icon: Drama,
    participants: "8",
    tags: ["DRAMA", "GROUP"],
    category: "on-stage",
  },
  {
    title: "X-ACT",
    subtitle: "AD SPOOF",
    description:
      "An advertisement spoof competition. Teams create and perform humorous takes on given brands.",
    icon: Megaphone,
    participants: "7",
    tags: ["DRAMA", "GROUP"],
    category: "on-stage",
  },
  {
    title: "X-60",
    subtitle: "ONE MINUTE TO FAME",
    description:
      "A one-minute talent showcase event. Participants present original and innovative acts.",
    icon: Star,
    participants: "1",
    tags: ["TALENT", "INDIVIDUAL"],
    category: "on-stage",
  },
];

// Preview events for homepage — one from each category
export const previewEvents: EventData[] = [
  sportingEvents[0], // X-GOAL
  onStageEvents[0],  // X-INNOVATE
  offStageEvents[10], // X-HACK
];

export const allEvents: EventData[] = [
  ...sportingEvents,
  ...offStageEvents,
  ...onStageEvents,
];
