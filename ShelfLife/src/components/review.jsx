import React, { useState } from "react";
import "./review.css";

const ReviewForm = () => {
  const [review, setReview] = useState({
    name: "",
    rating: "",
    message: "",
  });

  const handleChange = (e) => {
    setReview({
      ...review,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(review);

    setReview({
      name: "",
      rating: "",
      message: "",
    });

    alert("Thank you for your review!");
  };

  return (
    <section className="review-section">
      <h2>Share Your Experience</h2>

      <p>
        Help us improve ShelfLife by sharing your feedback.
      </p>

      <form className="review-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={review.name}
          onChange={handleChange}
          required
        />

        <select
          name="rating"
          value={review.rating}
          onChange={handleChange}
          required
        >
          <option value="">Select Rating</option>
          <option value="5">⭐⭐⭐⭐⭐ (5)</option>
          <option value="4">⭐⭐⭐⭐ (4)</option>
          <option value="3">⭐⭐⭐ (3)</option>
          <option value="2">⭐⭐ (2)</option>
          <option value="1">⭐ (1)</option>
        </select>

        <textarea
          name="message"
          placeholder="Write your review..."
          rows="6"
          value={review.message}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Submit Review
        </button>
      </form>
    </section>
  );
};

export default ReviewForm;