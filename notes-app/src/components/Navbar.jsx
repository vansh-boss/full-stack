import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, X, NotebookPen, User, LogOut } from "lucide-react";
import useAuth from "../hooks/useAuth.js";
import { logoutUser } from "../api/authApi.js";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutUser();
      setUser(null);
      navigate("/login");
    } catch (err) {
      alert("Logout failed");
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <div className="flex items-center gap-2 text-2xl font-bold">
          <NotebookPen size={28} />
          E-NoteWeb
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          {["Home", "Notes", "Add", "About"].map((item) => (
            <Link
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="relative group"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all group-hover:w-full" />
            </Link>
          ))}

          <Link to="/profile" className="flex items-center gap-1 hover:text-indigo-200">
            <User size={18} /> Profile
          </Link>

          <button
            onClick={handleLogout}
            className="flex items-center gap-1 bg-red-500 px-4 py-1.5 rounded-lg hover:bg-red-600 transition"
          >
            <LogOut size={16} />
            Logout
          </button>
        </div>

        {/* MOBILE ICON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-indigo-700 px-6 py-6 flex flex-col gap-4 font-medium">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/notes" onClick={() => setOpen(false)}>Notes</Link>
          <Link to="/add" onClick={() => setOpen(false)}>Add</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          <Link to="/profile" onClick={() => setOpen(false)}>Profile</Link>

          <button
            onClick={handleLogout}
            className="mt-2 bg-red-500 py-2 rounded-lg"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;