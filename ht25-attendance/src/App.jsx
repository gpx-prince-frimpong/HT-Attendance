import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AttendancePage from "./component/AttendancePage";
import AttendeesPage from "./component/AttendeesPage";
import './index.css';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col items-center justify-center p-6">
        <Routes>
          <Route path="/" element={<AttendancePage />} />
          <Route path="/attendees" element={<AttendeesPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

