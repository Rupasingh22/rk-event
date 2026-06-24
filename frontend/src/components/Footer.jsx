import React from "react";
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[#002b36] text-white relative overflow-hidden">
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#001f26]/85"></div>

      {/* Footer Content */}
      <div className="relative z-10 px-10 py-16 flex flex-col md:flex-row justify-between max-w-[1600px] mx-auto">
        {/* Left Section */}
        <div className="md:w-1/4 space-y-6">
          <h2 className="text-3xl font-bold text-[#00c8c8]">RK EVENT</h2>
          <p className="text-gray-300 leading-relaxed">
            Empowering creativity and innovation to make every event memorable
            and impactful for our valued clients.
          </p>

          <div className="flex items-center gap-5 text-xl mt-6">
            <a href="#">
              <FaTwitter className="hover:text-[#00c8c8]" />
            </a>
            <a href="#">
              <FaLinkedin className="hover:text-[#00c8c8]" />
            </a>
            <a href="#">
              <FaInstagram className="hover:text-[#00c8c8]" />
            </a>
            <a href="#">
              <FaFacebook className="hover:text-[#00c8c8]" />
            </a>
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="mt-8 border border-[#00c8c8] px-6 py-2 rounded-md text-sm flex items-center gap-2 hover:bg-[#00c8c8] hover:text-[#001f26] transition"
          >
            ↑ BACK TO TOP
          </button>
        </div>

        {/* Middle Section */}
        <div className="md:w-1/6 mt-10 md:mt-0">
          <h3 className="font-semibold mb-4 text-lg text-[#00c8c8]">
            Site Map
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="/" className="hover:text-[#00c8c8]">
                Homepage
              </a>
            </li>
            <li>
              <a href="/technology" className="hover:text-[#00c8c8]">
                Technology
              </a>
            </li>
            <li>
              <a href="/events" className="hover:text-[#00c8c8]">
                Our Events
              </a>
            </li>
            <li>
              <a href="/resources" className="hover:text-[#00c8c8]">
                Resources & News
              </a>
            </li>
            <li>
              <a href="/careers" className="hover:text-[#00c8c8]">
                Careers
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-[#00c8c8]">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="md:w-1/6 mt-10 md:mt-0">
          <h3 className="font-semibold mb-4 text-lg text-[#00c8c8]">Legal</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="/privacy" className="hover:text-[#00c8c8]">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-[#00c8c8]">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="/data" className="hover:text-[#00c8c8]">
                Data Policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="bg-[#00c8c8] text-[#001f26] text-center py-3 text-sm font-medium">
        © 2024 RKEVENT. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
