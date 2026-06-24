import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    event: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section className="min-h-screen bg-black relative overflow-hidden py-24 px-6">

      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-500/20 blur-[150px] rounded-full"></div>

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-[#00bcd4] uppercase tracking-[5px] font-semibold">
            Contact Us
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-white mt-4">
            Let's Create Something
            <span className="text-[#00bcd4]"> Extraordinary</span>
          </h1>

          <p className="text-gray-400 max-w-3xl mx-auto mt-6">
            Ready to turn your vision into reality? Get in touch with our
            event specialists and let's start planning your next unforgettable experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">

          {/* Left Contact Cards */}
          <div className="space-y-6">

            <div className="bg-[#111]/80 backdrop-blur-lg border border-gray-800 rounded-3xl p-8 hover:border-[#00bcd4] transition-all duration-500">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-white text-xl font-bold">
                Call Us
              </h3>
              <p className="text-gray-400 mt-3">
                +91 98765 43210
              </p>
            </div>

            <div className="bg-[#111]/80 backdrop-blur-lg border border-gray-800 rounded-3xl p-8 hover:border-[#00bcd4] transition-all duration-500">
              <div className="text-4xl mb-4">✉️</div>
              <h3 className="text-white text-xl font-bold">
                Email Us
              </h3>
              <p className="text-gray-400 mt-3">
                events@company.com
              </p>
            </div>

            <div className="bg-[#111]/80 backdrop-blur-lg border border-gray-800 rounded-3xl p-8 hover:border-[#00bcd4] transition-all duration-500">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-white text-xl font-bold">
                Visit Office
              </h3>
              <p className="text-gray-400 mt-3">
                Pune, Maharashtra, India
              </p>
            </div>

          </div>

          {/* Center Form */}
          <div className="lg:col-span-1 bg-[#111]/70 backdrop-blur-xl border border-gray-800 rounded-[40px] p-10 shadow-[0_0_50px_rgba(0,188,212,0.15)]">

            <h2 className="text-3xl font-bold text-white mb-8">
              Request A Consultation
            </h2>

            <div className="space-y-5">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                onChange={handleChange}
                className="w-full bg-black border border-gray-700 rounded-xl px-5 py-4 text-white focus:border-[#00bcd4] outline-none"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                onChange={handleChange}
                className="w-full bg-black border border-gray-700 rounded-xl px-5 py-4 text-white focus:border-[#00bcd4] outline-none"
              />

              <select
                name="event"
                onChange={handleChange}
                className="w-full bg-black border border-gray-700 rounded-xl px-5 py-4 text-white focus:border-[#00bcd4] outline-none"
              >
                <option>Wedding Event</option>
                <option>Corporate Event</option>
                <option>Concert</option>
                <option>Birthday Party</option>
                <option>Product Launch</option>
              </select>

              <textarea
                rows="5"
                name="message"
                placeholder="Tell us about your event..."
                onChange={handleChange}
                className="w-full bg-black border border-gray-700 rounded-xl px-5 py-4 text-white focus:border-[#00bcd4] outline-none resize-none"
              ></textarea>

              <button className="w-full py-4 rounded-xl bg-gradient-to-r from-[#00bcd4] to-[#007c91] text-white font-bold hover:scale-105 transition-all duration-300">
                Send Request 🚀
              </button>

            </div>

          </div>

          {/* Right Stats */}
          <div className="space-y-6">

            <div className="bg-[#111]/80 border border-gray-800 rounded-3xl p-8 text-center hover:border-[#00bcd4] transition-all duration-500">
              <h2 className="text-6xl font-bold text-[#00bcd4]">
                500+
              </h2>
              <p className="text-gray-400 mt-3">
                Events Managed
              </p>
            </div>

            <div className="bg-[#111]/80 border border-gray-800 rounded-3xl p-8 text-center hover:border-[#00bcd4] transition-all duration-500">
              <h2 className="text-6xl font-bold text-[#00bcd4]">
                99%
              </h2>
              <p className="text-gray-400 mt-3">
                Client Satisfaction
              </p>
            </div>

            <div className="bg-gradient-to-r from-[#00bcd4] to-[#007c91] rounded-3xl p-8 text-center">
              <h2 className="text-3xl font-bold text-white">
                Free Consultation
              </h2>

              <p className="text-white/90 mt-4">
                Book today and get expert planning advice at no cost.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;