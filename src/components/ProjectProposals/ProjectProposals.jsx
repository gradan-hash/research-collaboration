import { useState } from "react";
import "./ProjectProposals.css";

const ProjectProposals = () => {
  // Simulated data for proposal submissions
  const [proposals, setProposals] = useState([
    { title: "AI in Healthcare", status: "Pending", feedback: "" },
    {
      title: "Blockchain for Supply Chain",
      status: "Approved",
      feedback: "Great proposal. Very innovative approach.",
    },
    {
      title: "IoT in Smart Cities",
      status: "Rejected",
      feedback: "The scope is too broad. Please narrow it down.",
    },
  ]);

  const [newProposal, setNewProposal] = useState({
    title: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProposal({ ...newProposal, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate proposal submission
    const updatedProposals = [
      ...proposals,
      { title: newProposal.title, status: "Pending", feedback: "" },
    ];
    setProposals(updatedProposals);
    setNewProposal({ title: "", description: "" });

    // Alert the user after successful submission
    alert(
      `Proposal "${newProposal.title}" has been submitted successfully. Status: Pending`
    );
  };

  return (
    <div className="project-proposals">
      <h2>Project Proposals</h2>

      {/* Proposal Submission Form */}
      <section className="submission-form">
        <h3>Submit a New Proposal</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Proposal Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={newProposal.title}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="description">Proposal Description</label>
          <textarea
            id="description"
            name="description"
            value={newProposal.description}
            onChange={handleInputChange}
            required></textarea>

          <button type="submit">Submit Proposal</button>
        </form>
      </section>

      {/* Proposal Status Tracker */}
      <section className="proposal-status">
        <h3>Proposal Status Tracker</h3>
        <table>
          <thead>
            <tr>
              <th>Proposal Title</th>
              <th>Status</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {proposals.map((proposal, index) => (
              <tr key={index}>
                <td>{proposal.title}</td>
                <td>{proposal.status}</td>
                <td>{proposal.feedback || "No feedback yet"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Review and Feedback System */}
      <section className="proposal-feedback">
        <h3>Review and Feedback System</h3>
        <p>
          View feedback on your submitted proposals. You will receive feedback
          after review by the committee.
        </p>
      </section>
    </div>
  );
};

export default ProjectProposals;
