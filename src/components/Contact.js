import React, { useState } from "react";
import "../App.css";
import { FaLinkedin } from "react-icons/fa";
import "../styles/Contact.css";
import { MdEmail } from "react-icons/md";
import { FaPaperPlane } from "react-icons/fa";


const Contact = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // Construct mailto link with encoded subject and body
  const mailtoLink = `mailto:w.silvia343@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Open mail client
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="contact-section page-section">
      <h2>Let's Get in Touch!</h2>
      <a
        href="https://www.linkedin.com/in/silviawang1/"
        target="_blank"
        rel="noopener noreferrer"
        className="linkedin-link"
        aria-label="LinkedIn Profile"
      >
        <FaLinkedin size={40} />
      </a>
      <a
      href="mailto:w.silvia343@gmail.com"
      className="email-link"
      aria-label="Send Email"
      >
      <MdEmail size={40} color="white" />
      </a>    
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Subject:
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Subject"
            required
          />
        </label>

        <label>
          Message:
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            required
          />
        </label>

        <button type="submit">Send Email</button>
      </form>
      <div className="plane-wrapper">
        <FaPaperPlane className="paper-plane" />
      </div>
    </section>
  );
};

export default Contact;
