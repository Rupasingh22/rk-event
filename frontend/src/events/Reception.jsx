import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import receptionHero from "../assets/images/2.jpg";
import rec1 from "../assets/images/1.jpg";
import rec2 from "../assets/images/2.jpg";
import rec3 from "../assets/images/3.jpg";
import rec4 from "../assets/images/4.jpg";
import rec5 from "../assets/images/5.jpg";
import rec6 from "../assets/images/6.jpg";

import { FaGlassCheers, FaCamera, FaMusic, FaUtensils } from "react-icons/fa";

const ReceptionParty = () => {
  const packages = [
    {
      title: "Silver Reception",
      price: "₹39,999",
      description:
        "Elegant décor, welcome drinks, stage setup and music arrangements.",
    },
    {
      title: "Golden Reception",
      price: "₹69,999",
      description:
        "Premium decorations, photography, entertainment and luxury dining.",
    },
    {
      title: "Platinum Reception",
      price: "₹1,19,999",
      description:
        "Luxury venue, celebrity-style décor, gourmet buffet and complete event management.",
    },
  ];

  const galleryImages = [rec1, rec2, rec3, rec4, rec5, rec6];

  const features = [
    {
      icon: <FaGlassCheers />,
      title: "Grand Celebration",
      desc: "Beautifully designed reception setups for unforgettable moments.",
    },
    {
      icon: <FaCamera />,
      title: "Professional Photography",
      desc: "Capture every special memory with expert photographers.",
    },
    {
      icon: <FaMusic />,
      title: "Live Entertainment",
      desc: "DJ, live music and engaging performances for guests.",
    },
    {
      icon: <FaUtensils />,
      title: "Luxury Catering",
      desc: "Delicious multi-cuisine menus and premium dining experience.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <img
          src={receptionHero}
          alt="Reception Party"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/65"></div>

        <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
          <div>
            <motion.p
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="uppercase tracking-[6px] text-yellow-400"
            >
              Reception Celebration
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-white mt-6"
            >
              Celebrate Your
              <br />
              <span className="text-yellow-500">New Beginning</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-300 mt-6 max-w-2xl mx-auto text-lg"
            >
              Create unforgettable memories with elegant décor, luxurious
              dining, live entertainment and exceptional hospitality for your
              grand reception celebration.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col md:flex-row justify-center gap-4 mt-10"
            >
              <Link to="/book-event">
                <button className="bg-yellow-500 hover:bg-yellow-600 transition px-8 py-4 rounded-full text-white font-semibold">
                  Book Event
                </button>
              </Link>

              <button className="border border-white hover:bg-white hover:text-black transition px-8 py-4 rounded-full text-white font-semibold">
                Explore Packages
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-[#0a0a0a] py-24 px-6 md:px-16">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[5px] text-yellow-400">
            Why Choose Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Reception Event
            <span className="text-yellow-500"> Highlights</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-[#111] border border-gray-800 rounded-3xl p-8 text-center"
            >
              <div className="text-4xl text-yellow-500 flex justify-center mb-5">
                {item.icon}
              </div>

              <h3 className="text-white text-xl font-bold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Packages */}
      <section className="bg-black py-24 px-6 md:px-16">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[5px] text-yellow-400">
            Reception Packages
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Choose Your Perfect
            <span className="text-yellow-500"> Reception Plan</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Tailored reception packages designed to make your celebration truly
            memorable.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10, scale: 1.03 }}
              className="bg-[#111] border border-gray-800 rounded-3xl overflow-hidden"
            >
              <div className="bg-yellow-500 py-3 text-center">
                <h3 className="text-white text-xl font-bold">{item.title}</h3>
              </div>

              <div className="p-8">
                <h4 className="text-5xl font-bold text-white">{item.price}</h4>

                <p className="text-gray-400 mt-6 leading-7">
                  {item.description}
                </p>

                <ul className="mt-8 space-y-4 text-gray-300">
                  <li>✓ Stage Decoration</li>
                  <li>✓ Guest Seating Arrangement</li>
                  <li>✓ Sound & Lighting</li>
                  <li>✓ Event Coordinator</li>
                </ul>

                <Link to="/book-event">
                  <button className="mt-10 w-full bg-yellow-500 hover:bg-yellow-600 transition py-4 rounded-full text-white font-semibold">
                    Book Event
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-[#0a0a0a] py-24 px-6 md:px-16">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[5px] text-yellow-400">
            Reception Moments
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Reception
            <span className="text-yellow-500"> Gallery</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Explore stunning reception setups, joyful celebrations and elegant
            event experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="overflow-hidden rounded-3xl group cursor-pointer"
            >
              <img
                src={img}
                alt="Reception Gallery"
                className="w-full h-[350px] object-cover transition duration-700 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-yellow-500 py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Ready To Host A Grand Reception?
        </h2>

        <p className="text-white/90 mt-4">
          Let us create a luxurious and unforgettable reception celebration for
          you and your guests.
        </p>

        <Link to="/book-event">
          <button className="mt-8 bg-white text-yellow-600 px-8 py-4 rounded-full font-bold hover:scale-105 transition">
            Book Event Now
          </button>
        </Link>
      </section>
    </>
  );
};

export default ReceptionParty;
