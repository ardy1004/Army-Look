import { useState } from "react";

interface FormData {
  name: string;
  whatsapp: string;
  budget: string;
  purpose: string;
  timeline: string;
}

const budgetOptions = [
  { value: "Cash Keras", label: "Cash Keras" },
  { value: "Cash Bertahap", label: "Cash Bertahap" },
  { value: "KPR Bank", label: "KPR Bank" },
];

const purposeOptions = [
  { value: "Investasi (redevelop)", label: "Investasi (redevelop)" },
  { value: "Usaha sendiri", label: "Usaha sendiri" },
  { value: "Lainnya", label: "Lainnya" },
];

const timelineOptions = [
  { value: "minggu_ini", label: "Minggu Ini" },
  { value: "2_minggu", label: "2 Minggu lagi" },
  { value: "bulan_ini", label: "Bulan Ini" },
  { value: "bulan_depan", label: "Bulan depan" },
  { value: "belum_tau", label: "Belum Tau" },
];

const fieldStyle: React.CSSProperties = {
  height: "52px",
  borderRadius: "8px",
  border: "1.5px solid #E0E0E0",
  padding: "0 14px",
  fontSize: "15px",
  fontFamily: "Inter, sans-serif",
  width: "100%",
  background: "#fff",
  color: "#1A1A1A",
  outline: "none",
  transition: "border-color 0.2s",
};

const labelStyle: React.CSSProperties = {
  fontFamily: "Inter, sans-serif",
  fontSize: "14px",
  fontWeight: 500,
  color: "#4A4A4A",
  marginBottom: "6px",
  display: "block",
};

