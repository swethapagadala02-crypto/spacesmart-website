import "./WhatsAppButton.css";
import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {

  const message = encodeURIComponent(
    "Hi SpaceSmart, I'm interested in your property management services."
  );

  return (
    <a
      href={`https://wa.me/919620620933?text=${message}`}
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp />
    </a>
  );
}

export default WhatsAppButton;