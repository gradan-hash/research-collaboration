import { useState } from "react";
import "./EventsCalendar.css";

const EventsCalendar = () => {
  // Simulated event data
  const [events] = useState([
    {
      name: "AI Conference 2024",
      date: "2024-11-20",
      location: "New York, NY",
      description:
        "A conference on the latest advancements in Artificial Intelligence.",
    },
    {
      name: "Blockchain Summit",
      date: "2024-12-05",
      location: "San Francisco, CA",
      description:
        "An event focused on blockchain technology in the finance industry.",
    },
  ]);

  const [newEvent, setNewEvent] = useState({
    name: "",
    date: "",
    location: "",
    description: "",
  });

  const [registeredEvents, setRegisteredEvents] = useState([]);
  const [isRegistering, setIsRegistering] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [email, setEmail] = useState("");
  const [registrationMessage, setRegistrationMessage] = useState("");

  // Handling form inputs for event submission
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  // Handle event registration
  const handleRegisterClick = (event) => {
    setIsRegistering(true);
    setSelectedEvent(event);
  };

  // Handle email submission for registration
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setRegisteredEvents([...registeredEvents, selectedEvent]);
    setIsRegistering(false);
    setEmail("");
    setRegistrationMessage(
      "You have successfully registered. An email has been sent."
    );
  };

  // Handle new event submission
  const handleSubmitEvent = (e) => {
    e.preventDefault();
    setEvents([...events, newEvent]);
    setNewEvent({ name: "", date: "", location: "", description: "" });
  };

  return (
    <div className="events-calendar">
      <h2>Events Calendar</h2>

      {/* Event Listings Section */}
      <section className="event-listings">
        <h3>Upcoming Events</h3>
        <ul>
          {events.map((event, index) => (
            <li key={index}>
              <strong>{event.name}</strong> - {event.date}, {event.location}
              <p>{event.description}</p>
              <button onClick={() => handleRegisterClick(event)}>
                Register
              </button>
            </li>
          ))}
        </ul>
      </section>

      {/* Registration Email Prompt */}
      {isRegistering && (
        <section className="registration-form">
          <h3>Register for {selectedEvent.name}</h3>
          <form onSubmit={handleEmailSubmit}>
            <label htmlFor="email">Enter your email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Submit</button>
          </form>
        </section>
      )}

      {/* Registration Message */}
      {registrationMessage && (
        <p className="success-message">{registrationMessage}</p>
      )}

      {/* Registered Events */}
      <section className="registered-events">
        <h3>Your Registered Events</h3>
        {registeredEvents.length > 0 ? (
          <ul>
            {registeredEvents.map((event, index) => (
              <li key={index}>
                <strong>{event.name}</strong> - {event.date}, {event.location}
              </li>
            ))}
          </ul>
        ) : (
          <p>You have not registered for any events yet.</p>
        )}
      </section>

      {/* Event Submission Form */}
      <section className="event-submission">
        <h3>Submit a New Event</h3>
        <form onSubmit={handleSubmitEvent}>
          <label htmlFor="name">Event Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={newEvent.name}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="date">Event Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={newEvent.date}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={newEvent.location}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={newEvent.description}
            onChange={handleInputChange}
            required></textarea>

          <button type="submit">Submit Event</button>
        </form>
      </section>
    </div>
  );
};

export default EventsCalendar;
