import p23 from "../assets/images/p23.jpeg"
import p25 from '../assets/images/p25.jpeg'
import p2 from '../assets/images/p2.jpeg'
import p16 from "../assets/images/p16.jpeg"
import p24 from "../assets/images/p24.jpeg"
import p18 from "../assets/images/p18.jpeg"




const CollectionSection = () => {
    return (
      <section id="collections" className="py-20 px-6 bg-gray-50 text-black">
        <h2 className="text-3xl font-semibold text-center mb-10">Our Collections</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img src={p23} alt="Furniture" className="h-60 w-full object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Furniture</h3>
              <p className="text-gray-500">Luxury sofas, chairs, and tables.</p>
            </div>
          </div>
        
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img src={p18} alt="Arts" className="h-60 w-full object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Arts</h3>
              <p className="text-gray-500">Original paintings and sculptures.</p>
            </div>
          </div> 

          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img src={p16} alt="Arts" className="h-60 w-full object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Vases</h3>
              <p className="text-gray-500"> Beautiful vases of different sizes.</p>
            </div>
          </div> 

          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img src={p25} alt="Arts" className="h-60 w-full object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Lightenings</h3>
              <p className="text-gray-500">Chandeliers,Pendant Lights, WalL Scones, Picture Lights.</p>
            </div>
          </div> 

          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img src={p24} alt="Arts" className="h-60 w-full object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Time Piece</h3>
              <p className="text-gray-500">Arified Time pieces that enlighten your home.</p>
            </div>
          </div>
  
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img src={p2} alt="Acrylic Flames" className="h-60 w-full object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Acrylic Flames</h3>
              <p className="text-gray-500">Artistic flames to light up your décor.</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default CollectionSection;
  