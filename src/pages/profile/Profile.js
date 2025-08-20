import React from "react";
import "./Profile.css";
import pic from "../../pic.jpg";
import {FaEnvelope,FaPhone,FaBirthdayCake, FaCalendar} from "react-icons/fa";
function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-card">
        <img
          src={pic}
          alt="Profile"
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
        <h2 className="profile-name">Fahim Raiyan Ahmed</h2>
        <p className="profile-email">
          <FaEnvelope className="profile-icon" />
          <strong> E-mail :</strong> fahim.cse.20220204098@aust.cse
        </p>
         <p className="profile-join">
          <FaCalendar className="profile-icon" />
          <strong> Joining date :</strong> January 10, 2023
        </p>
        <p className="profile-mob">
          <FaPhone className="profile-icon" />
          <strong> Phone :</strong> +8801851500036
        </p>
        <p className="profile-dob">
          < FaBirthdayCake className="profile-icon" />
         <strong> Date of birth :</strong> June 17, 2003
        </p>
      </div>
    </div>
  );
}
export default Profile;
