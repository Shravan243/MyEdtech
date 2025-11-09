import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Services from "./Services";
import About from "./AboutUs";
import Contact from "./Contact";
import Login from "./Login";
import { useNavigate } from "react-router-dom";

function Home({ testimonials, currentIndex }) {
  return (
    <div className="main-content">
      <section className="introTxt-carousel">
        <div className="intro-text">
          <h1>Welcome to My EdTech Platform</h1>
          <p>
            Your gateway to quality education. Explore xourses tailored to your
            goals, learn at your own pace, adn master real-world skills that
            actually matter. Whether youre just starting out or aiming to level
            up, weve got the tools, mentors, and community to help you reach
            your next milestone
          </p>
          <button className="cta-button">Enroll Now</button>
        </div>
        <div className="carousel">
          <h3>
            Start your prep the <span>Edtech</span> way
          </h3>
          <section className="carousel-itemtray">
            <div className="carousel-item">
              <span>400+</span>Happy Students
            </div>
            <div className="carousel-item">
              <span>600 Hrs</span>Dedicated lectures
            </div>
            <div className="carousel-item">
              <span>10+ Yrs</span> experienced faculty
            </div>
            <div className="carousel-item">
              <span>40+</span> IIM Admissions
            </div>
          </section>
        </div>
      </section>
      {/* vision-mission goes here */}
      <section className="middle-section">
        <div className="vision-mission">
          <div className="vision">
            <h2>Our Vision</h2>
            <p>
              To redefine online learing by merging technology, personalization,
              and a real-world application. Creating a platform where students
              dont just learn, they master.
            </p>
          </div>
          <div className="mission">
            <h2>Our Mission</h2>
            <p>
              our mission is to make education adaptive, enagaging, and
              outcome-driven. We design courses tailored to each learners pace
              and goals, deliver them through interactive experiences, and
              connect students with industry isnights that prepare them for
              whats next - not just exams.
            </p>
          </div>
        </div>
        <div className="Big-Fonts">
          <h1>
            Learn <span>Smarter</span>.
          </h1>
          <h1>
            <span>Grow</span> Faster<span>.</span>
          </h1>
        </div>
      </section>
      {/* <div className="features">
        <h2 className="feature-item">Personalized Learning</h2>
        <h2 className="feature-item">Expert Instructors</h2>
        <h2 className="feature-item">Interactive Courses</h2>
        </div> */}
      <div className="info-section">
        <div className="about-section">
          <h2>About us</h2>
          <p>
            We are committed to providing the best educational resources. Our
            platform offers a variety of courses tailored to your needs to help
            you succeed in your learning journey.
          </p>
        </div>
        {/* testimonial goes here */}
        <div className="testimonial-tray">
          <div
            className="testimonial-wrapper"
            style={{ transform: `translateX(-${currentIndex * 33}%)` }}
          >
            {testimonials.map((t, idx) => (
              <div className="testimonial-item" key={idx}>
                <p>"{t.text}"</p>
                <h4>- {t.author}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="contact-section">
        <h2>Contact us</h2>
        <p>Email: contact@myedtech.com</p>
      </div>
    </div>
  );
}

function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      navigate(`/services?query=${encodeURIComponent(searchTerm)}`);
      setSearchTerm(""); // optional, can remove if you want it to stay
    }
  };

  return (
    <header className="App-header">
      <nav className="navbar">
        <div className="logo">
          My <span>EdTech</span>
        </div>
        <div className="navigate">
          <Link className="navButtons" to="/">
            Home
          </Link>
          <Link className="navButtons" to="/Services">
            Services
          </Link>
          <Link className="navButtons" to="/About">
            About us
          </Link>
          <Link className="navButtons" to="/Contact">
            Contact us
          </Link>
          <Link className="navButtons" to="/Login">
            Login
          </Link>
        </div>
        <div className="searchbar">
          <input
            type="text"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="Find"
            onClick={() => {
              handleSearch();
            }}
          >
            Search
          </button>
        </div>
      </nav>
    </header>
  );
}

function App() {
  const testimonials = [
    {
      text: "This platform transformed my learning experience. The courses are engaging and the instructors are top-notch!",
      author: "Student A",
    },
    {
      text: "I improved my skills and confidence thanks to the interactive lessons here.",
      author: "Student B",
    },
    {
      text: "The mentorship and community support made all the difference.",
      author: "Student C",
    },
    {
      text: "Highly recommend for anyone looking to level up their skills.",
      author: "Student D",
    },
    {
      text: "A game-changer in online education. The personalized approach really works!",
      author: "Student E",
    },
    {
      text: "The real-world applications taught here prepared me for my career.",
      author: "Student F",
    },
    {
      text: "Flexible learning at its best. I could learn at my own pace and still get great results.",
      author: "Student G",
    },
    {
      text: "The courses are well-structured and the content is very relevant.",
      author: "Student H",
    },
    {
      text: "I loved the interactive elements and practical projects included in the courses.",
      author: "Student I",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 3) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-section">
          <Routes>
            <Route
              path="/"
              element={
                <Home testimonials={testimonials} currentIndex={currentIndex} />
              }
            />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <footer className="App-footer">
          <p>© 2024 My EdTech Platform. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
