import { useState } from "react";

function AdminLogin() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const handleLogin = async(e)=>{
    e.preventDefault();

    const response = await fetch(
      "http://127.0.0.1:8000/api/admin-login/",
      {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          email,
          password
        })
      }
    );

    const data = await response.json();

    if(data.success){
      localStorage.setItem("admin","true");
      window.location.href="/admin-dashboard";
    }else{
      alert(data.message);
    }
  };

  return (
    <div className="min-h-screen bg-black flex justify-center items-center">
      <form
        onSubmit={handleLogin}
        className="bg-[#111] p-8 rounded-xl w-96"
      >
        <h1 className="text-white text-3xl mb-6">
          Admin Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 rounded text-white bg-gray-800"
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 rounded text-white bg-gray-800"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button
          className="w-full bg-cyan-600 text-white p-3 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default AdminLogin;