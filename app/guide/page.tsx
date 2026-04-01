export default function GuidePage() {
  return (
    <div className="section">
      <section className="detail-hero">
        <h1>Guide</h1>
        <p className="muted-label">How notes, exports, and move connections work in the app.</p>
      </section>

      <section className="detail-panel">
        <h3>Exports</h3>
        <ul className="unordered-list">
          <li><strong>Export notes</strong> creates a readable Markdown file for you.</li>
          <li><strong>Backup JSON</strong> keeps the full machine-readable backup for future import work.</li>
          <li>The Markdown export includes moves with notes, pinned status, or studied status.</li>
          <li>The JSON backup may include moves you only opened, because it preserves full saved browser state.</li>
        </ul>
      </section>

      <section className="detail-panel">
        <h3>Connection Terms</h3>
        <ul className="unordered-list">
          <li><strong>Connects to</strong> is a generalized fallback bucket.</li>
          <li><strong>Sets up</strong> means this move tends to lead into the next one.</li>
          <li><strong>Follows from</strong> means this move is often available after the listed move or reaction.</li>
          <li><strong>Counters</strong> means this move answers the other move.</li>
          <li><strong>If defended, look for</strong> means a failed or blocked attack may open those options.</li>
          <li><strong>Works with</strong> means the moves pair well but are less directional.</li>
        </ul>
      </section>

      <section className="detail-panel">
        <h3>Notes</h3>
        <ul className="unordered-list">
          <li>Class notes auto-save on the device and browser you are using.</li>
          <li>Use notes for coach cues, setups, reactions, and reminders from class.</li>
          <li>Export notes before major rewrites if you want a readable backup.</li>
        </ul>
      </section>
    </div>
  );
}
