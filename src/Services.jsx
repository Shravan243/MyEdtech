import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Services.css";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const location = useLocation();
  const Navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query") || queryParams.get("search") || "";

  const courses = [
    {
      name: "React Basics",
      subject: "Programming",
      price: 999,
      desc: "Learn fundamentals of React.js",
    },
    {
      name: "Advanced Java",
      subject: "Programming",
      price: 1499,
      desc: "Deep dive into Java and OOPs",
    },
    {
      name: "Data Structures",
      subject: "Programming",
      price: 1199,
      desc: "Ace your coding interviews",
    },
    {
      name: "Mathematics for AI",
      subject: "Math",
      price: 1299,
      desc: "Learn math used in ML",
    },
    {
      name: "Physics Simplified",
      subject: "Science",
      price: 799,
      desc: "Master basic physics",
    },
    {
      name: "Chemistry Essentials",
      subject: "Science",
      price: 999,
      desc: "Quick and fun chemistry lessons",
    },
  ];

  const [search, setSearch] = useState(query);
  const [subject, setSubject] = useState("All");

  useEffect(() => {
    setSearch(query);
  }, [query]);

  const filteredCourses = courses.filter((course) => {
    const matchSubject = subject === "All" || course.subject === subject;
    const matchSearch =
      course.name.toLowerCase().includes(search.toLowerCase()) ||
      course.desc.toLowerCase().includes(search.toLowerCase()) ||
      course.subject.toLowerCase().includes(search.toLowerCase());
    return matchSubject && matchSearch;
  });

  const handleEnroll = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) {
      alert("Please log in to enroll in a course.");
      Navigate("/login");
      return;
    }
    alert("Enrolled successfully!");
  };

  return (
    <div className="services-container">
      <h1 className="title">Our Courses</h1>

      <div className="filters">
        <select onChange={(e) => setSubject(e.target.value)}>
          <option value="All">All Subjects</option>
          <option value="Programming">Programming</option>
          <option value="Math">Math</option>
          <option value="Science">Science</option>
        </select>

        <input
          type="text"
          placeholder="Search courses..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="courses-grid">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course, i) => (
            <div key={i} className="course-card">
              <h3>{course.name}</h3>
              <p className="subject">{course.subject}</p>
              <p className="desc">{course.desc}</p>
              <p className="price">₹{course.price}</p>
              <button onClick={() => handleEnroll(course)}>Enroll Now</button>
            </div>
          ))
        ) : (
          <p className="no-result">No courses found!</p>
        )}
      </div>
    </div>
  );
};

export default Services;
