import { useState } from "react";
import "./HelpAndSupport.css";

const HelpAndSupport = () => {
  // FAQ data (simulated)
  const [faqs, setFaqs] = useState([
    {
      question: "How do I submit a proposal?",
      answer:
        'To submit a proposal, go to the Proposals page and click on the "Submit Proposal" button. Fill in the required information and submit your document.',
      open: false,
    },
    {
      question: "Where can I find event details?",
      answer:
        "You can find all upcoming events on the Events Calendar page. Each event listing includes the event details, date, location, and registration options.",
      open: false,
    },
  ]);

  // User Guide data with descriptions (simulated)
  const userGuides = [
    {
      title: "How to Create a New Project",
      description:
        "Learn how to create and manage new projects using the project creation tool. Step-by-step instructions included.",
      link: "/projects",
    },
    {
      title: "Navigating the Dashboard",
      description:
        "A guide on navigating the dashboard to manage your proposals, projects, and notifications effectively.",
      link: "/",
    },
    {
      title: "Submitting a Proposal",
      description:
        "This guide walks you through the process of submitting a proposal, from filling out the form to uploading documents.",
      link: "/proposals",
    },
  ];

  // Handle FAQ toggle
  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        return faq;
      })
    );
  };

  // Form state
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleFormChange = (e) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    alert(`Message sent from ${contactForm.name}`);
    setContactForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="help-support">
      <h2>Help & Support</h2>

      {/* FAQ Section */}
      <section className="faq-section">
        <h3>Frequently Asked Questions</h3>
        <div className="faqs">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <h4 onClick={() => toggleFAQ(index)}>{faq.question}</h4>
              {faq.open && <p>{faq.answer}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* User Guides Section */}
      <section className="user-guides">
        <h3>User Guides</h3>
        <ul>
          {userGuides.map((guide, index) => (
            <li key={index} className="guide-item">
              <h4>
                <a href={guide.link}>{guide.title}</a>
              </h4>
              <p>{guide.description}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form">
        <h3>Contact Support</h3>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={contactForm.name}
            onChange={handleFormChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={contactForm.email}
            onChange={handleFormChange}
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={contactForm.message}
            onChange={handleFormChange}
            required></textarea>

          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default HelpAndSupport;
