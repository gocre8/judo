import Link from "next/link";
import { HomeStats } from "@/components/HomeStats";

export default function HomePage() {
  return (
    <div className="section">
      <section className="compact-hero">
        <div>
          <h1>Judo / Jiujitsu</h1>
          <p className="muted-label">Study library, linked moves, and class notes.</p>
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

      <HomeStats />
    </div>
  );
}
