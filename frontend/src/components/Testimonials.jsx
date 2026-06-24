import React from "react";

function Testimonials() {
  return (
    <>
      <section className="bg-black py-12 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <span className="text-[#00bcd4] uppercase tracking-[5px] font-semibold">
              Success Stories
            </span>

            <h2 className="text-5xl font-bold text-white mt-4">
              Trusted By
              <span className="text-[#00bcd4]"> Hundreds Of Clients</span>
            </h2>

            <p className="text-gray-400 max-w-3xl mx-auto mt-6">
              Real experiences from clients who transformed their events into
              unforgettable memories.
            </p>
          </div>

          {/* Asymmetrical Layout */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Large Story */}
            <div className="lg:col-span-2 bg-[#111] rounded-3xl p-10 border border-gray-800 hover:border-[#00bcd4] transition-all duration-500">
              <div className="text-7xl text-[#00bcd4]">“</div>

              <p className="text-2xl text-white leading-relaxed">
                Our corporate summit was attended by more than 2,000 guests. The
                planning, execution and management were absolutely flawless.
              </p>

              <div className="flex items-center gap-4 mt-10">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#00bcd4] to-[#007c91] flex items-center justify-center text-white text-2xl font-bold">
                  R
                </div>

                <div>
                  <h4 className="text-white font-bold">Rahul Sharma</h4>
                  <p className="text-gray-400">CEO, TechVision</p>
                </div>
              </div>
            </div>

            {/* Rating Card */}
            <div className="bg-gradient-to-br from-[#00bcd4] to-[#007c91] rounded-3xl p-10 flex flex-col justify-center items-center">
              <h2 className="text-7xl font-bold text-white">4.9</h2>

              <p className="text-white text-xl mt-3">Average Rating</p>

              <p className="text-white/80 mt-4 text-center">
                Based on 500+ verified client reviews.
              </p>
            </div>

            {/* Story 2 */}
            <div className="bg-[#111] rounded-3xl p-8 border border-gray-800 hover:border-[#00bcd4] transition-all duration-500">
              <h3 className="text-white text-xl font-bold mb-4">
                Dream Wedding
              </h3>

              <p className="text-gray-400">
                Every detail was beautifully arranged. The entire wedding felt
                magical.
              </p>

              <div className="mt-6 text-[#00bcd4] font-semibold">
                Priya & Aman
              </div>
            </div>

            {/* Story 3 */}
            <div className="bg-[#111] rounded-3xl p-8 border border-gray-800 hover:border-[#00bcd4] transition-all duration-500">
              <h3 className="text-white text-xl font-bold mb-4">
                Product Launch
              </h3>

              <p className="text-gray-400">
                The event generated incredible buzz and exceeded all
                expectations.
              </p>

              <div className="mt-6 text-[#00bcd4] font-semibold">
                Startup Founder
              </div>
            </div>

            {/* Story 4 */}
            <div className="bg-[#111] rounded-3xl p-8 border border-gray-800 hover:border-[#00bcd4] transition-all duration-500">
              <h3 className="text-white text-xl font-bold mb-4">
                Music Festival
              </h3>

              <p className="text-gray-400">
                Outstanding crowd management and production quality.
              </p>

              <div className="mt-6 text-[#00bcd4] font-semibold">
                Event Organizer
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#0a0a0a] py-24 px-6 overflow-hidden">
        <div className="text-center mb-20">
          <p className="text-[#00bcd4] uppercase tracking-[5px] font-semibold">
            Client Love Wall
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-white mt-4">
            Why Clients Keep
            <span className="text-[#00bcd4]"> Coming Back</span>
          </h2>
        </div>

        <div className="relative max-w-7xl mx-auto h-[700px]">
          {/* Center Circle */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-gradient-to-r from-[#00bcd4] to-[#007c91] flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-7xl font-bold text-white">500+</h2>

              <p className="text-white text-xl">Happy Clients</p>
            </div>
          </div>

          {/* Floating Reviews */}

          <div className="absolute top-0 left-0 bg-[#111] p-6 rounded-3xl w-72 border border-gray-800 hover:border-[#00bcd4] hover:scale-105 transition-all duration-500">
            <p className="text-white">
              “Best event company we have ever worked with.”
            </p>
            <h4 className="text-[#00bcd4] mt-4">Rahul Sharma</h4>
          </div>

          <div className="absolute top-20 right-10 bg-[#111] p-8 rounded-3xl w-80 border border-gray-800 hover:border-[#00bcd4] hover:scale-105 transition-all duration-500">
            <p className="text-white">
              “Our wedding felt like a dream. Every guest was impressed.”
            </p>
            <h4 className="text-[#00bcd4] mt-4">Priya & Aman</h4>
          </div>

          <div className="absolute top-20 right-10 bg-[#111] p-8 rounded-3xl w-80 border border-gray-800 hover:border-[#00bcd4] hover:scale-105 transition-all duration-500">
            <p className="text-white">
              “Our wedding felt like a dream. Every guest was impressed.”
            </p>
            <h4 className="text-[#00bcd4] mt-4">Priya & Aman</h4>
          </div>

          {/* Review 5 */}
          <div className="absolute top-60 left-10 bg-[#111] p-6 rounded-3xl w-64 border border-gray-800 hover:border-[#00bcd4] hover:scale-105 transition-all duration-500">
            <p className="text-white">
              “Outstanding planning and flawless execution.”
            </p>
            <h4 className="text-[#00bcd4] mt-4">Corporate Client</h4>
          </div>

          {/* Review 6 */}
          <div className="absolute top-72 right-24 bg-[#111] p-6 rounded-3xl w-72 border border-gray-800 hover:border-[#00bcd4] hover:scale-105 transition-all duration-500">
            <p className="text-white">
              “Every guest appreciated the arrangements.”
            </p>
            <h4 className="text-[#00bcd4] mt-4">Wedding Client</h4>
          </div>

          {/* Review 7 */}
          <div className="absolute bottom-98 left-[35%] bg-[#111] p-6 rounded-3xl w-72 border border-gray-800 hover:border-[#00bcd4] hover:scale-105 transition-all duration-500">
            <p className="text-white">
              “Best event management company in the region.”
            </p>
            <h4 className="text-[#00bcd4] mt-4">Business Group</h4>
          </div>

          {/* Review 8 */}
          <div className="absolute bottom-20 right-[30%] bg-[#111] p-6 rounded-3xl w-64 border border-gray-800 hover:border-[#00bcd4] hover:scale-105 transition-all duration-500">
            <p className="text-white">
              “Highly recommended for premium events.”
            </p>
            <h4 className="text-[#00bcd4] mt-4">Event Partner</h4>
          </div>

          <div className="absolute bottom-24 left-16 bg-[#111] p-8 rounded-3xl w-80 border border-gray-800 hover:border-[#00bcd4] hover:scale-105 transition-all duration-500">
            <p className="text-white">
              “The concert management was world-class.”
            </p>
            <h4 className="text-[#00bcd4] mt-4">Music Festival Team</h4>
          </div>

          <div className="absolute bottom-0 right-0 bg-[#111] p-8 rounded-3xl w-72 border border-gray-800 hover:border-[#00bcd4] hover:scale-105 transition-all duration-500">
            <p className="text-white">
              “Professional, creative and always on time.”
            </p>
            <h4 className="text-[#00bcd4] mt-4">Startup Founder</h4>
          </div>
        </div>
      </section>
    </>
  );
}
export default Testimonials;
