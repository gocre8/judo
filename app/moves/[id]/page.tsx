import Link from "next/link";
import { notFound } from "next/navigation";
import { MoveActions } from "@/components/MoveActions";
import { MoveNotes } from "@/components/MoveNotes";
import { TechniqueDiagram } from "@/components/TechniqueDiagram";
import { moveMap, moves } from "@/data/moves";
import { DecisionCue, MoveResource } from "@/lib/types";

type MovePageProps = {
  params: Promise<{ id: string }>;
};

function getYouTubeEmbedUrl(resource: MoveResource) {
  if (resource.kind !== "video") {
    return null;
  }

  try {
    const url = new URL(resource.url);
    const host = url.hostname.replace(/^www\./, "");

    if (host === "youtu.be") {
      const id = url.pathname.slice(1);
      return id ? `https://www.youtube-nocookie.com/embed/${id}` : null;
    }

    if (host === "youtube.com" || host === "m.youtube.com") {
      const id = url.searchParams.get("v");
      return id ? `https://www.youtube-nocookie.com/embed/${id}` : null;
    }
  } catch {
    return null;
  }

  return null;
}

function getDecisionCue(cue?: DecisionCue) {
  switch (cue) {
    case "step":
      return { symbol: "→", label: "Step" };
    case "block":
      return { symbol: "⊘", label: "Block" };
    case "lateral":
      return { symbol: "⇆", label: "Side" };
    case "ankle":
      return { symbol: "⤴", label: "Ankle" };
    case "wide-base":
      return { symbol: "△", label: "Base" };
    case "posture-up":
      return { symbol: "↑", label: "Posture" };
    case "arm-split":
      return { symbol: "1/1", label: "Arms" };
    case "transition":
      return { symbol: "↺", label: "Switch" };
    default:
      return null;
  }
}

