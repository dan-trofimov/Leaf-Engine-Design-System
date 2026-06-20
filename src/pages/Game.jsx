import { useFadeIn } from '../hooks/useScroll';
import './Game.css';

function FadeSection({ children, className = '' }) {
  const { ref, visible } = useFadeIn();
  return (
    <div ref={ref} className={`fade-in ${visible ? 'visible' : ''} ${className}`}>
      {children}
    </div>
  );
}

const TIERS = [
  { name: 'Player', desc: 'Roots of Resistance digital', price: '€25' },
  { name: 'Digital Pack', desc: 'Game + development sketchbook (digital)', price: '€45' },
];

export default function Game() {
  return (
    <main className="game-page">
      <section className="game-hero">
        <div className="game-hero__bg" />
        <div className="game-hero__content">
          <h1 className="game-hero__title"><em>Roots of Resistance.</em></h1>
          <p className="game-hero__sub">The game that ships with it.</p>
        </div>
      </section>

      <section className="game-about">
        <FadeSection className="game-about__inner">
          <h2>Farm by day. Defend by night.</h2>
          <p>
            During the day you plant, grow, and build up resources across a grid. At night, something comes for them. What you built is what you defend. A tower defence with a farming sim underneath — 2D pixel art, single player, built in Unity.
          </p>
        </FadeSection>
      </section>

      <section className="game-why">
        <FadeSection className="game-why__inner">
          <h2>Why This Game</h2>
          <p>It's not random that this is the launch title.</p>
          <p>
            The loop — build, protect, sustain — is the same idea the console runs on. You're not just grinding for upgrades. You're thinking about what you need versus what you want.
          </p>
        </FadeSection>
      </section>

      <section className="game-tiers">
        <FadeSection className="game-tiers__inner">
          <h2>Get It</h2>
          <div className="game-tiers__grid">
            {TIERS.map((tier) => (
              <div key={tier.name} className="game-tier-card">
                <h3>{tier.name}</h3>
                <p>{tier.desc}</p>
                <span className="game-tier-card__price">{tier.price}</span>
              </div>
            ))}
          </div>
          <a href="#" className="game-tiers__cta">Back on Kickstarter &nearr;</a>
        </FadeSection>
      </section>
    </main>
  );
}
