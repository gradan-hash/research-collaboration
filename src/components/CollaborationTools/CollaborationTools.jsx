import { useState } from "react";
import "./CollaborationTools.css";

const CollaborationTools = () => {
  // Simulated chat data
  const [messages, setMessages] = useState([
    { user: "Alice", text: "Has anyone tried the new AI algorithm?" },
    {
      user: "Bob",
      text: "Yes, I found it quite effective for small datasets.",
    },
  ]);
  const [newMessage, setNewMessage] = useState("");

  // Simulated file-sharing data
  const [files, setFiles] = useState([
    { name: "ProjectProposal.pdf", size: "500KB" },
    { name: "ResearchPaper.docx", size: "1.2MB" },
  ]);

  // Simulated discussion forum data with replies
  const [posts, setPosts] = useState([
    {
      title: "Best practices for project management?",
      replies: 2,
      lastReply: "Today at 2:00 PM",
      participants: ["Alice", "Charlie"],
      comments: ["I recommend Agile!", "Scrum works best in my experience."], // Initial replies
    },
    {
      title: "How to integrate blockchain with IoT?",
      replies: 5,
      lastReply: "Yesterday at 3:30 PM",
      participants: ["Bob", "Dave", "Eve"],
      comments: [
        "Blockchain adds security.",
        "IoT needs decentralization for scaling.",
      ], // Initial replies
    },
  ]);

  const [selectedPost, setSelectedPost] = useState(null); // Track selected post
  const [newReply, setNewReply] = useState(""); // Store new reply

  const handleSendMessage = (e) => {
    e.preventDefault();
    setMessages([...messages, { user: "You", text: newMessage }]);
    setNewMessage("");
  };

  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    setFiles([
      ...files,
      {
        name: uploadedFile.name,
        size: `${(uploadedFile.size / 1024).toFixed(1)}KB`,
      },
    ]);
  };

  const handlePostClick = (index) => {
    setSelectedPost(index === selectedPost ? null : index); // Toggle selection
  };

  const handleAddReply = (index) => {
    if (newReply.trim() !== "") {
      const updatedPosts = [...posts];
      updatedPosts[index].comments.push(newReply); // Add new reply to the selected post
      updatedPosts[index].replies += 1; // Increment reply count
      setPosts(updatedPosts);
      setNewReply(""); // Clear the input field after submitting
    }
  };

  return (
    <div className="collaboration-tools">
      <h2>Collaboration Tools</h2>

      {/* Chat Interface */}
      <section className="chat-interface">
        <h3>Chat Interface</h3>
        <div className="chat-box">
          {messages.map((message, index) => (
            <div key={index} className="message">
              <strong>{message.user}:</strong> {message.text}
            </div>
          ))}
        </div>
        <form onSubmit={handleSendMessage}>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            required
          />
          <button type="submit">Send</button>
        </form>
      </section>

      {/* File Sharing System */}
      <section className="file-sharing">
        <h3>File Sharing System</h3>
        <ul>
          {files.map((file, index) => (
            <li key={index}>
              {file.name} - {file.size}
            </li>
          ))}
        </ul>
        <input type="file" onChange={handleFileUpload} />
      </section>

      {/* Discussion Forum */}
      <section className="discussion-forum">
        <h3>Discussion Forum</h3>
        <ul>
          {posts.map((post, index) => (
            <li key={index}>
              <div
                onClick={() => handlePostClick(index)}
                className="post-summary">
                <strong>{post.title}</strong> - {post.replies} replies, Last
                reply: {post.lastReply}
              </div>
              {selectedPost === index && (
                <div className="post-details">
                  <p>
                    <strong>Participants:</strong>{" "}
                    {post.participants.join(", ")}
                  </p>
                  <p>
                    <strong>Replies:</strong> {post.replies}
                  </p>
                  <p>
                    <strong>Last Reply:</strong> {post.lastReply}
                  </p>

                  {/* Display comments/replies */}
                  <div className="comments-section">
                    {post.comments.map((comment, i) => (
                      <div key={i} className="comment">
                        <p>{comment}</p>
                      </div>
                    ))}
                  </div>

                  {/* Reply Input */}
                  <div className="reply-section">
                    <input
                      type="text"
                      value={newReply}
                      onChange={(e) => setNewReply(e.target.value)}
                      placeholder="Add your reply..."
                    />
                    <button onClick={() => handleAddReply(index)}>Reply</button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default CollaborationTools;
