import "./Achievements.css";
import {
  FaBuilding,
  FaUsers,
  FaStar,
  FaHeadset,
} from "react-icons/fa";

function Achievements() {
  const stats = [
    {
      icon: <FaBuilding />,
      number: "500+",
      title: "Properties Managed",
    },
    {
      icon: <FaUsers />,
      number: "120+",
      title: "Communities Served",
    },
    {
      icon: <FaStar />,
      number: "98%",
      title: "Client Satisfaction",
    },
    {
      icon: <FaHeadset />,
      number: "24/7",
      title: "Customer Support",
    },
  ];

  return (
    <section className="achievements">

      <p className="section-tag">OUR ACHIEVEMENTS</p>

      <h2>Trusted by Hundreds of Property Owners</h2>

      <p className="achievement-subtitle">
        Delivering reliable, transparent, and professional property
        management services across residential and commercial communities.
      </p>

      <div className="achievement-grid">

        {stats.map((item, index) => (
          <div className="achievement-card" key={index}>

            <div className="achievement-icon">
              {item.icon}
            </div>

            <h3>{item.number}</h3>

            <p>{item.title}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Achievements;