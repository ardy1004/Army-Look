const locations = [
  { icon: "🛍️", name: "Mirota Godean", distance: "1.3 km", time: "5 menit" },
  { icon: "🏛️", name: "Tugu Jogja", distance: "3.4 km", time: "10 menit" },
  { icon: "🚆", name: "Stasiun Tugu", distance: "3.7 km", time: "12 menit" },
  { icon: "🚶", name: "Malioboro", distance: "3.7 km", time: "12 menit" },
  { icon: "🏬", name: "Jogja City Mall", distance: "6.3 km", time: "18 menit" },
  { icon: "🛣️", name: "Akses Jalan Utama", distance: "Dalam Ringroad", time: "Akses Mudah" },
];

export function LocationSection() {
  return (
    <section className="bg-white py-10 px-5">
      <div className="max-w-2xl mx-auto">
        <h2
          className="text-center font-bold mb-6"
          style={{ fontFamily: "Poppins, sans-serif", fontSize: "22px", color: "#1A1A1A" }}
        >
          🗺️ Lokasi Emas di Pusat Jogja
        </h2>

        <div className="rounded-xl overflow-hidden border border-gray-100">
          {locations.map((loc, i) => (
            <div
              key={loc.name}
              className="flex items-center gap-4 px-4 py-4"
              style={{
                borderBottom: i < locations.length - 1 ? "1px solid #E0E0E0" : "none",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <span className="text-2xl flex-shrink-0">{loc.icon}</span>
              <span className="flex-1 text-base font-medium" style={{ color: "#1A1A1A" }}>
                {loc.name}
              </span>
              <div className="flex flex-col items-end">
                <span className="text-sm font-semibold" style={{ color: "#2D5016" }}>
                  {loc.distance}
                </span>
                <span className="text-xs" style={{ color: "#9E9E9E" }}>
                  {loc.time}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Map Embed placeholder */}
        <a
          href="https://maps.google.com/?q=Yogyakarta,Indonesia"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 mt-4 py-3 rounded-xl border-2 text-sm font-medium transition-colors"
          style={{
            borderColor: "#D4AF37",
            color: "#2D5016",
            fontFamily: "Inter, sans-serif",
          }}
        >
          📍 Buka di Google Maps
        </a>
      </div>
    </section>
  );
}
