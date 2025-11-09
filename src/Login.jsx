import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [isSignup, setIsSignup] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [course, setCourse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userEmail", email);
    alert("Login/Signup successful!");
    navigate("/");

    const accounts = JSON.parse(localStorage.getItem("accounts")) || [];

    if (isSignup) {
      const exists = accounts.find((acc) => acc.email === email);
      if (exists) {
        alert("Account already exists!");
        return;
      }
      accounts.push({ name, email, mobile, password, course });
      localStorage.setItem("accounts", JSON.stringify(accounts));
      alert("Signup successful! Please log in.");
      setIsSignup(false);
      setName("");
      setEmail("");
      setMobile("");
      setPassword("");
      setCourse("");
    } else {
      const user = accounts.find(
        (acc) => acc.email === email && acc.password === password
      );
      if (user) {
        alert(`Welcome back, ${user.name}!`);
        navigate("/");
      } else {
        alert("Invalid credentials!");
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>{isSignup ? "Sign Up for an Account" : "Login to Your Account"}</h2>
        <form onSubmit={handleSubmit}>
          {isSignup && (
            <>
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label>Mobile Number</label>
              <input
                type="tel"
                placeholder="Enter your mobile number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
              />
              <label>Course</label>
              <select
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                required
              >
                <option value="">Select a course</option>
                <option value="Java">Java</option>
                <option value="Python">Python</option>
                <option value="Web Development">Web Development</option>
                <option value="Data Science">Data Science</option>
              </select>
            </>
          )}

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">{isSignup ? "Sign Up" : "Login"}</button>
        </form>
        <p className="signup-link">
          {isSignup ? "Already have an account? " : "Don't have an account? "}
          <span onClick={() => setIsSignup(!isSignup)}>
            {isSignup ? "Login" : "Sign Up"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
