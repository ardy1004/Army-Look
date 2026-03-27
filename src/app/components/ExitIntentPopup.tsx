import { useEffect, useState } from "react";
import { X } from "lucide-react";

export function ExitIntentPopup() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 5 && !dismissed) {
        setTimeout(() => {
          setVisible(true);
        }, 500);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [dismissed]);

  const handleDismiss = () => {
    setVisible(false);
    setDismissed(true);
  };

  const handleWA = () => {
    window.open("https://wa.me/6281391278889?text=Halo%2C%20saya%20ingin%20info%20lebih%20lanjut%20mengenai%20Ex%20Hotel%20Jogja.", "_blank");
    handleDismiss();
  };

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center px-5"
      style={{ background: "rgba(0,0,0,0.65)" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleDismiss();
      }}
    >
      <div
        className="relative w-full max-w-sm rounded-2xl p-6 flex flex-col items-center text-center"
        style={{ background: "#FFFFFF" }}
      >
        <button
          onClick={handleDismiss}
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full"
          style={{ background: "#F5F5F5" }}
          aria-label="Close"
        >
          <X size={16} color="#4A4A4A" />
        </button>

        <div className="text-4xl mb-3">⏳</div>
        <h3
          className="font-bold mb-2"
          style={{ fontFamily: "Poppins, sans-serif", fontSize: "20px", color: "#1A1A1A" }}
        >
          Tunggu! Download Info Lengkap Dulu
        </h3>
        <p
          className="text-sm mb-5"
          style={{ color: "#4A4A4A", fontFamily: "Inter, sans-serif", lineHeight: 1.6 }}
        >
          Dapatkan brochure lengkap dengan detail properti sebelum Anda pergi
        </p>

        <button
          onClick={handleWA}
          className="w-full py-3.5 rounded-xl font-semibold text-white mb-3 transition-opacity hover:opacity-90"
          style={{
            background: "#25D366",
            fontFamily: "Poppins, sans-serif",
            fontSize: "16px",
            boxShadow: "0 4px 12px rgba(37,211,102,0.35)",
          }}
        >
          📲 Kirim ke WhatsApp Saya
        </button>

        <button
          onClick={handleDismiss}
          className="text-sm"
          style={{ color: "#9E9E9E", fontFamily: "Inter, sans-serif" }}
        >
          Tidak, Saya Tidak Tertarik
        </button>
      </div>
    </div>
  );
}
