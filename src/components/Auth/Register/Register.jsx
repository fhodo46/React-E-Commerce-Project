// src/components/Register/Register.jsx
import { useState } from "react";
import { registerUser, getUserByUsername } from "../../../services/users";
import { useNavigate, Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      var user = await getUserByUsername(username);
      if (user) {
        console.error("Username already exists:", username);
        setError("Registration failed. Username already exists:" + username);
        return;
      }
      const newUser = await registerUser(
        firstName,
        lastName,
        username,
        password
      );
      if (newUser) {
        alert("Registration successful. Please log in.");
        navigate("/dashboard"); // Redirect after successful registration
      } else {
        setError("Registration failed. Please try again.");
      }
    } catch (err) {
      console.log("error", err);
      setError("Failed to register. Please try again.");
    }
  };

  return (
    <div className="registerbodyclass">
    <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900&display=swap"
    rel="stylesheet" precedence="default"/>  
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="d-md-flex">
              <div className="text-wrap p-lg-5 text-center d-flex align-items-center order-md-last">
                <div className="text w-100">
                  <h2> Welcome to register </h2>
                  <p> Already have an account?</p>
                  <Link className="btn btn-white" to="/login"> Sign In </Link>
                </div>
              </div>
              <div className="login-wrap p-lg-5">
                <div className="d-flex">
                  <div className="w-100">
                    <h3> Register
                    {error && <p className="error-message">{error}</p>}
                    </h3>
                  </div>
                  <div className="w-100 d-flex justify-content-end">
                    <a href="#" className="social-icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-facebook"></span>
                    </a>
                    <a href="#" className="social-icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-twitter"></span>
                    </a>
                  </div>
                </div>
                
               <form onSubmit={handleRegister}>
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            value={firstName} 
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            minLength={3}
            maxLength={20}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            minLength={8}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
                    <button type="submit" className="form-control btn btn-primary"> Register </button>
                  </div>
      </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> <br/>  <br/>  <br/> 
  </div>
  );
};

export default Register;

