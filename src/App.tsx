import React from "react";
import { ChefHat, Clock, MapPin, Phone, UtensilsCrossed } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a]/95 text-white border-b border-[#8B7355]">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}

            <div className="flex items-center">
              <img
                src="/logo2.webp"
                alt="La Maison Dorée Logo"
                className="h-12 w-auto mr-3 hover:opacity-90 transition-opacity"
              />
              <div className="text-xl font-bold">
                <span className="text-amber-500">NEXT</span>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="hover:text-amber-500 transition-colors"
              >
                Home
              </a>
              <a
                href="#dishes"
                className="hover:text-amber-500 transition-colors"
              >
                Dishes
              </a>
              <a
                href="#about"
                className="hover:text-amber-500 transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                className="hover:text-amber-500 transition-colors"
              >
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src="/background.jpg"
            alt="Restaurant interior"
            className="w-full h-full object-cover filter brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50"></div>
        </div>
        <div className="relative text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-serif mb-6 tracking-wider">
            <span className="block animate-slideIn text-[#D4AF37]">NEXT</span>
            <span className="block mt-4">RESTAURANT</span>
          </h1>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl font-light mb-8 italic">
            "Experience culinary excellence in every bite"
          </p>
        </div>
      </section>

      {/* Featured Dishes */}
      <section id="dishes" className="py-28 px-4 bg-[#f8f5f0]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-center mb-4">
            Signature Dishes
          </h2>
          <div className="w-24 h-0.5 bg-[#D4AF37] mx-auto mb-16"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                image: "/nasigoreng.jpg",
                name: "Nasi Goreng",
                description:
                  "Spiced Indonesian fried rice with sweet soy and a fried egg.",
              },
              {
                image: "/friedrice.jpg",
                name: "Fried Rice",
                description:
                  "Fluffy stir-fried rice with veggies, meats, and rich flavors.",
              },
              {
                image: "/mongolian.jpg",
                name: "Mongolian Rice",
                description:
                  "Smoky, wok-tossed rice with savory Mongolian sauce.",
              },
            ].map((dish, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-none border border-[#8B7355] shadow-xl transition-all duration-500"
              >
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 p-8 text-white">
                    <h3 className="text-2xl font-serif mb-3">{dish.name}</h3>
                    <div className="w-12 h-0.5 bg-[#D4AF37] mb-4"></div>
                    <p className="text-sm italic">{dish.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-neutral-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/chef.jpg"
              alt="Chef preparing food"
              className="rounded-xl shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded in 1985, La Maison Dorée has been a beacon of culinary
              excellence, combining traditional French techniques with modern
              innovation. Our passionate team of chefs creates unforgettable
              dining experiences using only the finest seasonal ingredients.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <ChefHat className="w-6 h-6 text-amber-500" />
                <span>Master Chefs</span>
              </div>
              <div className="flex items-center gap-3">
                <UtensilsCrossed className="w-6 h-6 text-amber-500" />
                <span>Fine Dining</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Visit Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Location</h3>
                  <p className="text-gray-600">
                    123 Gourmet Avenue, Culinary District
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Hours</h3>
                  <p className="text-gray-600">
                    Tuesday - Sunday
                    <br />
                    Lunch: 12:00 - 15:00
                    <br />
                    Dinner: 18:00 - 23:00
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Reservations</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
            <div className="h-[400px] rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.292292615509614!3d48.85837007928757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sus!4v1647951865986!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Restaurant Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">La Maison Dorée</h3>
          <p className="text-neutral-400 mb-6">
            Elevating dining to an art form
          </p>
          <div className="border-t border-neutral-800 pt-6 mt-6">
            <p className="text-sm text-neutral-500">
              © {new Date().getFullYear()} La Maison Dorée. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
