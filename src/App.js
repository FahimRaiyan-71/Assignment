import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Profile from "./pages/profile/Profile";


function App() {
  return (
    <Router>
      <div>
        <div style={{ marginLeft: "200px", padding: "20px", flex: 1 }}>
          <Routes>
            <Route path="/" element={<Navigate to="/profile" />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;