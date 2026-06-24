function ProfileSettings() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
      <h1 className="text-4xl font-bold text-white">
        Profile Settings
      </h1>

      <div className="bg-[#0d1f29] rounded-3xl p-8 mt-8">

        <div className="mb-5">
          <label className="text-gray-400 block mb-2">
            Name
          </label>

          <input
            value={user?.name || ""}
            readOnly
            className="w-full bg-black p-4 rounded-xl text-white"
          />
        </div>

        <div>
          <label className="text-gray-400 block mb-2">
            Email
          </label>

          <input
            value={user?.email || ""}
            readOnly
            className="w-full bg-black p-4 rounded-xl text-white"
          />
        </div>

      </div>
    </div>
  );
}

export default ProfileSettings;