import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
      const response = await fetch("http://127.0.0.1:8000/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        localStorage.setItem(
          "user",
          JSON.stringify({
            name: data.name,
            email: data.email,
          }),
        );

        alert("Login Successful");

        window.location.href = "/";
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Login Failed");
    }
  };
  return (
    <section className="min-h-screen bg-black flex">
      {/* LEFT SIDE */}
      <div className="hidden lg:flex w-[60%] relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1511578314322-379afb476865"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 p-16 flex flex-col justify-between">
          <div>
            <h1 className="text-7xl font-black text-white leading-none">
              EVENTS
              <br />
              REDEFINED
            </h1>

            <p className="text-gray-300 mt-8 text-xl max-w-xl">
              Create unforgettable experiences with world-class event management
              solutions.
            </p>
          </div>

          {/* Floating Stats */}
          <div className="grid grid-cols-3 gap-6">
            <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-6">
              <h2 className="text-4xl font-bold text-[#00bcd4]">500+</h2>
              <p className="text-white">Events</p>
            </div>

            <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-6">
              <h2 className="text-4xl font-bold text-[#00bcd4]">100+</h2>
              <p className="text-white">Brands</p>
            </div>

            <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-6">
              <h2 className="text-4xl font-bold text-[#00bcd4]">99%</h2>
              <p className="text-white">Success</p>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE LOGIN */}
      <div className="w-full lg:w-[40%] flex justify-center items-center px-8 mt-4">
        <div className="w-full max-w-md">
          <h2 className="text-white text-5xl font-bold">Welcome Back</h2>

          <p className="text-gray-400 mt-4">Login to continue your journey.</p>

          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full bg-[#111] border border-gray-800 rounded-2xl px-6 py-4 text-white focus:border-[#00bcd4] outline-none"
            />

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full bg-[#111] border border-gray-800 rounded-2xl px-6 py-4 text-white focus:border-[#00bcd4] outline-none"
            />

            <div className="flex justify-between text-sm">
              <label className="text-gray-400">
                <input type="checkbox" className="mr-2" />
                Remember Me
              </label>

              <Link to="/forgot-password" className="text-[#00bcd4]">
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#00bcd4] to-[#007c91] text-white font-bold text-lg hover:scale-105 transition-all duration-300"
            >
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-8">
            <div className="flex-1 h-px bg-gray-800"></div>
            <span className="px-4 text-gray-500">OR</span>
            <div className="flex-1 h-px bg-gray-800"></div>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-4">
            <button className="bg-[#111] border border-gray-800 rounded-2xl py-4 text-white hover:border-[#00bcd4]">
              Google
            </button>

            <button className="bg-[#111] border border-gray-800 rounded-2xl py-4 text-white hover:border-[#00bcd4]">
              GitHub
            </button>
          </div>

          <p className="text-center text-gray-400 mt-8">
            Don't have an account?{" "}
            <Link to="/register" className="text-[#00bcd4]">
              Register
            </Link>
          </p>

          <div className="flex justify-center mt-6 mb-4">
            <Link
              to="/admin-login"
              className="group relative overflow-hidden px-8 py-3 rounded-full border border-red-500 text-red-400 font-semibold transition-all duration-500 hover:text-white"
            >
              <span className="absolute inset-0 w-0 bg-red-500 transition-all duration-500 group-hover:w-full"></span>

              <span className="relative flex items-center gap-2">
                🔐 Admin Portal
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
