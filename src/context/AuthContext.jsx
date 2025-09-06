import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getUserById } from "../services/users";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Initialize token from localStorage (if available)
  const [token, setToken] = useState(localStorage.getItem("authToken") || null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      // When token changes, update user by parsing the new token
      if (token) {
        try {
          const parsedToken = JSON.parse(token);
          if (parsedToken.id) {
            const thisUser = await getUserById(parsedToken.id);
            console.log("🚀 ~ fetchUser ~ thisUser:", thisUser)
            setUser(thisUser);
          } else {
            setUser(null);
          }
        } catch (error) {
          console.error("Error parsing token:", error);
          setUser(null);
        }
      } else {
        setUser(null); // No token, reset user state
      }

      console.log("AuthContext - Token Updated:", token);
    };

    fetchUser();
  }, [token]);

  const login = (newToken) => {
    // Store token and update user state
    localStorage.setItem("authToken", newToken);
    setToken(newToken);
  };

  const logout = () => {
    // Clear token and reset user state
    localStorage.removeItem("authToken");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
