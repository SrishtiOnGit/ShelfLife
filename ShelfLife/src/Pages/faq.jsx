import React, { useState } from "react";
import "./faq.css";

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const faqs = [
    {
      question: "What is ShelfLife?",
      answer:
        "ShelfLife helps you track books, courses, projects, games, and other interests in one place."
    },
    {
      question: "Is ShelfLife free?",
      answer:
        "Yes! ShelfLife is currently free to use."
    },
    {
      question: "Can I suggest features?",
      answer:
        "Absolutely! User feedback helps shape the future of ShelfLife."
    },
    {
      question: "How do I contact the team?",
      answer:
        "You can contact us at srishti.pixelmind@gmail.com"
    }
  ];

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>

      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">

          <div
            className="faq-question"
            onClick={() =>
              setOpen(open === index ? null : index)
            }
          >
            <h3>{faq.question}</h3>
            <span>{open === index ? "−" : "+"}</span>
          </div>

          {open === index && (
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          )}

        </div>
      ))}
    </div>
  );
};

export default FAQ;