import Link from "next/link";
import { MoveImage } from "@/components/MoveImage";
import { Move, UserMoveProgress } from "@/lib/types";

type MoveCardProps = {
  move: Move;
  progress?: UserMoveProgress;
};

export function MoveCard({ move, progress }: MoveCardProps) {
  return (
    <article className="move-card">
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
      <Link href={`/moves/${move.id}`} className="text-link">
        Open
      </Link>
    </article>
  );
}
