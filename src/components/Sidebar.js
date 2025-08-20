import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaAngleRight } from "react-icons/fa";
import "./Sidebar.css";
function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        <FaAngleRight />
      </button>
      <div className="sidebar-links">
        <li onClick={() => navigate("/profile")} className="sidebar-link">
          <FaUser className="icon" />
          {isOpen && <span>Profile</span>}
        </li>
      </div>
    </div>
  );
}
export default Sidebar;
