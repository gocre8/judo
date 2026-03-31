import { MoveLibraryClient } from "@/components/MoveLibraryClient";
import { LibraryFilters } from "@/lib/types";

type LibraryPageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

function getSingleParam(
  value: string | string[] | undefined,
): string | undefined {
  return Array.isArray(value) ? value[0] : value;
}

function toInitialFilters(params: Record<string, string | string[] | undefined>): Partial<LibraryFilters> {
  const situation = getSingleParam(params.situation);
  const difficulty = getSingleParam(params.difficulty);
  const category = getSingleParam(params.category);
  const search = getSingleParam(params.search);

  return {
    search: search ?? "",
    category:
      category === "Throw" ||
      category === "Hold-down" ||
      category === "Choke" ||
      category === "Arm lock"
        ? category
        : "All",
    difficulty:
      difficulty === "Beginner" || difficulty === "Intermediate" ? difficulty : "All",
    situation:
      situation === "Standing" || situation === "Groundwork" ? situation : "All",
  };
}

export default async function LibraryPage({ searchParams }: LibraryPageProps) {
  const params = searchParams ? await searchParams : {};

  return <MoveLibraryClient initialFilters={toInitialFilters(params)} />;
}
