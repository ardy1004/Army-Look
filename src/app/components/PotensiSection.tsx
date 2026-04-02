const potensiItems = [
  { icon: "🏨", text: "Guest house / penginapan modern" },
  { icon: "🏠", text: "Kost eksklusif area kota" },
  { icon: "☕", text: "Usaha frontage (café, kantor, dll)" },
  { icon: "🏗️", text: "Existing structure sudah ada → base efisiensi pembangunan" },
];

export function PotensiSection() {
  return (
    <section className="py-10 px-5" style={{ background: "#F5F5F5" }}>
      <div className="max-w-2xl mx-auto">
        <h2
          className="text-center font-bold mb-2"
          style={{ fontFamily: "Poppins, sans-serif", fontSize: "22px", color: "#1A1A1A" }}
        >
          Potensi Pengembangan
        </h2>
        <p
          className="text-center text-sm mb-6"
          style={{ color: "#757575", fontFamily: "Inter, sans-serif", maxWidth: "420px", margin: "0 auto 24px" }}
        >
          Dengan lokasi dalam ringroad &amp; akses jalan utama, properti ini punya potensi untuk:
        </p>

        <ul className="flex flex-col gap-3 list-none m-0 p-0">
          {potensiItems.map((item, i) => (
            <li
              key={i}
              className="flex items-center gap-3 rounded-xl px-4 py-4"
              style={{
                background: "#FFFFFF",
                boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                fontSize: "14px",
                fontWeight: 500,
                color: "#4A4A4A",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <span style={{ fontSize: "20px", flexShrink: 0 }}>{item.icon}</span>
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}