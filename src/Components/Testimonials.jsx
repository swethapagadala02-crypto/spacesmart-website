import "./Testimonials.css";

function Testimonials() {

  const reviews = [
    {
      name: "Green Valley Apartments",
      role: "Apartment Association",
      review:
        "SpaceSmart has simplified our apartment management. Their team is responsive, transparent, and highly professional.",
    },
    {
      name: "Sunrise Residency",
      role: "Property Owner",
      review:
        "Excellent maintenance support and financial reporting. We highly recommend SpaceSmart.",
    },
    {
      name: "Lake View Community",
      role: "Residential Society",
      review:
        "Reliable service, quick response times, and excellent communication with residents.",
    },
  ];

  return (
    <section className="testimonial">

      <p className="section-tag">TESTIMONIALS</p>

      <h2>What Our Clients Say</h2>

      <div className="testimonial-grid">

        {reviews.map((review, index) => (

          <div className="testimonial-card" key={index}>

            <div className="stars">
              ⭐⭐⭐⭐⭐
            </div>

            <p className="review">
              "{review.review}"
            </p>

            <h3>{review.name}</h3>

            <span>{review.role}</span>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Testimonials;