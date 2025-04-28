import HeroSection from "../Components/HeroSection";
import AboutSection from "../components/AboutSection";
import CollectionSection from "../components/CollectionSection";
import GallerySection from "../components/GallerySection";
import WhatsAppConnect from "../Components/WhatsAppConnection";
import Footer from "../components/Footer";
import MobileBottomNav from "../components/MobileBottomNav";

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <CollectionSection />
      <GallerySection />
      <WhatsAppConnect />
      <Footer />
      <MobileBottomNav />
    </>
  );
}