function FieldLabel({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return (
    <label style={labelStyle}>
      {children}
      {required && <span style={{ color: "#C41E3A" }}> *</span>}
    </label>
  );
}

interface FocusState {
  [key: string]: boolean;
}

export function LeadForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    whatsapp: "",
    budget: "",
    purpose: "",
    timeline: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [focus, setFocus] = useState<FocusState>({});
  const [submitted, setSubmitted] = useState(false);
  const [rejected, setRejected] = useState(false);

  function validate(): boolean {
    const errs: Partial<Record<keyof FormData, string>> = {};
    if (!form.name || form.name.trim().length < 2) errs.name = "Nama minimal 2 karakter";
    if (!form.whatsapp || !/^08\d{8,11}$/.test(form.whatsapp.replace(/[\s-]/g, "")))
      errs.whatsapp = "Masukkan nomor WhatsApp yang valid (08xxx)";
    if (!form.budget) errs.budget = "Pilih range budget";
    if (!form.purpose) errs.purpose = "Pilih tujuan pembelian";
    if (!form.timeline) errs.timeline = "Pilih rencana transaksi";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  function getBudgetLabel(val: string) {
    return budgetOptions.find((o) => o.value === val)?.label ?? val;
  }
  function getPurposeLabel(val: string) {
    return purposeOptions.find((o) => o.value === val)?.label ?? val;
  }
  function getTimelineLabel(val: string) {
    return timelineOptions.find((o) => o.value === val)?.label ?? val;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setRejected(false);
    if (!validate()) return;

    // ===== QUALIFICATION FILTER =====
    // Reject if timeline = Belum Tau
    if (form.timeline === "belum_tau") {
      setRejected(true);
      return;
    }

    // ===== QUALIFIED → REDIRECT =====
    const whatsappClean = form.whatsapp.replace(/[\s-]/g, "");
    const whatsappFormatted = whatsappClean.startsWith("0")
      ? "62" + whatsappClean.substring(1)
      : whatsappClean;

    const msg = encodeURIComponent(
      `Halo, saya sudah baca detail properti Jalan Godean Km.5 (dalam Ringroad Jogja).\n\n📋 *DATA SAYA:*\n• Nama: ${form.name}\n• WhatsApp: ${form.whatsapp}\n• Budget: ${getBudgetLabel(form.budget)}\n• Tujuan: ${getPurposeLabel(form.purpose)}\n• Rencana Survey: ${getTimelineLabel(form.timeline)}\n\nSaya siap diskusi serius dan survey lokasi. Terima kasih!`
    );

    setSubmitted(true);
    setTimeout(() => {
      window.open(`https://wa.me/${whatsappFormatted}?text=${msg}`, "_blank");
      setSubmitted(false);
    }, 1500);
  }

  function getFocusStyle(field: string): React.CSSProperties {
    return {
      ...fieldStyle,
      borderColor: focus[field] ? "#D4AF37" : errors[field as keyof FormData] ? "#C41E3A" : "#E0E0E0",
    };
  }

  function RadioGroup({
    options,
    name,
    value,
    onChange,
  }: {
    options: { value: string; label: string }[];
    name: string;
    value: string;
    onChange: (val: string) => void;
  }) {
    return (
      <div className="flex flex-col gap-2">
        {options.map((o) => (
          <label
            key={o.value}
            className="flex items-center gap-3 px-4 rounded-lg cursor-pointer"
            style={{
              height: "48px",
              border: `1.5px solid ${value === o.value ? "#D4AF37" : "#E0E0E0"}`,
              background: value === o.value ? "rgba(212,175,55,0.08)" : "#fff",
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
              color: "#1A1A1A",
            }}
          >
            <input
              type="radio"
              name={name}
              value={o.value}
              checked={value === o.value}
              onChange={() => onChange(o.value)}
              style={{ accentColor: "#D4AF37" }}
            />
            {o.label}
          </label>
        ))}
      </div>
    );
  }

  return (
    <section
      id="lead-form"
      className="py-10 px-5"
      style={{ background: "#FFFFFF", borderTop: "4px solid #D4AF37" }}
    >
      <div className="max-w-2xl mx-auto">
        <h2
          className="text-center font-bold mb-2"
          style={{ fontFamily: "Poppins, sans-serif", fontSize: "22px", color: "#1A1A1A" }}
        >
          Cek Kelayakan Anda Sebelum Survey Lokasi
        </h2>
        <p className="text-center text-sm mb-6" style={{ color: "#9E9E9E", fontFamily: "Inter, sans-serif" }}>
          Hanya calon pembeli yang memenuhi kriteria yang akan kami respon
        </p>

        {/* Rejection Message */}
        {rejected && (
          <div
            className="text-center py-4 px-5 rounded-xl mb-5"
            style={{ background: "#FEF2F2", border: "1px solid #FECACA" }}
          >
            <p className="font-bold mb-1" style={{ color: "#B91C1C", fontFamily: "Poppins, sans-serif", fontSize: "16px" }}>
              Properti Ini Tidak Sesuai Dengan Kebutuhan Anda
            </p>
            <p style={{ color: "#4A4A4A", fontSize: "14px", lineHeight: 1.5 }}>
              Berdasarkan jawaban Anda, listing ini kurang cocok. Kami akan hubungi jika ada properti lain yang lebih sesuai.
            </p>
          </div>
        )}

        {/* Success Message */}
        {submitted && (
          <div
            className="text-center py-4 px-5 rounded-xl mb-5"
            style={{ background: "#f0fdf4", border: "1px solid #BBF7D0" }}
          >
            <p className="font-bold mb-1" style={{ color: "#16A34A", fontFamily: "Poppins, sans-serif", fontSize: "16px" }}>
              Anda Memenuhi Kriteria ✓
            </p>
            <p style={{ color: "#4A4A4A", fontSize: "14px" }}>Mengarahkan ke WhatsApp...</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
          {/* Nama */}
          <div>
            <FieldLabel required>Nama</FieldLabel>
            <input
              type="text"
              placeholder="Masukkan nama lengkap"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              onFocus={() => setFocus({ ...focus, name: true })}
              onBlur={() => setFocus({ ...focus, name: false })}
              style={getFocusStyle("name")}
              aria-required="true"
            />
            {errors.name && (
              <span className="text-xs mt-1 block" style={{ color: "#C41E3A" }}>
                {errors.name}
              </span>
            )}
          </div>

          {/* WhatsApp */}
          <div>
            <FieldLabel required>Nomor WhatsApp</FieldLabel>
            <input
              type="tel"
              placeholder="08xxxxxxxxxx"
              value={form.whatsapp}
              onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
              onFocus={() => setFocus({ ...focus, whatsapp: true })}
              onBlur={() => setFocus({ ...focus, whatsapp: false })}
              style={getFocusStyle("whatsapp")}
              aria-required="true"
            />
            {errors.whatsapp && (
              <span className="text-xs mt-1 block" style={{ color: "#C41E3A" }}>
                {errors.whatsapp}
              </span>
            )}
          </div>

          {/* Rencana Pembayaran */}
          <div>
            <FieldLabel required>Rencana Pembayaran</FieldLabel>
            <select
              value={form.budget}
              onChange={(e) => setForm({ ...form, budget: e.target.value })}
              onFocus={() => setFocus({ ...focus, budget: true })}
              onBlur={() => setFocus({ ...focus, budget: false })}
              style={{ ...getFocusStyle("budget"), cursor: "pointer" }}
              aria-required="true"
            >
              <option value="">Pilih rencana pembayaran...</option>
              {budgetOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
            {errors.budget && (
              <span className="text-xs mt-1 block" style={{ color: "#C41E3A" }}>
                {errors.budget}
              </span>
            )}
          </div>

          {/* Tujuan Beli */}
          <div>
            <FieldLabel required>Tujuan Beli</FieldLabel>
            <select
              value={form.purpose}
              onChange={(e) => setForm({ ...form, purpose: e.target.value })}
              onFocus={() => setFocus({ ...focus, purpose: true })}
              onBlur={() => setFocus({ ...focus, purpose: false })}
              style={{ ...getFocusStyle("purpose"), cursor: "pointer" }}
              aria-required="true"
            >
              <option value="">Pilih tujuan pembelian...</option>
              {purposeOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
            {errors.purpose && (
              <span className="text-xs mt-1 block" style={{ color: "#C41E3A" }}>
                {errors.purpose}
              </span>
            )}
          </div>

          {/* Timeline */}
          <div>
            <FieldLabel required>Kapan rencana Survey Lokasi?</FieldLabel>
            <RadioGroup
              options={timelineOptions}
              name="timeline"
              value={form.timeline}
              onChange={(val) => {
                setForm({ ...form, timeline: val });
                setErrors({ ...errors, timeline: undefined });
              }}
            />
            {errors.timeline && (
              <span className="text-xs mt-1 block" style={{ color: "#C41E3A" }}>
                {errors.timeline}
              </span>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full font-bold text-white rounded-lg flex items-center justify-center gap-2 transition-transform active:scale-95"
            style={{
              background: "#25D366",
              height: "60px",
              fontSize: "18px",
              fontFamily: "Poppins, sans-serif",
              boxShadow: "0 4px 12px rgba(37, 211, 102, 0.4)",
              letterSpacing: "0.3px",
            }}
            disabled={submitted}
          >
            Lanjut ke WhatsApp →
          </button>

          <p className="text-xs text-center" style={{ color: "#9E9E9E", fontFamily: "Inter, sans-serif" }}>
            🔒 Data Anda aman &amp; hanya untuk keperluan komunikasi properti
          </p>
        </form>
      </div>
    </section>
  );
}