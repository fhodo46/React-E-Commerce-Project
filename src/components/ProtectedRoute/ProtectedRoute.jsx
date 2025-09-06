import { Navigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import PropTypes from "prop-types";

const ProtectedRoute = ({ children }) => {
  const { token } = useContext(AuthContext); // Get token from context
  const [isValidToken, setIsValidToken] = useState(null); // Set initial state to null for loading

  useEffect(() => {
    if (token) {
      try {
        // Parse the token from localStorage (if it's a JWT-like token)
        const decodedToken = JSON.parse(token);

        // Check if the token has expired by comparing the expiration time
        if (decodedToken && decodedToken.exp && Date.now() < decodedToken.exp) {
          setIsValidToken(true); // Token is valid and not expired
        } else {
          setIsValidToken(false); // Token expired or invalid
        }
      } catch (error) {
        console.error("Error parsing token:", error);
        setIsValidToken(false); // If there's an error parsing, set invalid
      }
    } else {
      setIsValidToken(false); // No token found
    }
  }, [token]); // Re-run the effect when `token` changes

  // If the token is invalid or not present, redirect to login
  if (isValidToken === null) {
    return <div>Loading...</div>; // Show loading state while token is being validated
  }

  if (isValidToken === false) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
