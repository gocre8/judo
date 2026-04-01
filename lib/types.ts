export type MoveCategory = "Throw" | "Hold-down" | "Choke" | "Arm lock";
export type MoveDifficulty = "Beginner" | "Intermediate";
export type MoveSection = "Nage-waza" | "Katame-waza";
export type MoveFamily =
  | "Te-waza"
  | "Koshi-waza"
  | "Ashi-waza"
  | "Ma-sutemi-waza"
  | "Yoko-sutemi-waza"
  | "Osaekomi-waza"
  | "Shime-waza"
  | "Kansetsu-waza";

export type DiagramMarker = {
  label: string;
  x: number;
  y: number;
};

export type MoveDiagram = {
  pose: "throw-entry" | "hip-throw" | "foot-sweep" | "ground-pin" | "choke" | "arm-lock";
  markers: DiagramMarker[];
  cue: string;
};

export type MoveResource = {
  label: string;
  url: string;
  source: string;
  kind: "video" | "reference";
};

export type Move = {
  id: string;
  name: string;
  japaneseName: string;
  imageSrc?: string;
  section: MoveSection;
  family: MoveFamily;
  category: MoveCategory;
  difficulty: MoveDifficulty;
  situationTags: string[];
  shortDescription: string;
  setup: string;
  steps: string[];
  commonMistakes: string[];
  safetyNotes: string[];
  keyPrinciples: string[];
  relatedMoveIds: string[];
  alternativeMoveIds: string[];
  diagram: MoveDiagram;
  resources: MoveResource[];
};

export type RoadmapGroup = {
  family: MoveFamily;
  moves: string[];
};

export type UserMoveProgress = {
  favorite: boolean;
  studied: boolean;
  lastViewedAt?: string;
  classNotes?: string;
};

export type MoveProgressMap = Record<string, UserMoveProgress>;

export type LibraryFilters = {
  search: string;
  category: "All" | MoveCategory;
  difficulty: "All" | MoveDifficulty;
  situation: "All" | "Standing" | "Groundwork";
  favoritesOnly: boolean;
  studiedOnly: boolean;
};
