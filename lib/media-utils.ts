import { moves } from "@/data/moves";
import { hasDedicatedMoveImage, hasFallbackPositionImage } from "@/lib/image-utils";
import { Move } from "@/lib/types";
import { moveMatchesPositionBucket, positionBuckets } from "@/lib/position-utils";

export type MediaCoverageStatus =
  | "complete"
  | "missing-image"
  | "missing-video"
  | "reference-only"
  | "missing-both";

export function getVideoResources(move: Move) {
  return move.resources.filter((resource) => resource.kind === "video");
}

export function getReferenceResources(move: Move) {
  return move.resources.filter((resource) => resource.kind === "reference");
}

export function getMediaCoverageStatus(move: Move): MediaCoverageStatus {
  const hasImage = hasDedicatedMoveImage(move);
  const hasVideo = getVideoResources(move).length > 0;
  const hasReference = getReferenceResources(move).length > 0;

  if (hasImage && hasVideo) {
    return "complete";
  }

  if (!hasImage && !hasVideo) {
    return hasReference ? "reference-only" : "missing-both";
  }

  if (!hasImage) {
    return "missing-image";
  }

  return "missing-video";
}

export function getFallbackImageCounts(sourceMoves: Move[]) {
  return sourceMoves.filter((move) => hasFallbackPositionImage(move)).length;
}

export function getMediaCoverageLabel(status: MediaCoverageStatus) {
  switch (status) {
    case "complete":
      return "Complete";
    case "missing-image":
      return "Missing image";
    case "missing-video":
      return "Missing video";
    case "reference-only":
      return "Reference only";
    case "missing-both":
      return "Missing both";
    default:
      return status;
  }
}

export function getMediaCoverageCounts(sourceMoves: Move[]) {
  return {
    complete: sourceMoves.filter((move) => getMediaCoverageStatus(move) === "complete").length,
    missingImage: sourceMoves.filter((move) => getMediaCoverageStatus(move) === "missing-image").length,
    missingVideo: sourceMoves.filter((move) => getMediaCoverageStatus(move) === "missing-video").length,
    referenceOnly: sourceMoves.filter((move) => getMediaCoverageStatus(move) === "reference-only").length,
    missingBoth: sourceMoves.filter((move) => getMediaCoverageStatus(move) === "missing-both").length,
  };
}

export function getPositionCoverageSummary() {
  return positionBuckets.map((bucket) => {
    const bucketMoves = moves.filter((move) => moveMatchesPositionBucket(move, bucket.id));

    return {
      ...bucket,
      moveCount: bucketMoves.length,
      coverage: getMediaCoverageCounts(bucketMoves),
    };
  });
}
