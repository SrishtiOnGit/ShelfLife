import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import "./category.css";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const Category = () => {
  const [categoryCounts, setCategoryCounts] = useState({
    Book: 0,
    Course: 0,
    Project: 0,
    Game: 0,
    Series: 0,
  });

  
  const categoryColors = {
    Book: "#10B981",    
    Course: "#3B82F6",  
    Project: "#F59E0B", 
    Game: "#8B5CF6",    
    Series: "#EC4899",  
  };

  useEffect(() => {
    const fetchAndCountCategories = async () => {
      const querySnapshot = await getDocs(collection(db, "items"));
      
      
      const counts = { Book: 0, Course: 0, Project: 0, Game: 0, Series: 0 };
      
      querySnapshot.docs.forEach((docSnap) => {
        const data = docSnap.data();
        if (data.category && counts[data.category] !== undefined) {
          counts[data.category] += 1;
        }
      });

      setCategoryCounts(counts);
    };

    fetchAndCountCategories();
  }, []);

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <main className="dashboard-main">
        <div className="dashboard-header">
          <h1>Shelves & Categories</h1>
        </div>

        <div className="category-grid">
          {Object.keys(categoryCounts).map((catName) => (
            <div key={catName} className="category-card-ui">
              <div 
                className="category-indicator" 
                style={{ backgroundColor: categoryColors[catName] }}
              />
              <div className="category-info">
                <h3>{catName}</h3>
                <p>{categoryCounts[catName]} {categoryCounts[catName] === 1 ? 'item' : 'items'} tracked</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Category;