"use client";

import { getPositionBucketFlowCount, getPositionBucketMoveCount, positionBuckets } from "@/lib/position-utils";

type PositionBrowseStripProps = {
  activePositionBucketId: string;
  onSelectPositionBucket: (bucketId: string) => void;
};

export function PositionBrowseStrip({
  activePositionBucketId,
  onSelectPositionBucket,
}: PositionBrowseStripProps) {
  return (
    <section className="detail-panel position-browse-panel">
      <div className="section-heading">
        <div>
          <h3>Browse By Position</h3>
          <p>Start from where you are, then narrow into reactions, actions, and likely transitions.</p>
        </div>
        {activePositionBucketId ? (
          <button
            type="button"
            className="back-link"
            onClick={() => onSelectPositionBucket("")}
          >
            Clear position
          </button>
        ) : null}
      </div>
      <div className="position-browse-grid">
        {positionBuckets.map((bucket) => {
          const isActive = bucket.id === activePositionBucketId;
          const moveCount = getPositionBucketMoveCount(bucket.id);
          const flowCount = getPositionBucketFlowCount(bucket.id);

          return (
            <button
              key={bucket.id}
              type="button"
              className={isActive ? "position-browse-card position-browse-card--active" : "position-browse-card"}
              onClick={() => onSelectPositionBucket(isActive ? "" : bucket.id)}
              aria-pressed={isActive}
            >
              <div className="position-browse-card__title">
                <strong>{bucket.label}</strong>
                <span>{bucket.practice === "All" ? "Mixed" : bucket.practice}</span>
              </div>
              <p>{bucket.description}</p>
              <div className="position-browse-card__meta">
                <span>{moveCount} moves</span>
                <span>{flowCount} flow lanes</span>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
