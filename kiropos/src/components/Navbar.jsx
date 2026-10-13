import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// 🖼️ Logo de la marca (imagen + texto)
import logo from "../assets/logo/kiropos-logo.png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
                <Link to="/" className="logo">
                  <img src={logo} alt="KiroPOS" className="logo-img" />
                  <span className="logo-text">KiroPOS</span>
                </Link>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><a href="#features">Características</a></li>
          <li><a href="#how">Cómo funciona</a></li>
          <li><a href="#pricing">Precios</a></li>
          <li>
            <Link to="/login" className="btn-nav-login">
              Iniciar Sesión
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;