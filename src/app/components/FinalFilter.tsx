export function FinalFilter() {
  return (
    <section className="py-10 px-5" style={{ background: "#F5F5F5" }}>
      <div className="max-w-2xl mx-auto text-center">
        <h3
          className="font-bold mb-6"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "18px",
            color: "#1A1A1A",
          }}
        >
          Kami hanya akan merespon calon pembeli yang:
        </h3>

        <ul
          className="flex flex-col gap-3 list-none m-0 p-0 max-w-sm mx-auto"
        >
          {[
            "Sudah memahami kondisi properti",
            "Siap dengan skema renovasi / pembangunan ulang",
            "Memiliki rencana transaksi jelas",
          ].map((item, i) => (
            <li
              key={i}
              className="flex items-center justify-center gap-2"
              style={{ fontSize: "14px", color: "#4A4A4A" }}
            >
              <span style={{ color: "#16A34A", fontWeight: 700, fontSize: "14px" }}>✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}