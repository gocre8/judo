import { moves } from "@/data/moves";
import { LibraryFilters, Move, MoveProgressMap } from "@/lib/types";

export const defaultFilters: LibraryFilters = {
  practice: "All",
  search: "",
  category: "All",
  difficulty: "All",
  situation: "All",
  training: "All",
  kuzushi: "All",
  favoritesOnly: false,
  studiedOnly: false,
};

export function filterMoves(allMoves: Move[], filters: LibraryFilters, progress: MoveProgressMap) {
  const searchNeedle = filters.search.trim().toLowerCase();

  return allMoves.filter((move) => {
    const moveProgress = progress[move.id];
    const practice = move.practice ?? "Judo";
    const matchesSearch =
      searchNeedle.length === 0 ||
      [
        practice,
        move.name,
        move.japaneseName,
        move.shortDescription,
        move.section,
        move.family,
        move.category,
        ...move.situationTags,
      ]
        .join(" ")
        .toLowerCase()
        .includes(searchNeedle);
    const matchesPractice = filters.practice === "All" || practice === filters.practice;
    const matchesCategory = filters.category === "All" || move.category === filters.category;
    const matchesDifficulty =
      filters.difficulty === "All" || move.difficulty === filters.difficulty;
    const matchesSituation =
      filters.situation === "All" || move.situationTags.includes(filters.situation);
    const matchesTraining =
      filters.training === "All" || move.situationTags.includes(filters.training);
    const matchesKuzushi =
      filters.kuzushi === "All" ||
      move.primaryKuzushiDirection === filters.kuzushi ||
      move.secondaryKuzushiDirection === filters.kuzushi;
    const matchesFavorite = !filters.favoritesOnly || moveProgress?.favorite;
    const matchesStudied = !filters.studiedOnly || moveProgress?.studied;

    return (
      matchesSearch &&
      matchesPractice &&
      matchesCategory &&
      matchesDifficulty &&
      matchesSituation &&
      matchesTraining &&
      matchesKuzushi &&
      matchesFavorite &&
      matchesStudied
    );
  });
}

export function getProgressSummary(progress: MoveProgressMap) {
  const values = Object.values(progress);

  return {
    totalMoves: moves.length,
    favorites: values.filter((entry) => entry.favorite).length,
    studied: values.filter((entry) => entry.studied).length,
    started: values.filter((entry) => entry.favorite || entry.studied).length,
  };
}
