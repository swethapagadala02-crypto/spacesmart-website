import "./About.css";

function About() {
  return (
    <section className="about">

      <p className="section-tag">ABOUT SPACESMART</p>

      <h2>We Simplify Property Management</h2>

      <p className="about-text">
        SpaceSmart Property Management LLP provides reliable,
        transparent and technology-driven property management
        solutions for apartment associations, gated communities,
        residential and commercial properties.
      </p>

      <div className="about-cards">

        <div className="card">
          <h3>🏢 Apartment Management</h3>
          <p>Complete maintenance and administration for apartment communities.</p>
        </div>

        <div className="card">
          <h3>🏠 Property Management</h3>
          <p>Professional management for residential and commercial properties.</p>
        </div>

        <div className="card">
          <h3>👥 Tenant Support</h3>
          <p>Efficient communication and support for owners and tenants.</p>
        </div>

        <div className="card">
          <h3>📞 24/7 Assistance</h3>
          <p>Always available whenever your property needs attention.</p>
        </div>

      </div>

    </section>
  );
}

export default About;