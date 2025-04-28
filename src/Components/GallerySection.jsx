import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { motion } from "framer-motion";

import g1 from "../assets/images/g1.jpeg";
import g2 from "../assets/images/g2.jpeg";
import g3 from "../assets/images/g3.jpeg";
import g4 from "../assets/images/g4.jpeg";
import g5 from "../assets/images/g5.jpeg";
import g6 from "../assets/images/g6.jpeg";
import g7 from "../assets/images/g7.jpeg";
import g8 from "../assets/images/g8.jpeg";
import g9 from "../assets/images/g9.jpeg";
import g10 from "../assets/images/g10.jpeg";

const images = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-20 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center mb-6">Gallery</h2>
      <p className="text-xl text-center text-gray-500 mb-10">
        Explore our gallery of recent creations and signature decor masterpieces
      </p>

      <PhotoProvider
        maskOpacity={0.6} // controls dark overlay
        bannerVisible={false} // hides top banner text
        speed={() => 400} // speed of opening animation
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <PhotoView src={img}>
                <img
                  src={img}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-40 object-cover rounded-lg cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300"
                />
              </PhotoView>
            </motion.div>
          ))}
        </div>
      </PhotoProvider>
    </section>
  );
};

export default GallerySection;
