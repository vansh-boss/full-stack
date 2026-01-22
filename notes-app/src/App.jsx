 import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Notes from "./pages/Notes";
import AddNote from "./pages/AddNote";
import Login from "./pages/Login";
import Register from "./pages/Register";

import useAuth from "./hooks/useAuth";

function App() {
  const { user } = useAuth();

  return (
    <>
      {/* Light Professional Background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-slate-50 via-white to-slate-100"></div>

      {user && <Navbar />}

      <Routes>
        {!user ? (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/add" element={<AddNote />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>

      {user && <Footer />}
    </>
  );
}

export default App;
