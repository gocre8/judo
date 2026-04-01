import Link from "next/link";
import { MoveImage } from "@/components/MoveImage";
import { moveMap } from "@/data/moves";
import { Move, UserMoveProgress } from "@/lib/types";

type MoveCardProps = {
  move: Move;
  progress?: UserMoveProgress;
};

export function MoveCard({ move, progress }: MoveCardProps) {
  const linkedMoves = [
    ...(move.setupForIds ?? []),
    ...(move.followUpIds ?? []),
    ...(move.counterToIds ?? []),
    ...(move.counteredByIds ?? []),
    ...(move.worksWellWithIds ?? []),
    ...move.alternativeMoveIds,
    ...move.relatedMoveIds,
  ]
    .filter((moveId, index, allIds) => allIds.indexOf(moveId) === index)
    .map((moveId) => moveMap[moveId])
    .filter(Boolean)
    .slice(0, 2);

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
      <div className="meta-row">
        <span>{move.situationTags[0]}</span>
        <span>{move.difficulty}</span>
      </div>
      {linkedMoves.length > 0 ? (
        <div className="move-card__connections">
          <span className="muted-label">Connects to</span>
          <div className="move-card__connection-list">
            {linkedMoves.map((linkedMove) => (
              <span key={linkedMove.id} className="move-card__connection-chip">
                {linkedMove.name}
              </span>
            ))}
          </div>
        </div>
      ) : null}
    </Link>
  );
}
