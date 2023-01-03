import React, { useState } from "react";

function Compras() {
  const [mostrarCompras, setMostrarCompras] = useState(false);

  return (
    <div className="text-custom-color mt-1 text-left md:flex-auto px-20">
      <button
        onClick={() => {
          setMostrarCompras(!mostrarCompras);
        }}
        title="Click para ver"
      >Comprar 🔽  
      </button>
      {mostrarCompras && (
        <div className="text-cyan-600">
          <ul>
            <li>
              <a
                className="text-custom-color rounded-full text-cyan-600 hover:text-cyan-800"
                href="https://albertomillan.co/projectBuy/nested/Apps/"
              >
                Apps{" "}
              </a>
            </li>
            <li>
              <button
                className="text-custom-color rounded-full text-cyan-600 hover:text-cyan-800"
                href="https://albertomillan.co/projectBuy/nested/tienda-linea/"
              >
                Tienda en Línea{" "}
              </button>
            </li>
            <li>
              <button
                className="text-custom-color rounded-full text-cyan-600 hover:text-cyan-800"
                href="https://albertomillan.co/projectBuy/nested/chat-auto/"
              >
                Chat Automatizado{" "}
              </button>
            </li>
            <li>
              <button
                className="text-custom-color rounded-full text-cyan-600 hover:text-cyan-800"
                href="https://albertomillan.co/projectBuy/pagina-web/"
              >
                Pagína Web{" "}
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Compras;
