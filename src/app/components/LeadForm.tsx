import { useState } from "react";

interface FormData {
  name: string;
  whatsapp: string;
  email: string;
  survey_readiness: string;
  survey_date: string;
  payment_plan: string;
  budget_range: string;
  purpose: string;
}

const surveyReadinessOptions = [
  { value: "this_week", label: "🔥 Minggu Ini (Saya Serius!)" },
  { value: "two_weeks", label: "2 Minggu Ke Depan" },
  { value: "next_month", label: "Bulan Depan" },
  { value: "considering", label: "Masih Pertimbangan Awal" },
];

const paymentPlanOptions = [
  { value: "hard_cash", label: "💵 Hard Cash (Tunai Langsung)" },
  { value: "soft_cash", label: "📋 Soft Cash (Cicilan Developer)" },
  { value: "kpr_bank", label: "🏦 KPR / Bank" },
  { value: "consult", label: "🤔 Masih Konsultasi" },
];

const budgetRangeOptions = [
  { value: "8_10b", label: "Rp 8 - 10 Miliar" },
  { value: "10_12b", label: "Rp 10 - 12 Miliar" },
  { value: "12b_plus", label: "Rp 12 Miliar+" },
  { value: "flexible", label: "Fleksibel (Nego)" },
];

const purposeOptions = [
  { value: "investment", label: "📈 Investasi (Sewa/Kost)" },
  { value: "business", label: "🏪 Usaha (Hotel/Cafe)" },
  { value: "personal", label: "🏠 Hunian Pribadi" },
  { value: "mixed", label: "🔄 Kombinasi" },
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
    email: "",
    survey_readiness: "",
    survey_date: "",
    payment_plan: "",
    budget_range: "",
    purpose: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [focus, setFocus] = useState<FocusState>({});
  const [submitted, setSubmitted] = useState(false);

  const showDateField =
    form.survey_readiness === "this_week" || form.survey_readiness === "two_weeks";

  const today = new Date().toISOString().split("T")[0];
  const maxDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split("T")[0];

  function validate(): boolean {
    const errs: Partial<FormData> = {};
    if (!form.name || form.name.trim().length < 2) errs.name = "Nama minimal 2 karakter";
    if (!form.whatsapp || !/^08\d{8,11}$/.test(form.whatsapp.replace(/[\s-]/g, "")))
      errs.whatsapp = "Masukkan nomor WhatsApp yang valid (08xxx)";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Format email tidak valid";
    if (!form.survey_readiness) errs.survey_readiness = "Pilih rencana survey";
    if (!form.payment_plan) errs.payment_plan = "Pilih rencana pembiayaan";
    // budget_range disembunyikan, tidak divalidasi
    if (!form.purpose) errs.purpose = "Pilih tujuan pembelian";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  function getSurveyLabel(val: string) {
    return surveyReadinessOptions.find((o) => o.value === val)?.label ?? val;
  }
  function getPaymentLabel(val: string) {
    return paymentPlanOptions.find((o) => o.value === val)?.label ?? val;
  }
  function getBudgetLabel(val: string) {
    return budgetRangeOptions.find((o) => o.value === val)?.label ?? val;
  }
  function getPurposeLabel(val: string) {
    return purposeOptions.find((o) => o.value === val)?.label ?? val;
  }

   function handleSubmit(e: React.FormEvent) {
     e.preventDefault();
     if (!validate()) return;

     // Format WhatsApp number for link (remove leading 0 and add country code 62)
     const whatsappClean = form.whatsapp.replace(/[\s-]/g, '');
     const whatsappFormatted = whatsappClean.startsWith('0') 
       ? '62' + whatsappClean.substring(1) 
       : whatsappClean;

     const msg = encodeURIComponent(
       `Halo, saya tertarik dengan Properti Ex Hotel Jogja.\n\n📋 DATA SAYA:\n• Nama: ${form.name}\n• WhatsApp: ${form.whatsapp}\n• Email: ${form.email || "-"}\n• Rencana Survey: ${getSurveyLabel(form.survey_readiness)}\n• Tanggal Survey: ${form.survey_date || "-"}\n• Pembiayaan: ${getPaymentLabel(form.payment_plan)}\n• Budget: ${getBudgetLabel(form.budget_range) || "-"}\n• Tujuan: ${getPurposeLabel(form.purpose)}\n\nMohon info lebih lanjut. Terima kasih!`
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
          📋 Dapatkan Info Lengkap & Jadwalkan Survey
        </h2>
        <p className="text-center text-sm mb-6" style={{ color: "#9E9E9E", fontFamily: "Inter, sans-serif" }}>
          Isi form di bawah, kami akan hubungi via WhatsApp dalam 15 menit
        </p>

        {submitted && (
          <div
            className="text-center py-4 px-5 rounded-xl mb-5 font-semibold"
            style={{ background: "#f0fdf4", color: "#2D5016", fontFamily: "Inter, sans-serif" }}
          >
            ✅ Data terkirim! Anda akan diarahkan ke WhatsApp...
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
          {/* Nama */}
          <div>
            <FieldLabel required>Nama Lengkap</FieldLabel>
            <input
              type="text"
              placeholder="Masukkan nama Anda"
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
               placeholder="08xx-xxxx-xxxx"
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

          {/* Email */}
          <div>
            <FieldLabel>Email (Opsional)</FieldLabel>
            <input
              type="email"
              placeholder="email@anda.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              onFocus={() => setFocus({ ...focus, email: true })}
              onBlur={() => setFocus({ ...focus, email: false })}
              style={getFocusStyle("email")}
            />
            {errors.email && (
              <span className="text-xs mt-1 block" style={{ color: "#C41E3A" }}>
                {errors.email}
              </span>
            )}
          </div>

          {/* Survey Readiness */}
          <div>
            <FieldLabel required>Kapan Anda Berencana Survey Lokasi?</FieldLabel>
            <select
              value={form.survey_readiness}
              onChange={(e) => setForm({ ...form, survey_readiness: e.target.value, survey_date: "" })}
              onFocus={() => setFocus({ ...focus, survey_readiness: true })}
              onBlur={() => setFocus({ ...focus, survey_readiness: false })}
              style={{ ...getFocusStyle("survey_readiness"), cursor: "pointer" }}
              aria-required="true"
            >
              <option value="">Pilih waktu survey...</option>
              {surveyReadinessOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
            {errors.survey_readiness && (
              <span className="text-xs mt-1 block" style={{ color: "#C41E3A" }}>
                {errors.survey_readiness}
              </span>
            )}
          </div>

          {/* Survey Date (conditional) */}
          {showDateField && (
            <div>
              <FieldLabel>Pilih Tanggal Survey</FieldLabel>
              <input
                type="date"
                min={today}
                max={maxDate}
                value={form.survey_date}
                onChange={(e) => setForm({ ...form, survey_date: e.target.value })}
                onFocus={() => setFocus({ ...focus, survey_date: true })}
                onBlur={() => setFocus({ ...focus, survey_date: false })}
                style={getFocusStyle("survey_date")}
              />
            </div>
          )}

          {/* Payment Plan */}
          <div>
            <FieldLabel required>Rencana Pembiayaan</FieldLabel>
            <div className="flex flex-col gap-2">
              {paymentPlanOptions.map((o) => (
                <label
                  key={o.value}
                  className="flex items-center gap-3 px-4 rounded-lg cursor-pointer"
                  style={{
                    height: "48px",
                    border: `1.5px solid ${form.payment_plan === o.value ? "#D4AF37" : "#E0E0E0"}`,
                    background: form.payment_plan === o.value ? "rgba(212,175,55,0.08)" : "#fff",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "14px",
                    color: "#1A1A1A",
                  }}
                >
                  <input
                    type="radio"
                    name="payment_plan"
                    value={o.value}
                    checked={form.payment_plan === o.value}
                    onChange={() => setForm({ ...form, payment_plan: o.value })}
                    style={{ accentColor: "#D4AF37" }}
                  />
                  {o.label}
                </label>
              ))}
            </div>
            {errors.payment_plan && (
              <span className="text-xs mt-1 block" style={{ color: "#C41E3A" }}>
                {errors.payment_plan}
              </span>
            )}
          </div>

          {/* Budget Range - disembunyikan */}

          {/* Purpose */}
          <div>
            <FieldLabel required>Tujuan Pembelian</FieldLabel>
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
            📲 KIRIM KE WHATSAPP
          </button>

          <p className="text-xs text-center" style={{ color: "#9E9E9E", fontFamily: "Inter, sans-serif" }}>
            🔒 Data Anda aman & tidak akan disalahgunakan
          </p>
        </form>
      </div>
    </section>
  );
}
