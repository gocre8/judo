import Link from "next/link";

export default function GuidePage() {
  return (
    <div className="section">
      <section className="detail-hero">
        <h1>Guide</h1>
        <p className="muted-label">Reference notes for Judo and Jiu-Jitsu study, exports, connections, and direction cues.</p>
      </section>

      <section className="guide-columns">
        <div className="guide-column">
          <section className="detail-panel">
            <h3>Judo</h3>
            <ul className="unordered-list">
              <li>
                Browse Judo throws by family in the <Link className="text-link" href="/library?practice=Judo">Judo library</Link>.
              </li>
              <li>
                Kuzushi arrows now mark the primary off-balancing direction for throws like <Link className="text-link" href="/moves/deashi-harai">Deashi Harai</Link> and <Link className="text-link" href="/moves/osoto-gari">Osoto Gari</Link>.
              </li>
              <li>
                Filter by direction in the library with options like <Link className="text-link" href="/library?practice=Judo&kuzushi=forward-right">forward-right ↗</Link> or <Link className="text-link" href="/library?practice=Judo&kuzushi=backward-right">backward-right ↘</Link>.
              </li>
            </ul>
          </section>

          <section className="detail-panel">
            <h3>Judo Direction Arrows</h3>
            <ul className="unordered-list">
              <li><Link className="text-link" href="/library?practice=Judo&kuzushi=forward"><strong>↑</strong> forward kuzushi</Link></li>
              <li><Link className="text-link" href="/library?practice=Judo&kuzushi=backward"><strong>↓</strong> backward kuzushi</Link></li>
              <li><Link className="text-link" href="/library?practice=Judo&kuzushi=left"><strong>←</strong> left kuzushi</Link></li>
              <li><Link className="text-link" href="/library?practice=Judo&kuzushi=right"><strong>→</strong> right kuzushi</Link></li>
              <li><Link className="text-link" href="/library?practice=Judo&kuzushi=forward-right"><strong>↗</strong> forward-right kuzushi</Link></li>
              <li><Link className="text-link" href="/library?practice=Judo&kuzushi=forward-left"><strong>↖</strong> forward-left kuzushi</Link></li>
              <li><Link className="text-link" href="/library?practice=Judo&kuzushi=backward-right"><strong>↘</strong> backward-right kuzushi</Link></li>
              <li><Link className="text-link" href="/library?practice=Judo&kuzushi=backward-left"><strong>↙</strong> backward-left kuzushi</Link></li>
              <li>These are study cues for likely entry direction, not rigid absolutes for every stance or grip.</li>
            </ul>
          </section>
        </div>

        <div className="guide-column">
          <section className="detail-panel">
            <h3>Jiu-Jitsu</h3>
            <ul className="unordered-list">
              <li>
                Browse position groups in the <Link className="text-link" href="/library?practice=Jiu-Jitsu">Jiu-Jitsu library</Link>.
              </li>
              <li>
                The first decision views are live on <Link className="text-link" href="/moves/closed-guard">Closed Guard</Link> and will expand into passing and top control next.
              </li>
              <li>
                Training context is filterable with <Link className="text-link" href="/library?practice=Jiu-Jitsu&training=Gi">Gi</Link> and <Link className="text-link" href="/library?practice=Jiu-Jitsu&training=No-gi">No-gi</Link>.
              </li>
            </ul>
          </section>

          <section className="detail-panel">
            <h3>Connections And Notes</h3>
            <ul className="unordered-list">
              <li><strong>Connects to</strong> is a generalized fallback bucket.</li>
              <li><strong>Sets up</strong> means this move tends to lead into the next one.</li>
              <li><strong>Follows from</strong> means this move is often available after the listed move or reaction.</li>
              <li><strong>Counters</strong> means this move answers the other move.</li>
              <li><strong>If defended, look for</strong> means a failed or blocked attack may open those options.</li>
              <li><strong>Works with</strong> means the moves pair well but are less directional.</li>
              <li><Link className="text-link" href="/progress#notes-export"><strong>Export notes</strong></Link> creates a readable Markdown file.</li>
              <li><strong>Backup JSON</strong> keeps the machine-readable browser backup for future restore work.</li>
            </ul>
          </section>
        </div>
      </section>
    </div>
  );
}
