"use client";

import { useDeferredValue, useState } from "react";
import { MoveCard } from "@/components/MoveCard";
import { CurriculumBoard } from "@/components/CurriculumBoard";
import { moves } from "@/data/moves";
import { useMoveProgress } from "@/hooks/useMoveProgress";
import { defaultFilters, filterMoves } from "@/lib/move-utils";
import { LibraryFilters } from "@/lib/types";

type MoveLibraryClientProps = {
  initialFilters?: Partial<LibraryFilters>;
};

export function MoveLibraryClient({ initialFilters }: MoveLibraryClientProps) {
  const [filters, setFilters] = useState<LibraryFilters>({
    ...defaultFilters,
    ...initialFilters,
  });
  const deferredSearch = useDeferredValue(filters.search);
  const { progress } = useMoveProgress();

  const filteredMoves = filterMoves(
    moves,
    { ...filters, search: deferredSearch },
    progress,
  );

  const setFilter = <K extends keyof LibraryFilters>(key: K, value: LibraryFilters[K]) => {
    setFilters((current) => ({ ...current, [key]: value }));
  };

  return (
    <div className="section">
      <section className="filter-panel" aria-label="Library filters">
        <div className="section-heading">
          <div>
            <h2>Library</h2>
          </div>
          <button
            type="button"
            className="back-link"
            onClick={() => setFilters({ ...defaultFilters, ...initialFilters })}
          >
            Reset filters
          </button>
        </div>
        <div className="filter-row">
          <input
            className="search-input"
            type="search"
            placeholder="Search throws, grappling, Japanese names, gi, no-gi..."
            
            value={filters.search}
            onChange={(event) => setFilter("search", event.target.value)}
            aria-label="Search moves"
          />
        </div>
        <div className="filter-row">
          <select
            className="select-input"
            value={filters.practice}
            onChange={(event) => setFilter("practice", event.target.value as LibraryFilters["practice"])}
            aria-label="Filter by practice"
          >
            <option value="All">All practices</option>
            <option value="Judo">Judo</option>
            <option value="Jiu-Jitsu">Jiu-Jitsu</option>
          </select>
          <select
            className="select-input"
            value={filters.category}
            onChange={(event) => setFilter("category", event.target.value as LibraryFilters["category"])}
            aria-label="Filter by category"
          >
            <option value="All">All categories</option>
            <option value="Throw">Throws</option>
            <option value="Hold-down">Hold-downs</option>
            <option value="Choke">Chokes</option>
            <option value="Arm lock">Arm locks</option>
            <option value="Sweep">Sweeps</option>
            <option value="Pass">Passes</option>
            <option value="Position">Positions</option>
            <option value="Escape">Escapes</option>
          </select>
          <select
            className="select-input"
            value={filters.difficulty}
            onChange={(event) =>
              setFilter("difficulty", event.target.value as LibraryFilters["difficulty"])
            }
            aria-label="Filter by difficulty"
          >
            <option value="All">All levels</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
          </select>
          <select
            className="select-input"
            value={filters.situation}
            onChange={(event) =>
              setFilter("situation", event.target.value as LibraryFilters["situation"])
            }
            aria-label="Filter by situation"
          >
            <option value="All">All situations</option>
            <option value="Standing">Standing</option>
            <option value="Groundwork">Groundwork</option>
          </select>
          <select
            className="select-input"
            value={filters.training}
            onChange={(event) =>
              setFilter("training", event.target.value as LibraryFilters["training"])
            }
            aria-label="Filter by training context"
          >
            <option value="All">Gi + no-gi</option>
            <option value="Gi">Gi</option>
            <option value="No-gi">No-gi</option>
          </select>
        </div>
        <div className="toggle-row">
          <button
            type="button"
            className={filters.favoritesOnly ? "action-pill" : "toggle-button"}
            onClick={() => setFilter("favoritesOnly", !filters.favoritesOnly)}
          >
            Favorites only
          </button>
          <button
            type="button"
            className={filters.studiedOnly ? "action-pill" : "toggle-button"}
            onClick={() => setFilter("studiedOnly", !filters.studiedOnly)}
          >
            Studied only
          </button>
        </div>
      </section>

      <CurriculumBoard />

      {filteredMoves.length > 0 ? (
        <section className="move-grid">
          {filteredMoves.map((move) => (
            <MoveCard key={move.id} move={move} progress={progress[move.id]} />
          ))}
        </section>
      ) : (
        <section className="empty-state">
          <h3>No moves match this filter set</h3>
          <p>Try clearing a filter.</p>
        </section>
      )}
    </div>
  );
}
