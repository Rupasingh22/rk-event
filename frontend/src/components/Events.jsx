import React, { useState } from "react";
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
function Events() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const events = [
  {
    title: "Royal Wedding",
    category: "Wedding",
    image: img1,
    description: "Luxury wedding with premium decoration and hospitality."
  },
  {
    title: "Corporate Summit",
    category: "Corporate",
    image: img2,
    description: "Global business networking conference."
  },
  {
    title: "Music Concert",
    category: "Concert",
    image: img3,
    description: "Live performance with thousands of attendees."
  },
  {
    title: "Product Launch",
    category: "Business",
    image: img4,
    description: "Grand launch of innovative products."
  },
  {
    title: "Award Night",
    category: "Awards",
    image: img5,
    description: "Recognizing excellence and achievements."
  },
  {
    title: "Birthday Party",
    category: "Celebration",
    image: img6,
    description: "Luxury birthday celebrations."
  },
  {
    title: "Fashion Show",
    category: "Fashion",
    image: img7,
    description: "Designer showcase and runway events."
  },
  {
    title: "Food Festival",
    category: "Festival",
    image: img8,
    description: "Culinary experience with top chefs."
  },
  {
    title: "Tech Expo",
    category: "Technology",
    image: img9,
    description: "Latest technology exhibitions."
  },
  {
    title: "Startup Meetup",
    category: "Business",
    image: img10,
    description: "Entrepreneurs and investors networking."
  },
  {
    title: "Cultural Festival",
    category: "Culture",
    image: img1,
    description: "Traditional music, dance and heritage."
  },
  {
    title: "Charity Gala",
    category: "Social",
    image: img2,
    description: "Fundraising and social impact event."
  },
  {
    title: "Sports Tournament",
    category: "Sports",
    image: img3,
    description: "Competitive sporting events."
  },
  {
    title: "College Fest",
    category: "Education",
    image: img4,
    description: "Youth celebrations and competitions."
  },
  {
    title: "Exhibition Expo",
    category: "Exhibition",
    image: img5,
    description: "Brands showcasing products and services."
  },
  {
    title: "New Year Party",
    category: "Celebration",
    image: img6,
    description: "Grand countdown and entertainment."
  },
  {
    title: "Luxury Reception",
    category: "Wedding",
    image: img7,
    description: "Elegant reception experiences."
  },
  {
    title: "Investor Meet",
    category: "Business",
    image: img8,
    description: "Connecting startups and investors."
  },
  {
    title: "Movie Promotion",
    category: "Entertainment",
    image: img9,
    description: "Celebrity appearances and media coverage."
  },
  {
    title: "International Conference",
    category: "Corporate",
    image: img10,
    description: "Large-scale international gathering."
  }
];
  return (
    <>
    <section className="bg-[#0a0a0a] py-24 px-6 md:px-16">

  <div className="text-center mb-16">
    <p className="text-[#00bcd4] uppercase tracking-[5px]">
      Event Collection
    </p>

    <h2 className="text-5xl font-bold text-white mt-4">
      Explore Our
      <span className="text-[#00bcd4]"> Events</span>
    </h2>
  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

    {events.map((event, index) => (
      <div
        key={index}
        onClick={() => setSelectedEvent(event)}
        className="group cursor-pointer relative overflow-hidden rounded-3xl h-[350px]"
      >
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

        <div className="absolute bottom-0 p-6">
          <span className="bg-[#00bcd4] text-black text-xs px-3 py-1 rounded-full font-bold">
            {event.category}
          </span>

          <h3 className="text-white text-2xl font-bold mt-3">
            {event.title}
          </h3>

          <p className="text-gray-300 text-sm mt-2">
            Click to view details
          </p>
        </div>
      </div>
    ))}

  </div>
</section>
    </>
  );
}

export default Events;
