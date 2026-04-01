"use client";

import { useMoveProgress } from "@/hooks/useMoveProgress";

type MoveNotesProps = {
  moveId: string;
};

export function MoveNotes({ moveId }: MoveNotesProps) {
  const { progress, ready, updateMove } = useMoveProgress();
  const value = progress[moveId]?.classNotes ?? "";

  return (
    <article className="detail-panel">
      <h3>Class notes</h3>
      <textarea
        className="notes-input"
        value={value}
        onChange={(event) => updateMove(moveId, { classNotes: event.target.value })}
        placeholder={ready ? "Add cues, setups, reactions, or coach notes..." : "Loading notes..."}
        aria-label="Class notes"
      />
    </article>
  );
}
