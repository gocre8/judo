"use client";

import { featuredMoveIds, moveMap } from "@/data/moves";
import { useMoveProgress } from "@/hooks/useMoveProgress";
import { getProgressSummary } from "@/lib/move-utils";
import { MoveCard } from "./MoveCard";

export function HomeStats() {
  const { progress } = useMoveProgress();
  const summary = getProgressSummary(progress);

  return (
    <>
      <section className="stats-grid">
        <article className="stat-card">
          <strong>{summary.totalMoves}</strong>
          <p>moves</p>
        </article>
        <article className="stat-card">
          <strong>{summary.favorites}</strong>
          <p>favorites</p>
        </article>
        <article className="stat-card">
          <strong>{summary.studied}</strong>
          <p>studied</p>
        </article>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <h2>Featured</h2>
          </div>
        </div>
        <div className="move-grid">
          {featuredMoveIds.map((id) => (
            <MoveCard key={id} move={moveMap[id]} progress={progress[id]} />
          ))}
        </div>
      </section>
    </>
  );
}
