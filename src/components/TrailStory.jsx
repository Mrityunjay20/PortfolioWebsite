/* eslint-disable react/prop-types -- The local error boundary consumes React-managed children. */
import { Component, useEffect, useRef, useState } from "react";
import mountainData from "../data/mountains.json";
import TrailTerrain from "./three/TrailTerrain";

const trails = [
  { number: "01", name: "Triund", region: "Dhauladhar range · Himachal Pradesh", color: "lime" },
  { number: "02", name: "Kheerganga", region: "Parvati Valley · Himachal Pradesh", color: "teal" },
];

class TerrainErrorBoundary extends Component {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    if (this.state.failed) {
      return (
        <div className="terrain-state" role="status">
          <span>The interactive terrain is unavailable in this browser.</span>
          <span>The trail notes remain available below.</span>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function TrailStory() {
  const [selected, setSelected] = useState(0);
  const [view, setView] = useState("ridge");
  const [resetKey, setResetKey] = useState(0);
  const [visible, setVisible] = useState(false);
  const terrainCard = useRef();
  const region = mountainData.regions[selected];

  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { rootMargin: "300px" });
    observer.observe(terrainCard.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-shell trail-section" id="himalayan-field-notes">
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

      <div className="terrain-card" ref={terrainCard}>
        <div className="terrain-scene" id="mountain-view">
          {visible && (
            <TerrainErrorBoundary key={`${region.id}:${resetKey}`}>
              <TrailTerrain region={region} view={view} resetKey={resetKey} />
            </TerrainErrorBoundary>
          )}
        </div>
        <div className="terrain-heading">
          <p>Himalayan field notes <span>02 places explored</span></p>
          <div className="mountain-selector" role="group" aria-label="Choose a mountain landscape">
            {mountainData.regions.map((mountain, index) => (
              <button
                key={mountain.id}
                type="button"
                aria-pressed={selected === index}
                aria-controls="mountain-view"
                onClick={() => { setSelected(index); setResetKey((value) => value + 1); }}
              >{mountain.name}<span>↗</span></button>
            ))}
          </div>
        </div>
        <div className="terrain-footer">
          <div className="terrain-place" aria-live="polite"><strong>{region.range}</strong><span>{region.coordinates}</span></div>
          <div className="mountain-view-controls" role="group" aria-label="Mountain camera view">
            <button type="button" aria-pressed={view === "ridge"} onClick={() => { setView("ridge"); setResetKey((value) => value + 1); }}>Ridge view</button>
            <button type="button" aria-pressed={view === "overlook"} onClick={() => { setView("overlook"); setResetKey((value) => value + 1); }}>Overlook</button>
            <span>Drag to explore</span>
          </div>
          <div className="terrain-credit"><span>Real elevation · alpine rendering</span><a href="/terrain/README.md" target="_blank" rel="noreferrer">Terrain: Mapzen / USGS ↗</a></div>
        </div>
      </div>
    </section>
  );
}
