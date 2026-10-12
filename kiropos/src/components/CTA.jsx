import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2>¿Listo para modernizar tu restaurante?</h2>
        <p>
          Únete a cientos de restaurantes que ya trabajan más rápido con
          ComandaPro.
        </p>
        <Link to="/login" className="btn-primary btn-lg">
          Comenzar ahora →
        </Link>
      </div>
    </section>
  );
}

export default CTA;