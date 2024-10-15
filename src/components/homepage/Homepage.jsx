import { useState } from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  // Simulated project data
  const projects = [
    {
      title: "AI-based Healthcare System",
      description: "An innovative AI-driven system for healthcare...",
      details:
        "This project focuses on using AI to improve healthcare services by predicting patient outcomes and personalizing treatment. Completion date: December 2024. Category: Healthcare Technology.",
    },
    {
      title: "Blockchain for Supply Chain",
      description: "A blockchain-based solution for tracking goods...",
      details:
        "This project aims to enhance transparency in the supply chain using blockchain technology. The goal is to reduce fraud and improve logistics efficiency. Completion date: June 2024. Category: Fintech.",
    },
    {
      title: "Smart City IoT Network",
      description: "Developing an IoT-based infrastructure for smart cities...",
      details:
        "This project focuses on creating a smart city infrastructure where devices communicate seamlessly. It involves using sensors and data analytics to optimize city services. Completion date: March 2025. Category: IoT, Smart Cities.",
    },
  ];

  // Simulated news data
  const newsItems = [
    {
      title: "AI Breakthrough in Healthcare",
      description: "Researchers develop AI that predicts diseases...",
      details:
        "In a recent development, researchers have created an AI system that can predict the onset of diseases with 95% accuracy. Published on: October 14, 2024. Author: Dr. Jane Doe.",
    },
    {
      title: "Blockchain Adoption in Finance",
      description: "Major banks adopting blockchain for secure transactions...",
      details:
        "Financial institutions worldwide are adopting blockchain technology to ensure faster and more secure transactions. Published on: September 22, 2024. Author: John Smith.",
    },
    {
      title: "Smart Cities: The Future of Urban Living",
      description: "How IoT is revolutionizing city management...",
      details:
        "Cities around the world are becoming smarter with IoT technologies that improve traffic management, energy consumption, and safety. Published on: August 18, 2024. Author: Sarah Johnson.",
    },
  ];

  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Handle button click to show modal with details
  const handleViewDetails = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  // Close modal
  const closeModal = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

  return (
    <div className="home-page">
      {/* Featured Projects Section */}
      <section className="featured-projects">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <button onClick={() => handleViewDetails(project)}>
                View Details
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Recent News and Updates Section */}
      <section className="recent-news">
        <h2>Recent News and Updates</h2>
        <div className="news-list">
          {newsItems.map((news, index) => (
            <div className="news-item" key={index}>
              <h3>{news.title}</h3>
              <p>{news.description}</p>
              <button onClick={() => handleViewDetails(news)}>Read More</button>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="quick-links">
        <h2>Quick Links</h2>
        <div className="links-grid">
          <button>
            <Link to="/proposals" className="link1">
              Proposals
            </Link>
          </button>
          <button>
            <Link to="/events" className="link1">
              Events
            </Link>
          </button>
          <button>
            <Link to="/resources" className="link1">
              Resources
            </Link>
          </button>
        </div>
      </section>

      {/* Modal to display details */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>{selectedItem.title}</h3>
            <p>{selectedItem.details}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
