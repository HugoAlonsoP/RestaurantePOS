function Features() {
  const features = [
    {
      icon: "📱",
      title: "Comandas desde el móvil",
      desc: "Tus meseros toman pedidos desde cualquier dispositivo sin instalar nada.",
    },
    {
      icon: "⚡",
      title: "Envío instantáneo a cocina",
      desc: "Los pedidos llegan en tiempo real a la pantalla de cocina y barra.",
    },
    {
      icon: "📊",
      title: "Reportes en vivo",
      desc: "Ventas, platos más pedidos y rendimiento por mesero al instante.",
    },
    {
      icon: "🧾",
      title: "División de cuentas",
      desc: "Divide la cuenta entre comensales de forma rápida y sin errores.",
    },
    {
      icon: "💳",
      title: "Cobros integrados",
      desc: "Acepta efectivo, tarjeta o pagos digitales desde la misma app.",
    },
    {
      icon: "🌐",
      title: "Funciona sin internet",
      desc: "Modo offline que sincroniza automáticamente cuando vuelve la red.",
    },
  ];

  return (
    <section className="features" id="features">
      <div className="section-header">
        <span className="section-tag">Características</span>
        <h2>Todo lo que tu restaurante necesita</h2>
        <p>Herramientas pensadas para la operación real de un restaurante.</p>
      </div>

      <div className="features-grid">
        {features.map((f, i) => (
          <div className="feature-card" key={i}>
            <div className="feature-icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;