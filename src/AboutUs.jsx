import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-left">
        <h1>About Us</h1>
        <p>
          Welcome to <span className="highlight">EduPro</span>, a platform built
          by learners for learners. We’re a team of developers, creators, and
          educators who wanted to make online learning less overwhelming and a
          lot more human.
        </p>

        <p>
          Our goal isn’t to just dump information — it’s to help you *actually
          learn*. Every course is curated, structured, and tested by people who
          understand what students really struggle with.
        </p>

        <p>
          From programming to design to career skills, everything here is
          crafted to keep you engaged, consistent, and confident in what you’re
          building. Whether you’re studying late at night or squeezing a session
          between classes, we’ve got a course that fits your pace.
        </p>

        <div className="about-stats">
          <div className="stat-box">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135789.png"
              alt="Students"
            />
            <div>
              <h3>10K+</h3>
              <p>Active Learners</p>
            </div>
          </div>
          <div className="stat-box">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1995/1995574.png"
              alt="Courses"
            />
            <div>
              <h3>200+</h3>
              <p>Practical Courses</p>
            </div>
          </div>
          <div className="stat-box">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135823.png"
              alt="Instructors"
            />
            <div>
              <h3>50+</h3>
              <p>Mentors & Creators</p>
            </div>
          </div>
        </div>
      </div>

      <div className="about-right">
        <img
          src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif"
          alt="Team"
        />
      </div>
    </div>
  );
};

export default AboutUs;
