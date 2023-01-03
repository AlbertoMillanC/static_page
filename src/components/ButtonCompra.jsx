import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Button() {
  const [comprar, setComprar] = useState(false);
  const notify = () => toast("Gracias por suscribirse");

  return (
    <div class=" md:flex  ">
      <div class="    text-custom-color mt-1 text-center   md:flex-auto px-20    ">
        <button
          onClick={() => {
            toast.success("Gracias por su compra");
            setComprar(!comprar);
          }}
        >
          {comprar ? "comprar" : "Comprar"}
        </button>
      </div>
      <div class="  text-custom-color mt-1 text-center   md:flex-auto px-20    ">
        <button onClick={notify}>Legales</button>
      <div>
      <ul class="text-gray-600  grid ">
          <button class="border-r-1 mt-1">Política de privacidad </button>
          <button class="border-r-1 mt-1">Términos y condiciones </button>
          <button class="border-r-1 mt-1">Política de Cookies </button>
          <button class="border-r-1 mt-1">📖Libro de reclamaciones </button>
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
