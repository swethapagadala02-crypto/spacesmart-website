import "./Hero.css";

import { FaCheckCircle } from "react-icons/fa";

function Hero({ openPopup }) {
  return (
    <section className="hero">

      <div className="hero-left">

        <p className="hero-tag">
          PROPERTY MANAGEMENT EXPERTS
        </p>

        <h1>
          Smart Property Management
          <br />
          for Modern Communities
        </h1>

        <p className="hero-description">
          SpaceSmart provides reliable, transparent and
          technology-driven property management solutions for
          apartment associations, gated communities, villas and
          commercial properties.
        </p>

        <div className="hero-features">

          <div><FaCheckCircle /> Apartment Associations</div>
          <div><FaCheckCircle /> Gated Communities</div>
          <div><FaCheckCircle /> Residential Villas</div>
          <div><FaCheckCircle /> Commercial Properties</div>

        </div>

        <div className="hero-buttons">

          <button
          className="primary-btn"
          onClick={openPopup}
          >
          Get Started
          </button>

          <button
        className="secondary-btn"
        onClick={openPopup}
        >
        Contact Us
        </button>

        </div>

      </div>

      <div className="hero-right">

        <img
  src="https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80"
  alt="Modern Building"
/>

      </div>

    </section>
  );
}

export default Hero;