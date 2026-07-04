import "./Popup.css";

function Popup({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup">

        <h2>SpaceSmart Prop Management LLP</h2>

        <p>
          Thank you for your interest in our property management services.
          We'd be happy to assist you.
        </p>

        <div className="popup-details">
          <p>📞 +91 96206 20933</p>
          <p>📧 spacesmartprop@gmail.com</p>
          <p>📍 Sarjapur, Bangalore</p>
          <p>🕘 Mon - Sat | 9:00 AM - 6:00 PM</p>
        </div>

        <div className="popup-buttons">

          <a href="tel:+919620620933">
            <button className="call-btn">
              Call Us
            </button>
          </a>

          <button
            className="close-btn"
            onClick={onClose}
          >
            Close
          </button>

        </div>

      </div>
    </div>
  );
}

export default Popup;