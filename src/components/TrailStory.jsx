import TrailTerrain from "./three/TrailTerrain";

const trails = [
  { number: "01", name: "Triund", region: "Dhauladhar range · Himachal Pradesh", color: "lime" },
  { number: "02", name: "Kheerganga", region: "Parvati Valley · Himachal Pradesh", color: "teal" },
];

export default function TrailStory() {
  return (
    <section className="section-shell trail-section">
      <div className="trail-copy">
        <p className="section-kicker">Beyond the screen · Trail log</p>
        <h2>I like the long way up.</h2>
        <p>
          Trekking is where I reset my sense of scale. The same instincts travel back into my work:
          prepare carefully, adapt to the terrain, and keep moving when the route gets uncertain.
        </p>
        <div className="trail-list">
          {trails.map((trail) => (
            <div className="trail-item" key={trail.name}>
              <span>{trail.number}</span>
              <div><strong>{trail.name}</strong><small>{trail.region}</small></div>
              <i className={trail.color} /><em>Completed</em>
            </div>
          ))}
        </div>
      </div>

      <div className="terrain-card">
        <div className="visual-meta visual-meta-top"><span>Himalayan field notes</span><span>02 routes</span></div>
        <TrailTerrain />
        <div className="terrain-label terrain-triund"><i /> Triund</div>
        <div className="terrain-label terrain-kheerganga"><i /> Kheerganga</div>
        <div className="visual-caption"><span className="coordinate">Explore the terrain</span><span>Drag to rotate</span></div>
      </div>
    </section>
  );
}
