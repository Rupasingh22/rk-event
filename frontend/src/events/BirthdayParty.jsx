import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import birthdayHero from "../assets/images/2.jpg";
import birth1 from "../assets/images/1.jpg";
import birth2 from "../assets/images/2.jpg";
import birth3 from "../assets/images/3.jpg";
import birth4 from "../assets/images/4.jpg";
import birth5 from "../assets/images/5.jpg";
import birth6 from "../assets/images/6.jpg";

import {
  FaBirthdayCake,
  FaGift,
  FaCamera,
  FaMusic,
  FaGamepad,
  FaUtensils,
  FaGlassCheers,
  FaStar,
} from "react-icons/fa";

const BirthdayParty = () => {
  const packages = [
    {
      title: "Silver Birthday",
      price: "₹14,999",
      description:
        "Theme decoration, birthday cake, music setup and celebration arrangements.",
    },
    {
      title: "Golden Birthday",
      price: "₹29,999",
      description:
        "Premium décor, photography, entertainment and customized birthday setup.",
    },
    {
      title: "Platinum Birthday",
      price: "₹59,999",
      description:
        "Luxury venue, gourmet catering, live entertainment and complete event management.",
    },
  ];

  const galleryImages = [birth1, birth2, birth3, birth4, birth5, birth6];

  const services = [
    {
      icon: <FaBirthdayCake />,
      title: "Theme Decoration",
      desc: "Creative birthday themes with premium decorations.",
    },
    {
      icon: <FaGift />,
      title: "Return Gifts",
      desc: "Special gifts and customized party favors for guests.",
    },
    {
      icon: <FaCamera />,
      title: "Photography & Videography",
      desc: "Capture every memorable birthday moment professionally.",
    },
    {
      icon: <FaMusic />,
      title: "DJ & Entertainment",
      desc: "Music, dance and entertainment to keep the party lively.",
    },
    {
      icon: <FaGamepad />,
      title: "Fun Activities",
      desc: "Exciting games and activities for kids and adults.",
    },
    {
      icon: <FaUtensils />,
      title: "Catering Services",
      desc: "Delicious food menus customized for your celebration.",
    },
    {
      icon: <FaGlassCheers />,
      title: "Party Arrangements",
      desc: "Complete celebration setup for unforgettable moments.",
    },
    {
      icon: <FaStar />,
      title: "Premium Event Management",
      desc: "Professional planning and execution from start to finish.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <img
          src={birthdayHero}
          alt="Birthday Celebration"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/65"></div>

        <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
          <div>
            <motion.p
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="uppercase tracking-[6px] text-orange-400"
            >
              Birthday Celebration
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-white mt-6"
            >
              Make Every Birthday
              <br />
              <span className="text-orange-500">Extra Special</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-300 mt-6 max-w-2xl mx-auto text-lg"
            >
              Celebrate your special day with exciting themes, delicious food,
              fun activities and unforgettable memories for everyone.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col md:flex-row justify-center gap-4 mt-10"
            >
              <Link to="/book-event">
                <button className="bg-orange-500 hover:bg-orange-600 transition px-8 py-4 rounded-full text-white font-semibold">
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
          <p className="uppercase tracking-[5px] text-orange-400">
            Our Services
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Birthday Event
            <span className="text-orange-500"> Services</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Everything you need to create a fun-filled and memorable birthday
            celebration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-[#111] border border-gray-800 rounded-3xl p-8 text-center"
            >
              <div className="text-4xl text-orange-500 flex justify-center mb-5">
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
          <p className="uppercase tracking-[5px] text-orange-400">
            Birthday Packages
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Choose Your Perfect
            <span className="text-orange-500"> Celebration Package</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Flexible birthday packages designed for kids, teens and adults.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10, scale: 1.03 }}
              className="bg-[#111] border border-gray-800 rounded-3xl overflow-hidden"
            >
              <div className="bg-orange-500 py-3 text-center">
                <h3 className="text-white text-xl font-bold">{item.title}</h3>
              </div>

              <div className="p-8">
                <h4 className="text-5xl font-bold text-white">{item.price}</h4>

                <p className="text-gray-400 mt-6 leading-7">
                  {item.description}
                </p>

                <ul className="mt-8 space-y-4 text-gray-300">
                  <li>✓ Theme Decoration</li>
                  <li>✓ Birthday Cake</li>
                  <li>✓ Entertainment Setup</li>
                  <li>✓ Event Coordinator</li>
                </ul>
                <Link to="/book-event">
                  <button className="mt-10 w-full bg-orange-500 hover:bg-orange-600 transition py-4 rounded-full text-white font-semibold">
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
          <p className="uppercase tracking-[5px] text-orange-400">
            Birthday Memories
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Birthday
            <span className="text-orange-500"> Gallery</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Explore exciting birthday celebrations, themed decorations and
            joyful moments.
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
                alt="Birthday Gallery"
                className="w-full h-[350px] object-cover transition duration-700 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-500 py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Ready To Plan An Amazing Birthday Party?
        </h2>

        <p className="text-white/90 mt-4 max-w-3xl mx-auto">
          Let us turn your special day into an unforgettable celebration filled
          with happiness, laughter and cherished memories.
        </p>

        <Link to="/book-event">
          <button className="mt-8 bg-white text-orange-600 px-8 py-4 rounded-full font-bold hover:scale-105 transition">
            Book Event Now
          </button>
        </Link>
      </section>
    </>
  );
};

export default BirthdayParty;
