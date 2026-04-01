import Link from "next/link";
import { MoveImage } from "@/components/MoveImage";
import { moveMap } from "@/data/moves";
import { Move, UserMoveProgress } from "@/lib/types";

type MoveCardProps = {
  move: Move;
  progress?: UserMoveProgress;
};

function getConnectionPreview(move: Move) {
  const groups = [
    { label: "Sets up", ids: move.setupForIds ?? [] },
    { label: "Follows", ids: move.followUpIds ?? [] },
    { label: "Counters", ids: move.counterToIds ?? [] },
    { label: "If defended", ids: move.counteredByIds ?? [] },
    { label: "Works with", ids: move.worksWellWithIds ?? [] },
  ]
    .map((group) => ({
      label: group.label,
      moves: group.ids
        .filter((moveId, index, allIds) => allIds.indexOf(moveId) === index)
        .map((moveId) => moveMap[moveId])
        .filter(Boolean)
        .slice(0, 2),
    }))
    .filter((group) => group.moves.length > 0);

  if (groups.length > 0) {
    return groups.slice(0, 2);
  }

  const fallbackMoves = [...move.alternativeMoveIds, ...move.relatedMoveIds]
    .filter((moveId, index, allIds) => allIds.indexOf(moveId) === index)
    .map((moveId) => moveMap[moveId])
    .filter(Boolean)
    .slice(0, 2);

  return fallbackMoves.length > 0 ? [{ label: "Connects to", moves: fallbackMoves }] : [];
}

export function MoveCard({ move, progress }: MoveCardProps) {
  const connectionPreview = getConnectionPreview(move);

  return (
    <Link href={`/moves/${move.id}`} className="move-card move-card--link">
      <MoveImage move={move} variant="card" />
      <div className="move-card__top">
        <div>
          <h3>{move.name}</h3>
          <p className="muted-label">{move.japaneseName}</p>
          <p className="muted-label">{move.family}</p>
        </div>
        <div className="pill-row" aria-label="Progress markers">
          {progress?.favorite ? <span>Favorite</span> : null}
          {progress?.studied ? <span>Studied</span> : null}
        </div>
      </div>
      <div className="move-card__meta">
        <span>{move.situationTags[0]}</span>
        <span aria-hidden="true">·</span>
        <span>{move.difficulty}</span>
      </div>
      {connectionPreview.length > 0 ? (
        <div className="move-card__connections">
          {connectionPreview.map((group) => (
            <div key={group.label} className="move-card__connection-group">
              <span className="move-card__connection-label">{group.label}</span>
              <div className="move-card__connection-list">
                {group.moves.map((linkedMove) => (
                  <span key={linkedMove.id} className="move-card__connection-chip">
                    {linkedMove.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </Link>
  );
}
