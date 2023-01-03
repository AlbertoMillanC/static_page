import React, { useState } from 'react';

function Links() {
  // Creamos un estado para controlar si deben mostrarse los enlaces
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="text-custom-color mt-1 text-left md:flex-auto px-20">
      {/* Al hacer clic en el botón, cambiamos el estado de showLinks */}
      <button onClick={() => setShowLinks(!showLinks)}
       title="Click para ver">Legales 🔽</button>
      {/* Si showLinks es true, mostramos los enlaces */}
      {showLinks && (
        <div>
          <ul>
            <li>
              <a
                className="text-custom-color rounded-full text-cyan-600 hover:text-cyan-800"
                href="Privacidad"
              >
                Política de privacidad
              </a>
            </li>
            <li>
              <a
                className="text-custom-color rounded-full text-cyan-600 hover:text-cyan-800"
                href="/terminos"
              >
                Términos y condiciones
              </a>
            </li>
            <li>
              <a
                className="text-custom-color rounded-full text-cyan-600 hover:text-cyan-800"
                href="/politicas_cookies"
              >
                Política de Cookies
              </a>
            </li>
            <li>
              <a
                className="text-custom-color rounded-full text-cyan-600 hover:text-cyan-800"
                href="/libro_de"
              >
                📖Libro de reclamaciones
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Links;
