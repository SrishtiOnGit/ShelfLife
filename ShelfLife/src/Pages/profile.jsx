import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import "./profile.css";

import { auth } from "../firebase"; 
import { onAuthStateChanged } from "firebase/auth";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser({
          username: currentUser.displayName || "Srishti", 
          email: currentUser.email,
          joined: currentUser.metadata.creationTime 
            ? new Date(currentUser.metadata.creationTime).toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
              })
            : "Recently",
          tier: "Pro Tier"
        });
      } else {
       
        setUser({
          username: "Srishti",
          email: "srishti@shelflife.app",
          joined: "June 2026",
          tier: "Pro Tier"
        });
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="dashboard-layout">
        <Sidebar />
        <main className="dashboard-main">
          <div className="dashboard-header">
            <h1>Loading Profile...</h1>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <main className="dashboard-main">
        <div className="dashboard-header">
          <h1>My Profile</h1>
        </div>

        <div className="profile-container">
         
          <div className="profile-card hero">
            <div className="avatar-placeholder">
              {user.username.charAt(0).toUpperCase()}
            </div>
            <h2>{user.username}</h2>
            <p className="profile-joined">Member since {user.joined}</p>
          </div>

          
          <div className="profile-details-grid">
            <div className="detail-item">
              <label>Email Address</label>
              <p>{user.email}</p>
            </div>
            <div className="detail-item">
              <label>Account Status</label>
              <div>
                <span className="badge-active">{user.tier}</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;