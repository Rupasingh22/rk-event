import React, { useState } from "react";
import axios from "axios";
import eventBg from "../assets/images/1.jpg";

export default function BookEvent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    date: "",
    guests: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/book-event/",
        formData,
      );
      if (response.data.success) {
        alert("Event Booked Successfully!");

        setFormData({
          name: "",
          email: "",
          phone: "",
          eventType: "",
          date: "",
          guests: "",
          message: "",
        });
      }
    } catch (error) {
      console.log(error);
      alert("Booking Failed");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-10 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${eventBg})` }}
    >
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden grid md:grid-cols-2">
        {/* LEFT SIDE INFO */}
        <div className="bg-pink-500 text-white p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Book Your Event</h2>

          <p className="text-gray-200 mb-6">
            Plan your perfect event with us. Weddings, birthdays, corporate
            meetings, seminars and more.
          </p>

          <ul className="space-y-2 text-sm">
            <li>✔ Wedding Events</li>
            <li>✔ Birthday Parties</li>
            <li>✔ Corporate Meetings</li>
            <li>✔ College Functions</li>
            <li>✔ Private Parties</li>
          </ul>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="p-8">
          <h3 className="text-2xl font-bold text-[#002b36] mb-6">
            Event Booking Form
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002b36] text-[#002b36]"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002b36] text-[#002b36]"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002b36] text-[#002b36]"
              required
            />

            <select
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg text-[#002b36]"
              required
            >
              <option value="">Select Event Type</option>
              <option value="wedding">Wedding</option>
              <option value="birthday">Birthday</option>
              <option value="corporate">Corporate</option>
              <option value="college">College Event</option>
              <option value="party">Private Party</option>
            </select>

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg text-[#002b36]"
              required
            />

            <input
              type="number"
              name="guests"
              placeholder="Number of Guests"
              value={formData.guests}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg text-[#002b36]"
              required
            />

            <textarea
              name="message"
              placeholder="Additional Message"
              value={formData.message}
              onChange={handleChange}
              rows="3"
              className="w-full px-4 py-2 border rounded-lg text-[#002b36]"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#002b36] text-white py-2 rounded-lg hover:bg-pink-800 transition"
            >
              Book Event
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
