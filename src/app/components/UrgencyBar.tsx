export function UrgencyBar() {
  return (
    <div
      className="w-full text-center text-white text-sm font-medium py-2.5 px-5"
      style={{
        background: "#C41E3A",
        fontFamily: "Inter, sans-serif",
        animation: "urgencyPulse 2.5s ease-in-out infinite",
      }}
    >
      <style>{`
        @keyframes urgencyPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.82; }
        }
      `}</style>
      ⚠️ Property OFF Sejak 2021 — Owner <strong>SERIUS JUAL</strong> | 3 Buyer Sudah Survey Minggu Ini
    </div>
  );
}
