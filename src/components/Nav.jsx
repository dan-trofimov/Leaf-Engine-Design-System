import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Nav.css';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <NavLink to="/" className="nav__logo" onClick={() => setMenuOpen(false)}>
          <span className="nav__logo-l">L</span>
        </NavLink>

        <button
          className={`nav__burger ${menuOpen ? 'nav__burger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>

        <ul className={`nav__links ${menuOpen ? 'nav__links--open' : ''}`}>
          <li>
            <NavLink to="/" end onClick={() => setMenuOpen(false)}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/console" onClick={() => setMenuOpen(false)}>Leaf Engine</NavLink>
          </li>
          <li>
            <NavLink to="/game" onClick={() => setMenuOpen(false)}>Roots of Resistance</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
