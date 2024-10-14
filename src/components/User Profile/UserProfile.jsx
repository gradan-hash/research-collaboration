import "./UserProfile.css";

const UserProfile = () => {
  // Simulated user data
  const user = {
    personalInfo: {
      name: "John Doe",
      title: "Professor of Computer Science",
      institution: "University of Tech",
      bio: "Experienced professor with a passion for artificial intelligence and machine learning. Focused on developing innovative technologies to improve education and society.",
    },
    researchInterests: [
      "Artificial Intelligence",
      "Machine Learning",
      "Natural Language Processing",
      "Robotics",
    ],
    contactInfo: {
      email: "johndoe@university.edu",
      phone: "(123) 456-7890",
      linkedin: "linkedin.com/in/johndoe",
      twitter: "@johndoe",
    },
    connections: [
      { name: "Alice Smith", relation: "Colleague" },
      { name: "Bob Johnson", relation: "Research Partner" },
      { name: "Carol White", relation: "Mentor" },
    ],
  };

  return (
    <div className="user-profile">
      {/* Personal Information Section */}
      <section className="personal-info">
        <h2>Personal Information</h2>
        <p>
          <strong>Name:</strong> {user.personalInfo.name}
        </p>
        <p>
          <strong>Title:</strong> {user.personalInfo.title}
        </p>
        <p>
          <strong>Institution:</strong> {user.personalInfo.institution}
        </p>
        <p>
          <strong>Bio:</strong> {user.personalInfo.bio}
        </p>
      </section>

      {/* Research Interests Section */}
      <section className="research-interests">
        <h2>Research Interests</h2>
        <ul>
          {user.researchInterests.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>
      </section>

      {/* Contact Information Section */}
      <section className="contact-info">
        <h2>Contact Information</h2>
        <p>
          <strong>Email:</strong> {user.contactInfo.email}
        </p>
        <p>
          <strong>Phone:</strong> {user.contactInfo.phone}
        </p>
        <p>
          <strong>LinkedIn:</strong>{" "}
          <a
            href={`https://${user.contactInfo.linkedin}`}
            target="_blank"
            rel="noopener noreferrer">
            {user.contactInfo.linkedin}
          </a>
        </p>
        <p>
          <strong>Twitter:</strong>{" "}
          <a
            href={`https://twitter.com/${user.contactInfo.twitter}`}
            target="_blank"
            rel="noopener noreferrer">
            {user.contactInfo.twitter}
          </a>
        </p>
      </section>

      {/* Connections and Networking Section */}
      <section className="connections">
        <h2>Connections and Networking</h2>
        <ul>
          {user.connections.map((connection, index) => (
            <li key={index}>
              <strong>{connection.name}</strong> - {connection.relation}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default UserProfile;
