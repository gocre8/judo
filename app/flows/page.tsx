import Link from "next/link";
import { FlowClusterCard } from "@/components/FlowClusterCard";
import { flowClusters } from "@/data/flows";

export default function FlowsPage() {
  return (
    <div className="section">
      <section className="compact-hero">
        <div>
          <h1>Flows</h1>
          <p className="muted-label">
            Position clusters, reaction branches, and likely transitions.
          </p>
        </div>
        <div className="quick-links">
          <Link className="action-pill" href="/library">
            Library
          </Link>
          <Link className="action-pill action-pill--ghost" href="/guide">
            Guide
          </Link>
        </div>
      </section>

      <section className="detail-panel">
        <h3>How To Use This</h3>
        <ul className="unordered-list">
          <li>Start from the root position card for the cluster you are studying.</li>
          <li>Read the trigger as the opponent action or positional change you are looking for.</li>
          <li>Use the linked move and destination position together, not as isolated techniques.</li>
          <li>These are study maps, so they stay intentionally small and readable.</li>
        </ul>
      </section>

      {flowClusters.map((cluster) => (
        <FlowClusterCard key={cluster.id} cluster={cluster} />
      ))}
    </div>
  );
}
