import React, { useState, useEffect } from "react";


const AttendeesPage = () => {
  const [attendees, setAttendees] = useState([]);

  useEffect(() => {
    const storedAttendees = JSON.parse(localStorage.getItem("attendees")) || [];
    setAttendees(storedAttendees);
  }, []);

  return (
    <div className="p-6 bg-[#d59444] rounded-lg shadow-lg text-white">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-white">
            <th className="text-left p-2">Name</th>
            <th className="text-left p-2">Phone</th>
            <th className="text-left p-2">Gender</th>
            <th className="text-left p-2">Denomination</th>
            <th className="text-left p-2">Place of Residence</th>
            <th className="text-left p-2 w-[150px]">How did you hear about the event?</th>
            
          </tr>
        </thead>
        <tbody>
          {attendees.map((attendee, index) => (
            <tr key={index} className="border-b border-white">
              <td className="p-2 ">{attendee.name}</td>
              <td className="p-2">{attendee.phone}</td>
              <td className="p-2 text-center">{attendee.gender}</td>
              <td className="p-2 text-center">{attendee.denomination}</td>
              <td className="p-2 text-center">{attendee.residence}</td>
              <td className="p-2 text-center">{attendee.source}</td>
            
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendeesPage;
