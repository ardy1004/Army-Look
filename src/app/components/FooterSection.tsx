export function FooterSection() {
  return (
    <footer className="py-10 px-5 text-center" style={{ background: "#1A1A1A" }}>
      <div className="max-w-2xl mx-auto flex flex-col items-center gap-4">
        <p
          className="font-semibold"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "18px",
            color: "#D4AF37",
          }}
        >
          📞 Jangan Lewatkan Kesempatan Ini!
        </p>

        <a
          href="https://wa.me/6281391278889"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-base"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          0813-9127-8889
        </a>

        <a
          href="https://wa.me/6281391278889"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-opacity hover:opacity-90"
          style={{
            background: "#25D366",
            fontFamily: "Poppins, sans-serif",
            fontSize: "15px",
          }}
        >
          💬 Chat WhatsApp Sekarang
        </a>

        <p
          className="text-xs mt-2"
          style={{ color: "#9E9E9E", fontFamily: "Inter, sans-serif" }}
        >
          © 2026 Ex Hotel Jogja Property. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
