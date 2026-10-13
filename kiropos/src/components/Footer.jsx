// 🖼️ Logo de la marca para el footer
import logo from "../assets/logo/kiropos-logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
                <div className="footer-brand">
          <img src={logo} alt="KiroPOS" className="footer-logo" />
          <h3>KiroPOS</h3>
          <p>El sistema de comandas para restaurantes modernos.</p>
        </div>

        <div className="footer-col">
          <h4>Producto</h4>
          <a href="#features">Características</a>
          <a href="#pricing">Precios</a>
          <a href="#how">Cómo funciona</a>
        </div>

        <div className="footer-col">
          <h4>Empresa</h4>
          <a href="#">Sobre nosotros</a>
          <a href="#">Contacto</a>
          <a href="#">Blog</a>
        </div>

        <div className="footer-col">
          <h4>Legal</h4>
          <a href="#">Términos</a>
          <a href="#">Privacidad</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} KiroPOS. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;