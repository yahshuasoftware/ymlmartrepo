import "../Login/login.css"; // Import CSS for styling

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          navigate("/profile");
        } else {
          return response.json().then((errorData) => {
            setError(errorData.message || "Login failed");
          });
        }
      })
      .catch((err) => setError("An error occurred, please try again."));
  };

  return (
    <div className="main-container">
    
    <div className="login-container">
      <div className="abc">

        <div className="login-form-wrapper">
          <h3 className="login-title">Login to get started</h3>
          <form onSubmit={handleSubmit} className="login-form">
            <label>
              Email
              <input type="email" name="email" required />
            </label>

            <label>
              Password
              <div className="password-container">
                <input
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  id="password"
                  required
                />
                <img
                  src="hide-password.png"
                  id="togglePassword"
                  className="toggle-password"
                  alt="Show/Hide Password"
                  onClick={togglePasswordVisibility}
                />
              </div>
            </label>

            <div className="forgot-password">
              <a href="#">Forgot password?</a>
            </div>

            <input className="submit-button" type="submit" value="Login" />
          </form>
          <a className="login-link" href="/register">Don't have account</a>

        
        
        
        
      </div>
      

        <div>
          {error && (
            <div className="error-message">
              <p>{error}</p>
            </div>
          )}
          </div>
    </div>
   
    </div>
     <div className="zx">
          
     </div>
     </div>
    
  );
};

export default Login;
