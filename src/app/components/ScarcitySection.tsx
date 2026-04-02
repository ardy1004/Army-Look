export function ScarcitySection() {
  return (
    <section className="py-8 px-5 text-center" style={{ background: "#1F1F1F" }}>
      <div className="max-w-lg mx-auto">
        <p
          style={{
            fontSize: "15px",
            color: "#9E9E9E",
            lineHeight: 1.7,
            fontFamily: "Inter, sans-serif",
          }}
        >
          Properti dalam ringroad dengan ukuran seperti ini{" "}
          <strong style={{ color: "#D4A942", fontWeight: 600 }}>semakin jarang</strong>.
          Mayoritas sudah dipegang developer atau tidak dilepas ke market.
        </p>
      </div>
    </section>
  );
}