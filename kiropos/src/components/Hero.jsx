import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="badge">Nuevo · Sistema todo en uno</span>
        <h1>
          Toma comandas <span className="highlight">más rápido</span> y
          atiende mejor
        </h1>
        <p>
          La plataforma diseñada para meseros y restaurantes. Toma pedidos
          desde tu celular, envíalos directo a cocina y olvídate del papel.
        </p>

        <div className="hero-buttons">
          <Link to="/login" className="btn-primary">
            Comenzar gratis →
          </Link>
          <a href="#how" className="btn-secondary">
            Ver demo
          </a>
        </div>

        <div className="hero-stats">
          <div>
            <strong>+500</strong>
            <span>Restaurantes</span>
          </div>
          <div>
            <strong>30%</strong>
            <span>Más rápido</span>
          </div>
          <div>
            <strong>4.9★</strong>
            <span>Valoración</span>
          </div>
        </div>
      </div>

      <div className="hero-image">
        <div className="phone-mockup">
          <div className="phone-header">
            <span>Mesa 5 · Juan</span>
          </div>
          <div className="phone-body">
            <div className="order-item">🍕 Pizza Margarita <b>$12.00</b></div>
            <div className="order-item">🥗 Ensalada César <b>$8.50</b></div>
            <div className="order-item">🥤 Coca-Cola <b>$3.00</b></div>
            <div className="order-total">
              Total <b>$23.50</b>
            </div>
            <button className="order-btn">Enviar a cocina</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;