import { useState } from "react";
import "./HomePage.css";

const HomePage = () => {
  // Simulated project data
  const projects = [
    {
      title: "Project Title 1",
      description: "Brief description of Project 1...",
      details: "Detailed information about Project 1.",
    },
    {
      title: "Project Title 2",
      description: "Brief description of Project 2...",
      details: "Detailed information about Project 2.",
    },
    {
      title: "Project Title 3",
      description: "Brief description of Project 3...",
      details: "Detailed information about Project 3.",
    },
  ];

  // Simulated news data
  const newsItems = [
    {
      title: "News Title 1",
      description: "Brief description of News 1...",
      details: "Detailed information about News 1.",
    },
    {
      title: "News Title 2",
      description: "Brief description of News 2...",
      details: "Detailed information about News 2.",
    },
    {
      title: "News Title 3",
      description: "Brief description of News 3...",
      details: "Detailed information about News 3.",
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
          <button>Proposals</button>
          <button>Events</button>
          <button>Resources</button>
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
