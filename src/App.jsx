import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./components/homepage/Homepage";
import Footer from "./components/footer/Footer";
import UserProfile from "./components/User Profile/UserProfile";
import ProjectProposals from "./components/ProjectProposals/ProjectProposals";
import CollaborationTools from "./components/CollaborationTools/CollaborationTools";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/proposals" element={<ProjectProposals />} />
        <Route path="/resources" element={<CollaborationTools />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
