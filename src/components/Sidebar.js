import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {FaUser,FaRegFileAlt,FaAngleRight} from "react-icons/fa";
import "./Sidebar.css";
import pic from "../pic.jpg";
function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        <FaAngleRight />
      </button>
      <div className="sidebar-miniprofile">
        <img src={pic} alt="Profile" className="sidebar-pic" />
        {isOpen && <span className="sidebar-name">Fahim Raiyan Ahmed</span>}
      </div>
      <div className="sidebar-links">
        <li onClick={() => navigate("/profile")} className="sidebar-link">
          <FaUser className="icon" />
          {isOpen && <span>Profile</span>}
        </li>
        <li onClick={() => navigate("/articles")} className="sidebar-link">
          <FaRegFileAlt className="icon" />
          {isOpen && <span>My Articles</span>}
        </li>
      </div>
    </div>
  );
}
export default Sidebar;
