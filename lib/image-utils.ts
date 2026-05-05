import { Move } from "@/lib/types";

type PositionFallbackImage = {
  src: string;
  label: string;
};

function getPractice(move: Move) {
  return move.practice ?? "Judo";
}

export function hasDedicatedMoveImage(move: Move) {
  return Boolean(move.imageSrc);
}

export function getPositionFallbackImage(move: Move): PositionFallbackImage | null {
  const practice = getPractice(move);

  if (move.situationTags.includes("Standing")) {
    return {
      src: "/position-fallbacks/standing.svg",
      label: "Standing study board",
    };
  }

  if (practice === "Judo" && move.situationTags.includes("Groundwork")) {
    return {
      src: "/position-fallbacks/judo-newaza.svg",
      label: "Judo ne-waza study board",
    };
  }

  if (
    practice === "Jiu-Jitsu" &&
    (move.family === "Closed guard" ||
      move.situationTags.includes("Closed guard") ||
      move.id === "closed-guard")
  ) {
    return {
      src: "/position-fallbacks/closed-guard.svg",
      label: "Closed guard position board",
    };
  }

  if (
    practice === "Jiu-Jitsu" &&
    (move.family === "Half guard" || move.situationTags.includes("Half guard"))
  ) {
    return {
      src: "/position-fallbacks/half-guard.svg",
      label: "Half guard position board",
    };
  }

  if (
    practice === "Jiu-Jitsu" &&
    (move.family === "Side control" ||
      move.family === "Side-control escapes" ||
      move.situationTags.includes("Side control bottom"))
  ) {
    return {
      src: "/position-fallbacks/side-control.svg",
      label: "Side control position board",
    };
  }

  if (
    practice === "Jiu-Jitsu" &&
    (move.family === "Mount" ||
      move.family === "Mount escapes" ||
      move.situationTags.includes("Mount bottom"))
  ) {
    return {
      src: "/position-fallbacks/mount.svg",
      label: "Mount position board",
    };
  }

  if (
    practice === "Jiu-Jitsu" &&
    (move.family === "Back control" ||
      move.family === "Back escapes" ||
      move.situationTags.includes("Back control bottom"))
  ) {
    return {
      src: "/position-fallbacks/back-control.svg",
      label: "Back control position board",
    };
  }

  return null;
}

export function getEffectiveImage(move: Move) {
  if (move.imageSrc) {
    return {
      src: move.imageSrc,
      label: `${move.japaneseName} illustration`,
      kind: "dedicated" as const,
    };
  }

  const fallback = getPositionFallbackImage(move);

  if (!fallback) {
    return null;
  }

  return {
    src: fallback.src,
    label: fallback.label,
    kind: "fallback" as const,
  };
}

export function hasFallbackPositionImage(move: Move) {
  return Boolean(!move.imageSrc && getPositionFallbackImage(move));
}
