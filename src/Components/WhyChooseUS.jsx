import "./WhyChooseUs.css";
//import whyImage from "../assets/images/why-choose-us.jpg";

function WhyChooseUs() {
  const features = [
    {
      title: "Experienced Team",
      description:
        "Our professionals have years of experience managing residential and commercial properties.",
    },
    {
      title: "Transparent Reporting",
      description:
        "Receive clear financial reports and complete visibility into property operations.",
    },
    {
      title: "24/7 Customer Support",
      description:
        "Our support team is always available to assist owners and residents.",
    },
    {
      title: "Technology-Driven",
      description:
        "We use modern tools to simplify maintenance, communication, and property management.",
    },
  ];

  return (
    <section className="why">
      <div className="why-left">
        <p className="section-tag">WHY CHOOSE SPACESMART</p>

        <h2>Trusted Property Management You Can Rely On</h2>

        <div className="feature-list">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="tick">✓</div>

              <div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="why-right">
        <img
  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
  alt="Modern Building"
/>
      </div>
    </section>
  );
}

export default WhyChooseUs;