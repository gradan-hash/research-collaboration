import { useState } from "react";
import "./FundingAndGrants.css";

const FundingAndGrants = () => {
  // Simulated grant opportunities
  const [grants] = useState([
    {
      title: "AI Research Grant",
      fundingType: "Government",
      deadline: "2024-11-15",
    },
    {
      title: "Blockchain Innovation Grant",
      fundingType: "Private",
      deadline: "2024-12-01",
    },
    {
      title: "Sustainable Energy Grant",
      fundingType: "Non-Profit",
      deadline: "2024-10-30",
    },
  ]);

  // Simulated submitted applications for tracking
  const [applications] = useState([
    {
      title: "AI in Healthcare",
      status: "Under Review",
      submissionDate: "2024-09-20",
    },
    {
      title: "Blockchain for Supply Chain",
      status: "Approved",
      submissionDate: "2024-08-15",
    },
    {
      title: "Smart Cities IoT Project",
      status: "Rejected",
      submissionDate: "2024-07-05",
    },
  ]);

  return (
    <div className="funding-grants">
      <h2>Funding and Grants</h2>

      {/* Grant Opportunities Database */}
      <section className="grant-opportunities">
        <h3>Grant Opportunities Database</h3>
        <table>
          <thead>
            <tr>
              <th>Grant Title</th>
              <th>Funding Type</th>
              <th>Deadline</th>
            </tr>
          </thead>
          <tbody>
            {grants.map((grant, index) => (
              <tr key={index}>
                <td>{grant.title}</td>
                <td>{grant.fundingType}</td>
                <td>{grant.deadline}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Application Resources */}
      <section className="application-resources">
        <h3>Application Resources</h3>
        <ul>
          <li>
            <a href="/guidelines">Grant Application Guidelines</a>
          </li>
          <li>
            <a href="/tips">Tips for Writing Grant Proposals</a>
          </li>
        </ul>
      </section>

      {/* Status Tracking System */}
      <section className="status-tracking">
        <h3>Status Tracking System</h3>
        <table>
          <thead>
            <tr>
              <th>Project Title</th>
              <th>Status</th>
              <th>Submission Date</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app, index) => (
              <tr key={index}>
                <td>{app.title}</td>
                <td>{app.status}</td>
                <td>{app.submissionDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default FundingAndGrants;
