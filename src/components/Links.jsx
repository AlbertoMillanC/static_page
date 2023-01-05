import React, { useState } from 'react';

function Links() {
  // Creamos un estado para controlar si deben mostrarse los enlaces
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="text-custom-color text-center rounded-full text-cyan-600 hover:text-cyan-200">
      {/* Al hacer clic en el botón, cambiamos el estado de showLinks */}
      <button onMouseOver={() => setShowLinks(!showLinks)}
       title="Click para ver">
        <div class="  flex ">
        <div class="px-1">Legal </div>
        <div class=" py-2 ">
        {" "}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#000000"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.4142 3L7.66142 8.75C7.27357 9.1379 6.72643 9.1379 6.33357 8.75L0.583569 3C-0.194713 2.4118 -0.194713 1.5882 0.583569 1L6.33357 -4.25C6.72643 -4.8621 7.27357 -4.8621 7.66142 -4.25L13.4142 1C14.1947 1.5882 14.1947 2.4118 13.4142 3Z"
                fill="#00BFFF"
              />
            </svg>
          </div>
          
        </div> </button>
       {/* Si showLinks es true, mostramos los enlaces */}
      {showLinks && (
        <div>
          <ul>
            <li>
              <a
                className="text-custom-color rounded-full text-cyan-600 hover:text-cyan-300"
                href="Privacidad"
              >
                Política de privacidad
              </a>
            </li>
            <li>
              <a
                className="text-custom-color rounded-full text-cyan-600 hover:text-cyan-300"
                href="/terminos"
              >
                Términos y condiciones
              </a>
            </li>
            <li>
              <a
                className="text-custom-color rounded-full text-cyan-600 hover:text-cyan-300"
                href="/politicas_cookies"
              >
                Política de Cookies
              </a>
            </li>
            <li>
              <a
                className="text-custom-color rounded-full text-cyan-600 hover:text-cyan-300"
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
