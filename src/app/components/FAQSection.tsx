import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Apakah harga masih bisa nego?",
    answer:
      "Harga sudah diskon 2.5M dari 13M jadi 10.5M. Untuk pembeli serius yang siap transaksi cepat, masih ada ruang diskusi dengan owner.",
  },
  {
    question: "Bagaimana status legalitas?",
    answer:
      "SHM (Sertifikat Hak Milik) clear & lengkap. Siap proses AJB segera setelah deal.",
  },
  {
    question: "Apakah bisa KPR?",
    answer:
      "Bisa KPR Bank. Kami bisa rekomendasikan bank partner untuk proses lebih cepat.",
  },
  {
    question: "Berapa lama proses AJB?",
    answer:
      "Normal 14-21 hari kerja. Bisa lebih cepat jika dokumen lengkap & pembayaran clear.",
  },
  {
    question: "Apakah ada biaya tambahan?",
    answer:
      "Biaya AJB, BPHTB, dan notaris sesuai ketentuan pemerintah. Tidak ada biaya tersembunyi.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-10 px-5" style={{ background: "#FAFAFA" }}>
      <div className="max-w-2xl mx-auto">
        <h2
          className="text-center font-bold mb-6"
          style={{ fontFamily: "Poppins, sans-serif", fontSize: "22px", color: "#1A1A1A" }}
        >
          ❓ Pertanyaan Yang Sering Diajukan
        </h2>

        <div className="flex flex-col gap-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-xl overflow-hidden"
              style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-4 py-4 text-left"
                aria-expanded={openIndex === i}
              >
                <span
                  className="font-semibold pr-4"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "15px",
                    color: "#1A1A1A",
                  }}
                >
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  style={{
                    color: "#D4AF37",
                    transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                    flexShrink: 0,
                  }}
                />
              </button>

              <div
                style={{
                  maxHeight: openIndex === i ? "200px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.35s ease",
                }}
              >
                <p
                  className="px-4 pb-4 text-sm"
                  style={{ color: "#4A4A4A", fontFamily: "Inter, sans-serif", lineHeight: 1.6 }}
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
