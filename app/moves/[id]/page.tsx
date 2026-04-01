import Link from "next/link";
import { notFound } from "next/navigation";
import { MoveActions } from "@/components/MoveActions";
import { MoveNotes } from "@/components/MoveNotes";
import { TechniqueDiagram } from "@/components/TechniqueDiagram";
import { moveMap } from "@/data/moves";
import { MoveResource } from "@/lib/types";

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

export default async function MovePage({ params }: MovePageProps) {
  const { id } = await params;
  const move = moveMap[id];

  if (!move) {
    notFound();
  }

  const relatedMoves = move.relatedMoveIds.map((relatedId) => moveMap[relatedId]).filter(Boolean);
  const alternativeMoves = move.alternativeMoveIds
    .map((relatedId) => moveMap[relatedId])
    .filter(Boolean);
  const embeddedVideo = move.resources.find((resource) => getYouTubeEmbedUrl(resource));
  const practice = move.practice ?? "Judo";

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
            <h3>Alternates</h3>
            <div className="quick-links">
              {alternativeMoves.map((relatedMove) => (
                <Link key={relatedMove.id} className="chip" href={`/moves/${relatedMove.id}`}>
                  {relatedMove.name}
                </Link>
              ))}
            </div>
          </article>

          <article className="detail-panel">
            <h3>Related</h3>
            <div className="quick-links">
              {relatedMoves.map((relatedMove) => (
                <Link key={relatedMove.id} className="chip" href={`/moves/${relatedMove.id}`}>
                  {relatedMove.name}
                </Link>
              ))}
            </div>
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
