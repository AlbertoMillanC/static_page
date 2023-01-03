import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Button() {
  const [comprar, setComprar] = useState(false);
  const notify = () => toast("Gracias por suscribirse");

  return (
    <div class=" md:flex  ">
      <div class=" mt-1 text-center   md:flex-auto px-20    ">
        <button class="text-custom-color"
          onClick={() => {
            toast.success("Gracias por su compra");
            setComprar(!comprar);
          }}
        >
          {comprar ? "Gracias" : "Comprar"}
        </button>
        <div class="  text-gray-500">
            <ul>
              <li>
                <a class="link"href="https://albertomillan.co/projectBuy/nested/Apps/">Apps </a>
              </li>
              <li>
                <button href="https://albertomillan.co/projectBuy/nested/tienda-linea/">Tienda en Línea </button>
              </li>
            <li>
                <button href="https://albertomillan.co/projectBuy/nested/chat-auto/">Chat Automatizado </button>
              </li>
              <li>
                <button href="https://albertomillan.co/projectBuy/pagina-web/">Pagína Web </button>
              </li>
            </ul>
          </div>

      </div>
      <div class="text-custom-color mt-1 text-center   md:flex-auto px-20    ">
        <button onClick={notify}>Legales</button>
          <div class="text-gray-500">
            <ul>
              <li>
                <a href="Privacidad">Política de privacidad </a>
              </li>
              <li>
                <a href="/terminos">Términos y condiciones </a>
              </li>
            <li>
                <a href="/politicas_cookies">Política de Cookies </a>
              </li>
              <li>
                <a href="/libro_de">📖Libro de reclamaciones </a>
              </li>
            </ul>
          </div>
      </div>

      <div class="  text-custom-color mt-1 text-center   md:flex-auto px-20     ">
        <button onClick={notify}>Subscribirse</button>
      </div>
      <div class="  text-custom-color mt-1 text-center   md:flex-auto px-20     ">
        <button onClick={notify}>Contacto</button>
      </div>
      <div class=" text-custom-color mt-1 text-center   md:flex-auto px-20       ">
        <button onClick={notify}>Redes Sociales</button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Button;
