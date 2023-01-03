
import React, { useState } from 'react';

const Contacto = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="text-custom-color mt-1 text-left md:flex-auto px-20" >
      <button onClick={() => setShowLinks(!showLinks)}>Contacto 🔽 </button>
      {showLinks && (
        <div >
          <p>Puedes contactarme a través de:</p>
          <a href="https://t.me/Albertomillanc">Telegram</a>
          <br />
          <a href="slack:Alberto Millán">Slack</a>
          <br />
          <a href="https://wa.me/51+983+824+132">WhatsApp</a>
        </div>
      )}
    </div>
  );
};

export default Contacto;

