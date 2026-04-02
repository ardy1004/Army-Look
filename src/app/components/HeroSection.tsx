interface HeroSectionProps {
  onScrollToForm: () => void;
}

export function HeroSection({ onScrollToForm }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dhjhgedd9/image/upload/v1774622832/aBWlX_logewz.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.48) 100%)",
        }}
      />

      <div className="relative z-10 w-full max-w-2xl mx-auto px-5 py-16 flex flex-col items-center gap-4">
        {/* Urgency Badge */}
        <span
          className="inline-block text-white text-sm font-semibold px-4 py-2 rounded-full animate-pulse"
          style={{ background: "#C41E3A", letterSpacing: "0.3px" }}
        >
          DIJUAL — TANAH KOMERSIAL 747m²
        </span>

        {/* Headline — filter mindset */}
        <h1
          className="text-white font-bold leading-tight"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "clamp(24px, 5vw, 42px)",
            lineHeight: 1.2,
            textShadow: "0 2px 8px rgba(0,0,0,0.4)",
          }}
        >
          Tanah Komersial Dalam Ringroad Jogja – Fokus ke Lokasi, Bukan Bangunan
        </h1>

        {/* Subheadline — tegas */}
        <p className="text-gray-200 text-base max-w-md mx-auto" style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.7 }}>
          Properti ini cocok untuk <strong style={{ color: "#E0E0E0" }}>investor yang paham value tanah</strong> &amp; siap renovasi / bangun ulang.
          Bukan untuk yang cari bangunan siap pakai.
        </p>

        {/* Price Display */}
        <div className="flex flex-col items-center gap-1 mt-2">
          <span
            className="text-gray-400 line-through text-base"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Rp 13.000.000.000
          </span>
          <div className="flex items-center gap-3">
            <span
              className="font-bold"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "clamp(28px, 6vw, 42px)",
                color: "#D4AF37",
              }}
            >
              Rp 10,5 M
            </span>
            <span
              className="text-xs font-bold px-3 py-1 rounded"
              style={{ background: "#D4AF37", color: "#1A1A1A" }}
            >
              TURUN 2,5M
            </span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col w-full gap-3 mt-2">
          <button
            onClick={onScrollToForm}
            className="w-full text-white font-semibold rounded-lg transition-transform active:scale-95"
            style={{
              background: "#D4AF37",
              height: "56px",
              fontSize: "16px",
              fontFamily: "Poppins, sans-serif",
              boxShadow: "0 4px 12px rgba(212, 175, 55, 0.45)",
              letterSpacing: "0.3px",
            }}
          >
            Saya Siap Survey &amp; Diskusi Serius
          </button>
          <a
            href="https://wa.me/6281391278889"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-white font-semibold rounded-lg flex items-center justify-center transition-transform active:scale-95"
            style={{
              background: "#25D366",
              height: "56px",
              fontSize: "16px",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            💬 Chat WhatsApp
          </a>
        </div>

        {/* Trust Badges */}
        <div
          className="flex w-full justify-around mt-2 rounded-xl px-3 py-3"
          style={{ background: "rgba(255,255,255,0.12)" }}
        >
          {[
            { icon: "📐", text: "747 m²" },
            { icon: "📍", text: "Dalam Ringroad" },
            { icon: "⏱️", text: "±10 mnt ke Tugu" },
          ].map((badge) => (
            <div key={badge.text} className="flex flex-col items-center gap-1">
              <span className="text-xl">{badge.icon}</span>
              <span className="text-white text-xs font-medium">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}