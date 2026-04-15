import Link from "next/link";
import { moveMap } from "@/data/moves";
import { PositionFlowCluster, PositionFlowEdge, PositionFlowNode } from "@/lib/types";

type FlowClusterCardProps = {
  cluster: PositionFlowCluster;
};

function getEdgeKindLabel(kind: PositionFlowEdge["kind"]) {
  switch (kind) {
    case "attack":
      return "Attack";
    case "transition":
      return "Transition";
    case "recovery":
      return "Recovery";
    default:
      return kind;
  }
}

export function FlowClusterCard({ cluster }: FlowClusterCardProps) {
  const nodesById = Object.fromEntries(cluster.nodes.map((node) => [node.id, node]));

  return (
    <section className="detail-panel flow-cluster-card">
      <div className="section-heading">
        <div>
          <h3>{cluster.title}</h3>
          <p>{cluster.summary}</p>
        </div>
        <span className="chip flow-cluster-card__practice">{cluster.practice}</span>
      </div>

      <div className="flow-node-grid">
        {cluster.nodes.map((node) => {
          const outgoingEdges = cluster.edges.filter((edge) => edge.fromNodeId === node.id);
          const isRoot = node.id === cluster.rootNodeId;

          return (
            <article
              key={node.id}
              className={isRoot ? "flow-node-card flow-node-card--root" : "flow-node-card"}
            >
              <div className="flow-node-card__header">
                <div>
                  <h4>{node.label}</h4>
                  <p>{node.summary}</p>
                </div>
                {isRoot ? <span className="flow-node-card__root">Root</span> : null}
              </div>

              {node.tags?.length ? (
                <div className="flow-node-card__tags">
                  {node.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              ) : null}

              <div className="flow-node-card__section">
                <strong>Moves here</strong>
                <div className="flow-link-list">
                  {node.moveIds.map((moveId) => {
                    const move = moveMap[moveId];

                    if (!move) {
                      return null;
                    }

                    return (
                      <Link key={move.id} className="text-link" href={`/moves/${move.id}`}>
                        {move.name}
                      </Link>
                    );
                  })}
                </div>
              </div>

              {outgoingEdges.length > 0 ? (
                <div className="flow-node-card__section">
                  <strong>Options from here</strong>
                  <div className="flow-edge-list">
                    {outgoingEdges.map((edge) => {
                      const target = nodesById[edge.toNodeId] as PositionFlowNode | undefined;
                      const linkedMove = edge.moveId ? moveMap[edge.moveId] : null;

                      return (
                        <div key={`${edge.fromNodeId}-${edge.toNodeId}-${edge.label}`} className="flow-edge-card">
                          <span className="flow-edge-card__kind">{getEdgeKindLabel(edge.kind)}</span>
                          <p>
                            <strong>If:</strong> {edge.trigger}
                          </p>
                          <p>
                            <strong>Then:</strong>{" "}
                            {linkedMove ? (
                              <Link className="text-link" href={`/moves/${linkedMove.id}`}>
                                {edge.label}
                              </Link>
                            ) : (
                              edge.label
                            )}
                          </p>
                          {target ? (
                            <p>
                              <strong>To:</strong> {target.label}
                            </p>
                          ) : null}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : null}
            </article>
          );
        })}
      </div>
    </section>
  );
}
