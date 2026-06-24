import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import valentineHero from "../assets/images/2.jpg";
import val1 from "../assets/images/1.jpg";
import val2 from "../assets/images/2.jpg";
import val3 from "../assets/images/3.jpg";
import val4 from "../assets/images/4.jpg";
import val5 from "../assets/images/5.jpg";
import val6 from "../assets/images/6.jpg";
import { FaHeart, FaCamera, FaMusic, FaGlassCheers } from "react-icons/fa";
const ValentineParty = () => {
  const packages = [
    {
      title: "Silver Love",
      price: "₹15,999",
      description:
        "Romantic décor, welcome drinks, special cake and music setup.",
    },
    {
      title: "Golden Romance",
      price: "₹29,999",
      description:
        "Premium decoration, couple photography and candlelight dinner.",
    },
    {
      title: "Platinum Luxury",
      price: "₹49,999",
      description:
        "Luxury venue, live music, gourmet dining and surprise arrangements.",
    },
  ];
  const galleryImages = [val1, val2, val3, val4, val5, val6];
  const features = [
    {
      icon: <FaHeart />,
      title: "Romantic Decor",
      desc: "Luxury floral arrangements and dreamy ambiance.",
    },
    {
      icon: <FaCamera />,
      title: "Couple Photography",
      desc: "Professional photography to capture every special moment.",
    },
    {
      icon: <FaMusic />,
      title: "Live Music",
      desc: "Romantic live performances and personalized playlists.",
    },
    {
      icon: <FaGlassCheers />,
      title: "Fine Dining",
      desc: "Exclusive candlelight dining experiences.",
    },
  ];
  return (
    <>
      <section className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <img
          src={valentineHero}
          alt="Valentine Party"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/65"></div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
          <div>
            <motion.p
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="uppercase tracking-[6px] text-pink-400"
            >
              Valentine's Special Event
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-white mt-6"
            >
              Celebrate Love
              <br />
              <span className="text-pink-500">Like Never Before</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-300 mt-6 max-w-2xl mx-auto text-lg"
            >
              Create unforgettable memories with luxury dining, romantic décor,
              live music and personalized experiences crafted for couples.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col md:flex-row justify-center gap-4 mt-10"
            >
              <Link to="/book-event">
                <button className="bg-pink-500 hover:bg-pink-600 transition px-8 py-4 rounded-full text-white font-semibold">
                  Book Now
                </button>
              </Link>

              <button className="border border-white hover:bg-white hover:text-black transition px-8 py-4 rounded-full text-white font-semibold">
                Explore Packages
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-[#0a0a0a] py-24 px-6 md:px-16">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[5px] text-pink-400">Our Packages</p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Choose Your Perfect
            <span className="text-pink-500"> Love Experience</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Exclusive Valentine packages designed to create magical moments and
            unforgettable memories.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              transition={{ duration: 0.3 }}
              className="bg-[#111] border border-gray-800 rounded-3xl overflow-hidden"
            >
              {/* Top Ribbon */}
              <div className="bg-pink-500 py-3 text-center">
                <h3 className="text-white text-xl font-bold">{item.title}</h3>
              </div>

              {/* Body */}
              <div className="p-8">
                <h4 className="text-5xl font-bold text-white">{item.price}</h4>

                <p className="text-gray-400 mt-6 leading-7">
                  {item.description}
                </p>

                <ul className="mt-8 space-y-4 text-gray-300">
                  <li>✓ Romantic Decoration</li>
                  <li>✓ Couple Seating Setup</li>
                  <li>✓ Special Lighting</li>
                  <li>✓ Dedicated Coordinator</li>
                </ul>

                <Link to="/book-event">
                  <button
                    className="
              mt-10
              w-full
              bg-pink-500
              hover:bg-pink-600
              transition
              py-4
              rounded-full
              text-white
              font-semibold
            "
                  >
                    View Details
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="bg-black py-24 px-6 md:px-16">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[5px] text-pink-400">
            Romantic Moments
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Valentine's
            <span className="text-pink-500"> Gallery</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            A glimpse of beautifully crafted moments, luxury setups and
            unforgettable celebrations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden rounded-3xl group cursor-pointer"
            >
              <img
                src={img}
                alt="gallery"
                className="
            w-full
            h-[350px]
            object-cover
            transition
            duration-700
            group-hover:scale-110
          "
              />
            </motion.div>
          ))}
        </div>
      </section>
      <section className="bg-pink-500 py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Ready To Celebrate Love?
        </h2>

        <p className="text-white/90 mt-4">
          Let us create an unforgettable Valentine's experience for you.
        </p>

        <Link to="/book-event">
          <button className="mt-8 bg-white text-pink-600 px-8 py-4 rounded-full font-bold hover:scale-105 transition">
            Book Event Now
          </button>
        </Link>
      </section>
    </>
  );
};

export default ValentineParty;
