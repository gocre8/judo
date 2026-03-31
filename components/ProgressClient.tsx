"use client";

import Link from "next/link";
import { MoveCard } from "@/components/MoveCard";
import { moveMap, moves } from "@/data/moves";
import { useMoveProgress } from "@/hooks/useMoveProgress";
import { getProgressSummary } from "@/lib/move-utils";

export function ProgressClient() {
  const { progress, ready } = useMoveProgress();
  const summary = getProgressSummary(progress);

  const favorites = moves.filter((move) => progress[move.id]?.favorite);
  const studied = moves
    .filter((move) => progress[move.id]?.studied)
    .sort((left, right) => {
      const leftDate = progress[left.id]?.lastViewedAt ?? "";
      const rightDate = progress[right.id]?.lastViewedAt ?? "";

      return rightDate.localeCompare(leftDate);
    });

  const lastViewedId = Object.entries(progress)
    .filter(([, value]) => value.lastViewedAt)
    .sort(([, left], [, right]) => (right.lastViewedAt ?? "").localeCompare(left.lastViewedAt ?? ""))[0]?.[0];

  return (
    <div className="section">
      <section className="stats-grid">
        <article className="stat-card">
          <strong>{summary.started}</strong>
          <p>moves you have started studying</p>
        </article>
        <article className="stat-card">
          <strong>{summary.favorites}</strong>
          <p>moves pinned for quick review</p>
        </article>
        <article className="stat-card">
          <strong>{summary.studied}</strong>
          <p>moves marked studied so far</p>
        </article>
      </section>

      <section className="panel detail-panel">
        <div className="section-heading">
          <div>
            <p className="muted-label">Quick resume</p>
            <h2>Continue where you left off</h2>
          </div>
          {lastViewedId ? (
            <Link className="action-pill" href={`/moves/${lastViewedId}`}>
              Reopen {moveMap[lastViewedId].name}
            </Link>
          ) : null}
        </div>
        <p>
          {ready
            ? "Your progress is stored in this browser only, which keeps the app lightweight and private."
            : "Loading your saved study state from local storage."}
        </p>
      </section>

      <section className="progress-grid">
        <div className="section">
          <div className="section-heading">
            <div>
              <p className="muted-label">Saved</p>
              <h3>Favorites</h3>
            </div>
          </div>
          {favorites.length > 0 ? (
            favorites.map((move) => (
              <MoveCard key={move.id} move={move} progress={progress[move.id]} />
            ))
          ) : (
            <div className="empty-state">
              <p>Favorite the techniques you want to return to after class.</p>
            </div>
          )}
        </div>

        <div className="section">
          <div className="section-heading">
            <div>
              <p className="muted-label">Reviewed</p>
              <h3>Studied</h3>
            </div>
          </div>
          {studied.length > 0 ? (
            studied.map((move) => (
              <MoveCard key={move.id} move={move} progress={progress[move.id]} />
            ))
          ) : (
            <div className="empty-state">
              <p>Mark techniques studied once you can explain the entry, finish, and safety cue.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
