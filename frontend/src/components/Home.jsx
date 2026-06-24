import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "@fortawesome/fontawesome-free/css/all.min.css";
import img1 from "../assets/images/1.jpg";
import img2 from "../assets/images/2.jpg";
import img3 from "../assets/images/3.jpg";
import img4 from "../assets/images/4.jpg";
import img5 from "../assets/images/5.jpg";
import img6 from "../assets/images/6.jpg";
import img7 from "../assets/images/7.jpg";
import img8 from "../assets/images/8.jpg";
import img9 from "../assets/images/9.jpg";
import img10 from "../assets/images/10.jpg";
import aboutImg from "../assets/images/5.jpg";
import video1 from "../assets/videos/video1.mp4";
import video2 from "../assets/videos/video2.mp4";
import video3 from "../assets/videos/video3.mp4";
import video4 from "../assets/videos/video4.mp4";
import video5 from "../assets/videos/video5.mp4";
import video6 from "../assets/videos/video6.mp4";
import video7 from "../assets/videos/video7.mp4";
import video8 from "../assets/videos/video8.mp4";

const Home = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Manual navigation
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="bg-[#0a0a0a] text-gray-200">
      {/* ========== HERO / SLIDER SECTION ========== */}
      <section
        id="home"
        className="relative w-full h-screen flex items-center justify-center text-center text-white pt-20"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
          style={{
            backgroundImage: `url(${images[currentIndex]})`,
          }}
        ></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Text Content */}
        <div className="relative z-10 px-4">
          <h2 className="text-3xl md:text-5xl font-light">
            {" "}
            <TypeAnimation
              sequence={["One Stop For", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold mt-2">
            {" "}
            <TypeAnimation
              sequence={["Event Planner", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="mt-4 tracking-[0.4em] text-sm md:text-base">
            <TypeAnimation
              sequence={["Visit Our Loaction", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </p>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-5 top-1/2 -translate-y-1/2 text-3xl md:text-5xl text-white bg-black/30 hover:bg-black/50 rounded-full p-2"
        >
          &#8249;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-5 top-1/2 -translate-y-1/2 text-3xl md:text-5xl text-white bg-black/30 hover:bg-black/50 rounded-full p-2"
        >
          &#8250;
        </button>
      </section>

      {/* ========== ABOUT SECTION ========== */}
      <section id="about" className="py-16 px-8 md:px-20 bg-[#0a0a0a]">
        <div className="grid md:grid-cols-2 gap-16 items-stretch">
          {/* Left side - Image */}
          <div className="flex justify-center">
            <img
              src={aboutImg}
              alt="About"
              className="rounded-2xl shadow-lg w-full h-full object-cover"
            />
          </div>

          {/* Right side - Text */}
          <div>
            <h3 className="text-teal-400 font-semibold uppercase tracking-wider mb-2">
              About Us
            </h3>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              <TypeAnimation
                sequence={[
                  "Welcome to RK EVENT",
                  1000,
                  "Creating Unforgettable Event Experiences",
                  1000,
                  "We Make Your Events Memorable",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h2>

            <p className="text-gray-400 mb-4 leading-relaxed">
              At RK Event Management, we turn your special moments into
              extraordinary memories. From weddings and birthdays to corporate
              events, cultural programs, and grand celebrations, our team
              handles every detail with creativity, precision, and
              professionalism.
            </p>

            <p className="text-gray-400 mb-6 leading-relaxed">
              We focus on delivering unique experiences, stunning decorations,
              seamless coordination, and exceptional guest satisfaction. Whether
              you're planning an intimate gathering or a large-scale event, we
              bring your vision to life and ensure every moment is memorable,
              stress-free, and truly special.
            </p>

            <div className="grid grid-cols-2 gap-3 text-teal-400">
              <p>→ Professional Event Planning</p>
              <p>→ Creative Theme & Decoration</p>
              <p>→ Seamless Event Coordination</p>
              <p>→ Memorable Guest Experiences</p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------- 3rd Section: Event Management Features ------------- */}
      {/* ======== Features Section ======== */}
      <section className="bg-black text-white py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side Text */}
          <div>
            <p className="uppercase text-[#00bcd4] tracking-widest mb-3">
              We Are RK Event Management
            </p>
            <h2 className="text-4xl md:text-5xl font-bold leading-snug">
              No.1 <span className="text-[#00bcd4]">Events</span> Management
            </h2>
            <p className="mt-6 text-gray-300">
              At RK Event Management, we specialize in planning and executing
              exceptional events that leave lasting impressions. From weddings,
              birthdays, and private parties to corporate gatherings and
              cultural celebrations, our dedicated team ensures every detail is
              perfectly managed. With creative ideas, professional coordination,
              and a commitment to excellence, we transform your vision into a
              remarkable experience. Our goal is to make every event unique,
              stress-free, and unforgettable for both hosts and guests.
              voluptate velit esse cillum dolore
            </p>
            <button className="mt-8 bg-gradient-to-r from-[#00bcd4] to-[#007c91] hover:from-[#007c91] hover:to-[#00bcd4] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
              ABOUT RK EVENT MANAGEMENT
            </button>
          </div>

          {/* Right Side Cards */}
          <div className="grid grid-cols-2 gap-6">
            {[
              {
                icon: "🤝",
                title: "Friendly Team",
                text: "More than 200 teams",
              },
              { icon: "🎈", title: "Perfect Venues", text: "Perfect venues" },
              {
                icon: "🥂",
                title: "Unique Scenario",
                text: "Thinking out of the box",
              },
              {
                icon: "🎉",
                title: "Unforgettable Time",
                text: "We make your event perfect",
              },
              { icon: "📞", title: "24/7 Support", text: "Anytime anywhere" },
              {
                icon: "💡",
                title: "Brilliant Idea",
                text: "We have million ideas",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="bg-[#111] border border-gray-800 rounded-xl p-6 text-center hover:bg-gradient-to-r hover:from-[#00bcd4] hover:to-[#007c91] transition-all duration-500 transform hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="text-4xl mb-3">{card.icon}</div>
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className="text-gray-400 text-sm mt-1">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== 4th Section: Expert Instructors ========== */}
      <section className="py-20 bg-[#0a0a0a] text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4 text-[#00bcd4]">
            Expert Event Planners
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto mb-12">
            Our event experts bring creativity, experience, and professionalism
            to every celebration. From planning and decoration to coordination
            and execution, our team ensures that every detail is handled with
            care. We are dedicated to creating seamless, memorable, and
            extraordinary events that exceed expectations and leave a lasting
            impression on every guest. With innovative ideas and flawless
            management, we turn your special occasions into unforgettable
            experiences.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Riya Sharma", title: "Event Planner", img: img1 },
              { name: "Arjun Mehta", title: "Event Planner", img: img2 },
              { name: "Priya Verma", title: "Event Planner", img: img3 },
              { name: "Karan Singh", title: "Event Planner", img: img4 },
              { name: "Riya Sharma", title: "Event Planner", img: img5 },
              { name: "Arjun Mehta", title: "Event Planner", img: img6 },
              { name: "Priya Verma", title: "Event Planner", img: img7 },
              { name: "Karan Singh", title: "Event Planner", img: img8 },
            ].map((inst, i) => (
              <div
                key={i}
                className="bg-[#111] border border-gray-800 rounded-xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition-all duration-500 hover:shadow-[#00bcd4]/50"
              >
                {/* Image with Hover Icons */}
                <div className="relative group">
                  <img
                    src={inst.img}
                    alt={inst.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute bottom-0 w-full flex justify-center gap-4 py-3 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <a
                      href="#"
                      className="text-[#00bcd4] hover:text-white text-xl"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      href="#"
                      className="text-[#00bcd4] hover:text-white text-xl"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a
                      href="#"
                      className="text-[#00bcd4] hover:text-white text-xl"
                    >
                      <i className="fas fa-envelope"></i>
                    </a>
                    <a
                      href="#"
                      className="text-[#00bcd4] hover:text-white text-xl"
                    >
                      <i className="fas fa-phone"></i>
                    </a>
                  </div>
                </div>

                {/* Instructor Info */}
                <div className="py-6">
                  <h3 className="text-xl font-semibold">{inst.name}</h3>
                  <p className="text-gray-400">{inst.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======== 5th Section: Event Listing ======== */}
      <section className="bg-[#0a0a0a] text-white py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Event <span className="text-[#00bcd4]">Listing</span>
          </h2>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
            Discover our upcoming events and experiences. Choose your favorite
            and join us for unforgettable moments! Discover our upcoming events
            and experiences. Choose your favorite and join us for unforgettable
            moments! Discover our upcoming events and experiences. Choose your
            favorite and join us for unforgettable moments!
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              date: "26",
              month: "JUNE",
              title: "Barcelona Food Truck Festival 2018",
              price: "$52",
              time: "20:00pm - 22:00pm",
              location: "Manhattan, New York",
              img: "/src/assets/images/1.jpg",
            },
            {
              date: "10",
              month: "AUG",
              title: "Live Music Night",
              price: "$65",
              time: "18:00pm - 21:00pm",
              location: "Los Angeles, USA",
              img: "/src/assets/images/2.jpg",
            },
            {
              date: "15",
              month: "SEP",
              title: "Corporate Meetup 2025",
              price: "$40",
              time: "10:00am - 14:00pm",
              location: "San Francisco, USA",
              img: "/src/assets/images/3.jpg",
            },
            {
              date: "22",
              month: "OCT",
              title: "Startup Founders Summit",
              price: "$78",
              time: "09:00am - 18:00pm",
              location: "New Delhi, India",
              img: "/src/assets/images/4.jpg",
            },
            {
              date: "12",
              month: "NOV",
              title: "Digital Marketing Workshop",
              price: "$49",
              time: "13:00pm - 16:00pm",
              location: "Bangalore, India",
              img: "/src/assets/images/5.jpg",
            },
            {
              date: "03",
              month: "DEC",
              title: "Winter Carnival",
              price: "$30",
              time: "19:00pm - 23:00pm",
              location: "Toronto, Canada",
              img: "/src/assets/images/6.jpg",
            },
          ].map((event, index) => (
            <div
              key={index}
              className="bg-[#111] rounded-2xl overflow-hidden shadow-lg hover:shadow-[#00bcd4]/40 hover:-translate-y-2 transition-all duration-500"
            >
              {/* Image Section */}
              <div className="relative group overflow-hidden z-0">
                <img
                  src={event.img}
                  alt={event.title}
                  className="w-full h-56 object-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-gradient-to-b from-[#00bcd4] to-[#007c91] text-white rounded-lg px-4 py-2 text-center z-10">
                  <span className="block text-2xl font-bold">{event.date}</span>
                  <span className="block text-sm font-semibold">
                    {event.month}
                  </span>
                </div>
              </div>

              {/* Details */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-1">
                  {event.title}
                </h3>
                <p className="text-[#00bcd4] font-medium mb-4">
                  Tickets from {event.price}
                </p>

                <div className="flex items-center text-gray-400 mb-2">
                  <span className="mr-2 text-[#00bcd4]">⏰</span>
                  <p>{event.time}</p>
                </div>
                <div className="flex items-center text-gray-400 mb-4">
                  <span className="mr-2 text-[#00bcd4]">📍</span>
                  <p>{event.location}</p>
                </div>

                <Link to="/book-event">
                  <button className="w-full py-3 mt-2 bg-gradient-to-r from-[#00bcd4] to-[#007c91] rounded-xl font-semibold hover:from-[#007c91] hover:to-[#00bcd4] transition-all duration-300">
                    Book Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 OUR MEMORABLE EVENTS SECTION 🔹 */}
      <section className="w-full bg-black py-12 px-4 relative">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-10">
          Our Memorable <span className="text-[#00bcd4]">Events</span>
        </h2>

        <div className="grid grid-cols-3 gap-0">
          {[
            // Row 1
            {
              id: "v1",
              src: video1,
              title: "Business Conference in Dubai",
              desc: "A premium business meet that inspired innovation and global partnerships.",
            },
            {
              id: "v2",
              src: video2,
              title: "Envato Author Fun Hiking",
              desc: "Refreshing nature hike bringing our creative team closer together.",
            },
            {
              id: "v3",
              src: video3,
              title: "Wedding Gala 2024",
              desc: "An elegant wedding celebration filled with joy and emotion.",
            },
            {
              id: "v4",
              src: video4,
              title: "New Year Celebration Night",
              desc: "Welcoming the new year with dance, fireworks, and laughter.",
            },

            // Row 2
            {
              id: "v5",
              src: video5,
              title: "Cultural Fest 2024",
              desc: "A night of colors, dance, and celebration of heritage.",
            },
            {
              id: "v6",
              src: video6,
              title: "Corporate Annual Meet",
              desc: "Celebrating success and teamwork in a grand corporate evening.",
            },
            {
              id: "v7",
              src: video7,
              title: "Product Launch Event",
              desc: "Unveiling the next generation of innovation in style.",
            },
            {
              id: "v8",
              src: video8,
              title: "Charity Concert 2025",
              desc: "An evening filled with music and meaningful contributions.",
            },
          ].map((vid, i) => (
            <div
              key={vid.id}
              className={`relative group overflow-hidden cursor-pointer ${
                i % 4 === 0
                  ? "col-span-1"
                  : i % 4 === 1
                    ? "col-span-2"
                    : i % 4 === 2
                      ? "col-span-2"
                      : "col-span-1"
              }`}
              onClick={() => window.open(vid.src, "_blank")}
            >
              <video
                src={vid.src}
                className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                muted
                loop
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

              {/* Overlay Text */}
              <div className="absolute bottom-0 left-0 p-6 z-10 text-white transition-all duration-500 group-hover:translate-y-[-5px]">
                <h3 className="text-xl font-semibold">{vid.title}</h3>
                <p className="text-sm text-gray-300 mt-1">{vid.desc}</p>
              </div>

              {/* Play Icon on Hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <button className="bg-white text-[#007c91] p-5 rounded-full text-3xl shadow-xl hover:scale-110 transition">
                  ▶
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========== OUR LOCATION SECTION ========== */}
      <section
        id="location"
        className="bg-[#0a0a0a] text-gray-200 py-20 px-6 md:px-16"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-[#00bcd4]">Locations</span>
            </h2>
            <p className="text-gray-400 mb-6">
              We’re expanding across multiple cities to bring quality learning
              closer to you. Visit any of our branches or connect with us online
              for more information.
            </p>

            {/* ======== Locations List ======== */}
            <div className="space-y-6">
              {/* Mumbai */}
              <div className="border-l-4 border-[#00bcd4] pl-4">
                <h3 className="text-xl font-semibold">📍 Mumbai</h3>
                <p className="text-gray-400 text-sm">
                  RK Education, Andheri West, Mumbai, Maharashtra
                </p>
                <a
                  href="https://example.com/mumbai-details"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="mt-3 bg-gradient-to-r from-[#00bcd4] to-[#007c91] hover:from-[#007c91] hover:to-[#00bcd4] text-white font-semibold py-2 px-5 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_#00bcd4]">
                    View Details
                  </button>
                </a>
              </div>

              {/* Delhi */}
              <div className="border-l-4 border-[#00bcd4] pl-4">
                <h3 className="text-xl font-semibold">📍 Delhi</h3>
                <p className="text-gray-400 text-sm">
                  RK Education, Connaught Place, New Delhi
                </p>
                <a
                  href="https://example.com/delhi-details"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="mt-3 bg-gradient-to-r from-[#00bcd4] to-[#007c91] hover:from-[#007c91] hover:to-[#00bcd4] text-white font-semibold py-2 px-5 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_#00bcd4]">
                    View Details
                  </button>
                </a>
              </div>

              {/* Bengaluru */}
              <div className="border-l-4 border-[#00bcd4] pl-4">
                <h3 className="text-xl font-semibold">📍 Bengaluru</h3>
                <p className="text-gray-400 text-sm">
                  RK Education, Indiranagar, Bengaluru, Karnataka
                </p>
                <a
                  href="https://example.com/bangalore-details"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="mt-3 bg-gradient-to-r from-[#00bcd4] to-[#007c91] hover:from-[#007c91] hover:to-[#00bcd4] text-white font-semibold py-2 px-5 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_#00bcd4]">
                    View Details
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Google Map */}
          <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-[#00bcd4]/30 transition-shadow duration-500">
            <iframe
              title="RK Education Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.740327506163!2d72.82771997498175!3d19.080962052546857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8e9d17a70d1%3A0x3a257a2d59fa9e49!2sAndheri%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1716800000000!5m2!1sen!2sin"
              width="100%"
              height="400"
              allowFullScreen=""
              loading="lazy"
              className="border-0 w-full h-[400px] md:h-[450px]"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
