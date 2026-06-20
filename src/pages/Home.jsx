import { Link } from 'react-router-dom';
import { useFadeIn } from '../hooks/useScroll';
import './Home.css';

const TEAM = [
  { name: 'Alexander Sedlacek', role: 'Game Design, Programming, UI' },
  { name: 'Anela Becic', role: 'Social Media Management' },
  { name: 'Danila Trofimov', role: 'Hardware Design, Market Research' },
  { name: 'Florian Pernikl', role: 'Game Design, Programming' },
  { name: 'Julia Schreibmaier', role: 'Game Design Lead, Asset Maker' },
  { name: 'Kevin Lang', role: 'Project management, financials' },
  { name: 'Michael Blum', role: 'Project management, design' },
  { name: 'Niklas Reiter', role: 'System level engineer, UI' },
  { name: 'Nora Rösel', role: 'Business, financials' },
];

function FadeSection({ children, className = '' }) {
  const { ref, visible } = useFadeIn();
  return (
    <div ref={ref} className={`fade-in ${visible ? 'visible' : ''} ${className}`}>
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero__bg" />
        <div className="hero__content">
          <div className="hero__logo">
            <span className="hero__logo-leaf">LEAF</span>
            <span className="hero__logo-engine">ENGINE</span>
          </div>
          <h1 className="hero__headline">The world's first furniture-grade gaming console.</h1>
          <p className="hero__sub">
            Wood PLA body. Powered by NVIDIA Jetson. Fully repairable.<br />
            Built by nine students at FH BFI Wien.
          </p>
        </div>
        <div className="hero__scroll-hint">
          <span>Scroll</span>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
            <path d="M8 4v16m0 0l-4-4m4 4l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </section>

      <section className="previews">
        <FadeSection className="preview-card">
          <div className="preview-card__visual preview-card__visual--console" />
          <div className="preview-card__body">
            <h2>Leaf Engine</h2>
            <h3>Prototype v.2</h3>
            <p>
              A games console designed to sit on your shelf — not hide under it. 3D-printed wood filament, biomimetic ventilation, NVIDIA Jetson compute. Everything documented. Every part replaceable.
            </p>
            <Link to="/console" className="preview-card__cta">See how it's built &rarr;</Link>
          </div>
        </FadeSection>

        <FadeSection className="preview-card preview-card--reversed">
          <div className="preview-card__visual preview-card__visual--game" />
          <div className="preview-card__body">
            <h2>Roots of Resistance</h2>
            <h3>First-Party Launch Title</h3>
            <p>
              Farm by day, defend by night. A grid-based tower defence with a farming sim underneath it. Hand-crafted pixel art, built in Unity by the team.
            </p>
            <Link to="/game" className="preview-card__cta">See the game &rarr;</Link>
          </div>
        </FadeSection>
      </section>

      <section className="team">
        <FadeSection>
          <h2 className="team__title">Meet the Team</h2>
        </FadeSection>
        <div className="team__grid">
          {TEAM.map((member, i) => (
            <FadeSection key={member.name} className="team__card">
              <div className="team__avatar">
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h3 className="team__name">{member.name}</h3>
              <p className="team__role">{member.role}</p>
            </FadeSection>
          ))}
        </div>
      </section>
    </main>
  );
}
