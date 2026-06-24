import React from "react";
import { Link } from "react-router-dom";
import service1 from "../assets/images/1.jpg";
import service2 from "../assets/images/4.jpg";
import service3 from "../assets/images/3.jpg";
import img1 from "../assets/images/1.jpg";
import img2 from "../assets/images/2.jpg";
import img3 from "../assets/images/3.jpg";
import img4 from "../assets/images/4.jpg";
import img5 from "../assets/images/5.jpg";
import img6 from "../assets/images/6.jpg";
import bgImage from "../assets/images/1.jpg";

function Service() {
  return (
    <>
      {/* ===== Services Hero Section ===== */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-black">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${bgImage})`,
          }}
        ></div>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/75"></div>

        {/* Glow Effects */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full"></div>

        {/* Content */}
        <div className="relative z-10 mt-8 max-w-6xl mx-auto px-6 text-center">
          <p className="text-[#00bcd4] uppercase tracking-[6px] text-sm font-semibold mb-5">
            Professional Event Solutions
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Creating
            <span className="text-[#00bcd4]"> Extraordinary </span>
            Experiences
          </h1>

          <p className="max-w-3xl mx-auto mt-8 text-gray-300 text-lg leading-relaxed">
            From corporate conferences and product launches to weddings,
            concerts, and private celebrations, we deliver world-class event
            management services designed to create unforgettable moments and
            exceptional experiences.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-5 mt-10">
            <Link to="/book-event">
              <button className="px-8 py-4 bg-gradient-to-r from-[#00bcd4] to-[#007c91] rounded-xl text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/20">
                Book Your Event
              </button>
            </Link>

            <button className="px-8 py-4 border border-[#00bcd4] rounded-xl text-white font-semibold hover:bg-[#00bcd4] hover:text-black transition-all duration-300">
              Get Free Consultation
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-14 mb-4">
            <div>
              <h2 className="text-4xl font-bold text-[#00bcd4]">500+</h2>
              <p className="text-gray-400 mt-2">Events Managed</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-[#00bcd4]">100+</h2>
              <p className="text-gray-400 mt-2">Corporate Clients</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-[#00bcd4]">10+</h2>
              <p className="text-gray-400 mt-2">Years Experience</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-[#00bcd4]">24/7</h2>
              <p className="text-gray-400 mt-2">Client Support</p>
            </div>
          </div>
        </div>
      </section>
      {/* ===== Premium Services Section ===== */}
      <section className="bg-[#0a0a0a] py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <p className="text-[#00bcd4] uppercase tracking-[5px] font-semibold">
              What We Offer
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
              Our Premium <span className="text-[#00bcd4]">Services</span>
            </h2>

            <p className="text-gray-400 max-w-3xl mx-auto mt-6 leading-relaxed">
              We provide end-to-end event management solutions designed to
              create extraordinary experiences. From planning and execution to
              post-event engagement, our team handles every detail with
              perfection.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🎉",
                title: "Corporate Events",
                desc: "Professional conferences, seminars, annual meetings and business gatherings.",
              },
              {
                icon: "💍",
                title: "Wedding Planning",
                desc: "Luxury wedding experiences with complete planning and coordination.",
              },
              {
                icon: "🚀",
                title: "Product Launches",
                desc: "High-impact launch events that generate excitement and brand awareness.",
              },
              {
                icon: "🎤",
                title: "Concert Management",
                desc: "World-class concert production, artist coordination and audience engagement.",
              },
              {
                icon: "🏆",
                title: "Award Ceremonies",
                desc: "Elegant award functions designed to celebrate achievements in style.",
              },
              {
                icon: "🎪",
                title: "Exhibitions & Expo",
                desc: "Creative exhibition setups that attract visitors and maximize engagement.",
              },
              {
                icon: "🍽️",
                title: "Catering Services",
                desc: "Premium dining experiences with customized menus and quality service.",
              },
              {
                icon: "📸",
                title: "Photography & Media",
                desc: "Professional photography, videography and digital media coverage.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group relative bg-[#111] border border-gray-800 rounded-3xl p-8 overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:border-[#00bcd4] hover:shadow-[0_0_30px_rgba(0,188,212,0.3)]"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00bcd4]/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 flex items-center justify-center text-3xl rounded-2xl bg-gradient-to-r from-[#00bcd4] to-[#007c91] mb-6 shadow-lg">
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-4">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  {/* Button */}
                  <button className="text-[#00bcd4] font-semibold flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                    Learn More
                    <span>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ===== WHY CHOOSE US SECTION ===== */}
      <section className="bg-black py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side */}
            <div>
              <p className="text-[#00bcd4] uppercase tracking-[5px] font-semibold mb-4">
                Why Choose Us
              </p>

              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Delivering Events That
                <span className="text-[#00bcd4]">
                  {" "}
                  Inspire, Engage & Impress
                </span>
              </h2>

              <p className="text-gray-400 mt-8 leading-relaxed text-lg">
                We specialize in creating unforgettable experiences through
                innovative planning, flawless execution, and exceptional
                attention to detail. Our dedicated team ensures every event
                exceeds expectations and leaves a lasting impact.
              </p>

              <div className="mt-10 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#00bcd4]/20 flex items-center justify-center text-[#00bcd4] text-xl">
                    ✓
                  </div>

                  <div>
                    <h4 className="text-white font-semibold text-lg">
                      Expert Event Planning
                    </h4>
                    <p className="text-gray-400">
                      Professional planning with complete attention to every
                      detail.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#00bcd4]/20 flex items-center justify-center text-[#00bcd4] text-xl">
                    ✓
                  </div>

                  <div>
                    <h4 className="text-white font-semibold text-lg">
                      Premium Venues
                    </h4>
                    <p className="text-gray-400">
                      Access to the finest venues and event destinations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#00bcd4]/20 flex items-center justify-center text-[#00bcd4] text-xl">
                    ✓
                  </div>

                  <div>
                    <h4 className="text-white font-semibold text-lg">
                      24/7 Client Support
                    </h4>
                    <p className="text-gray-400">
                      Dedicated assistance before, during and after every event.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side Stats Cards */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-[#111] border border-gray-800 rounded-3xl p-8 text-center hover:border-[#00bcd4] transition-all duration-500">
                <h3 className="text-5xl font-bold text-[#00bcd4]">500+</h3>
                <p className="text-gray-300 mt-3">Successful Events</p>
              </div>

              <div className="bg-[#111] border border-gray-800 rounded-3xl p-8 text-center hover:border-[#00bcd4] transition-all duration-500">
                <h3 className="text-5xl font-bold text-[#00bcd4]">100+</h3>
                <p className="text-gray-300 mt-3">Corporate Clients</p>
              </div>

              <div className="bg-[#111] border border-gray-800 rounded-3xl p-8 text-center hover:border-[#00bcd4] transition-all duration-500">
                <h3 className="text-5xl font-bold text-[#00bcd4]">15+</h3>
                <p className="text-gray-300 mt-3">Years Experience</p>
              </div>

              <div className="bg-[#111] border border-gray-800 rounded-3xl p-8 text-center hover:border-[#00bcd4] transition-all duration-500">
                <h3 className="text-5xl font-bold text-[#00bcd4]">99%</h3>
                <p className="text-gray-300 mt-3">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== OUR WORK PROCESS SECTION ===== */}
      <section className="bg-[#0a0a0a] py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-20">
            <p className="text-[#00bcd4] uppercase tracking-[5px] font-semibold">
              How We Work
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
              Our Event Planning <span className="text-[#00bcd4]">Process</span>
            </h2>

            <p className="text-gray-400 max-w-3xl mx-auto mt-6">
              Our proven workflow ensures every event is planned, managed, and
              executed flawlessly from start to finish.
            </p>
          </div>

          {/* Process Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                desc: "Understanding your vision, goals, budget and event requirements.",
              },
              {
                step: "02",
                title: "Planning",
                desc: "Creating event strategies, timelines and resource management plans.",
              },
              {
                step: "03",
                title: "Execution",
                desc: "Coordinating vendors, logistics and on-site event operations.",
              },
              {
                step: "04",
                title: "Success Delivery",
                desc: "Ensuring smooth completion and creating memorable experiences.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative bg-[#111] border border-gray-800 rounded-3xl p-8 hover:border-[#00bcd4] transition-all duration-500 hover:-translate-y-3"
              >
                {/* Step Number */}
                <div className="absolute -top-5 left-8">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#00bcd4] to-[#007c91] flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {item.step}
                  </div>
                </div>

                <div className="pt-10">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </div>

                {/* Hover Line */}
                <div className="w-0 h-1 bg-[#00bcd4] mt-6 group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ===== SIGNATURE EVENT EXPERIENCES ===== */}
      <section className="bg-black py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <p className="text-[#00bcd4] uppercase tracking-[5px] font-semibold">
              Signature Experiences
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
              Events That Leave a
              <span className="text-[#00bcd4]"> Lasting Impression</span>
            </h2>

            <p className="text-gray-400 max-w-3xl mx-auto mt-6">
              We create unforgettable experiences tailored to every occasion,
              combining creativity, innovation, and flawless execution.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-8">
            {/* Service 1 */}
            <div className="group bg-[#111] border border-gray-800 rounded-3xl overflow-hidden hover:border-[#00bcd4] transition-all duration-500">
              <div className="grid lg:grid-cols-2">
                <div className="overflow-hidden">
                  <img
                    src={service1}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-10 flex flex-col justify-center">
                  <span className="text-[#00bcd4] text-sm uppercase tracking-[4px]">
                    Premium Experience
                  </span>

                  <h3 className="text-3xl font-bold text-white mt-3">
                    Luxury Wedding Planning
                  </h3>

                  <p className="text-gray-400 mt-5 leading-relaxed">
                    From venue selection to grand decorations, entertainment,
                    hospitality and guest management, we transform dream
                    weddings into unforgettable celebrations.
                  </p>

                  <button className="mt-8 w-fit px-6 py-3 bg-gradient-to-r from-[#00bcd4] to-[#007c91] rounded-xl text-white font-semibold">
                    Explore Service
                  </button>
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="group bg-[#111] border border-gray-800 rounded-3xl overflow-hidden hover:border-[#00bcd4] transition-all duration-500">
              <div className="grid lg:grid-cols-2">
                <div className="p-10 flex flex-col justify-center order-2 lg:order-1">
                  <span className="text-[#00bcd4] text-sm uppercase tracking-[4px]">
                    Corporate Excellence
                  </span>

                  <h3 className="text-3xl font-bold text-white mt-3">
                    Global Corporate Events
                  </h3>

                  <p className="text-gray-400 mt-5 leading-relaxed">
                    Conferences, business summits, networking events, annual
                    gatherings and product launches executed with world-class
                    professionalism.
                  </p>

                  <button className="mt-8 w-fit px-6 py-3 bg-gradient-to-r from-[#00bcd4] to-[#007c91] rounded-xl text-white font-semibold">
                    Explore Service
                  </button>
                </div>

                <div className="overflow-hidden order-1 lg:order-2">
                  <img
                    src={service2}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="group bg-[#111] border border-gray-800 rounded-3xl overflow-hidden hover:border-[#00bcd4] transition-all duration-500">
              <div className="grid lg:grid-cols-2">
                <div className="overflow-hidden">
                  <img
                    src={service3}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-10 flex flex-col justify-center">
                  <span className="text-[#00bcd4] text-sm uppercase tracking-[4px]">
                    Entertainment & Production
                  </span>

                  <h3 className="text-3xl font-bold text-white mt-3">
                    Concerts & Mega Shows
                  </h3>

                  <p className="text-gray-400 mt-5 leading-relaxed">
                    Large-scale concerts, celebrity appearances, stage
                    production, lighting systems, sound engineering and crowd
                    management.
                  </p>

                  <button className="mt-8 w-fit px-6 py-3 bg-gradient-to-r from-[#00bcd4] to-[#007c91] rounded-xl text-white font-semibold">
                    Explore Service
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== FEATURED EVENT PORTFOLIO ===== */}
      <section className="bg-[#0a0a0a] py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <p className="text-[#00bcd4] uppercase tracking-[5px] font-semibold">
              Our Portfolio
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
              Events We Have
              <span className="text-[#00bcd4]"> Successfully Delivered</span>
            </h2>

            <p className="text-gray-400 max-w-3xl mx-auto mt-6">
              Explore some of our most memorable events that showcase our
              creativity, professionalism and commitment to excellence.
            </p>
          </div>

          {/* Gallery */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                img: img1,
                title: "Corporate Summit",
              },
              {
                img: img2,
                title: "Luxury Wedding",
              },
              {
                img: img3,
                title: "Music Festival",
              },
              {
                img: img4,
                title: "Product Launch",
              },
              {
                img: img5,
                title: "Award Ceremony",
              },
              {
                img: img6,
                title: "Business Conference",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[350px] object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90"></div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="text-2xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="text-gray-300 mt-2">Premium Event Management</p>

                  <button className="mt-5 px-5 py-2 border border-[#00bcd4] text-[#00bcd4] rounded-xl hover:bg-[#00bcd4] hover:text-black transition-all duration-300">
                    View Project
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ===== ELITE EVENT MANAGEMENT SERVICES ===== */}
      <section className="bg-black py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-20">
            <p className="text-[#00bcd4] uppercase tracking-[5px] font-semibold">
              Elite Services
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
              Premium Solutions For
              <span className="text-[#00bcd4]"> Extraordinary Events</span>
            </h2>

            <p className="text-gray-400 max-w-3xl mx-auto mt-6">
              From concept creation to flawless execution, our team delivers
              exceptional event experiences tailored to your vision.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Strategic Event Planning",
                desc: "Comprehensive planning, budgeting, scheduling and execution strategies.",
              },
              {
                icon: "🏛️",
                title: "Venue Selection & Design",
                desc: "Luxury venues, space planning and immersive event environments.",
              },
              {
                icon: "🎭",
                title: "Entertainment Management",
                desc: "Celebrity bookings, live performances and audience engagement.",
              },
              {
                icon: "🎬",
                title: "Stage & Production",
                desc: "Professional stage setup, lighting, LED walls and sound systems.",
              },
              {
                icon: "📢",
                title: "Brand Activation",
                desc: "Creative campaigns that maximize visibility and audience interaction.",
              },
              {
                icon: "🌍",
                title: "International Events",
                desc: "Global conferences, exhibitions and destination event management.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-[#111] border border-gray-800 rounded-3xl p-8 hover:border-[#00bcd4] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_0_30px_rgba(0,188,212,0.25)]"
              >
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-[#00bcd4] to-[#007c91] flex items-center justify-center text-4xl mb-6">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-6">
                  {service.desc}
                </p>

                <button className="text-[#00bcd4] font-semibold group-hover:translate-x-2 transition-all duration-300">
                  Discover More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ===== PRICING & SPECIAL OFFERS SECTION ===== */}
      <section className="bg-[#0a0a0a] py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-20">
            <p className="text-[#00bcd4] uppercase tracking-[5px] font-semibold">
              Pricing Plans
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
              Flexible Packages For
              <span className="text-[#00bcd4]"> Every Event</span>
            </h2>

            <p className="text-gray-400 max-w-3xl mx-auto mt-6">
              Choose the perfect package for your event and get professional
              event management services at competitive prices.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Basic */}
            <div className="bg-[#111] border border-gray-800 rounded-3xl p-10 text-center hover:border-[#00bcd4] transition-all duration-500">
              <h3 className="text-2xl font-bold text-white">Silver Package</h3>

              <h2 className="text-5xl font-bold text-[#00bcd4] my-6">
                ₹29,999
              </h2>

              <ul className="space-y-4 text-gray-400 mb-8">
                <li>✔ Event Planning</li>
                <li>✔ Venue Assistance</li>
                <li>✔ Decoration Setup</li>
                <li>✔ Basic Photography</li>
                <li>✔ Event Coordination</li>
              </ul>
              <Link to="/book-event">
                <button className="w-full py-3 rounded-xl bg-gradient-to-r from-[#00bcd4] to-[#007c91] text-white font-semibold">
                  Book Now
                </button>
              </Link>
            </div>

            {/* Popular */}
            <div className="relative bg-[#111] border-2 border-[#00bcd4] rounded-3xl p-10 text-center scale-105 shadow-[0_0_35px_rgba(0,188,212,0.25)]">
              {/* Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#00bcd4] text-black px-6 py-2 rounded-full font-bold text-sm">
                MOST POPULAR
              </div>

              <h3 className="text-2xl font-bold text-white">Gold Package</h3>

              <h2 className="text-5xl font-bold text-[#00bcd4] my-6">
                ₹59,999
              </h2>

              <ul className="space-y-4 text-gray-300 mb-8">
                <li>✔ Premium Venue Selection</li>
                <li>✔ Theme Decoration</li>
                <li>✔ Professional Photography</li>
                <li>✔ Catering Management</li>
                <li>✔ Entertainment Setup</li>
                <li>✔ VIP Guest Management</li>
              </ul>

              <Link to="/book-event">
                <button className="w-full py-3 rounded-xl bg-gradient-to-r from-[#00bcd4] to-[#007c91] text-white font-semibold">
                  Book Now
                </button>
              </Link>
            </div>

            {/* Premium */}
            <div className="bg-[#111] border border-gray-800 rounded-3xl p-10 text-center hover:border-[#00bcd4] transition-all duration-500">
              <h3 className="text-2xl font-bold text-white">
                Platinum Package
              </h3>

              <h2 className="text-5xl font-bold text-[#00bcd4] my-6">
                ₹99,999
              </h2>

              <ul className="space-y-4 text-gray-400 mb-8">
                <li>✔ Luxury Venue Booking</li>
                <li>✔ Complete Event Branding</li>
                <li>✔ Celebrity Management</li>
                <li>✔ Premium Catering</li>
                <li>✔ Live Streaming</li>
                <li>✔ Full Event Production</li>
                <li>✔ Dedicated Event Manager</li>
              </ul>

              <Link to="/book-event">
                <button className="w-full py-3 rounded-xl bg-gradient-to-r from-[#00bcd4] to-[#007c91] text-white font-semibold">
                  Book Now
                </button>
              </Link>
            </div>
          </div>

          {/* Special Offer Banner */}
          <div className="mt-20 bg-gradient-to-r from-[#00bcd4] to-[#007c91] rounded-3xl p-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              🎉 Limited Time Offer
            </h2>

            <p className="text-white mt-4 text-lg">
              Book your event this month and get
              <span className="font-bold"> 25% OFF </span>
              on all Gold & Platinum Packages.
            </p>

            <button className="mt-6 px-8 py-3 bg-white text-black font-bold rounded-xl hover:scale-105 transition-all">
              Claim Offer Now
            </button>
          </div>
        </div>
      </section>
      {/* ===== CLIENT TESTIMONIALS SECTION ===== */}
      <section className="bg-black py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <p className="text-[#00bcd4] uppercase tracking-[5px] font-semibold">
              Testimonials
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
              What Our
              <span className="text-[#00bcd4]"> Clients Say</span>
            </h2>

            <p className="text-gray-400 max-w-3xl mx-auto mt-6">
              Our success is measured by the satisfaction of our clients. Here
              are some experiences shared by people who trusted us.
            </p>
          </div>

          {/* Reviews */}
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                name: "Rahul Sharma",
                role: "Corporate Client",
                review:
                  "The team handled our annual conference flawlessly. Every detail was managed professionally and the event exceeded expectations.",
              },
              {
                name: "Priya Verma",
                role: "Wedding Client",
                review:
                  "Our wedding was absolutely magical. The decorations, coordination and hospitality were beyond perfect.",
              },
              {
                name: "Amit Patel",
                role: "Business Owner",
                review:
                  "Their creativity and execution transformed our product launch into a memorable experience for everyone.",
              },
            ].map((client, index) => (
              <div
                key={index}
                className="bg-[#111] border border-gray-800 rounded-3xl p-8 hover:border-[#00bcd4] transition-all duration-500 hover:-translate-y-2"
              >
                {/* Stars */}
                <div className="text-yellow-400 text-xl mb-4">⭐⭐⭐⭐⭐</div>

                {/* Review */}
                <p className="text-gray-400 leading-relaxed mb-8">
                  "{client.review}"
                </p>

                {/* Client Info */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#00bcd4] to-[#007c91] flex items-center justify-center text-white font-bold text-xl">
                    {client.name.charAt(0)}
                  </div>

                  <div>
                    <h4 className="text-white font-semibold">{client.name}</h4>

                    <p className="text-gray-500 text-sm">{client.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ===== EXPERIENCE THE DIFFERENCE ===== */}
      <section className="relative bg-black py-28 px-6 md:px-16 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 blur-[150px] rounded-full"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-[#00bcd4] uppercase tracking-[5px] font-semibold">
              Experience The Difference
            </span>

            <h2 className="text-5xl md:text-6xl font-bold text-white mt-6 leading-tight">
              We Don't Just
              <span className="text-[#00bcd4]"> Organize Events</span>
              <br />
              We Create Memories
            </h2>

            <p className="text-gray-400 mt-8 text-lg leading-relaxed">
              Every event tells a story. Our mission is to transform ordinary
              gatherings into extraordinary experiences that people remember for
              years.
            </p>

            <div className="flex gap-8 mt-10">
              <div>
                <h3 className="text-4xl font-bold text-[#00bcd4]">15+</h3>
                <p className="text-gray-400">Years Experience</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-[#00bcd4]">500+</h3>
                <p className="text-gray-400">Events Delivered</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-[#00bcd4]">99%</h3>
                <p className="text-gray-400">Happy Clients</p>
              </div>
            </div>
          </div>

          {/* Right Floating Cards */}
          <div className="relative h-[550px]">
            <div className="absolute top-0 left-0 bg-[#111] border border-gray-800 rounded-3xl p-8 w-72 hover:scale-105 transition-all duration-500 hover:border-[#00bcd4]">
              <div className="text-5xl mb-4">🎤</div>
              <h3 className="text-white text-xl font-bold">Live Concerts</h3>
              <p className="text-gray-400 mt-3">
                International artists, stage production and audience engagement.
              </p>
            </div>

            <div className="absolute top-28 right-0 bg-[#111] border border-gray-800 rounded-3xl p-8 w-72 hover:scale-105 transition-all duration-500 hover:border-[#00bcd4]">
              <div className="text-5xl mb-4">💍</div>
              <h3 className="text-white text-xl font-bold">Luxury Weddings</h3>
              <p className="text-gray-400 mt-3">
                Elegant celebrations designed to perfection.
              </p>
            </div>

            <div className="absolute bottom-0 left-16 bg-[#111] border border-gray-800 rounded-3xl p-8 w-72 hover:scale-105 transition-all duration-500 hover:border-[#00bcd4]">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-white text-xl font-bold">Product Launches</h3>
              <p className="text-gray-400 mt-3">
                Launch events that generate buzz and attention.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Service;
