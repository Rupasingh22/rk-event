import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [admin, setAdmin] = useState(null);
  const [user, setUser] = useState(null);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    const loggedInAdmin = localStorage.getItem("admin");

    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }

    if (loggedInAdmin) {
      setAdmin(JSON.parse(loggedInAdmin));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("admin");

    window.location.href = "/";
  };
  const [showEvents, setShowEvents] = useState(false);

  const events = [
    { name: "Birthday Party", path: "/events/birthday-party" },
    { name: "Valentine Party", path: "/events/valentine-party" },
    { name: "Reception", path: "/events/reception" },
    { name: "Graduation Party", path: "/events/graduation-party" },
    { name: "Corporate Event", path: "/events/corporate-event" },
    {
      name: "Anniversary Celebration",
      path: "/events/anniversary-celebration",
    },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-[#002b36] text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold cursor-pointer">
          <Link to="/">RK EVENT</Link>
        </h1>

        <nav className="relative">
          <ul className="flex space-x-8">
            <li>
              <Link
                to="/"
                className="hover:text-[#00bcd4] transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/service"
                className="hover:text-[#00bcd4] transition-colors duration-300"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className="hover:text-[#00bcd4] transition-colors duration-300"
              >
                Gallery
              </Link>
            </li>
            {/* EVENTS Section */}
            <li className="relative flex items-center space-x-2">
              {/* Main Events Page Link */}
              <Link
                to="/events"
                className="hover:text-[#00bcd4] transition-colors duration-300"
              >
                Events
              </Link>

              {/* Dropdown Toggle Button */}
              <button
                onClick={() => setShowEvents(!showEvents)}
                className="hover:text-[#00bcd4] transition-colors duration-300 text-lg"
              >
                ▼
              </button>

              {/* Dropdown Menu */}
              {showEvents && (
                <ul className="absolute top-full left-0 mt-2 bg-white text-black border border-gray-700 rounded shadow-lg w-56">
                  {events.map((event, index) => (
                    <li key={index}>
                      <a
                        href={event.path}
                        target=""
                        rel="noopener noreferrer"
                        className="block px-4 py-2 hover:bg-[#00bcd4] hover:text-white cursor-pointer"
                      >
                        {event.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <Link
                to="/testimonials"
                className="hover:text-[#00bcd4] transition-colors duration-300"
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-[#00bcd4] transition-colors duration-300"
              >
                Contact us
              </Link>
            </li>
            <li>
              <Link
                to="/book-event"
                className="hover:text-[#00bcd4] transition-colors duration-300"
              >
                Book Event
              </Link>
            </li>
            {user || admin ? (
              <li className="relative">
                <button
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="hover:text-[#00bcd4]"
                >
                  {admin ? "Admin" : user?.name} ▼
                </button>
                {showProfileMenu && (
                  <div className="absolute right-0 mt-3 bg-black border border-gray-700 rounded-lg w-40">
                    <Link
                      to={admin ? "/admin-dashboard" : "/dashboard"}
                      onClick={() => setShowProfileMenu(false)}
                      className="block px-4 py-3 hover:bg-[#00bcd4]"
                    >
                      Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-3 hover:bg-red-600"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </li>
            ) : (
              <>
                <li>
                  <Link
                    to="/login"
                    className="hover:text-[#00bcd4] transition-colors duration-300"
                  >
                    Login
                  </Link>
                </li>

                <li>
                  <Link
                    to="/register"
                    className="hover:text-[#00bcd4] transition-colors duration-300"
                  >
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
