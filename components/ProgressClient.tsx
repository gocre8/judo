"use client";

import Link from "next/link";
import { MoveCard } from "@/components/MoveCard";
import { moveMap, moves } from "@/data/moves";
import { useMoveProgress } from "@/hooks/useMoveProgress";
import { getProgressSummary } from "@/lib/move-utils";

export function ProgressClient() {
  const { progress, ready } = useMoveProgress();
  const summary = getProgressSummary(progress);
  const hasSavedData = Object.keys(progress).length > 0;

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

  const exportPayload = JSON.stringify(
    {
      exportedAt: new Date().toISOString(),
      progress,
    },
    null,
    2,
  );
  const exportHref = hasSavedData
    ? `data:application/json;charset=utf-8,${encodeURIComponent(exportPayload)}`
    : "";

  return (
    <div className="section">
      <section className="progress-summary">
        <span>Started {summary.started}</span>
        <span>Pinned {summary.favorites}</span>
        <span>Studied {summary.studied}</span>
      </section>

      <section id="notes-export" className="detail-panel quick-resume">
        <div className="quick-resume__row">
          <div>
            <strong>Notes backup</strong>
            <p className="muted-label">Export pinned moves, studied moves, and class notes.</p>
          </div>
          {hasSavedData ? (
            <a className="action-pill" href={exportHref} download="judo-jiujitsu-notes.json">
              Export notes
            </a>
          ) : (
            <span className="muted-label">{ready ? "Add notes or mark moves first" : "Loading..."}</span>
          )}
        </div>
      </section>

      <section className="detail-panel quick-resume">
        <div className="quick-resume__row">
          <strong>Quick resume</strong>
          {lastViewedId ? (
            <Link className="chip" href={`/moves/${lastViewedId}`}>
              {moveMap[lastViewedId].name}
            </Link>
          ) : (
            <span className="muted-label">{ready ? "No recent move" : "Loading..."}</span>
          )}
        </div>
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
