import React from "react";
import { motion } from "framer-motion";

import graduationHero from "../assets/images/2.jpg";
import grad1 from "../assets/images/1.jpg";
import grad2 from "../assets/images/2.jpg";
import grad3 from "../assets/images/3.jpg";
import grad4 from "../assets/images/4.jpg";
import grad5 from "../assets/images/5.jpg";
import grad6 from "../assets/images/6.jpg";

import {
  FaUserGraduate,
  FaCamera,
  FaMusic,
  FaAward,
  FaUtensils,
  FaMicrophone,
  FaGift,
  FaGlassCheers,
} from "react-icons/fa";

const GraduationParty = () => {
  const packages = [
    {
      title: "Silver Graduation",
      price: "₹19,999",
      description:
        "Basic decoration, music setup, refreshments and celebration arrangements.",
    },
    {
      title: "Golden Graduation",
      price: "₹39,999",
      description:
        "Premium décor, photography, entertainment and customized graduation theme.",
    },
    {
      title: "Platinum Graduation",
      price: "₹69,999",
      description:
        "Luxury venue, professional event management, gourmet dining and complete celebration experience.",
    },
  ];

  const galleryImages = [grad1, grad2, grad3, grad4, grad5, grad6];

  const services = [
    {
      icon: <FaUserGraduate />,
      title: "Graduation Theme Decor",
      desc: "Creative and elegant graduation-themed decorations.",
    },
    {
      icon: <FaCamera />,
      title: "Photography & Videography",
      desc: "Capture every memorable achievement and celebration moment.",
    },
    {
      icon: <FaMusic />,
      title: "DJ & Music Setup",
      desc: "Energetic music arrangements to keep the party alive.",
    },
    {
      icon: <FaAward />,
      title: "Award Ceremony Setup",
      desc: "Professional stage and presentation arrangements.",
    },
    {
      icon: <FaUtensils />,
      title: "Catering Services",
      desc: "Delicious food menus customized for your guests.",
    },
    {
      icon: <FaMicrophone />,
      title: "Stage & Sound System",
      desc: "High-quality audio equipment and event hosting support.",
    },
    {
      icon: <FaGift />,
      title: "Return Gifts",
      desc: "Special gifts and souvenirs for guests and graduates.",
    },
    {
      icon: <FaGlassCheers />,
      title: "Celebration Activities",
      desc: "Fun games, activities and memorable party experiences.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <img
          src={graduationHero}
          alt="Graduation Party"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/65"></div>

        <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
          <div>
            <motion.p
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              className="uppercase tracking-[6px] text-blue-400"
            >
              Graduation Celebration
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold text-white mt-6"
            >
              Celebrate Your
              <br />
              <span className="text-blue-500">Big Achievement</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-gray-300 mt-6 max-w-2xl mx-auto text-lg"
            >
              Mark this milestone with a memorable graduation party filled with
              joy, achievements, entertainment and unforgettable memories.
            </motion.p>

            <div className="flex flex-col md:flex-row justify-center gap-4 mt-10">
              <button className="bg-blue-500 hover:bg-blue-600 transition px-8 py-4 rounded-full text-white font-semibold">
                Book Event
              </button>

              <button className="border border-white hover:bg-white hover:text-black transition px-8 py-4 rounded-full text-white font-semibold">
                Explore Packages
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-[#0a0a0a] py-24 px-6 md:px-16">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[5px] text-blue-400">
            Our Services
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Graduation Event
            <span className="text-blue-500"> Services</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Everything you need to organize a memorable graduation celebration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-[#111] border border-gray-800 rounded-3xl p-8 text-center"
            >
              <div className="text-4xl text-blue-500 flex justify-center mb-5">
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

      {/* Packages */}
      <section className="bg-black py-24 px-6 md:px-16">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[5px] text-blue-400">
            Graduation Packages
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Choose Your Perfect
            <span className="text-blue-500"> Celebration Package</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10, scale: 1.03 }}
              className="bg-[#111] border border-gray-800 rounded-3xl overflow-hidden"
            >
              <div className="bg-blue-500 py-3 text-center">
                <h3 className="text-white text-xl font-bold">{item.title}</h3>
              </div>

              <div className="p-8">
                <h4 className="text-5xl font-bold text-white">{item.price}</h4>

                <p className="text-gray-400 mt-6 leading-7">
                  {item.description}
                </p>

                <ul className="mt-8 space-y-4 text-gray-300">
                  <li>✓ Graduation Theme Setup</li>
                  <li>✓ Photography Session</li>
                  <li>✓ Music & Entertainment</li>
                  <li>✓ Event Management</li>
                </ul>

                <button className="mt-10 w-full bg-blue-500 hover:bg-blue-600 transition py-4 rounded-full text-white font-semibold">
                  Book Event
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-[#0a0a0a] py-24 px-6 md:px-16">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[5px] text-blue-400">
            Graduation Memories
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Graduation
            <span className="text-blue-500"> Gallery</span>
          </h2>
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
                alt="Graduation Gallery"
                className="w-full h-[350px] object-cover transition duration-700 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-500 py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Ready To Celebrate Your Success?
        </h2>

        <p className="text-white/90 mt-4">
          Let us organize an unforgettable graduation party for you and your
          friends.
        </p>

        <button className="mt-8 bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:scale-105 transition">
          Book Event Now
        </button>
      </section>
    </>
  );
};

export default GraduationParty;