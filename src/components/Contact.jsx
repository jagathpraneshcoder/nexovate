import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./EventCard.css";
import "./Contact.css"; // Import the new CSS file

function Contact() {
  return (
    <div className="contact-wrapper">
      <div className="contact-card">
        <div className="card-symbol top-left">
          <span className="symbol">♠</span>
          <span className="letter">A</span>
        </div>

        <div className="contact-card-inside">
          <section className="contact-header">
            <h1>Contact Us</h1>
          </section>

          <section className="contact-map">
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d447.99075797232814!2d77.60664473530372!3d11.274052532051702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96d7810fe32d5%3A0x85cf49c5b26fb72e!2sKongu%20Engineering%20College!5e1!3m2!1sen!2sin&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="KEC Location"
              ></iframe>
            </div>
          </section>
          <section className="contact-details">
            <div className="contact-item">
              <FaPhoneAlt className="contact-icon" />
              <a href="tel:9025857272">90258 57272</a>
            </div>
            <div className="contact-item">
              <FaPhoneAlt className="contact-icon" />
              <a href="tel:9962382191">99623 82191</a>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <span>Kongu Engineering College, Perundurai</span>
            </div>
          </section>
        </div>

        <div className="card-symbol bottom-right">
          <span className="symbol">♠</span>
          <span className="letter">A</span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
