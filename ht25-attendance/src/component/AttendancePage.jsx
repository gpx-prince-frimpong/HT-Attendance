import React, { useState, useEffect } from "react";


const AttendancePage = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [denomination, setDenomination] = useState("");
  const [residence, setResidence] = useState("");
  const [source, setSource] = useState("");
  const [attendees, setAttendees] = useState([]);

  useEffect(() => {
    const storedAttendees = JSON.parse(localStorage.getItem("attendees")) || [];
    setAttendees(storedAttendees);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && phone.trim()) {
      const newAttendee = { id: Date.now(), name, phone, gender, denomination, residence,source };
      const updatedAttendees = [...attendees, newAttendee];
      setAttendees(updatedAttendees);
      localStorage.setItem("attendees", JSON.stringify(updatedAttendees));
      setName("");
      setPhone("");
      setGender("");
      setDenomination("");
      setResidence("");
      setSource("");
  
    }
  };

  return (
    <div className="bg-white p-6 shadow-xl rounded-lg w-96 ">
      <h1 className="text-2xl font-bold mb-4 text-orange-600 text-center">
        Check-in for The Pentecost Experience
      </h1>
      <form onSubmit={handleSubmit} className=" ">
        <div className="flex gap-3">
        <div className=""><input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-3 w-full mb-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        />
        <input
          type="text"
          placeholder="Enter Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="border p-3 w-full mb-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        />
        <input
          type="text"
          placeholder="Gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="border p-3 w-full mb-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        /></div>
        <div className=""> <input
          type="text"
          placeholder="Denomination"
          value={denomination}
          onChange={(e) => setDenomination(e.target.value)}
          className="border p-3 w-full mb-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        />
        <input
          type="text"
          placeholder="Place of Residence"
          value={residence}
          onChange={(e) => setResidence(e.target.value)}
          className="border p-3 w-full mb-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        />
        <input
          type="text"
          placeholder="How did you hear about the event?"
          value={source}
          onChange={(e) => setSource(e.target.value)}
          className="border p-3 w-full mb-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        /></div>
        </div>
        
       
        <button
          type="submit"
          className="bg-orange-500 text-white px-4 py-3 rounded w-full font-semibold shadow-md hover:scale-105 transition-transform"
        >
          Check-in
        </button>
      </form>
    </div>
  );
};

export default AttendancePage;
