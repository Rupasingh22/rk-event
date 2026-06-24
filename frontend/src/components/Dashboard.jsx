import React, { useState } from "react";
import { Link } from "react-router-dom";
import { User, CalendarDays, Ticket, LogOut, Settings } from "lucide-react";

import BookingHistory from "./BookingHistory";
import MyBooking from "./MyBooking";
import ProfileSettings from "./ProfileSettings";
function Dashboard() {
  const [activePage, setActivePage] = useState("home");
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-[#08141b] flex">
      {/* Sidebar */}
      <div className="w-80 bg-[#0d1f29] border-r border-cyan-900 p-6">
        <div className="flex flex-col items-center">
          <div className="w-28 h-28 rounded-full bg-cyan-500 flex items-center justify-center">
            <User size={55} className="text-white" />
          </div>

          <h2 className="text-white text-2xl font-bold mt-4">{user?.name}</h2>

          <p className="text-gray-400 text-sm">Event Customer</p>
        </div>

        <div className="mt-4 space-y-3">
          <Link
            onClick={() => setActivePage("home")}
            className="flex items-center gap-3 p-4 rounded-xl text-white hover:bg-cyan-600 transition cursor-pointer"
          >
            <User size={20} />
            Dashboard
          </Link>

          <Link
            onClick={() => setActivePage("BookingHistory")}
            className="flex items-center gap-3 p-4 rounded-xl text-white hover:bg-cyan-600 transition cursor-pointer"
          >
            <CalendarDays size={20} />
            Booking History
          </Link>
          <Link
            onClick={() => setActivePage("booking")}
            className="flex items-center gap-3 p-4 rounded-xl text-white hover:bg-cyan-600 transition cursor-pointer"
          >
            <Ticket size={20} />
            My Booking
          </Link>

          <Link
            onClick={() => setActivePage("settings")}
            className="flex items-center gap-3 p-4 rounded-xl text-white hover:bg-cyan-600 transition cursor-pointer"
          >
            <Settings size={20} />
            Profile Settings
          </Link>
        </div>

        <button
          onClick={handleLogout}
          className="w-full mt-4 bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl flex items-center justify-center gap-2"
        >
          <LogOut size={20} />
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">
        {activePage === "home" && (
          <>
            <h1 className="text-4xl font-bold text-white">
              Welcome Back, {user?.name} 👋
            </h1>

            <p className="text-gray-400 mt-3">
              Manage your bookings and events from one place.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-10">
              <div className="bg-[#0d1f29] p-6 rounded-3xl border border-cyan-900">
                <h3 className="text-gray-400">Total Bookings</h3>
                <h2 className="text-cyan-400 text-4xl font-bold mt-3">12</h2>
              </div>

              <div className="bg-[#0d1f29] p-6 rounded-3xl border border-cyan-900">
                <h3 className="text-gray-400">Upcoming Events</h3>
                <h2 className="text-cyan-400 text-4xl font-bold mt-3">5</h2>
              </div>

              <div className="bg-[#0d1f29] p-6 rounded-3xl border border-cyan-900">
                <h3 className="text-gray-400">Completed Events</h3>
                <h2 className="text-cyan-400 text-4xl font-bold mt-3">7</h2>
              </div>
            </div>

            <div className="mt-10 bg-[#0d1f29] rounded-3xl p-8 border border-cyan-900">
              <h2 className="text-white text-2xl font-bold">Recent Activity</h2>

              <div className="mt-6 text-gray-300">
                No recent bookings available.
              </div>
            </div>
          </>
        )}

        {activePage === "BookingHistory" && <BookingHistory />}

        {activePage === "booking" && <MyBooking />}

        {activePage === "settings" && <ProfileSettings />}
      </div>
    </div>
  );
}

export default Dashboard;
