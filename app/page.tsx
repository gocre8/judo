import Link from "next/link";
import { HomeStats } from "@/components/HomeStats";

export default function HomePage() {
  return (
    <div className="section">
      <section className="detail-hero">
        <h1>Judo Study</h1>
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
