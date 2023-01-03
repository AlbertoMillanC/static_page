import Contacto from "./Contacto_";
import Suscripcion from "./Subscription";
import Compras from "./Compras";
import Links from "./Links";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Button() {
  const [comprar, setComprar] = useState(false);
  const notify = () => toast("Politicas y condiciones de la pagina");

  return (
    <div class=" md:flex grid grid-cols-1 md:px-20  text-custom-color mt-1  md:text-left text-right md:flex-auto px-9  py-1   ">
      <button onClick={notify}><Compras /></button>

      <button onClick={notify}><Links /></button>

      <button onClick={notify}><Suscripcion /></button>

      <button onClick={notify}><Contacto /></button>

      <ToastContainer />
    </div>
  );
}

export default Button;
