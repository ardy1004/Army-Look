const trustItems = [
  { icon: "🔐", title: "SHM Clear", desc: "Legalitas lengkap & siap AJB" },
  { icon: "📊", title: "Track Record", desc: "Pernah produktif dengan OYO" },
  { icon: "👤", title: "Owner Langsung", desc: "Tanpa calo, nego langsung" },
  { icon: "📍", title: "Lokasi Terbukti", desc: "Dalam ringroad, akses mudah" },
];

export function TrustSection() {
  return (
    <section className="py-10 px-5" style={{ background: "#2D5016" }}>
      <div className="max-w-2xl mx-auto">
        <h2
          className="text-center font-bold text-white mb-8"
          style={{ fontFamily: "Poppins, sans-serif", fontSize: "22px" }}
        >
          ✅ Kenapa Properti Ini Terpercaya?
        </h2>

        <div className="grid grid-cols-2 gap-4">
          {trustItems.map((item) => (
            <div key={item.title} className="flex flex-col items-center text-center gap-2">
              <span className="text-4xl">{item.icon}</span>
              <span
                className="text-white font-semibold text-base"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                {item.title}
              </span>
              <span
                className="text-sm"
                style={{ color: "rgba(255,255,255,0.78)", fontFamily: "Inter, sans-serif" }}
              >
                {item.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
