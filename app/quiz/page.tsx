import Link from "next/link";
import { QuizClient } from "@/components/QuizClient";

export default function QuizPage() {
  return (
    <div className="section">
      <section className="compact-hero">
        <div>
          <h1>Quiz</h1>
          <p className="muted-label">
            Test names, directions, and position-to-reaction links.
          </p>
        </div>
        <div className="quick-links">
          <Link className="action-pill" href="/flows">
            Flows
          </Link>
          <Link className="action-pill action-pill--ghost" href="/library">
            Library
          </Link>
        </div>
      </section>

      <section className="detail-panel">
        <h3>What This Uses</h3>
        <ul className="unordered-list">
          <li>Name prompts come from the move library.</li>
          <li>Direction prompts come from the Judo kuzushi fields.</li>
          <li>Flow prompts come from the position clusters and transition model.</li>
        </ul>
      </section>

      <QuizClient />
    </div>
  );
}
