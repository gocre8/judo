import { moves, roadmap } from "@/data/moves";

const currentFamilies = Array.from(new Set(moves.map((move) => move.family)));

export function CurriculumBoard() {
  return (
    <section className="detail-panel curriculum-board">
      <div className="section-heading">
        <div>
          <h3>Structure</h3>
          <p>Throws now. Grappling next.</p>
        </div>
      </div>
      <div className="curriculum-row">
        <strong>Current</strong>
        <div className="quick-links">
          {currentFamilies.map((family) => (
            <span key={family} className="chip">
              {family}
            </span>
          ))}
        </div>
      </div>
      <div className="curriculum-stack">
        {roadmap.map((group) => (
          <div key={group.family} className="curriculum-row">
            <strong>{group.family}</strong>
            <p>{group.moves.join(" · ")}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
