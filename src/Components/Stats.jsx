import "./Stats.css";

function Stats() {

  const stats = [
    {
      number: "500+",
      title: "Properties Managed",
    },
    {
      number: "120+",
      title: "Communities Served",
    },
    {
      number: "98%",
      title: "Client Satisfaction",
    },
    {
      number: "24/7",
      title: "Customer Support",
    },
  ];

  return (
    <section className="stats">

      <p className="section-tag">OUR ACHIEVEMENTS</p>

      <h2>Numbers That Speak for Themselves</h2>

      <div className="stats-grid">

        {stats.map((item, index) => (

          <div className="stat-card" key={index}>

            <h3>{item.number}</h3>

            <p>{item.title}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Stats;