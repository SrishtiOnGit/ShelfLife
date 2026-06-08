import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import "./dashboard.css";

import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc
} from "firebase/firestore";

import { db } from "../firebase";

const Dashboard = () => {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Book");
  const [status, setStatus] = useState("Active");
  const [showForm, setShowForm] = useState(false);

  const fetchItems = async () => {
    const querySnapshot = await getDocs(collection(db, "items"));

    const data = querySnapshot.docs.map((docSnap) => ({
      id: docSnap.id,
      ...docSnap.data(),
    }));

    setItems(data);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const addItem = async () => {
    if (!title.trim()) return;

    await addDoc(collection(db, "items"), {
      title,
      category,
      status,
    });

    setTitle("");
    setCategory("Book");
    setStatus("Active");
    setShowForm(false);

    fetchItems();
  };

  const deleteItem = async (id) => {
    await deleteDoc(doc(db, "items", id));
    fetchItems();
  };

  const total = items.length;
  const active = items.filter((i) => i.status === "Active").length;
  const finished = items.filter((i) => i.status === "Finished").length;
  const planned = items.filter((i) => i.status === "Planned").length;

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <main className="dashboard-main">
        <div className="dashboard-header">
          <h1>My Shelf</h1>

          <button className="new-btn" onClick={() => setShowForm(true)}>
            + New Item
          </button>
        </div>

        <div className="stats-grid">
          <div className="stat-card"><h2>{total}</h2><p>Total</p></div>
          <div className="stat-card"><h2>{active}</h2><p>Active</p></div>
          <div className="stat-card"><h2>{finished}</h2><p>Finished</p></div>
          <div className="stat-card"><h2>{planned}</h2><p>Planned</p></div>
        </div>

        {showForm && (
          <div className="add-form">
            <input
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>Book</option>
              <option>Course</option>
              <option>Project</option>
              <option>Game</option>
              <option>Series</option>
            </select>

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option>Active</option>
              <option>Finished</option>
              <option>Planned</option>
            </select>

            <button onClick={addItem}>Save</button>
          </div>
        )}

        <section className="activity-section">
          <h2>My Items</h2>

          <div className="activity-cards">
            {items.map((item) => (
              <div key={item.id} className="activity-card">
                <h3>{item.title}</h3>
                <p>{item.category}</p>
                <p>{item.status}</p>

                <button
                  className="delete-btn"
                  onClick={() => deleteItem(item.id)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;