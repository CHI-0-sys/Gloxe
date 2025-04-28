const MobileBottomNav = () => {
    return (
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-md py-3 flex justify-around items-center z-50">
        <a href="#home" className="text-sm font-medium text-gray-800 hover:text-black">Home</a>
        <a href="#collections" className="text-sm font-medium text-gray-800 hover:text-black">Collections</a>
        <a href="#gallery" className="text-sm font-medium text-gray-800 hover:text-black">Gallery</a>
        <a href="#contact" className="text-sm font-medium text-gray-800 hover:text-black">Contact</a>
      </div>
    );
  };
  
  export default MobileBottomNav;
  