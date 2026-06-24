function MyBooking() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-white">
        My Booking
      </h1>

      <div className="grid md:grid-cols-2 gap-6 mt-8">

        <div className="bg-[#0d1f29] rounded-3xl p-6">
          <h2 className="text-white text-2xl">
            Birthday Party
          </h2>

          <p className="text-gray-400 mt-3">
            Event Date : 20 September 2026
          </p>
        </div>

      </div>
    </div>
  );
}

export default MyBooking;