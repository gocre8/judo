import { flowClusters } from "@/data/flows";
import { moves } from "@/data/moves";
import { moveMatchesPractice } from "@/lib/practice-utils";
import { PositionFlowCluster, Practice } from "@/lib/types";

export type PositionBucket = {
  id: string;
  label: string;
  description: string;
  practice: "All" | Practice;
};

export const positionBuckets: PositionBucket[] = [
  {
    id: "standing",
    label: "Standing",
    description: "Tachi-waza entries, kuzushi, and takedown exchanges.",
    practice: "All",
  },
  {
    id: "judo-newaza",
    label: "Ne-waza",
    description: "Judo groundwork pins, transitions, and submissions.",
    practice: "Judo",
  },
  {
    id: "closed-guard",
    label: "Closed Guard",
    description: "Bottom guard control, sweeps, and submissions.",
    practice: "Jiu-Jitsu",
  },
  {
    id: "half-guard",
    label: "Half Guard",
    description: "Bottom retention and top passing around the knee line.",
    practice: "Jiu-Jitsu",
  },
  {
    id: "side-control",
    label: "Side Control",
    description: "Top pins, bottom escapes, and cross-body transitions.",
    practice: "Jiu-Jitsu",
  },
  {
    id: "mount",
    label: "Mount",
    description: "Top control and bottom escape chains.",
    practice: "Jiu-Jitsu",
  },
  {
    id: "back-control",
    label: "Back Control",
    description: "Back attacks, control, and defensive escapes.",
    practice: "Jiu-Jitsu",
  },
];

export function getPositionBucketById(bucketId: string) {
  return positionBuckets.find((bucket) => bucket.id === bucketId);
}

export function moveMatchesPositionBucket(
  move: (typeof moves)[number],
  bucketId: string,
) {
  if (!bucketId) {
    return true;
  }

  switch (bucketId) {
    case "standing":
      return move.situationTags.includes("Standing");
    case "judo-newaza":
      return moveMatchesPractice(move, "Judo") && move.situationTags.includes("Groundwork");
    case "closed-guard":
      return (
        moveMatchesPractice(move, "Jiu-Jitsu") &&
        (move.family === "Closed guard" ||
          move.situationTags.includes("Closed guard") ||
          move.id === "closed-guard")
      );
    case "half-guard":
      return (
        moveMatchesPractice(move, "Jiu-Jitsu") &&
        (move.family === "Half guard" || move.situationTags.includes("Half guard"))
      );
    case "side-control":
      return (
        moveMatchesPractice(move, "Jiu-Jitsu") &&
        (move.family === "Side control" ||
          move.family === "Side-control escapes" ||
          move.situationTags.includes("Side control bottom") ||
          move.id === "kesa-gatame" ||
          move.id === "north-south")
      );
    case "mount":
      return (
        moveMatchesPractice(move, "Jiu-Jitsu") &&
        (move.family === "Mount" ||
          move.family === "Mount escapes" ||
          move.situationTags.includes("Mount bottom"))
      );
    case "back-control":
      return (
        moveMatchesPractice(move, "Jiu-Jitsu") &&
        (move.family === "Back control" ||
          move.family === "Back escapes" ||
          move.situationTags.includes("Back control bottom"))
      );
    default:
      return true;
  }
}

export function flowClusterMatchesPositionBucket(
  cluster: PositionFlowCluster,
  bucketId: string,
) {
  if (!bucketId) {
    return true;
  }

  const clusterMoveIds = new Set(cluster.nodes.flatMap((node) => node.moveIds));

  return moves.some(
    (move) => clusterMoveIds.has(move.id) && moveMatchesPositionBucket(move, bucketId),
  );
}

export function getPositionBucketMoveCount(bucketId: string) {
  if (!bucketId) {
    return moves.length;
  }

  return moves.filter((move) => moveMatchesPositionBucket(move, bucketId)).length;
}

export function getPositionBucketFlowCount(bucketId: string) {
  if (!bucketId) {
    return flowClusters.length;
  }

  return flowClusters.filter((cluster) => flowClusterMatchesPositionBucket(cluster, bucketId)).length;
}
