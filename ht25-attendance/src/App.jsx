import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AttendancePage from "./component/AttendancePage";
import AttendeesPage from "./component/AttendeesPage";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100 ">
        <nav className="mb-6 flex space-x-4">
          <Link to="/" className="px-4 py-2 bg-orange-500 text-white rounded shadow">Check-in</Link>
          <Link to="/attendees" className="px-4 py-2 bg-red-500 text-white rounded shadow">View Attendees</Link>
        </nav>
        <Routes>
          <Route  path="/" element={<AttendancePage />} />
          <Route path="/attendees" element={<AttendeesPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
