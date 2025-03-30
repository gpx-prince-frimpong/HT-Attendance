import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AttendeesPage = () => {
  const [attendees, setAttendees] = useState([]);

  useEffect(() => {
    const storedAttendees = JSON.parse(localStorage.getItem("attendees")) || [];
    setAttendees(storedAttendees);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen overflow-y-auto p-4">
      {/* Page Container */}
      <div className="w-full max-w-6xl bg-white p-6 shadow-lg border-4 border-orange-500 rounded-3xl overflow-x-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-orange-600 mb-4">Attendees List</h1>
        <p className="text-center text-gray-600 mb-6">Here are the people who have checked in.</p>

        {/* Responsive Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-orange-500 text-sm sm:text-base">
            <thead>
              <tr className="bg-orange-500 text-white">
                <th className="text-left p-2 sm:p-3 border border-orange-400">Name</th>
                <th className="text-left p-2 sm:p-3 border border-orange-400">Phone</th>
                <th className="text-center p-2 sm:p-3 border border-orange-400">Gender</th>
                <th className="text-center p-2 sm:p-3 border border-orange-400">Denomination</th>
                <th className="text-center p-2 sm:p-3 border border-orange-400">Residence</th>
                <th className="text-center p-2 sm:p-3 border border-orange-400 w-[150px] sm:w-[200px]">How did you hear?</th>
              </tr>
            </thead>
            <tbody>
              {attendees.length > 0 ? (
                attendees.map((attendee, index) => (
                  <tr key={index} className="border-b border-orange-300 hover:bg-orange-100 transition">
                    <td className="p-2 sm:p-3 border border-orange-300">{attendee.name}</td>
                    <td className="p-2 sm:p-3 border border-orange-300">{attendee.phone}</td>
                    <td className="p-2 sm:p-3 border border-orange-300 text-center">{attendee.gender}</td>
                    <td className="p-2 sm:p-3 border border-orange-300 text-center">{attendee.denomination}</td>
                    <td className="p-2 sm:p-3 border border-orange-300 text-center">{attendee.residence}</td>
                    <td className="p-2 sm:p-3 border border-orange-300 text-center">{attendee.source}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center text-gray-500 p-4">No attendees checked in yet.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Back to Check-in Button */}
      <Link to="/" className="mt-6 mb-6 px-4 sm:px-5 py-2 sm:py-3 bg-orange-500 text-white rounded-lg shadow-lg hover:shadow-xl transition text-sm sm:text-base">
        Back to Check-in
      </Link>
    </div>
  );
};

export default AttendeesPage;
