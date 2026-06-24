function BookingHistory() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-white">
        Booking History
      </h1>

      <div className="mt-8 bg-[#0d1f29] rounded-3xl p-6">
        <table className="w-full text-white">
          <thead>
            <tr className="border-b border-cyan-900">
              <th className="p-4 text-left">Event</th>
              <th className="p-4 text-left">Date</th>
              <th className="p-4 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="p-4">Wedding Event</td>
              <td className="p-4">10 Aug 2026</td>
              <td className="p-4 text-green-400">Completed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BookingHistory;