const roiCards = [
  {
    title: "Income Eksisting",
    value: "Rp 90-120 Juta",
    period: "/bulan",
    note: "Saat beroperasi dengan OYO",
    highlight: true,
  },
  {
    title: "Estimasi ROI",
    value: "10-13%",
    period: "/tahun",
    note: "Berdasarkan harga sekarang",
    highlight: true,
  },
  {
    title: "Diskon Special",
    value: "Rp 2.5 Miliar",
    period: "HEMAT",
    note: "Dari harga normal 13M",
    highlight: false,
  },
  {
    title: "Potensi Pengembangan",
    value: "+12 Kamar",
    period: "LAGI",
    note: "Bangunan belum jadi 60%",
    highlight: false,
  },
];

const useCaseTags = [
  "🏨 Hotel Budget",
  "🏠 Kost Eksklusif",
  "☕ Cafe/Resto",
  "🏢 Co-Working Space",
  "🏪 Minimarket",
];

export function InvestmentSection() {
  return (
    <section className="py-10 px-5" style={{ background: "#F5F5F5" }}>
      <div className="max-w-2xl mx-auto">
        <h2
          className="text-center font-bold mb-6"
          style={{ fontFamily: "Poppins, sans-serif", fontSize: "22px", color: "#1A1A1A" }}
        >
          💰 Potensi Investasi Menguntungkan
        </h2>

        <div className="grid grid-cols-2 gap-3 mb-6">
          {roiCards.map((card) => (
            <div
              key={card.title}
              className="rounded-xl p-4 flex flex-col"
              style={{
                background: "#FFFFFF",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                borderTop: card.highlight ? `3px solid #D4AF37` : `3px solid #2D5016`,
              }}
            >
              <span
                className="text-xs mb-2"
                style={{
                  color: "#9E9E9E",
                  fontFamily: "Inter, sans-serif",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                {card.title}
              </span>
              <span
                className="font-bold leading-tight"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "clamp(16px, 3.5vw, 22px)",
                  color: card.highlight ? "#D4AF37" : "#2D5016",
                }}
              >
                {card.value}
              </span>
              <span
                className="text-xs font-semibold mt-0.5"
                style={{
                  color: card.highlight ? "#D4AF37" : "#2D5016",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {card.period}
              </span>
              <span
                className="text-xs mt-2"
                style={{ color: "#9E9E9E", fontFamily: "Inter, sans-serif" }}
              >
                {card.note}
              </span>
            </div>
          ))}
        </div>

        {/* Use Case Tags */}
        <div className="flex flex-wrap gap-2 justify-center">
          {useCaseTags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 rounded-full text-sm font-medium"
              style={{
                background: "#FFFFFF",
                border: "1px solid #D4AF37",
                color: "#2D5016",
                fontFamily: "Inter, sans-serif",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
