import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import corporateHero from "../assets/images/2.jpg";
import corp1 from "../assets/images/1.jpg";
import corp2 from "../assets/images/2.jpg";
import corp3 from "../assets/images/3.jpg";
import corp4 from "../assets/images/4.jpg";
import corp5 from "../assets/images/5.jpg";
import corp6 from "../assets/images/6.jpg";

import {
  FaBriefcase,
  FaMicrophone,
  FaUsers,
  FaChartLine,
  FaLaptop,
  FaCamera,
  FaUtensils,
  FaAward,
} from "react-icons/fa";

const CorporateEvent = () => {
  const packages = [
    {
      title: "Silver Corporate",
      price: "₹49,999",
      description:
        "Conference setup, audio system, refreshments and event support.",
    },
    {
      title: "Golden Corporate",
      price: "₹99,999",
      description:
        "Premium venue setup, catering, branding and media coverage.",
    },
    {
      title: "Platinum Corporate",
      price: "₹1,99,999",
      description:
        "Luxury corporate event management with complete planning and execution.",
    },
  ];

  const galleryImages = [corp1, corp2, corp3, corp4, corp5, corp6];

  const services = [
    {
      icon: <FaBriefcase />,
      title: "Corporate Conferences",
      desc: "Professional conference planning and management services.",
    },
    {
      icon: <FaMicrophone />,
      title: "Seminars & Workshops",
      desc: "Complete arrangements for business seminars and training sessions.",
    },
    {
      icon: <FaUsers />,
      title: "Team Building Events",
      desc: "Interactive activities designed to improve collaboration.",
    },
    {
      icon: <FaChartLine />,
      title: "Product Launches",
      desc: "Creative product launch events for maximum impact.",
    },
    {
      icon: <FaLaptop />,
      title: "Hybrid Event Solutions",
      desc: "Virtual and physical event integration with modern technology.",
    },
    {
      icon: <FaCamera />,
      title: "Media Coverage",
      desc: "Professional photography and videography services.",
    },
    {
      icon: <FaUtensils />,
      title: "Corporate Catering",
      desc: "Premium catering services tailored for business events.",
    },
    {
      icon: <FaAward />,
      title: "Award Ceremonies",
      desc: "Elegant arrangements for recognition and achievement events.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <img
          src={corporateHero}
          alt="Corporate Event"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
          <div>
            <motion.p
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="uppercase tracking-[6px] text-indigo-400"
            >
              Corporate Event Management
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-white mt-6"
            >
              Corporate Events
              <br />
              <span className="text-indigo-500">That Inspire Success</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-300 mt-6 max-w-2xl mx-auto text-lg"
            >
              From conferences and product launches to award ceremonies and
              networking events, we create professional experiences that leave
              lasting impressions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col md:flex-row justify-center gap-4 mt-10"
            >
              <Link to="/book-event">
                <button className="bg-indigo-500 hover:bg-indigo-600 transition px-8 py-4 rounded-full text-white font-semibold">
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
          <p className="uppercase tracking-[5px] text-indigo-400">
            Our Services
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Corporate Event
            <span className="text-indigo-500"> Solutions</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Professional event planning services designed to help businesses
            achieve their goals through memorable experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-[#111] border border-gray-800 rounded-3xl p-8 text-center"
            >
              <div className="text-4xl text-indigo-500 flex justify-center mb-5">
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
          <p className="uppercase tracking-[5px] text-indigo-400">
            Event Packages
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Choose Your Perfect
            <span className="text-indigo-500"> Corporate Plan</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Flexible corporate event packages suitable for businesses of all
            sizes and requirements.
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
              className="bg-[#111] border border-gray-800 rounded-3xl overflow-hidden"
            >
              <div className="bg-indigo-500 py-3 text-center">
                <h3 className="text-white text-xl font-bold">{item.title}</h3>
              </div>

              <div className="p-8">
                <h4 className="text-5xl font-bold text-white">{item.price}</h4>

                <p className="text-gray-400 mt-6 leading-7">
                  {item.description}
                </p>

                <ul className="mt-8 space-y-4 text-gray-300">
                  <li>✓ Professional Venue Setup</li>
                  <li>✓ Branding & Promotion</li>
                  <li>✓ Audio Visual Support</li>
                  <li>✓ Dedicated Event Manager</li>
                </ul>
                <Link to="/book-event">
                  <button className="mt-10 w-full bg-indigo-500 hover:bg-indigo-600 transition py-4 rounded-full text-white font-semibold">
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
          <p className="uppercase tracking-[5px] text-indigo-400">
            Event Highlights
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Corporate Event
            <span className="text-indigo-500"> Gallery</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Explore our successful conferences, seminars, award ceremonies and
            business networking events.
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
                alt="Corporate Gallery"
                className="w-full h-[350px] object-cover transition duration-700 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-500 py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Ready To Host A Successful Corporate Event?
        </h2>

        <p className="text-white/90 mt-4 max-w-3xl mx-auto">
          From conferences and product launches to award ceremonies and
          team-building events, we deliver professional experiences that leave
          lasting impressions.
        </p>

        <Link to="/book-event">
          <button className="mt-8 bg-white text-indigo-600 px-8 py-4 rounded-full font-bold hover:scale-105 transition">
            Book Event Now
          </button>
        </Link>
      </section>
    </>
  );
};

export default CorporateEvent;
