import React, { useState } from "react";
import "./signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    mobile: "",
    email: "",
    name: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <div className="logo">
          <img src="media/signup.png" alt="Zerodha Logo" />
        </div>
        <h2>Signup now</h2>

        {submitted ? (
          <div className="success-message">
            <h3>Signup Successful!</h3>
            <p>Thank you for signing up, {formData.name}!</p>
          </div>
        ) : (
          <form className="signup-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="mobile">Mobile Number</label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                placeholder="Enter your mobile number"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="signup-btn">
              Get Started
            </button>
          </form>
        )}
        <p className="terms">
          By signing up, you agree to our <a href="#">Terms and Conditions</a>.
        </p>
      </div>
    </div>
  );
};

export default Signup;
