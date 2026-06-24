import { Link } from "react-router-dom";
import { useState } from "react";
import { User, Mail, Lock, Phone, Calendar } from "lucide-react";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/api/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      alert(data.message || "Registration Successful");

      setFormData({
        name: "",
        email: "",
        phone: "",
        eventType: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error);
      alert("Registration Failed");
    }
  };

  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2000')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Glow Effects */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full" />

      <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
        <div className="w-full max-w-6xl grid lg:grid-cols-2 overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl">
          
          {/* Left Side */}
          <div className="hidden lg:flex flex-col justify-center p-12 border-r border-white/10">
            <span className="text-cyan-400 uppercase tracking-[6px]">
              Event Management
            </span>

            <h1 className="text-white text-6xl font-black leading-tight mt-6">
              Start Your
              <br />
              Event Journey
            </h1>

            <p className="text-gray-400 mt-6 text-lg">
              Join thousands of clients creating unforgettable weddings,
              corporate events, concerts and celebrations.
            </p>
          </div>

          {/* Register Form */}
          <div className="p-8 md:p-12">
            <h2 className="text-white text-4xl font-bold">
              Create Account
            </h2>

            <p className="text-gray-400 mt-3">
              Register to plan and manage your dream events.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">

              {/* Name */}
              <div className="relative">
                <User
                  className="absolute left-4 top-4 text-cyan-400"
                  size={20}
                />
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white outline-none focus:border-cyan-400"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <Mail
                  className="absolute left-4 top-4 text-cyan-400"
                  size={20}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white outline-none focus:border-cyan-400"
                />
              </div>

              {/* Phone */}
              <div className="relative">
                <Phone
                  className="absolute left-4 top-4 text-cyan-400"
                  size={20}
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white outline-none focus:border-cyan-400"
                />
              </div>

              {/* Event Type */}
              <div className="relative">
                <Calendar
                  className="absolute left-4 top-4 text-cyan-400"
                  size={20}
                />
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white outline-none focus:border-cyan-400"
                >
                  <option value="">Preferred Event Type</option>
                  <option value="Wedding">Wedding</option>
                  <option value="Corporate Event">
                    Corporate Event
                  </option>
                  <option value="Concert">Concert</option>
                  <option value="Birthday Party">
                    Birthday Party
                  </option>
                </select>
              </div>

              {/* Password */}
              <div className="relative">
                <Lock
                  className="absolute left-4 top-4 text-cyan-400"
                  size={20}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white outline-none focus:border-cyan-400"
                />
              </div>

              {/* Confirm Password */}
              <div className="relative">
                <Lock
                  className="absolute left-4 top-4 text-cyan-400"
                  size={20}
                />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white outline-none focus:border-cyan-400"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-cyan-700 text-white font-bold text-lg hover:scale-[1.02] transition"
              >
                Create Account
              </button>
            </form>

            <p className="text-center text-gray-400 mt-8">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-cyan-400 font-semibold"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
