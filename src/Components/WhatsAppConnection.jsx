const WhatsAppConnect = () => {
  const phoneNumber = "+2349042406868";
  const instagramUsername = "gloxe_interiors"; // Your Instagram username

  return (
    <section id="contact" className="py-20 px-6 bg-gray-50 text-center">
      <h2 className="text-3xl font-semibold mb-6">Connect With Us</h2>

      <div className="flex flex-col items-center gap-4">
        <a
          href={`https://wa.me/${phoneNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg transition"
        >
          Chat on WhatsApp
        </a>

        <a
          href={`https://instagram.com/${instagramUsername}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full text-lg transition"
        >
          Follow us on Instagram
        </a>
      </div>
    </section>
  );
};

export default WhatsAppConnect;
