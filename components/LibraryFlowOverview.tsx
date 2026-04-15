import Image from "next/image";
import Link from "next/link";
import { flowClusters } from "@/data/flows";

export function LibraryFlowOverview() {
  const judoClusters = flowClusters.filter((cluster) => cluster.practice === "Judo");
  const bjjClusters = flowClusters.filter((cluster) => cluster.practice === "Jiu-Jitsu");

  return (
    <section className="detail-panel library-flow-panel">
      <div className="section-heading">
        <div>
          <h3>Flow Lanes</h3>
          <p>Browse moves by position, reaction, and likely next transition without leaving the library.</p>
        </div>
        <Link className="action-pill action-pill--ghost" href="/flows">
          Open full flows
        </Link>
      </div>

      <div className="library-flow-columns">
        <article className="library-flow-column">
          <div className="library-flow-column__header">
            <h4>Judo</h4>
            <p>Standing and ne-waza chains built around kuzushi, reactions, and control changes.</p>
          </div>
          <div className="library-flow-list">
            {judoClusters.map((cluster) => {
              const root = cluster.nodes.find((node) => node.id === cluster.rootNodeId);
              const nextEdges = cluster.edges.filter((edge) => edge.fromNodeId === cluster.rootNodeId).slice(0, 3);

              return (
                <div key={cluster.id} className="library-flow-card">
                  <div className="library-flow-card__title">
                    <strong>{cluster.title}</strong>
                    <Link className="text-link" href="/flows">
                      View flow
                    </Link>
                  </div>
                  {root ? <p><strong>From:</strong> {root.label}</p> : null}
                  {nextEdges.length > 0 ? (
                    <div className="library-flow-card__next">
                      <span>Next options</span>
                      <p>{nextEdges.map((edge) => edge.label).join(" · ")}</p>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </article>

        <article className="library-flow-column">
          <div className="library-flow-column__header">
            <h4>Jiu-Jitsu</h4>
            <p>Positional lanes for attacks, passing, escapes, and top control.</p>
          </div>
          <div className="library-flow-visual">
            <Image
              src="/flow-reference/bjj-positional-strip.png"
              alt="Three BJJ positional panels showing back control, guard bottom, and side control top."
              width={2088}
              height={496}
            />
          </div>
          <div className="library-flow-list">
            {bjjClusters.map((cluster) => {
              const root = cluster.nodes.find((node) => node.id === cluster.rootNodeId);
              const nextEdges = cluster.edges.filter((edge) => edge.fromNodeId === cluster.rootNodeId).slice(0, 3);

              return (
                <div key={cluster.id} className="library-flow-card">
                  <div className="library-flow-card__title">
                    <strong>{cluster.title}</strong>
                    <Link className="text-link" href="/flows">
                      View flow
                    </Link>
                  </div>
                  {root ? <p><strong>From:</strong> {root.label}</p> : null}
                  {nextEdges.length > 0 ? (
                    <div className="library-flow-card__next">
                      <span>Next options</span>
                      <p>{nextEdges.map((edge) => edge.label).join(" · ")}</p>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </article>
      </div>
    </section>
  );
}
