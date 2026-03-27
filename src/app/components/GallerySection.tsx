import { useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

function Carousel({ images }: { images: string[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [current, setCurrent] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      setCurrent(emblaApi.selectedScrollSnap() - 1 < 0 ? images.length - 1 : emblaApi.selectedScrollSnap() - 1);
    }
  }, [emblaApi, images.length]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
      setCurrent((emblaApi.selectedScrollSnap() + 1) % images.length);
    }
  }, [emblaApi, images.length]);

  const handleSelect = useCallback(() => {
    if (emblaApi) setCurrent(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  if (emblaApi) {
    emblaApi.on("select", handleSelect);
  }

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-xl" ref={emblaRef}>
        <div className="flex">
          {images.map((img, i) => (
            <div className="flex-[0_0_100%] min-w-0" key={i}>
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <img
                  src={img}
                  alt={`Property photo ${i + 1}`}
                  className="absolute inset-0 w-full h-full object-cover rounded-xl"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
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

      {/* Dots */}
      <div className="flex justify-center gap-1.5 mt-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              emblaApi?.scrollTo(i);
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

export function GallerySection() {
  const [activeTab, setActiveTab] = useState(0);

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

        {/* Tabs */}
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

        <Carousel key={activeTab} images={tabs[activeTab].images} />
      </div>
    </section>
  );
}
