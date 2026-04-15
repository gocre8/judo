import Link from "next/link";
import { flowClusters } from "@/data/flows";
import { MoveImage } from "@/components/MoveImage";
import { moveMap } from "@/data/moves";
import { KuzushiDirection, Move, UserMoveProgress } from "@/lib/types";

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

function getKuzushiArrow(direction?: KuzushiDirection) {
  switch (direction) {
    case "forward":
      return "↑";
    case "backward":
      return "↓";
    case "left":
      return "←";
    case "right":
      return "→";
    case "forward-right":
      return "↗";
    case "forward-left":
      return "↖";
    case "backward-right":
      return "↘";
    case "backward-left":
      return "↙";
    default:
      return null;
  }
}

function getKuzushiLabel(direction?: KuzushiDirection) {
  return direction ? direction.replace("-", " ") : null;
}

export function MoveCard({ move, progress }: MoveCardProps) {
  const connectionPreview = getConnectionPreview(move);
  const practice = move.practice ?? "Judo";
  const flowMembership = flowClusters
    .filter((cluster) =>
      cluster.nodes.some((node) => node.moveIds.includes(move.id)),
    )
    .map((cluster) => cluster.title)
    .slice(0, 2);
  const kuzushiArrow = practice === "Judo" ? getKuzushiArrow(move.primaryKuzushiDirection) : null;
  const secondaryKuzushiArrow =
    practice === "Judo" ? getKuzushiArrow(move.secondaryKuzushiDirection) : null;

  return (
    <Link href={`/moves/${move.id}`} className="move-card move-card--link">
      <MoveImage move={move} variant="card" />
      <div className="move-card__top">
        <div>
          <div className="move-card__title-row">
            <h3>{move.name}</h3>
            {kuzushiArrow ? (
              <span
                className="kuzushi-pair"
                aria-label={`Primary kuzushi direction ${getKuzushiLabel(move.primaryKuzushiDirection)}${move.secondaryKuzushiDirection ? `, secondary ${getKuzushiLabel(move.secondaryKuzushiDirection)}` : ""}`}
              >
                <span className="kuzushi-badge">{kuzushiArrow}</span>
                {secondaryKuzushiArrow ? <span className="kuzushi-badge kuzushi-badge--secondary">{secondaryKuzushiArrow}</span> : null}
              </span>
            ) : null}
          </div>
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
      {flowMembership.length > 0 ? (
        <div className="move-card__flow-meta">
          <span>in flows:</span>
          <span>{flowMembership.join(" · ")}</span>
        </div>
      ) : null}
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
