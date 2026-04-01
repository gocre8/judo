import { jiuJitsuRoadmap, judoRoadmap, moves } from "@/data/moves";

const currentJudoFamilies = Array.from(
  new Set(moves.filter((move) => (move.practice ?? "Judo") === "Judo").map((move) => move.family)),
);

const currentJiuJitsuGroups = Array.from(
  new Set(
    moves
      .filter((move) => move.practice === "Jiu-Jitsu")
      .map((move) => `${move.section} · ${move.family}`),
  ),
);

export function CurriculumBoard() {
  return (
    <section className="detail-panel curriculum-board">
      <div className="section-heading">
        <div>
          <h3>Structure</h3>
          <p>Judo uses formal families. Jiu-jitsu uses position groups.</p>
        </div>
      </div>
      <div className="curriculum-row">
        <strong>Current Judo families</strong>
        <div className="quick-links">
          {currentJudoFamilies.map((family) => (
            <span key={family} className="chip">
              {family}
            </span>
          ))}
        </div>
      </div>
      <div className="curriculum-row">
        <strong>Current Jiu-jitsu groups</strong>
        <div className="quick-links">
          {currentJiuJitsuGroups.map((group) => (
            <span key={group} className="chip">
              {group}
            </span>
          ))}
        </div>
      </div>
      <div className="curriculum-stack">
        <div className="curriculum-row">
          <strong>Judo</strong>
        </div>
        {judoRoadmap.map((group) => (
          <div key={group.family} className="curriculum-row">
            <strong>{group.family}</strong>
            <p>{group.moves.join(" · ")}</p>
          </div>
        ))}
        <div className="curriculum-row">
          <strong>Jiu-jitsu</strong>
          <p className="muted-label">There is no single official family system like Judo, so the app uses position and phase groups.</p>
        </div>
        {jiuJitsuRoadmap.map((group) => (
          <div key={group.family} className="curriculum-row">
            <strong>{group.family}</strong>
            <p>{group.moves.join(" · ")}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
