import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./EventCard.css";
function Contact({ photo, title, details }) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="contact-card">
        <section className="card-top">
          R<br></br>♠
        </section>
        <div className="contact-card-inside">
          <section className="contact-top">
            <h1>Contact</h1>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d447.99075797232814!2d77.60664473530372!3d11.274052532051702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96d7810fe32d5%3A0x85cf49c5b26fb72e!2sKongu%20Engineering%20College!5e1!3m2!1sen!2sin&output=embed"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
            ></iframe>
          </section>
          <section className="contact-details">
            <ul>
              <li>
                <FaPhoneAlt />
                &nbsp;&nbsp;Aakash:<a href="tel:9080352052">90803 52052</a>
              </li>
              <li>
                <FaPhoneAlt />
                &nbsp;&nbsp; Regin:<a href="tel:9486770938">94867 70938</a>
              </li>
              <li>
                <FaPhoneAlt />
                &nbsp;&nbsp; Manav:<a href="tel:9043038902">90430 38902</a>
              </li>
            </ul>
          </section>
        </div>
        <section className="card-bottom">
          ♥<br></br>S
        </section>
      </div>
    </div>
  );
}

export default Contact;
