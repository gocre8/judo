"use client";

import { useEffect } from "react";
import { useMoveProgress } from "@/hooks/useMoveProgress";

type MoveActionsProps = {
  moveId: string;
};

export function MoveActions({ moveId }: MoveActionsProps) {
  const { progress, ready, updateMove, markViewed } = useMoveProgress();
  const moveProgress = progress[moveId];

  useEffect(() => {
    if (ready) {
      markViewed(moveId);
    }
  }, [markViewed, moveId, ready]);

  return (
    <div className="detail-actions">
      <button
        type="button"
        className={moveProgress?.favorite ? "action-pill" : "toggle-button"}
        onClick={() => updateMove(moveId, { favorite: !moveProgress?.favorite })}
      >
        {moveProgress?.favorite ? "Favorited" : "Add favorite"}
      </button>
      <button
        type="button"
        className={moveProgress?.studied ? "action-pill" : "toggle-button"}
        onClick={() => updateMove(moveId, { studied: !moveProgress?.studied })}
      >
        {moveProgress?.studied ? "Marked studied" : "Mark studied"}
      </button>
    </div>
  );
}
