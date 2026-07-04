import "./Footer.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-column">

          <h2>SpaceSmart</h2>

          <p>
            Smart Property Management for Modern Communities.
            We provide reliable, transparent and professional
            property management solutions across Bangalore.
          </p>

        </div>

        <div className="footer-column">

          <h3>Quick Links</h3>

          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#contact">Contact</a>

        </div>

        <div className="footer-column">

          <h3>Our Services</h3>

          <p>Apartment Management</p>
          <p>Facility Management</p>
          <p>Security Management</p>
          <p>Maintenance Services</p>

        </div>

        <div className="footer-column">

          <h3>Contact</h3>

          <p><FaPhoneAlt /> +91 96206 20933</p>

          <p><FaEnvelope /> spacesmartprop@gmail.com</p>

          <p><FaMapMarkerAlt /> Sarjapur, Bangalore</p>

          <div className="social-icons">

            <a href="#"><FaFacebookF /></a>

            <a href="#"><FaInstagram /></a>

            <a href="#"><FaLinkedinIn /></a>

            <a
              href="https://wa.me/919620620933"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
            </a>

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        © 2026 SpaceSmart Prop Management LLP.
        All Rights Reserved.

      </div>

    </footer>
  );
}

export default Footer;