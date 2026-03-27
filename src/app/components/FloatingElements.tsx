import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function FloatingElements({ onScrollToForm }: { onScrollToForm: () => void }) {
  const [showScroll, setShowScroll] = useState(false);
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 500);
      setShowStickyBar(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/6281391278889"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed z-[9999] flex items-center justify-center rounded-full shadow-lg transition-transform hover:scale-105"
        style={{
          bottom: showStickyBar ? "84px" : "20px",
          right: "20px",
          width: "60px",
          height: "60px",
          background: "#25D366",
          transition: "bottom 0.3s ease",
          animation: "waPulse 2.5s ease-in-out infinite",
        }}
        aria-label="Chat via WhatsApp"
        title="Chat via WhatsApp"
      >
        <style>{`
          @keyframes waPulse {
            0%, 100% { box-shadow: 0 0 0 0 rgba(37,211,102,0.5); }
            50% { box-shadow: 0 0 0 12px rgba(37,211,102,0); }
          }
        `}</style>
        <svg viewBox="0 0 24 24" fill="white" width="32" height="32">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      {/* Scroll to Top */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed z-[9998] flex items-center justify-center rounded-full shadow-md transition-all hover:scale-105"
          style={{
            bottom: showStickyBar ? "152px" : "88px",
            right: "20px",
            width: "48px",
            height: "48px",
            background: "#D4AF37",
            transition: "bottom 0.3s ease",
          }}
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} color="#1A1A1A" />
        </button>
      )}

      {/* Sticky Bottom CTA */}
      {showStickyBar && (
        <div
          className="fixed bottom-0 left-0 right-0 z-[9997] flex items-center px-4"
          style={{
            height: "64px",
            background: "#FFFFFF",
            boxShadow: "0 -2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <button
            onClick={onScrollToForm}
            className="w-full h-12 rounded-lg font-semibold text-black transition-transform active:scale-95"
            style={{
              background: "#D4AF37",
              fontFamily: "Poppins, sans-serif",
              fontSize: "15px",
            }}
          >
             📞 Hubungi Kami Sekarang
          </button>
        </div>
      )}
    </>
  );
}
