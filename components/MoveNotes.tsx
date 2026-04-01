"use client";

import Link from "next/link";
import { useMoveProgress } from "@/hooks/useMoveProgress";

type MoveNotesProps = {
  moveId: string;
};

export function MoveNotes({ moveId }: MoveNotesProps) {
  const { progress, ready, updateMove } = useMoveProgress();
  const value = progress[moveId]?.classNotes ?? "";

  return (
    <article className="detail-panel">
      <div className="section-heading">
        <div>
          <h3>Class notes</h3>
          <p className="muted-label">Auto-saves on this device as you type.</p>
        </div>
        <Link className="chip" href="/progress#notes-export">
          Export notes
        </Link>
      </div>
      <textarea
        className="notes-input"
        value={value}
        onChange={(event) => updateMove(moveId, { classNotes: event.target.value })}
        placeholder={ready ? "Add cues, setups, reactions, or coach notes..." : "Loading notes..."}
        aria-label="Class notes"
      />
      <p className="muted-label">Use notes for class details, coach cues, setups, and reactions.</p>
    </article>
  );
}
