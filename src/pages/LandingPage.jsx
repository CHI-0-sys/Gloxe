import HeroSection from "../Components/HeroSection";
import AboutSection from "../Components/AboutSection";
import CollectionSection from "../Components/CollectionSection";
import GallerySection from "../Components/GallerySection";
import WhatsAppConnect from "../Components/WhatsAppConnection";
import Footer from "../Components/Footer";
import MobileBottomNav from "../Components/MobileBottomNav";

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
