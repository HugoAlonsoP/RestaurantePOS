// 🖼️ Importamos las imágenes de los íconos (Opción B)
import mobile from "../assets/icons/mobile.png";
import kitchen from "../assets/icons/kitchen.png";
import reports from "../assets/icons/reports.png";
import splitBill from "../assets/icons/split-bill.png";
import payments from "../assets/icons/payments.png";
import offline from "../assets/icons/offline.png";

function Features() {
  const features = [
    {
      img: mobile,
      title: "Comandas desde el móvil",
      desc: "Tus meseros toman pedidos desde cualquier dispositivo sin instalar nada.",
    },
    {
      img: kitchen,
      title: "Envío instantáneo a cocina",
      desc: "Los pedidos llegan en tiempo real a la pantalla de cocina y barra.",
    },
    {
      img: reports,
      title: "Reportes en vivo",
      desc: "Ventas, platos más pedidos y rendimiento por mesero al instante.",
    },
    {
      img: splitBill,
      title: "División de cuentas",
      desc: "Divide la cuenta entre comensales de forma rápida y sin errores.",
    },
    {
      img: payments,
      title: "Cobros integrados",
      desc: "Acepta efectivo, tarjeta o pagos digitales desde la misma app.",
    },
    {
      img: offline,
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
            <img className="feature-icon" src={f.img} alt={f.title} />
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;