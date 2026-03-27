import { useRef } from "react";
import { HeroSection } from "./components/HeroSection";
import { UrgencyBar } from "./components/UrgencyBar";
import { QuickStats } from "./components/QuickStats";
import { GallerySection } from "./components/GallerySection";
import { LocationSection } from "./components/LocationSection";
import { InvestmentSection } from "./components/InvestmentSection";
import { TrustSection } from "./components/TrustSection";
import { LeadForm } from "./components/LeadForm";
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

      {/* Urgency Bar */}
      <UrgencyBar />

      {/* Hero */}
      <HeroSection onScrollToForm={scrollToForm} />

      {/* Quick Stats */}
      <QuickStats />

      {/* Gallery */}
      <GallerySection />

      {/* Location */}
      <LocationSection />

      {/* Investment */}
      <InvestmentSection />

      {/* Trust */}
      <TrustSection />

      {/* Lead Form */}
      <div ref={formRef}>
        <LeadForm />
      </div>

      {/* FAQ */}
      <FAQSection />

      {/* Footer */}
      <FooterSection />

      {/* Floating Elements (WA button, scroll-to-top, sticky CTA) */}
      <FloatingElements onScrollToForm={scrollToForm} />
    </div>
  );
}
