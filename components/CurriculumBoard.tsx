import Link from "next/link";
import { jiuJitsuRoadmap, judoRoadmap, moveMap, moves } from "@/data/moves";

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
          <p>Judo on the left. Jiu-jitsu on the right.</p>
        </div>
      </div>
      <div className="curriculum-row">
        <strong>Current Judo families</strong>
        <div className="quick-links">
          {currentJudoFamilies.map((family) => (
            <Link key={family} className="chip" href={`/library?practice=Judo&search=${encodeURIComponent(family)}`}>
              {family}
            </Link>
          ))}
        </div>
      </div>
      <div className="curriculum-row">
        <strong>Current Jiu-jitsu groups</strong>
        <div className="quick-links">
          {currentJiuJitsuGroups.map((group) => (
            <Link key={group} className="chip" href={`/library?practice=Jiu-Jitsu&search=${encodeURIComponent(group)}`}>
              {group}
            </Link>
          ))}
        </div>
      </div>
      <div className="curriculum-columns">
        <div className="curriculum-stack">
          <div className="curriculum-row">
            <strong>Judo</strong>
          </div>
          {judoRoadmap.map((group) => (
            <div key={group.family} className="curriculum-row">
              <Link className="text-link curriculum-heading-link" href={`/library?practice=Judo&search=${encodeURIComponent(group.family)}`}>
                <strong>{group.family}</strong>
              </Link>
              <p>
                {group.moves.map((moveName, index) => (
                  <span key={moveName}>
                    <Link className="text-link" href={`/library?practice=Judo&search=${encodeURIComponent(moveName)}`}>
                      {moveName}
                    </Link>
                    {index < group.moves.length - 1 ? " · " : ""}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
        <div className="curriculum-stack">
          <div className="curriculum-row">
            <strong>Jiu-jitsu</strong>
          </div>
          {jiuJitsuRoadmap.map((group) => (
            <div key={group.family} className="curriculum-row">
              <Link className="text-link curriculum-heading-link" href={`/library?practice=Jiu-Jitsu&search=${encodeURIComponent(group.family)}`}>
                <strong>{group.family}</strong>
              </Link>
              <p>
                {group.moves.map((moveName, index) => {
                  const existingMove = Object.values(moveMap).find(
                    (move) => move.practice === "Jiu-Jitsu" && move.name.toLowerCase() === moveName.toLowerCase(),
                  );

                  return (
                    <span key={moveName}>
                      <Link
                        className="text-link"
                        href={existingMove ? `/moves/${existingMove.id}` : `/library?practice=Jiu-Jitsu&search=${encodeURIComponent(moveName)}`}
                      >
                        {moveName}
                      </Link>
                      {index < group.moves.length - 1 ? " · " : ""}
                    </span>
                  );
                })}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
