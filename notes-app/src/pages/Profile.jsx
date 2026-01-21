import axios from "axios";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";
import {
  Home,
  Search,
  Bell,
  PlusCircle,
  Settings,
  MoreHorizontal,
  Camera,
} from "lucide-react";

const Profile = () => {
  const { user, setUser, logout } = useAuth();

  const handleDpChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("avatar", file);

    const res = await axios.post(
      "http://localhost:8120/user/upload-avatar",
      formData,
      { withCredentials: true }
    );

    setUser(res.data.user);
  };

  return (
    <div className="max-w-md mx-auto mt-10 relative z-10">
      <div className="bg-white rounded-2xl p-6 shadow-xl text-center">

        {/* DP */}
        <div className="relative w-36 h-36 mx-auto rounded-full
          bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
          p-1 shadow-lg">

          <div className="relative w-full h-full rounded-full bg-white group">
            <img
              src={
                user?.activeAvatar
                  ? `http://localhost:8120${user.activeAvatar}`
                  : "/default-avatar.png"
              }
              className="w-full h-full rounded-full object-cover"
            />

            <label className="absolute inset-0 bg-black/40 rounded-full
              flex items-center justify-center
              opacity-0 group-hover:opacity-100 transition cursor-pointer">
              <Camera className="text-white" />
              <input type="file" onChange={handleDpChange} className="hidden" />
            </label>
          </div>
        </div>

        {/* MENU */}
        <div className="grid grid-cols-3 gap-4 mt-6">
          <MenuBox to="/" icon={<Home />} label="Home" color="border-indigo-500" />
          <MenuBox icon={<Search />} label="Search" color="border-blue-500" />
          <MenuBox icon={<Bell />} label="Alerts" color="border-yellow-500" />
          <MenuBox to="/add" icon={<PlusCircle />} label="Create" color="border-green-500" />
          <MenuBox icon={<Settings />} label="Settings" color="border-purple-500" />
          <MenuBox icon={<MoreHorizontal />} label="More" color="border-pink-500" />
        </div>

        <button
          onClick={logout}
          className="w-full mt-8 py-3 rounded-xl bg-red-600 text-white hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

const MenuBox = ({ icon, label, to, color }) => {
  const classes = `
    bg-white rounded-xl p-4 shadow-md
    flex flex-col items-center gap-2
    border-b-4 ${color}
    hover:scale-105 transition
  `;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {icon}
        <span className="text-xs font-medium text-gray-700">{label}</span>
      </Link>
    );
  }

  return (
    <div className={classes}>
      {icon}
      <span className="text-xs font-medium text-gray-700">{label}</span>
    </div>
  );
};

export default Profile;