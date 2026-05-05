"use client";

import { useDeferredValue, useState } from "react";
import { LibraryFlowOverview } from "@/components/LibraryFlowOverview";
import { MoveCard } from "@/components/MoveCard";
import { CurriculumBoard } from "@/components/CurriculumBoard";
import { PositionBrowseStrip } from "@/components/PositionBrowseStrip";
import { moves } from "@/data/moves";
import { useMoveProgress } from "@/hooks/useMoveProgress";
import { getFlowClusterById } from "@/lib/flow-utils";
import { flowClusterMatchesPositionBucket, getPositionBucketById } from "@/lib/position-utils";
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
  const activePositionBucket = getPositionBucketById(filters.positionBucketId);
  const activeFlowCluster = getFlowClusterById(filters.flowClusterId);

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
            {activePositionBucket ? (
              <p className="muted-label">Position active: {activePositionBucket.label}</p>
            ) : null}
            {activeFlowCluster ? (
              <p className="muted-label">Flow lane active: {activeFlowCluster.title}</p>
            ) : null}
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
            <option value="Leg lock">Leg locks</option>
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
          <select
            className="select-input"
            value={filters.kuzushi}
            onChange={(event) =>
              setFilter("kuzushi", event.target.value as LibraryFilters["kuzushi"])
            }
            aria-label="Filter by Judo kuzushi direction"
          >
            <option value="All">All directions</option>
            <option value="forward">Forward ↑</option>
            <option value="backward">Backward ↓</option>
            <option value="left">Left ←</option>
            <option value="right">Right →</option>
            <option value="forward-right">Forward-right ↗</option>
            <option value="forward-left">Forward-left ↖</option>
            <option value="backward-right">Backward-right ↘</option>
            <option value="backward-left">Backward-left ↙</option>
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
          {activeFlowCluster ? (
            <button
              type="button"
              className="action-pill action-pill--ghost"
              onClick={() => setFilter("flowClusterId", "")}
            >
              Clear flow lane
            </button>
          ) : null}
        </div>
      </section>

      <PositionBrowseStrip
        activePositionBucketId={filters.positionBucketId}
        onSelectPositionBucket={(bucketId) => {
          setFilters((current) => {
            const activeCluster = current.flowClusterId
              ? getFlowClusterById(current.flowClusterId)
              : null;

            return {
              ...current,
              positionBucketId: bucketId,
              flowClusterId:
                activeCluster && (!bucketId || flowClusterMatchesPositionBucket(activeCluster, bucketId))
                  ? current.flowClusterId
                  : "",
            };
          });
        }}
      />
      <CurriculumBoard />
      <LibraryFlowOverview
        activeFlowClusterId={filters.flowClusterId}
        activePositionBucketId={filters.positionBucketId}
        onSelectFlowCluster={(clusterId) => setFilter("flowClusterId", clusterId)}
      />

      <section className="detail-panel library-results-bar">
        <div>
          <h3>{filteredMoves.length} moves showing</h3>
          <p>
            {activePositionBucket && activeFlowCluster
              ? `${activePositionBucket.label} and ${activeFlowCluster.title} are both narrowing this study set.`
              : activePositionBucket
                ? `${activePositionBucket.label} is filtering both moves and visible flow lanes.`
                : activeFlowCluster
                  ? `${activeFlowCluster.practice} lane filtered by root position and likely branches.`
                  : "Use filters or flow lanes to narrow the study set."}
          </p>
        </div>
      </section>

      {filteredMoves.length > 0 ? (
        <section className="move-grid">
          {filteredMoves.map((move) => (
            <MoveCard
              key={move.id}
              move={move}
              progress={progress[move.id]}
              activeFlowClusterId={filters.flowClusterId}
            />
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
