import React, { useState } from "react";
import "../App.css";
import { FaLinkedin, FaPaperPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "../styles/Contact.css";

const FORM_ENDPOINT = "https://formspree.io/f/xjkowgde"; 

const Contact = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    if (!subject.trim() || !message.trim()) {
      setStatus("ERROR");
      return;
    }

    const data = {
      subject,
      message,
    };

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("SUCCESS");
        setSubject("");
        setMessage("");
      } else {
        setStatus("ERROR");
      }
    } catch {
      setStatus("ERROR");
    }
  };

  return (
    <section id="contact" className="contact-section page-section">
      <h2>Let's Get in Touch!</h2>
      <a
        href="https://www.linkedin.com/in/silviawang1"
        target="_blank"
        rel="noopener noreferrer"
        className="linkedin-link"
        aria-label="LinkedIn Profile"
      >
        <FaLinkedin size={40} />
      </a>
      <a href="mailto:w.silvia343@gmail.com" className="email-link" aria-label="Send Email">
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

        <button type="submit">Send Message</button>

        {status === "SUCCESS" && (
          <p className="success-message">Thanks for your message!</p>
        )}
        {status === "ERROR" && (
          <p className="error-message">
            Oops! Something went wrong. Please try again.
          </p>
        )}
      </form>

      <div className="plane-wrapper">
        <div className="plane-content">
          <p className="inspect-text">inspect me</p>
          <div className="hidden-nugget">
            Psst... if you made it this far, might as well leave a message right? 😎
          </div>
          <FaPaperPlane className="paper-plane" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
