import { useEffect, useState } from "react";
import {
  FaUserShield,
  FaUsers,
  FaCalendarAlt,
  FaSignOutAlt,
} from "react-icons/fa";

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("users");

  const [stats, setStats] = useState({});
  const [users, setUsers] = useState([]);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("admin")) {
      window.location.href = "/admin-login";
    }

    loadStats();
    loadUsers();
    loadBookings();
  }, []);

  const loadStats = async () => {
    const res = await fetch("http://127.0.0.1:8000/api/admin-stats/");

    const data = await res.json();
    setStats(data);
  };

  const loadUsers = async () => {
    const res = await fetch("http://127.0.0.1:8000/api/users/");

    const data = await res.json();
    setUsers(data);
  };

  const loadBookings = async () => {
    const res = await fetch("http://127.0.0.1:8000/api/bookings/");

    const data = await res.json();
    setBookings(data);
  };

  const deleteUser = async (id) => {
    await fetch(`http://127.0.0.1:8000/api/delete-user/${id}/`);

    loadUsers();
    loadStats();
  };

  const deleteBooking = async (id) => {
    await fetch(`http://127.0.0.1:8000/api/delete-booking/${id}/`);

    loadBookings();
    loadStats();
  };

  const logout = () => {
    localStorage.removeItem("admin");
    window.location.href = "/admin-login";
  };

  return (
    <div className="min-h-screen flex bg-[#08141b]">
      {/* Sidebar */}
      <div className="w-72 bg-[#0d1f29] flex flex-col justify-between shadow-xl">
        <div>
          <div className="p-8 border-b border-gray-700">
            <div className="flex items-center gap-3">
              <FaUserShield size={35} className="text-cyan-400" />

              <h1 className="text-white text-2xl font-bold">Admin</h1>
            </div>
          </div>

          <div className="p-5 space-y-4">
            <button
              onClick={() => setActiveTab("users")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                activeTab === "users"
                  ? "bg-cyan-500 text-black font-bold"
                  : "bg-[#132a36] text-white"
              }`}
            >
              <FaUsers />
              Manage Users
            </button>

            <button
              onClick={() => setActiveTab("events")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                activeTab === "events"
                  ? "bg-cyan-500 text-black font-bold"
                  : "bg-[#132a36] text-white"
              }`}
            >
              <FaCalendarAlt />
              Manage Events
            </button>
          </div>
        </div>

        <div className="p-5">
          <button
            onClick={logout}
            className="w-full flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg"
          >
            <FaSignOutAlt />
            Logout
          </button>
        </div>
      </div>

      {/* Right Content */}
      <div className="flex-1 p-8">
        <h1 className="text-white text-4xl font-bold mb-8">Admin Dashboard</h1>

        {/* Stats */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-[#0d1f29] p-6 rounded-xl">
            <h2 className="text-gray-400">Total Users</h2>

            <h1 className="text-5xl font-bold text-cyan-400 mt-2">
              {stats.totalUsers}
            </h1>
          </div>

          <div className="bg-[#0d1f29] p-6 rounded-xl">
            <h2 className="text-gray-400">Total Bookings</h2>

            <h1 className="text-5xl font-bold text-cyan-400 mt-2">
              {stats.totalBookings}
            </h1>
          </div>
        </div>

        {/* USERS */}
        {activeTab === "users" && (
          <div className="bg-[#0d1f29] rounded-xl p-6 overflow-x-auto">
            <h2 className="text-white text-2xl mb-6">Manage Users</h2>

            <table className="w-full text-white">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="py-3">Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {users.map((user) => (
                  <tr
                    key={user.id}
                    className="text-center border-b border-gray-800"
                  >
                    <td className="py-4">{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>

                    <td>
                      <button
                        onClick={() => deleteUser(user.id)}
                        className="bg-red-600 px-4 py-2 rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* EVENTS */}
        {activeTab === "events" && (
          <div className="bg-[#0d1f29] rounded-xl p-6 overflow-x-auto">
            <h2 className="text-white text-2xl mb-6">Manage Events</h2>

            <table className="w-full text-white">
              <thead>
                <tr className="border-b border-gray-700">
                  <th>Name</th>
                  <th>Email</th>
                  <th>Event</th>
                  <th>Date</th>
                  <th>Guests</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {bookings.map((event) => (
                  <tr
                    key={event.id}
                    className="text-center border-b border-gray-800"
                  >
                    <td className="py-4">{event.name}</td>
                    <td>{event.email}</td>
                    <td>{event.eventType}</td>
                    <td>{event.date}</td>
                    <td>{event.guests}</td>

                    <td>
                      <button
                        onClick={() => deleteBooking(event.id)}
                        className="bg-red-600 px-4 py-2 rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;
