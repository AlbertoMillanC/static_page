import Compras from "./Compras";
import Links from "./Links";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Button() {
  const [comprar, setComprar] = useState(false);
  const notify = () => toast("Gracias por suscribirse");

  return (
    <div class=" md:flex  ">
      <div>
        <Compras  />
      </div>

      <div>
        <Links />
      </div>

      
      <div class="  text-custom-color mt-1 text-left   md:flex-auto px-20     ">
        <button onClick={notify}>Contacto</button>
      </div>

      <ToastContainer />
    </div>
  );
}

export default Button;
