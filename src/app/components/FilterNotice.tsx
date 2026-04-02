export function FilterNotice() {
  return (
    <section className="py-8 px-5" style={{ background: "#FFFFFF" }}>
      <div className="max-w-2xl mx-auto">
        <div
          className="rounded-xl p-6"
          style={{
            background: "#FEF2F2",
            border: "1px solid #FECACA",
          }}
        >
          <h3
            className="font-bold mb-4 flex items-center gap-2"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "17px",
              color: "#B91C1C",
            }}
          >
            ⚠️ Harap Baca Ini Dulu
          </h3>

          <ul className="flex flex-col gap-3 list-none m-0 p-0">
            {[
              "Kondisi bangunan tidak layak huni (butuh renovasi besar / rebuild)",
              "Nilai utama ada di tanah & lokasi strategis",
              "Cocok untuk buyer yang sudah biasa handle project renov / bangun ulang",
              "Tidak cocok untuk yang cari passive income langsung jalan",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3"
                style={{ fontSize: "14px", color: "#4A4A4A", lineHeight: 1.5 }}
              >
                <span
                  style={{
                    color: "#B91C1C",
                    fontWeight: 700,
                    fontSize: "14px",
                    flexShrink: 0,
                    marginTop: "1px",
                  }}
                >
                  ✕
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div
            className="mt-4 pt-4"
            style={{
              borderTop: "1px solid #FECACA",
              fontSize: "14px",
              fontWeight: 600,
              color: "#B91C1C",
              lineHeight: 1.5,
            }}
          >
            👉 Jika Anda mencari properti siap huni / siap bisnis, listing ini bukan untuk Anda.
          </div>
        </div>
      </div>
    </section>
  );
}