import { useState } from "react";
import "./Search.css";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  // Simulated data with more categories
  const simulatedData = [
    {
      name: "AI in Healthcare",
      category: "Project",
      description: "An AI project focused on revolutionizing healthcare.",
    },
    {
      name: "Blockchain Summit",
      category: "Event",
      description:
        "An event discussing the latest trends in blockchain technology.",
    },
    {
      name: "React Workshop",
      category: "Event",
      description: "A workshop for React.js enthusiasts and developers.",
    },
    {
      name: "Proposal for Supply Chain",
      category: "Proposal",
      description: "A proposal focused on supply chain improvements using AI.",
    },
    {
      name: "Research Collaboration",
      category: "Resource",
      description: "Collaborative research between universities on AI and ML.",
    },
    {
      name: "Machine Learning Tutorial",
      category: "Tutorial",
      description: "A beginner's guide to Machine Learning and AI.",
    },
    {
      name: "Deep Learning Research",
      category: "Research Paper",
      description:
        "A research paper on deep learning applications in image recognition.",
    },
    {
      name: "Virtual Reality in Education",
      category: "Project",
      description: "A project exploring the use of VR in modern education.",
    },
    {
      name: "Quantum Computing Symposium",
      category: "Event",
      description: "A symposium discussing advances in quantum computing.",
    },
    {
      name: "Data Science for Beginners",
      category: "Tutorial",
      description: "A comprehensive tutorial on data science basics.",
    },
  ];

  // Handle search input change
  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);

    // Filter the simulated data based on the search term
    const results = simulatedData.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredResults(results);
  };

  // Handle clicking on an item to show more details
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  // Handle closing the modal
  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="search-page">
      <h2>Search Results</h2>
      <input
        type="text"
        placeholder="Search (e.g., AI in Healthcare, Blockchain Summit, Research Papers)"
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />

      {/* Search results section */}
      <div className="results-list">
        {filteredResults.length > 0 ? (
          filteredResults.map((item, index) => (
            <div
              key={index}
              className="result-item"
              onClick={() => handleItemClick(item)}>
              <strong>{item.name}</strong> - <span>{item.category}</span>
            </div>
          ))
        ) : (
          <p>No results found. Please try searching for something else.</p>
        )}
      </div>

      {/* Modal for showing more details */}
      {selectedItem && (
        <div className="modal">
          <div className="modal-content">
            <h3>{selectedItem.name}</h3>
            <p>
              <strong>Category:</strong> {selectedItem.category}
            </p>
            <p>
              <strong>Description:</strong> {selectedItem.description}
            </p>
            <button className="close-modal" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
