import { Move, Practice } from "@/lib/types";

export function getMovePractices(move: Move): Practice[] {
  return [move.practice ?? "Judo", ...(move.alsoPracticedIn ?? [])].filter(
    (practice, index, allPractices) => allPractices.indexOf(practice) === index,
  );
}

export function moveMatchesPractice(move: Move, practice: Practice) {
  return getMovePractices(move).includes(practice);
}

export function getMovePracticeLabel(move: Move) {
  return getMovePractices(move).join(" / ");
}
