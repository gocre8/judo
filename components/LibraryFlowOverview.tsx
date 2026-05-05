import Image from "next/image";
import Link from "next/link";
import { flowClusters } from "@/data/flows";
import { flowClusterMatchesPositionBucket } from "@/lib/position-utils";

type LibraryFlowOverviewProps = {
  activeFlowClusterId: string;
  activePositionBucketId: string;
  onSelectFlowCluster: (clusterId: string) => void;
};

export function LibraryFlowOverview({
  activeFlowClusterId,
  activePositionBucketId,
  onSelectFlowCluster,
}: LibraryFlowOverviewProps) {
  const visibleClusters = flowClusters.filter((cluster) =>
    flowClusterMatchesPositionBucket(cluster, activePositionBucketId),
  );
  const judoClusters = visibleClusters.filter((cluster) => cluster.practice === "Judo");
  const bjjClusters = visibleClusters.filter((cluster) => cluster.practice === "Jiu-Jitsu");

  return (
    <section className="detail-panel library-flow-panel">
      <div className="section-heading">
        <div>
          <h3>Flow Lanes</h3>
          <p>Browse moves by position, reaction, and likely next transition without leaving the library.</p>
        </div>
        <div className="quick-links">
          {activeFlowClusterId ? (
            <button
              type="button"
              className="back-link"
              onClick={() => onSelectFlowCluster("")}
            >
              Clear lane
            </button>
          ) : null}
          <Link className="action-pill action-pill--ghost" href="/flows">
            Open full flows
          </Link>
        </div>
      </div>

      <div className="library-flow-columns">
        <article className="library-flow-column">
          <div className="library-flow-column__header">
            <h4>Judo</h4>
            <p>Standing and ne-waza chains built around kuzushi, reactions, and control changes.</p>
          </div>
          {judoClusters.length === 0 ? (
            <div className="library-flow-empty">
              <p>No Judo flow lanes match this position filter yet.</p>
            </div>
          ) : null}
          <div className="library-flow-list">
            {judoClusters.map((cluster) => {
              const root = cluster.nodes.find((node) => node.id === cluster.rootNodeId);
              const nextEdges = cluster.edges.filter((edge) => edge.fromNodeId === cluster.rootNodeId).slice(0, 3);
              const moveCount = new Set(cluster.nodes.flatMap((node) => node.moveIds)).size;
              const isActive = activeFlowClusterId === cluster.id;

              return (
                <button
                  key={cluster.id}
                  type="button"
                  className={isActive ? "library-flow-card library-flow-card--active" : "library-flow-card"}
                  onClick={() => onSelectFlowCluster(isActive ? "" : cluster.id)}
                  aria-pressed={isActive}
                >
                  <div className="library-flow-card__title">
                    <strong>{cluster.title}</strong>
                    <span>{isActive ? "Active lane" : "Study this lane"}</span>
                  </div>
                  <p>{cluster.summary}</p>
                  {root ? <p><strong>From:</strong> {root.label}</p> : null}
                  <p><strong>Moves:</strong> {moveCount}</p>
                  {nextEdges.length > 0 ? (
                    <div className="library-flow-card__next">
                      <span>Next options</span>
                      <p>{nextEdges.map((edge) => edge.label).join(" · ")}</p>
                    </div>
                  ) : null}
                </button>
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
          {bjjClusters.length === 0 ? (
            <div className="library-flow-empty">
              <p>No Jiu-Jitsu flow lanes match this position filter yet.</p>
            </div>
          ) : null}
          <div className="library-flow-list">
            {bjjClusters.map((cluster) => {
              const root = cluster.nodes.find((node) => node.id === cluster.rootNodeId);
              const nextEdges = cluster.edges.filter((edge) => edge.fromNodeId === cluster.rootNodeId).slice(0, 3);
              const moveCount = new Set(cluster.nodes.flatMap((node) => node.moveIds)).size;
              const isActive = activeFlowClusterId === cluster.id;

              return (
                <button
                  key={cluster.id}
                  type="button"
                  className={isActive ? "library-flow-card library-flow-card--active" : "library-flow-card"}
                  onClick={() => onSelectFlowCluster(isActive ? "" : cluster.id)}
                  aria-pressed={isActive}
                >
                  <div className="library-flow-card__title">
                    <strong>{cluster.title}</strong>
                    <span>{isActive ? "Active lane" : "Study this lane"}</span>
                  </div>
                  <p>{cluster.summary}</p>
                  {root ? <p><strong>From:</strong> {root.label}</p> : null}
                  <p><strong>Moves:</strong> {moveCount}</p>
                  {nextEdges.length > 0 ? (
                    <div className="library-flow-card__next">
                      <span>Next options</span>
                      <p>{nextEdges.map((edge) => edge.label).join(" · ")}</p>
                    </div>
                  ) : null}
                </button>
              );
            })}
          </div>
        </article>
      </div>
    </section>
  );
}
