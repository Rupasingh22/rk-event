import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import anniversaryHero from "../assets/images/2.jpg";
import ann1 from "../assets/images/1.jpg";
import ann2 from "../assets/images/2.jpg";
import ann3 from "../assets/images/3.jpg";
import ann4 from "../assets/images/4.jpg";
import ann5 from "../assets/images/5.jpg";
import ann6 from "../assets/images/6.jpg";

import {
  FaHeart,
  FaCamera,
  FaMusic,
  FaUtensils,
  FaGift,
  FaGlassCheers,
  FaRing,
  FaStar,
} from "react-icons/fa";

const AnniversaryCelebration = () => {
  const packages = [
    {
      title: "Silver Anniversary",
      price: "₹24,999",
      description:
        "Elegant décor, music setup, anniversary cake and celebration arrangements.",
    },
    {
      title: "Golden Anniversary",
      price: "₹49,999",
      description:
        "Premium decoration, photography, entertainment and luxury dining.",
    },
    {
      title: "Platinum Anniversary",
      price: "₹89,999",
      description:
        "Luxury venue, gourmet dining and complete anniversary event management.",
    },
  ];

  const galleryImages = [ann1, ann2, ann3, ann4, ann5, ann6];

  const services = [
    {
      icon: <FaHeart />,
      title: "Romantic Decoration",
      desc: "Beautiful floral arrangements and elegant anniversary décor.",
    },
    {
      icon: <FaCamera />,
      title: "Photography & Videography",
      desc: "Capture every memorable moment of your celebration.",
    },
    {
      icon: <FaMusic />,
      title: "Live Music & DJ",
      desc: "Create a magical atmosphere with entertainment and music.",
    },
    {
      icon: <FaUtensils />,
      title: "Luxury Dining",
      desc: "Customized menus and fine dining experiences.",
    },
    {
      icon: <FaGift />,
      title: "Surprise Arrangements",
      desc: "Personalized surprises for your special day.",
    },
    {
      icon: <FaGlassCheers />,
      title: "Champagne Celebration",
      desc: "Elegant toast arrangements for unforgettable memories.",
    },
    {
      icon: <FaRing />,
      title: "Couple Special Setup",
      desc: "Exclusive seating and premium anniversary stage décor.",
    },
    {
      icon: <FaStar />,
      title: "Premium Event Management",
      desc: "Complete planning and execution handled by professionals.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <img
          src={anniversaryHero}
          alt="Anniversary Celebration"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/65"></div>

        <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
          <div>
            <motion.p
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="uppercase tracking-[6px] text-rose-400"
            >
              Anniversary Celebration
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-white mt-6"
            >
              Celebrate Your
              <br />
              <span className="text-rose-500">Love Story</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-300 mt-6 max-w-2xl mx-auto text-lg"
            >
              Celebrate another beautiful year together with a memorable
              anniversary event filled with love, joy and unforgettable moments.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col md:flex-row justify-center gap-4 mt-10"
            >
              <Link to="/book-event">
                <button className="bg-rose-500 hover:bg-rose-600 transition px-8 py-4 rounded-full text-white font-semibold">
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

      {/* Services Section */}
      <section className="bg-[#0a0a0a] py-24 px-6 md:px-16">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[5px] text-rose-400">Our Services</p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Anniversary Event
            <span className="text-rose-500"> Services</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Everything needed to make your anniversary celebration truly magical
            and memorable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-[#111] border border-gray-800 rounded-3xl p-8 text-center"
            >
              <div className="text-4xl text-rose-500 flex justify-center mb-5">
                {service.icon}
              </div>

              <h3 className="text-white text-xl font-bold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-400">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Packages Section */}
      <section className="bg-black py-24 px-6 md:px-16">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[5px] text-rose-400">
            Anniversary Packages
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Choose Your Perfect
            <span className="text-rose-500"> Celebration Package</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Anniversary packages designed to create unforgettable memories.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10, scale: 1.03 }}
              className="bg-[#111] border border-gray-800 rounded-3xl overflow-hidden"
            >
              <div className="bg-rose-500 py-3 text-center">
                <h3 className="text-white text-xl font-bold">{item.title}</h3>
              </div>

              <div className="p-8">
                <h4 className="text-5xl font-bold text-white">{item.price}</h4>

                <p className="text-gray-400 mt-6 leading-7">
                  {item.description}
                </p>

                <ul className="mt-8 space-y-4 text-gray-300">
                  <li>✓ Romantic Decoration</li>
                  <li>✓ Couple Special Setup</li>
                  <li>✓ Photography Session</li>
                  <li>✓ Dedicated Event Coordinator</li>
                </ul>

                <Link to="/book-event">
                  <button className="mt-10 w-full bg-rose-500 hover:bg-rose-600 transition py-4 rounded-full text-white font-semibold">
                    Book Event
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-[#0a0a0a] py-24 px-6 md:px-16">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[5px] text-rose-400">
            Anniversary Moments
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Anniversary
            <span className="text-rose-500"> Gallery</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Explore beautiful anniversary celebrations, romantic décor and
            unforgettable memories.
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
                alt="Anniversary Gallery"
                className="w-full h-[350px] object-cover transition duration-700 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-rose-500 py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Ready To Celebrate Another Beautiful Year Together?
        </h2>

        <p className="text-white/90 mt-4 max-w-3xl mx-auto">
          Let us create a magical anniversary celebration filled with love,
          happiness and unforgettable memories.
        </p>

        <Link to="/book-event">
          <button className="mt-8 bg-white text-rose-600 px-8 py-4 rounded-full font-bold hover:scale-105 transition">
            Book Event Now
          </button>
        </Link>
      </section>
    </>
  );
};

export default AnniversaryCelebration;
