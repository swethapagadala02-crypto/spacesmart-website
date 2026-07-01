import "./HowItWorks.css";

import {
  FaPhoneAlt,
  FaBuilding,
  FaClipboardList,
  FaKey,
} from "react-icons/fa";

function HowItWorks() {
  const steps = [
    {
      icon: <FaPhoneAlt />,
      title: "Contact Us",
      text: "Reach out to our team to discuss your property management requirements.",
    },
    {
      icon: <FaBuilding />,
      title: "Property Inspection",
      text: "We inspect your property and understand your community's needs.",
    },
    {
      icon: <FaClipboardList />,
      title: "Management Plan",
      text: "We prepare a customized property management plan for your apartment or community.",
    },
    {
      icon: <FaKey />,
      title: "Hassle-Free Management",
      text: "Relax while SpaceSmart manages your property professionally and efficiently.",
    },
  ];

  return (
    <section className="process">

      <p className="section-tag">HOW IT WORKS</p>

      <h2>Simple Process. Professional Management.</h2>

      <div className="process-container">

        {steps.map((step, index) => (
          <div className="process-card" key={index}>

            <div className="process-icon">
              {step.icon}
            </div>

            <h3>{step.title}</h3>

            <p>{step.text}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default HowItWorks;