export default async function MovePage({ params }: MovePageProps) {
  const { id } = await params;
  const move = moveMap[id];

  if (!move) {
    notFound();
  }

  const alternativeMoves = move.alternativeMoveIds
    .map((relatedId) => moveMap[relatedId])
    .filter(Boolean);
  const alternativeMoveIds = new Set(alternativeMoves.map((relatedMove) => relatedMove.id));
  const relatedMoves = move.relatedMoveIds
    .map((relatedId) => moveMap[relatedId])
    .filter((relatedMove) => Boolean(relatedMove) && !alternativeMoveIds.has(relatedMove.id));
  const setupMoves = (move.setupForIds ?? []).map((relatedId) => moveMap[relatedId]).filter(Boolean);
  const followUpMoves = (move.followUpIds ?? []).map((relatedId) => moveMap[relatedId]).filter(Boolean);
  const counterToMoves = (move.counterToIds ?? []).map((relatedId) => moveMap[relatedId]).filter(Boolean);
  const counteredByMoves = (move.counteredByIds ?? []).map((relatedId) => moveMap[relatedId]).filter(Boolean);
  const worksWellWithMoves = (move.worksWellWithIds ?? [])
    .map((relatedId) => moveMap[relatedId])
    .filter(Boolean);
  const embeddedVideo = move.resources.find((resource) => getYouTubeEmbedUrl(resource));
  const practice = move.practice ?? "Judo";
  const moveIndex = moves.findIndex((entry) => entry.id === move.id);
  const previousMove = moves[(moveIndex - 1 + moves.length) % moves.length];
  const nextMove = moves[(moveIndex + 1) % moves.length];
  const hasSpecificConnections =
    setupMoves.length > 0 ||
    followUpMoves.length > 0 ||
    counterToMoves.length > 0 ||
    counteredByMoves.length > 0 ||
    worksWellWithMoves.length > 0;

  return (
    <div className="section">
      <div className="mobile-detail-image">
        <TechniqueDiagram move={move} />
      </div>

      <section className="detail-hero">
        <div className="detail-hero__top">
          <div>
            <h1>{move.name}</h1>
            <p className="muted-label">{move.japaneseName}</p>
            <p className="muted-label">{practice} · {move.section} · {move.family}</p>
          </div>
          <div className="detail-hero__nav" aria-label="Move navigation">
            <Link className="chip detail-hero__nav-button" href={`/moves/${previousMove.id}`} aria-label={`Previous move: ${previousMove.name}`}>
              ◀
            </Link>
            <Link className="chip detail-hero__nav-button" href={`/moves/${nextMove.id}`} aria-label={`Next move: ${nextMove.name}`}>
              ▶
            </Link>
          </div>
        </div>
        <div className="meta-row">
          {move.situationTags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
          <span>{move.difficulty}</span>
        </div>
        <MoveActions moveId={move.id} />
      </section>

      <section className="detail-grid">
        <div className="section">
          <article className="detail-panel">
            <h3>Setup</h3>
            <p>{move.setup}</p>
          </article>

          <article className="detail-panel">
            <h3>Steps</h3>
            <ol className="ordered-steps">
              {move.steps.map((step, index) => (
                <li key={step}>
                  <span className="step-number">{index + 1}</span>
                  <div>
                    <strong>Step {index + 1}</strong>
                    <p>{step}</p>
                  </div>
                </li>
              ))}
            </ol>
          </article>

          <article className="detail-panel">
            <h3>Principles</h3>
            <ul className="unordered-list">
              {move.keyPrinciples.map((principle) => (
                <li key={principle}>{principle}</li>
              ))}
            </ul>
          </article>

          {move.decisionView ? (
            <article className="detail-panel">
              <div className="section-heading">
                <div>
                  <h3>{move.decisionView.title}</h3>
                  <p className="muted-label">First test of the position to reaction to next action model.</p>
                </div>
              </div>
              <div className="decision-summary">
                <p><strong>From position:</strong> {move.decisionView.fromPosition}</p>
                <p><strong>Action potential:</strong> {move.decisionView.actionPotential}</p>
              </div>
              <div className="decision-branches">
                {move.decisionView.branches.map((branch) => (
                  <div key={`${branch.trigger}-${branch.action}`} className="decision-branch">
                    {getDecisionCue(branch.cue) ? (
                      <span className="decision-branch__icon" aria-hidden="true">
                        <span className="decision-branch__icon-symbol">{getDecisionCue(branch.cue)?.symbol}</span>
                        <span className="decision-branch__icon-label">{getDecisionCue(branch.cue)?.label}</span>
                      </span>
                    ) : null}
                    <p><strong>If:</strong> {branch.trigger}</p>
                    <p><strong>Then:</strong> {branch.moveId ? <Link className="text-link" href={`/moves/${branch.moveId}`}>{branch.action}</Link> : branch.action}</p>
                    {branch.leadsTo ? <p><strong>Leads to:</strong> {branch.leadsTo}</p> : null}
                  </div>
                ))}
              </div>
              {move.decisionView.fallback ? (
                <p className="muted-label"><strong>Fallback:</strong> {move.decisionView.fallback}</p>
              ) : null}
            </article>
          ) : null}

          <MoveNotes moveId={move.id} />
        </div>

        <div className="section">
          <div className="desktop-detail-image">
            <TechniqueDiagram move={move} />
          </div>

          <article className="detail-panel">
            <h3>Mistakes</h3>
            <ul className="unordered-list">
              {move.commonMistakes.map((mistake) => (
                <li key={mistake}>{mistake}</li>
              ))}
            </ul>
          </article>

          <article className="detail-panel">
            <h3>Safety</h3>
            <ul className="unordered-list">
              {move.safetyNotes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </article>

          <article className="detail-panel">
            <div className="section-heading">
              <div>
                <h3>Connections</h3>
                <p className="muted-label">Moves that pair well, branch off, or solve a reaction.</p>
              </div>
            </div>
            {setupMoves.length > 0 ? (
              <div className="connection-group">
                <strong>Sets up</strong>
                <div className="quick-links connection-links">
                  {setupMoves.map((relatedMove) => (
                    <Link key={relatedMove.id} className="chip" href={`/moves/${relatedMove.id}`}>
                      {relatedMove.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
            {followUpMoves.length > 0 ? (
              <div className="connection-group">
                <strong>Follows from</strong>
                <div className="quick-links connection-links">
                  {followUpMoves.map((relatedMove) => (
                    <Link key={relatedMove.id} className="chip" href={`/moves/${relatedMove.id}`}>
                      {relatedMove.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
            {counterToMoves.length > 0 ? (
              <div className="connection-group">
                <strong>Counters</strong>
                <div className="quick-links connection-links">
                  {counterToMoves.map((relatedMove) => (
                    <Link key={relatedMove.id} className="chip" href={`/moves/${relatedMove.id}`}>
                      {relatedMove.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
            {counteredByMoves.length > 0 ? (
              <div className="connection-group">
                <strong>If defended, look for</strong>
                <div className="quick-links connection-links">
                  {counteredByMoves.map((relatedMove) => (
                    <Link key={relatedMove.id} className="chip" href={`/moves/${relatedMove.id}`}>
                      {relatedMove.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
            {worksWellWithMoves.length > 0 ? (
              <div className="connection-group">
                <strong>Works with</strong>
                <div className="quick-links connection-links">
                  {worksWellWithMoves.map((relatedMove) => (
                    <Link key={relatedMove.id} className="chip" href={`/moves/${relatedMove.id}`}>
                      {relatedMove.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
            {!hasSpecificConnections && alternativeMoves.length > 0 ? (
              <div className="connection-group">
                <strong>Try next</strong>
                <div className="quick-links connection-links">
                  {alternativeMoves.map((relatedMove) => (
                    <Link key={relatedMove.id} className="chip" href={`/moves/${relatedMove.id}`}>
                      {relatedMove.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
            {!hasSpecificConnections && relatedMoves.length > 0 ? (
              <div className="connection-group">
                <strong>Works with</strong>
                <div className="quick-links connection-links">
                  {relatedMoves.map((relatedMove) => (
                    <Link key={relatedMove.id} className="chip" href={`/moves/${relatedMove.id}`}>
                      {relatedMove.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
            {!hasSpecificConnections && alternativeMoves.length === 0 && relatedMoves.length === 0 ? (
              <p className="muted-label">Linked move chains are still being added for this entry.</p>
            ) : null}
          </article>

          {move.resources.length > 0 ? (
          <article className="detail-panel">
            <h3>Video</h3>
            {embeddedVideo ? (
              <div className="video-embed">
                <iframe
                  src={getYouTubeEmbedUrl(embeddedVideo) ?? undefined}
                  title={`${move.japaneseName} video demo`}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            ) : null}
            <div className="resource-list">
              {move.resources.map((resource) => (
                <a
                  key={resource.url}
                  className="resource-link"
                  href={resource.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>{resource.kind === "video" ? "Video" : "Reference"}</span>
                  <strong>{resource.label}</strong>
                  <small>{resource.source}</small>
                </a>
              ))}
            </div>
          </article>
          ) : null}
        </div>
      </section>
    </div>
  );
}
