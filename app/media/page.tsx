import Link from "next/link";
import { MediaAuditBoard } from "@/components/MediaAuditBoard";

export default function MediaPage() {
  return (
    <div className="section">
      <section className="compact-hero">
        <div>
          <h1>Media Audit</h1>
          <p className="muted-label">
            Coverage checklist for representative images, direct move demos, and reference-only entries.
          </p>
        </div>
        <div className="quick-links">
          <Link className="action-pill" href="/library">
            Library
          </Link>
          <Link className="action-pill action-pill--ghost" href="/progress">
            Progress
          </Link>
        </div>
      </section>

      <section className="detail-panel">
        <h3>How To Use This</h3>
        <ul className="unordered-list">
          <li>Start with moves missing both image and direct video coverage.</li>
          <li>Then upgrade reference-only BJJ entries into true demo-backed entries.</li>
          <li>Work position by position so each family becomes fully usable in study and quiz flows.</li>
        </ul>
      </section>

      <MediaAuditBoard />
    </div>
  );
}
