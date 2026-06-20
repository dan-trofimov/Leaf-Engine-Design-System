import ScrollScrub from '../components/ScrollScrub';
import TrackedCaption from '../components/TrackedCaption';
import { useFadeIn } from '../hooks/useScroll';
import './Console.css';

function FadeSection({ children, className = '' }) {
  const { ref, visible } = useFadeIn();
  return (
    <div ref={ref} className={`fade-in ${visible ? 'visible' : ''} ${className}`}>
      {children}
    </div>
  );
}

const TIERS = [
  { name: 'Light Base', desc: 'Console hardware + STL files (print yourself)', price: '€380' },
  { name: 'Base', desc: 'Console hardware + printed wood casing', price: '€420' },
  { name: 'Organic Pack', desc: 'Console + casing + sketchbook + game', price: '€520' },
  { name: "Collector's Pack", desc: 'Everything above + digital sketchbook', price: '€850' },
  { name: 'Limited Edition', desc: 'Full pack + signed physical sketchbook (20 units)', price: '€990' },
];

export default function Console() {
  return (
    <main className="console-page">
      {/* Section 1 — Disassembly Intro */}
      <ScrollScrub sectionId="disassembly" frameCount={60}>
        {(progress) => (
          <TrackedCaption progress={progress} start={0.3} end={0.7} position="center">
            <h2>Disassembled.</h2>
            <p>Scroll to explore every layer.</p>
          </TrackedCaption>
        )}
      </ScrollScrub>

      {/* Section 2 — The Inside */}
      <ScrollScrub sectionId="internals" frameCount={60}>
        {(progress) => (
          <TrackedCaption progress={progress} start={0.2} end={0.8} position="left">
            <h2>NVIDIA Jetson Orin Nano.</h2>
            <p>
              Edge AI compute platform. ARM64. Runs Linux. Powerful enough for 1080p indie titles and emulation. Efficient enough to run quiet.
            </p>
            <p>The board slots in. It slots out. That's the point.</p>
          </TrackedCaption>
        )}
      </ScrollScrub>

      {/* Section 3 — The Material */}
      <ScrollScrub sectionId="material" frameCount={60}>
        {(progress) => (
          <TrackedCaption progress={progress} start={0.2} end={0.8} position="right">
            <h2>You can see the grain.</h2>
            <p>
              The casing is 3D-printed from wood PLA — a composite of wood fibres and bioplastic. The layer lines aren't a flaw. They're what tells you it was made, not manufactured. Each one is slightly different.
            </p>
            <p>If it cracks, you print a new part. If you want a different finish, you print a new shell. The STL files are yours.</p>
          </TrackedCaption>
        )}
      </ScrollScrub>

      {/* Section 4 — The Ventilation */}
      <ScrollScrub sectionId="ventilation" frameCount={60}>
        {(progress) => (
          <TrackedCaption progress={progress} start={0.2} end={0.8} position="left">
            <h2>The vent on top isn't decorative.</h2>
            <p>
              It's a voronoi funnel aperture modelled on natural cellular structures — designed to let the cold air inside without a visible fan grille. The side lattice works the same way.
            </p>
            <p>It's also what makes it look the way it looks.</p>
          </TrackedCaption>
        )}
      </ScrollScrub>

      {/* Section 5 — Connectivity */}
      <ScrollScrub sectionId="connectivity" frameCount={60}>
        {(progress) => (
          <>
            <TrackedCaption progress={progress} start={0.1} end={0.5} position="bottom-left">
              <h2>Every port you need.</h2>
            </TrackedCaption>
            <TrackedCaption progress={progress} start={0.3} end={0.9} position="right">
              <ul className="console-ports">
                <li style={{ opacity: progress > 0.35 ? 1 : 0 }}>USB-C</li>
                <li style={{ opacity: progress > 0.45 ? 1 : 0 }}>USB-A &times;3</li>
                <li style={{ opacity: progress > 0.55 ? 1 : 0 }}>Ethernet</li>
                <li style={{ opacity: progress > 0.65 ? 1 : 0 }}>3.5mm audio</li>
                <li style={{ opacity: progress > 0.75 ? 1 : 0 }}>Power indicator (teal LED)</li>
              </ul>
            </TrackedCaption>
          </>
        )}
      </ScrollScrub>

      {/* Section 6 — Environment */}
      <ScrollScrub sectionId="environment" frameCount={60}>
        {(progress) => (
          <TrackedCaption progress={progress} start={0.3} end={0.7} position="center">
            <h2>Built for your environment.</h2>
            <p>The environment changes. The console stays.</p>
          </TrackedCaption>
        )}
      </ScrollScrub>

      {/* Section 7 — Software */}
      <ScrollScrub sectionId="software" frameCount={60}>
        {(progress) => (
          <TrackedCaption progress={progress} start={0.2} end={0.8} position="left">
            <h2>LeafOS. Custom Linux. Built in-house.</h2>
            <p>
              We wrote the OS ourselves. It runs on the Jetson natively, plays nice with our own launcher, and includes Box64 emulation for x86 Steam titles.
            </p>
            <p>No bloat. No subscription. Nothing you didn't ask for.</p>
          </TrackedCaption>
        )}
      </ScrollScrub>

      {/* Section 8 — USP Summary */}
      <section className="console-usp" id="usps">
        <FadeSection className="console-usp__inner">
          <div className="console-usp__grid">
            <div className="console-usp__item">
              <span className="console-usp__num">01</span>
              <h3>Furniture-grade design</h3>
              <p>It belongs in a room. Not on a tournament setup.</p>
            </div>
            <div className="console-usp__item">
              <span className="console-usp__num">02</span>
              <h3>Fully repairable</h3>
              <p>Every component documented. Every part replaceable. No void-warranty sticker.</p>
            </div>
            <div className="console-usp__item">
              <span className="console-usp__num">03</span>
              <h3>Wood PLA casing</h3>
              <p>Biodegradable, handcrafted-feeling, printable. If you already have a printer, we'll send you the files.</p>
            </div>
            <div className="console-usp__item">
              <span className="console-usp__num">04</span>
              <h3>Indie-first ecosystem</h3>
              <p>Built for cozy, creative, story-driven games. Not a port machine.</p>
            </div>
          </div>
        </FadeSection>
      </section>

      {/* Section 9 — Kickstarter Tiers */}
      <section className="console-tiers" id="kickstarter">
        <FadeSection className="console-tiers__inner">
          <h2>Back it on Kickstarter.</h2>
          <div className="console-tiers__grid">
            {TIERS.map((tier) => (
              <div key={tier.name} className="tier-card">
                <h3 className="tier-card__name">{tier.name}</h3>
                <p className="tier-card__desc">{tier.desc}</p>
                <span className="tier-card__price">{tier.price}</span>
              </div>
            ))}
          </div>
          <a href="#" className="console-tiers__cta">Back us on Kickstarter &nearr;</a>
        </FadeSection>
      </section>
    </main>
  );
}
