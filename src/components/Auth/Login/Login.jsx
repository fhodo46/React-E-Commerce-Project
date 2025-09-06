import { useState, useContext } from "react";
import { loginUser } from "../../../services/users";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";
import { AuthContext } from "../../../context/AuthContext";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await loginUser(username, password);
      if (response?.token) {
        login(response.token);
        navigate("/dashboard");
      } else {
        setError("Invalid credentials.");
      }
    } catch (err) {
      console.log("error", err);
      setError("Failed to log in. Please check your credentials.");
    }
  };

  return (
  
  
  <div className="loginbodyclass">
    <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900&display=swap"
    rel="stylesheet" precedence="default"/>  
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="d-flex">  
              <div className="text-wrap p-lg-5 text-center d-flex align-items-center order-md-last">
                <div className="text w-100">
                  <h2 className="h2forlogin">  Welcome to login </h2>
                  <p> Don't have an account?</p>
                  <Link className="btn btn-white" to="/register"> Sign Up </Link>
                </div>
              </div>
              <div className="login-wrap p-lg-5">
                <div className="d-flex">
                  <div className="w-100">
                    <h3 className="h3forlogin"> Sign In 
                    {error && <p className="error-message">{error}</p>}
                    </h3>
                  </div>
                  <div className="w-100 d-flex justify-content-end">
                    <a href="#" className="social-icon d-flex align-items-center justify-content-center loginanchor">
                      <span className="fa fa-facebook"></span>
                    </a>
                    <a href="#" className="social-icon d-flex align-items-center justify-content-center loginanchor">
                      <span className="fa fa-twitter"></span>
                    </a>
                  </div>
                </div>
                <form className="signin-form" onSubmit={handleLogin}>
                  <div className="form-group">
                    <label className="label"> Username </label>
                    <input type="text" className="form-control" placeholder="Username" 
                  value={username} minLength={3} maxLength={20} onChange={(e) => setUsername(e.target.value)}  required/>
                  </div>
                  <div className="form-group">
                    <label className="label"> Password </label>
                    <input type="password" className="form-control" placeholder="Password" 
                   value={password} minLength={8} maxLength={16} onChange={(e) => setPassword(e.target.value)} required/>
                  </div>
                  <div className="form-group">
                    <button type="submit" className="form-control btn btn-primary"> Sign In </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  );
};




export default Login;