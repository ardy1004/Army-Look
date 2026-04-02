import { useRef } from "react";
import { HeroSection } from "./components/HeroSection";
import { UrgencyBar } from "./components/UrgencyBar";
import { QuickStats } from "./components/QuickStats";
import { GallerySection } from "./components/GallerySection";
import { LocationSection } from "./components/LocationSection";
import { FilterNotice } from "./components/FilterNotice";
import { PotensiSection } from "./components/PotensiSection";
import { InvestmentSection } from "./components/InvestmentSection";
import { ScarcitySection } from "./components/ScarcitySection";
import { TrustSection } from "./components/TrustSection";
import { LeadForm } from "./components/LeadForm";
import { FinalFilter } from "./components/FinalFilter";
import { FAQSection } from "./components/FAQSection";
import { FooterSection } from "./components/FooterSection";
import { FloatingElements } from "./components/FloatingElements";
import { ExitIntentPopup } from "./components/ExitIntentPopup";

export default function App() {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      className="relative w-full min-h-screen"
      style={{ fontFamily: "Inter, sans-serif", background: "#FFFFFF" }}
    >
      {/* Exit Intent Popup */}
      <ExitIntentPopup />

      {/* 1. Urgency Bar */}
      <UrgencyBar />

      {/* 2. Hero — Headline + Subheadline + CTA */}
      <HeroSection onScrollToForm={scrollToForm} />

      {/* 3. Key Highlights */}
      <QuickStats />

      {/* 4. Gallery */}
      <GallerySection />

      {/* 5. Location */}
      <LocationSection />

      {/* 6. Important Notice (Lead Filter) */}
      <FilterNotice />

      {/* 7. Potensi Pengembangan */}
      <PotensiSection />

      {/* 8. Investment ROI */}
      <InvestmentSection />

      {/* 9. Trust */}
      <TrustSection />

      {/* 10. Scarcity */}
      <ScarcitySection />

      {/* 11. Qualification Form */}
      <div ref={formRef}>
        <LeadForm />
      </div>

      {/* 12. Final Filter */}
      <FinalFilter />

      {/* 13. FAQ */}
      <FAQSection />

      {/* 14. Footer */}
      <FooterSection />

      {/* Floating Elements */}
      <FloatingElements onScrollToForm={scrollToForm} />
    </div>
  );
}