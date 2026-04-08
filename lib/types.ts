export type Practice = "Judo" | "Jiu-Jitsu";
export type MoveCategory =
  | "Throw"
  | "Hold-down"
  | "Choke"
  | "Arm lock"
  | "Sweep"
  | "Pass"
  | "Position"
  | "Escape";
export type MoveDifficulty = "Beginner" | "Intermediate";
export type MoveSection =
  | "Nage-waza"
  | "Katame-waza"
  | "Guard"
  | "Passing"
  | "Pins"
  | "Back control"
  | "Submissions"
  | "Escapes";
export type MoveFamily = string;
export type KuzushiDirection =
  | "forward"
  | "backward"
  | "left"
  | "right"
  | "forward-right"
  | "forward-left"
  | "backward-right"
  | "backward-left";

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

export type DecisionCue =
  | "step"
  | "block"
  | "lateral"
  | "ankle"
  | "wide-base"
  | "posture-up"
  | "arm-split"
  | "transition";

export type DecisionBranch = {
  cue?: DecisionCue;
  trigger: string;
  action: string;
  moveId?: string;
  leadsTo?: string;
};

export type DecisionView = {
  title: string;
  fromPosition: string;
  actionPotential: string;
  branches: DecisionBranch[];
  fallback?: string;
};

export type Move = {
  id: string;
  practice?: Practice;
  name: string;
  japaneseName: string;
  imageSrc?: string;
  primaryKuzushiDirection?: KuzushiDirection;
  secondaryKuzushiDirection?: KuzushiDirection;
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
  setupForIds?: string[];
  followUpIds?: string[];
  counterToIds?: string[];
  counteredByIds?: string[];
  worksWellWithIds?: string[];
  relatedMoveIds: string[];
  alternativeMoveIds: string[];
  decisionView?: DecisionView;
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
  practice: "All" | Practice;
  search: string;
  category: "All" | MoveCategory;
  difficulty: "All" | MoveDifficulty;
  situation: "All" | "Standing" | "Groundwork";
  training: "All" | "Gi" | "No-gi";
  favoritesOnly: boolean;
  studiedOnly: boolean;
};
