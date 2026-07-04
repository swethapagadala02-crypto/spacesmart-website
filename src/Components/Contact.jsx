import "./Contact.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="contact-header">
        <p className="section-tag">CONTACT US</p>
        <h2>Let's Talk About Your Property</h2>
        <p>
          Have questions or need professional property management?
          We'd love to hear from you.
        </p>
      </div>

      <div className="contact-container">

        <div className="contact-info">

          <div className="info-card">
            <FaPhoneAlt className="icon" />
            <div>
              <h3>Call Us</h3>
              <p>+91 9620620933</p>
            </div>
          </div>

          <div className="info-card">
            <FaEnvelope className="icon" />
            <div>
              <h3>Email</h3>
              <p>spacesmartprop@gmail.com</p>
            </div>
          </div>

          <div className="info-card">
            <FaMapMarkerAlt className="icon" />
            <div>
              <h3>Location</h3>
              <p>Sarjapur, Bangalore</p>
            </div>
          </div>

        </div>

        <form className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Email Address"
          />

          <input
            type="tel"
            placeholder="Phone Number"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;