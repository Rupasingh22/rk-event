import React from "react";
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
import img11 from "../assets/images/11.jpg";



function Gallery() {
  return (
    <>
{/* ===== GALLERY HERO GRID ===== */}
<section className="bg-[#0a0a0a] py-24 px-6 md:px-16">

  <div className="text-center mb-16">
    <p className="text-[#00bcd4] uppercase tracking-[5px] font-semibold">
      Our Gallery
    </p>

    <h2 className="text-4xl md:text-6xl font-bold text-white mt-4">
      Captured
      <span className="text-[#00bcd4]"> Moments</span>
    </h2>

    <p className="text-gray-400 max-w-3xl mx-auto mt-6">
      Explore our collection of unforgettable events, luxury weddings,
      corporate gatherings, concerts and premium celebrations.
    </p>
  </div>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-5 auto-rows-[250px]">

    <div className="col-span-2 row-span-2 overflow-hidden rounded-3xl group">
      <img
        src={img1}
        alt=""
        className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
      />
    </div>

    <div className="overflow-hidden rounded-3xl group">
      <img
        src={img2}
        alt=""
        className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
      />
    </div>

        <div className="overflow-hidden rounded-3xl group">
      <img
        src={img11}
        alt=""
        className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
      />
    </div>


    <div className="overflow-hidden rounded-3xl group">
      <img
        src={img3}
        alt=""
        className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
      />
    </div>

    <div className="row-span-2 overflow-hidden rounded-3xl group">
      <img
        src={img4}
        alt=""
        className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
      />
    </div>

    <div className="col-span-2 overflow-hidden rounded-3xl group">
      <img
        src={img5}
        alt=""
        className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
      />
    </div>

    <div className="overflow-hidden rounded-3xl group">
      <img
        src={img6}
        alt=""
        className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
      />
    </div>

    <div className="overflow-hidden rounded-3xl group">
      <img
        src={img7}
        alt=""
        className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
      />
    </div>

    <div className="col-span-2 row-span-2 overflow-hidden rounded-3xl group">
      <img
        src={img8}
        alt=""
        className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
      />
    </div>

    <div className="overflow-hidden rounded-3xl group">
      <img
        src={img9}
        alt=""
        className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
      />
    </div>

    <div className="row-span-2 overflow-hidden rounded-3xl group">
      <img
        src={img10}
        alt=""
        className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
      />
    </div>

    <div className="overflow-hidden rounded-3xl group">
      <img
        src={img1}
        alt=""
        className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
      />
    </div>

    <div className="overflow-hidden rounded-3xl group">
      <img
        src={img2}
        alt=""
        className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
      />
    </div>

    <div className="col-span-2 overflow-hidden rounded-3xl group">
      <img
        src={img3}
        alt=""
        className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
      />
    </div>

    <div className="overflow-hidden rounded-3xl group">
      <img
        src={img4}
        alt=""
        className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
      />
    </div>

    <div className="overflow-hidden rounded-3xl group">
      <img
        src={img5}
        alt=""
        className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
      />
    </div>

    <div className="col-span-2 overflow-hidden rounded-3xl group">
      <img
        src={img5}
        alt=""
        className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
      />
    </div>
  </div>
</section>
{/* ===== OUR MEMORABLE EVENTS ===== */}
<section className="bg-black py-24 px-6 md:px-16">
  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-20">
      <p className="text-[#00bcd4] uppercase tracking-[5px] font-semibold">
        Our Memorable Events
      </p>

      <h2 className="text-4xl md:text-6xl font-bold text-white mt-4">
        Moments That
        <span className="text-[#00bcd4]"> Made History</span>
      </h2>

      <p className="text-gray-400 max-w-3xl mx-auto mt-6">
        Every event tells a unique story. Explore some of our most
        successful and unforgettable celebrations.
      </p>
    </div>

    {/* Events */}
    <div className="space-y-10">

      {[
        {
          title: "Royal Wedding Celebration",
          type: "Wedding Event",
          year: "2025",
          image: img1,
          icon: "💍",
        },
        {
          title: "Global Business Summit",
          type: "Corporate Conference",
          year: "2025",
          image: img2,
          icon: "🏢",
        },
        {
          title: "Live Music Festival",
          type: "Concert Event",
          year: "2024",
          image: img3,
          icon: "🎤",
        },
        {
          title: "Tech Product Launch",
          type: "Product Launch",
          year: "2025",
          image: img4,
          icon: "🚀",
        },
        {
          title: "Excellence Awards Night",
          type: "Award Ceremony",
          year: "2024",
          image: img5,
          icon: "🏆",
        },
        {
          title: "Luxury Birthday Party",
          type: "Birthday Celebration",
          year: "2025",
          image: img6,
          icon: "🎂",
        },
      ].map((event, index) => (
        <div
          key={index}
          className="group bg-[#111] border border-gray-800 rounded-3xl overflow-hidden hover:border-[#00bcd4] transition-all duration-500"
        >
          <div className="grid lg:grid-cols-3">

            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />
            </div>

            {/* Content */}
            <div className="lg:col-span-2 p-8 md:p-10 flex flex-col justify-center">

              <div className="flex items-center gap-4 mb-4">
                <span className="text-5xl">
                  {event.icon}
                </span>

                <div>
                  <span className="text-[#00bcd4] text-sm uppercase tracking-[3px]">
                    {event.type}
                  </span>

                  <p className="text-gray-500">
                    {event.year}
                  </p>
                </div>
              </div>

              <h3 className="text-3xl font-bold text-white mb-4">
                {event.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                Successfully planned and executed with premium decoration,
                professional management, luxury arrangements and unforgettable
                guest experiences.
              </p>

              <div className="flex gap-4 mt-8">

                <div className="bg-[#0a0a0a] px-5 py-3 rounded-xl">
                  <span className="text-[#00bcd4] font-bold">
                    500+
                  </span>
                  <p className="text-xs text-gray-400">
                    Guests
                  </p>
                </div>

                <div className="bg-[#0a0a0a] px-5 py-3 rounded-xl">
                  <span className="text-[#00bcd4] font-bold">
                    5 Star
                  </span>
                  <p className="text-xs text-gray-400">
                    Rating
                  </p>
                </div>

                <div className="bg-[#0a0a0a] px-5 py-3 rounded-xl">
                  <span className="text-[#00bcd4] font-bold">
                    100%
                  </span>
                  <p className="text-xs text-gray-400">
                    Success
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      ))}
    </div>

  </div>
</section>
    </>
  );
}
export default Gallery;
