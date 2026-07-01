import "./Services.css";

function Services() {
  const services = [
    {
      title: "Apartment Management",
      icon: "🏢",
      desc: "Complete management solutions for apartment communities."
    },
    {
      title: "Maintenance",
      icon: "🧹",
      desc: "Regular maintenance and vendor coordination."
    },
    {
      title: "Rent Collection",
      icon: "💰",
      desc: "Timely rent collection and payment tracking."
    },
    {
      title: "Financial Reports",
      icon: "📊",
      desc: "Transparent accounting and monthly reports."
    },
    {
      title: "Security Management",
      icon: "🔐",
      desc: "Security staff and visitor management."
    },
    {
      title: "Customer Support",
      icon: "📞",
      desc: "Dedicated support for residents and owners."
    }
  ];

  return (
    <section className="services">

      <p className="section-tag">OUR SERVICES</p>

      <h2>Everything Your Property Needs</h2>

      <div className="service-grid">

        {services.map((service, index) => (
          <div className="service-card" key={index}>

            <div className="icon">
              {service.icon}
            </div>

            <h3>{service.title}</h3>

            <p>{service.desc}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Services;