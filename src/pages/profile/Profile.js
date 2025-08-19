import React from "react";
import "./Profile.css";
import pic from "../../pic.jpg"

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-card">
        <img
          src={pic}
          alt="Profile"
          style={{ width: "100px", height: "100px", borderRadius: "50%", objectFit: "cover" }}
        />
        <h2 className="profile-name">Fahim Raiyan Ahmed</h2>
        <p className="profile-email">E-mail: fahim.cse.20220204098@aust.cse</p>
        <p className="profile-joined">Joined: January 10, 2023</p>
        <p className="profile-dob">Date of birth : June 17, 2003</p>
      </div>
    </div>
  );
}

export default Profile;