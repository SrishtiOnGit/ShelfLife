import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import "./settings.css";

const Settings = () => {
  const [syncEnabled, setSyncEnabled] = useState(true);
  const [notifications, setNotifications] = useState(false);

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <main className="dashboard-main">
        <div className="dashboard-header">
          <h1>Account Settings</h1>
        </div>

        <div className="settings-wrapper">
          {/* Section 1: Preferences */}
          <div className="settings-section">
            <h3>App Preferences</h3>
            
            <div className="setting-row">
              <div className="setting-text">
                <h4>Cloud Firestore Auto-Sync</h4>
                <p>Keep your data synchronized across multiple browser tabs live.</p>
              </div>
              <input 
                type="checkbox" 
                className="toggle-switch"
                checked={syncEnabled}
                onChange={() => setSyncEnabled(!syncEnabled)}
              />
            </div>

            <div className="setting-row">
              <div className="setting-text">
                <h4>Weekly Reminders</h4>
                <p>Receive background notifications to update your tracking list status.</p>
              </div>
              <input 
                type="checkbox" 
                className="toggle-switch" 
                checked={notifications}
                onChange={() => setNotifications(!notifications)}
              />
            </div>
          </div>

          {/* Section 2: Danger Zone */}
          <div className="settings-section danger-zone">
            <h3>Danger Zone</h3>
            <div className="setting-row">
              <div className="setting-text">
                <h4>Wipe Local Storage & Cache</h4>
                <p>This completely logs you out and flushes local session state caches.</p>
              </div>
              <button className="delete-btn">Clear Cache</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Settings;