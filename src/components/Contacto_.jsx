import React, { useState } from "react";

const Contacto = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="text-custom-color mt-1 text-left md:flex-auto px-20">
      <button
        onClick={() => setShowLinks(!showLinks)}
        title="Click para ver"
        
      >
        Contacto 🔽{" "}
      </button>
      {showLinks && (
        <div>
          <p>Puedes contactarme a través de:</p>
          <a
            href="https://t.me/Albertomillanc"
            target="_blank"
            rel="noopener noreferrer"
            title="Se abrirá una nueva página"
          >
            Telegram
          </a>
          <br />
          <a
            href="slack:Alberto Millán"
            target="_blank"
            rel="noopener noreferrer"
            title="Se abrirá una nueva página"
          >
            Slack
          </a>
          <br />
          <a
            href="https://wa.me/51+983+824+132"
            target="_blank"
            rel="noopener noreferrer"
            title="Se abrirá una nueva página"
          >
            WhatsApp
          </a>
        </div>
      )}
    </div>
  );
};

export default Contacto;
