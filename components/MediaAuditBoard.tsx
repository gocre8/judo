import Link from "next/link";
import { moves } from "@/data/moves";
import {
  getFallbackImageCounts,
  getMediaCoverageCounts,
  getMediaCoverageLabel,
  getMediaCoverageStatus,
  getPositionCoverageSummary,
} from "@/lib/media-utils";
import { hasDedicatedMoveImage, hasFallbackPositionImage } from "@/lib/image-utils";
import { Move, Practice } from "@/lib/types";

function getPractice(move: Move) {
  return move.practice ?? "Judo";
}

function getPracticeCoverage(practice: Practice) {
  return getMediaCoverageCounts(moves.filter((move) => getPractice(move) === practice));
}

function getCoverageGroups(sourceMoves: Move[]) {
  return {
    missingBoth: sourceMoves.filter((move) => getMediaCoverageStatus(move) === "missing-both"),
    referenceOnly: sourceMoves.filter((move) => getMediaCoverageStatus(move) === "reference-only"),
    missingImage: sourceMoves.filter((move) => getMediaCoverageStatus(move) === "missing-image"),
    missingVideo: sourceMoves.filter((move) => getMediaCoverageStatus(move) === "missing-video"),
  };
}

type MoveListProps = {
  title: string;
  moves: Move[];
};

function MoveList({ title, moves: sourceMoves }: MoveListProps) {
  if (sourceMoves.length === 0) {
    return null;
  }

  return (
    <section className="detail-panel media-audit-list">
      <div className="section-heading">
        <div>
          <h3>{title}</h3>
          <p>{sourceMoves.length} moves</p>
        </div>
      </div>
      <div className="media-audit-moves">
        {sourceMoves.map((move) => {
          const status = getMediaCoverageStatus(move);
          const videoCount = move.resources.filter((resource) => resource.kind === "video").length;
          const referenceCount = move.resources.filter((resource) => resource.kind === "reference").length;

          return (
            <article key={move.id} className="media-audit-move">
              <div className="media-audit-move__header">
                <div>
                  <Link className="text-link" href={`/moves/${move.id}`}>
                    <strong>{move.name}</strong>
                  </Link>
                  <p className="muted-label">{move.japaneseName}</p>
                </div>
                <span className={`media-status-badge media-status-badge--${status}`}>
                  {getMediaCoverageLabel(status)}
                </span>
              </div>
              <p>
                {getPractice(move)} · {move.family} · {move.category}
              </p>
              <div className="media-audit-move__meta">
                <span>
                  {hasDedicatedMoveImage(move)
                    ? "Dedicated image"
                    : hasFallbackPositionImage(move)
                      ? "Fallback position art ready"
                      : "No image"}
                </span>
                <span>{videoCount > 0 ? `${videoCount} video link${videoCount > 1 ? "s" : ""}` : "No video link"}</span>
                <span>
                  {referenceCount > 0
                    ? `${referenceCount} reference link${referenceCount > 1 ? "s" : ""}`
                    : "No reference link"}
                </span>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export function MediaAuditBoard() {
  const judoCoverage = getPracticeCoverage("Judo");
  const bjjCoverage = getPracticeCoverage("Jiu-Jitsu");
  const positionCoverage = getPositionCoverageSummary();
  const coverageGroups = getCoverageGroups(moves);
  const fallbackCount = getFallbackImageCounts(moves);

  return (
    <div className="section">
      <section className="stats-grid">
        <article className="stat-card">
          <p className="muted-label">Judo coverage</p>
          <strong>{judoCoverage.complete}</strong>
          <p>{judoCoverage.missingImage} missing image · {judoCoverage.missingVideo} missing video</p>
        </article>
        <article className="stat-card">
          <p className="muted-label">Jiu-Jitsu coverage</p>
          <strong>{bjjCoverage.complete}</strong>
          <p>{bjjCoverage.referenceOnly + bjjCoverage.missingBoth} thin entries still need stronger media</p>
        </article>
        <article className="stat-card">
          <p className="muted-label">Highest priority</p>
          <strong>{coverageGroups.missingBoth.length}</strong>
          <p>Moves still missing both image and direct video coverage</p>
        </article>
        <article className="stat-card">
          <p className="muted-label">Fallback art</p>
          <strong>{fallbackCount}</strong>
          <p>Moves can now show position-based placeholder art while dedicated images are still pending</p>
        </article>
      </section>

      <section className="detail-panel media-audit-overview">
        <div className="section-heading">
          <div>
            <h3>Position Coverage</h3>
            <p>Use these buckets to prioritize content by study entry point instead of by raw move list.</p>
          </div>
        </div>
        <div className="media-position-grid">
          {positionCoverage.map((bucket) => (
            <article key={bucket.id} className="media-position-card">
              <div className="media-position-card__title">
                <strong>{bucket.label}</strong>
                <span>{bucket.moveCount} moves</span>
              </div>
              <p>{bucket.description}</p>
              <div className="media-position-card__meta">
                <span>{bucket.coverage.complete} complete</span>
                <span>{bucket.coverage.missingImage} no image</span>
                <span>{bucket.coverage.missingVideo} no video</span>
                <span>{bucket.coverage.referenceOnly + bucket.coverage.missingBoth} thin coverage</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <MoveList title="Missing Both" moves={coverageGroups.missingBoth} />
      <MoveList title="Reference Only" moves={coverageGroups.referenceOnly} />
      <MoveList title="Missing Image" moves={coverageGroups.missingImage} />
      <MoveList title="Missing Video" moves={coverageGroups.missingVideo} />
    </div>
  );
}
