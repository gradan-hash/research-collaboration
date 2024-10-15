import { useState } from "react";
import "./FundingAndGrants.css";

const FundingAndGrants = () => {
  // Simulated grant opportunities with dates in US format
  const [grants] = useState([
    {
      title: "AI Research Grant",
      fundingType: "Government",
      deadline: "11/15/2024", // MM/DD/YYYY format
    },
    {
      title: "Blockchain Innovation Grant",
      fundingType: "Private",
      deadline: "12/01/2024", // MM/DD/YYYY format
    },
    {
      title: "Sustainable Energy Grant",
      fundingType: "Non-Profit",
      deadline: "10/30/2024", // MM/DD/YYYY format
    },
  ]);

  // Simulated submitted applications for tracking with dates in US format
  const [applications] = useState([
    {
      title: "AI in Healthcare",
      status: "Under Review",
      submissionDate: "09/20/2024", // MM/DD/YYYY format
    },
    {
      title: "Blockchain for Supply Chain",
      status: "Approved",
      submissionDate: "08/15/2024", // MM/DD/YYYY format
    },
    {
      title: "Smart Cities IoT Project",
      status: "Rejected",
      submissionDate: "07/05/2024", // MM/DD/YYYY format
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

      {/* Application Resources with external links */}
      <section className="application-resources">
        <h3>Application Resources</h3>
        <ul>
          <li>
            <a
              href="https://www.grants.gov/applicants/grant-applications/how-to-apply-for-grants"
              target="_blank"
              rel="noopener noreferrer">
              Grant Application Guidelines
            </a>
          </li>
          <li>
            <a
              href="https://www.hhs.gov/grants-contracts/grants/get-ready-for-grants-management/tips-for-preparing-grant-proposals/index.html"
              target="_blank"
              rel="noopener noreferrer">
              Tips for Writing Grant Proposals
            </a>
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
