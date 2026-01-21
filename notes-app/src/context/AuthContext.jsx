import { createContext, useEffect, useState } from "react";
import { getMe, logoutUser } from "../api/authApi";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔄 page refresh pe login check
  useEffect(() => {
    const checkLogin = async () => {
      try {
        const res = await getMe();
        setUser(res.data.user);
      } catch (err) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkLogin();
  }, []);

  const logout = async () => {
    await logoutUser();
    setUser(null);
  };

  if (loading) return null; // ⛔ IMPORTANT

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
