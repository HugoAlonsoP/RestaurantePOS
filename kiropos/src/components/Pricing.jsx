import { Link } from "react-router-dom";

function Pricing() {
  const plans = [
    {
      name: "Básico",
      price: "$0",
      period: "/mes",
      desc: "Para restaurantes pequeños que están comenzando.",
      features: [
        "Hasta 3 meseros",
        "20 mesas",
        "Comandas ilimitadas",
        "Soporte por email",
      ],
      cta: "Comenzar gratis",
      highlight: false,
    },
    {
      name: "Pro",
      price: "$29",
      period: "/mes",
      desc: "Para restaurantes en crecimiento.",
      features: [
        "Meseros ilimitados",
        "Mesas ilimitadas",
        "Reportes avanzados",
        "Modo offline",
        "Soporte prioritario",
      ],
      cta: "Probar 14 días gratis",
      highlight: true,
    },
    {
      name: "Empresa",
      price: "$79",
      period: "/mes",
      desc: "Para cadenas y franquicias.",
      features: [
        "Todo lo de Pro",
        "Multi-sucursal",
        "API e integraciones",
        "Capacitación personalizada",
        "Gerente de cuenta",
      ],
      cta: "Contactar ventas",
      highlight: false,
    },
  ];

  return (
    <section className="pricing" id="pricing">
      <div className="section-header">
        <span className="section-tag">Precios</span>
        <h2>Planes para cada tamaño</h2>
        <p>Sin contratos. Cancela cuando quieras.</p>
      </div>

      <div className="pricing-grid">
        {plans.map((p, i) => (
          <div
            className={`pricing-card ${p.highlight ? "highlight" : ""}`}
            key={i}
          >
            {p.highlight && <span className="badge-popular">Más popular</span>}
            <h3>{p.name}</h3>
            <div className="price">
              <strong>{p.price}</strong>
              <span>{p.period}</span>
            </div>
            <p className="plan-desc">{p.desc}</p>
            <ul>
              {p.features.map((f, j) => (
                <li key={j}>✓ {f}</li>
              ))}
            </ul>
            <Link
              to="/login"
              className={p.highlight ? "btn-primary" : "btn-outline"}
            >
              {p.cta}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;