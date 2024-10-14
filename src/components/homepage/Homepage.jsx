
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Featured Projects Section */}
      <section className="featured-projects">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Project Title 1</h3>
            <p>Brief description of the project...</p>
            <button>View Details</button>
          </div>
          <div className="project-card">
            <h3>Project Title 2</h3>
            <p>Brief description of the project...</p>
            <button>View Details</button>
          </div>
          <div className="project-card">
            <h3>Project Title 3</h3>
            <p>Brief description of the project...</p>
            <button>View Details</button>
          </div>
        </div>
      </section>

      {/* Recent News and Updates Section */}
      <section className="recent-news">
        <h2>Recent News and Updates</h2>
        <div className="news-list">
          <div className="news-item">
            <h3>News Title 1</h3>
            <p>Brief description of the news...</p>
            <button>Read More</button>
          </div>
          <div className="news-item">
            <h3>News Title 2</h3>
            <p>Brief description of the news...</p>
            <button>Read More</button>
          </div>
          <div className="news-item">
            <h3>News Title 3</h3>
            <p>Brief description of the news...</p>
            <button>Read More</button>
          </div>
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
    </div>
  );
};

export default HomePage;
