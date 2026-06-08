import React, { useState } from "react";
import "./review.css";

import emailjs from "@emailjs/browser";

const ReviewForm = () => {
  const [review, setReview] = useState({
    name: "",
    rating: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setReview({
      ...review,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

   
    const templateParams = {
      from_name: review.name,
      rating: review.rating,
      message: review.message,
    };

    
    emailjs
      .send(
        "service_3x9rz1k",   
        "template_i1o871g",  
        templateParams,
        "DHvZ1NztPyjigVX20"    
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Thank you for your review! It has been sent directly to Srishti's inbox.");
        
        
        setReview({
          name: "",
          rating: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("FAILED...", error);
        alert("Oops! Something went wrong while sending the email. Please try again.");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section className="review-section">
      <h2>Share Your Experience</h2>

      <p>Help us improve ShelfLife by sharing your feedback.</p>

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

        
        <button type="submit" disabled={isSending}>
          {isSending ? "Sending..." : "Submit Review"}
        </button>
      </form>
    </section>
  );
};

export default ReviewForm;