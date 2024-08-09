// Register.js
import React from 'react';


const Register = () => {
  return (
    <div className="login-container">
      <div className="abc">
        <div className="login-form-wrapper">
          <h3 className="login-title">Register to get started</h3>
          <form action="/register" method="post" className="login-form">
          <label>
              Name
              <input type="text" name="name" required />
            </label>
          <label>
              Mobile No
              <input type="number" name="number" required />
            </label>
            <label>
              Email
              <input type="email" name="email" required />
            </label>
            <label>
              Password
              <div className="password-container">
                <input
                  type="password"
                  name="password"
                  id="password"
                  required
                />

              </div>
            </label>

         

            <input className="submit-button" type="submit" value="Register" />
          </form>
          <a className="login-link" href="/login">Login with existing account</a>

        
        
        
        
      </div>
      

    </div>
    </div>
  );
};

export default Register;
