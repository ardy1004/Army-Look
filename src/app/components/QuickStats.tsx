const stats = [
  { icon: "🏢", value: "12", label: "Kamar Tidur", sublabel: "+ Kamar Mandi Dalam" },
  { icon: "📐", value: "747m²", label: "Luas Tanah", sublabel: "LB 950m²" },
  { icon: "🏪", value: "1", label: "Ruang Usaha", sublabel: "Depan (Cafe/Resto)" },
  { icon: "🏠", value: "4", label: "Kamar Rumah Induk", sublabel: "+ Dapur & Ruang Tengah" },
];

export function QuickStats() {
  return (
    <section className="bg-white py-10 px-5">
      <div className="max-w-2xl mx-auto grid grid-cols-2 gap-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center text-center rounded-xl p-5"
            style={{ background: "#F5F5F5" }}
          >
            <span className="text-3xl mb-2">{stat.icon}</span>
            <span
              className="font-bold"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "26px",
                color: "#2D5016",
              }}
            >
              {stat.value}
            </span>
            <span
              className="text-sm mt-0.5"
              style={{ color: "#4A4A4A", fontFamily: "Inter, sans-serif" }}
            >
              {stat.label}
            </span>
            <span
              className="text-xs mt-0.5"
              style={{ color: "#9E9E9E", fontFamily: "Inter, sans-serif" }}
            >
              {stat.sublabel}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
