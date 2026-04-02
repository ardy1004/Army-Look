import { useState, useCallback, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* ────────────────────────────────────────
   Konfigurasi tab (urutan baru)
   ──────────────────────────────────────── */
const tabs = [
  {
    name: "Drone View",
    images: [
      "https://res.cloudinary.com/dhjhgedd9/image/upload/v1774622832/aBWlX_logewz.webp",
      "https://res.cloudinary.com/dhjhgedd9/image/upload/v1774622832/2qST5_ows4yt.webp",
      "https://res.cloudinary.com/dhjhgedd9/image/upload/v1774622834/Qh1F2_quoesd.webp",
      "https://res.cloudinary.com/dhjhgedd9/image/upload/v1774622834/ZB9Ys_yixp9p.webp",
      "https://res.cloudinary.com/dhjhgedd9/image/upload/v1774622833/lgWqc_lbk6nr.webp",
    ],
  },
  {
    name: "Eksterior",
    images: [
      "https://res.cloudinary.com/dhjhgedd9/image/upload/v1774622833/image_5_kcbcjw.webp",
      "https://res.cloudinary.com/dhjhgedd9/image/upload/v1774622832/image_1_geegor.webp",
      "https://res.cloudinary.com/dhjhgedd9/image/upload/v1774622833/image_6_ryzgb0.webp",
    ],
  },
  {
    name: "Kamar",
    images: [
      "https://res.cloudinary.com/dhjhgedd9/image/upload/v1774622833/image_7_aldxs4.webp",
      "https://res.cloudinary.com/dhjhgedd9/image/upload/v1774622832/image_4_bosjfv.webp",
      "https://res.cloudinary.com/dhjhgedd9/image/upload/v1774622833/image_8_r0kchi.webp",
    ],
  },
  {
    name: "Ruang Santai",
    images: [
      "https://res.cloudinary.com/dhjhgedd9/image/upload/v1774622833/image_2_xe3pge.webp",
      "https://res.cloudinary.com/dhjhgedd9/image/upload/v1774622833/image_3_jacrs0.webp",
    ],
  },
];

/* ────────────────────────────────────────
   Komponen Carousel yang dimodifikasi
   - Menerima callback onScrollNext/onScrollPrev untuk menangani logika antar-tab
   - Menerima callback onEmblaInit untuk mendapatkan emblaApi
   ──────────────────────────────────────── */
function Carousel({
  images,
  onScrollNext,
  onScrollPrev,
  onEmblaInit,
}: {
  images: string[];
  onScrollNext?: () => void;
  onScrollPrev?: () => void;
  onEmblaInit?: (emblaApi: any) => void;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [current, setCurrent] = useState(0);

  const scrollPrev = useCallback(() => {
    if (onScrollPrev) {
      onScrollPrev();
    } else if (emblaApi) {
      emblaApi.scrollPrev();
    }
  }, [onScrollPrev, emblaApi]);

  const scrollNext = useCallback(() => {
    if (onScrollNext) {
      onScrollNext();
    } else if (emblaApi) {
      emblaApi.scrollNext();
    }
  }, [onScrollNext, emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      const update = () => setCurrent(emblaApi.selectedScrollSnap());
      emblaApi.on("select", update);
      return () => emblaApi.off("select", update);
    }
  }, [emblaApi]);

  if (onEmblaInit) {
    onEmblaInit(emblaApi);
  }

  return (
    <div className="relative">
      {/* Kontainer gambar */}
      <div className="overflow-hidden rounded-xl" ref={emblaRef}>
        <div className="flex">
          {images.map((img, i) => (
            <div className="flex-[0_0_100%] min-w-0" key={i}>
                <div className="relative w-full" style={{ paddingBottom: "100%" }}>
                <img
                  src={img}
                  alt={`Property photo ${i + 1}`}
                  className="absolute inset-0 w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigasi panah */}
      <button
        onClick={scrollPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center transition-opacity"
        style={{ background: "rgba(0,0,0,0.45)" }}
        aria-label="Previous"
      >
        <ChevronLeft className="text-white" size={20} />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center transition-opacity"
        style={{ background: "rgba(0,0,0,0.45)" }}
        aria-label="Next"
      >
        <ChevronRight className="text-white" size={20} />
      </button>

      {/* Titik navigasi */}
      <div className="flex justify-center gap-1.5 mt-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              emblaApi.scrollTo(i);
              setCurrent(i);
            }}
            className="w-2 h-2 rounded-full transition-all"
            style={{ background: i === current ? "#D4AF37" : "#CCCCCC" }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

/* ────────────────────────────────────────
   Halaman GallerySection
   ──────────────────────────────────────── */
export function GallerySection() {
  const [activeTab, setActiveTab] = useState(0);
  const emblaApiRef = useRef<any>(null);

  // Reset ke slide pertama saat beralih tab
  useEffect(() => {
    if (emblaApiRef.current) {
      emblaApiRef.current.scrollTo(0);
    }
  }, [activeTab]);

  // Handler untuk geser berikutnya
  const handleScrollNext = useCallback(() => {
    const api = emblaApiRef.current;
    if (!api) return;

    const currentIndex = api.selectedScrollSnap();
    const currentImages = tabs[activeTab].images.length;

    // Jika ada gambar berikutnya di tab yang sama, geser biasa
    if (currentIndex < currentImages - 1) {
      api.scrollNext();
    } else {
      // Ada di gambar terakhir → pindah ke tab berikutnya
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }
  }, [activeTab, tabs]);

  // Handler untuk geser sebelumnya
  const handleScrollPrev = useCallback(() => {
    const api = emblaApiRef.current;
    if (!api) return;

    const currentIndex = api.selectedScrollSnap();
    // Jika ada gambar sebelumnya di tab yang sama, geser biasa
    if (currentIndex > 0) {
      api.scrollPrev();
    } else {
      // Ada di gambar pertama → pindah ke tab sebelumnya
      setActiveTab((prev) => (prev + tabs.length - 1) % tabs.length);
    }
  }, [tabs]);

  return (
    <section className="py-10 px-5" style={{ background: "#FAFAFA" }}>
      <div className="max-w-2xl mx-auto">
        <h2
          className="text-center font-bold mb-6"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "22px",
            color: "#1A1A1A",
          }}
        >
          📸 Lihat Kondisi Properti
        </h2>

        {/* Tab pilihan */}
        <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
          {tabs.map((tab, i) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(i)}
              className="flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all"
              style={{
                fontFamily: "Inter, sans-serif",
                background: activeTab === i ? "#D4AF37" : "#E5E5E5",
                color: activeTab === i ? "#1A1A1A" : "#4A4A4A",
              }}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Carousel dengan logika antar-tab */}
        <Carousel
          images={tabs[activeTab].images}
          onScrollNext={handleScrollNext}
          onScrollPrev={handleScrollPrev}
          onEmblaInit={(api) => {
            emblaApiRef.current = api;
          }}
        />
      </div>
    </section>
  );
}