function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Regístrate",
      desc: "Crea tu cuenta y configura tu restaurante en menos de 5 minutos.",
    },
    {
      num: "02",
      title: "Agrega tu menú",
      desc: "Sube tus platillos, precios y categorías con nuestro editor.",
    },
    {
      num: "03",
      title: "Invita a tu equipo",
      desc: "Crea usuarios para meseros, cocina y caja con permisos.",
    },
    {
      num: "04",
      title: "¡A vender!",
      desc: "Empieza a tomar comandas y mira cómo mejora tu servicio.",
    },
  ];

  return (
    <section className="how" id="how">
      <div className="section-header">
        <span className="section-tag">Cómo funciona</span>
        <h2>Empieza en minutos</h2>
        <p>Sin instalaciones complicadas ni capacitaciones largas.</p>
      </div>

      <div className="steps-grid">
        {steps.map((s, i) => (
          <div className="step-card" key={i}>
            <div className="step-number">{s.num}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;