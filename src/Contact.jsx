import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-section">
        {/* Left Column - Info Boxes */}
        <div className="left-column">
          <div className="info-box">
            <img
              src="https://img.icons8.com/ios-filled/50/000000/address.png"
              alt="Address"
            />
            <p>123 Learning Street, Pune, India</p>
          </div>
          <div className="info-box">
            <img
              src="https://img.icons8.com/ios-filled/50/000000/email.png"
              alt="Email"
            />
            <p>contact@myedtech.com</p>
          </div>
          <div className="info-box">
            <img
              src="https://img.icons8.com/ios-filled/50/000000/phone.png"
              alt="Phone"
            />
            <p>+91 98765 43210</p>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="right-column">
          <h2>Contact Me</h2>
          <form>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Mobile No" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
