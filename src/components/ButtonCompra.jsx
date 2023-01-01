import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Button() {
  const [comprar, setComprar] = useState(false);
  const notify = () => toast("Gracias por suscribirse");

  return (
    <div class="    md:flex  md:flex-auto ">
      <div class=" text-center grid grid-cols-1 p-1  md:flex flex-auto  > ">
        <button
          onClick={() => {
            toast.success("Gracias por su compra");
            setComprar(!comprar);
          }}
        >
          {comprar ? "comprar" : "Comprar"}
        </button>
      </div>
      <div class=" text-center grid grid-cols-1 p-1  md:flex flex-auto  ">
        <button onClick={notify}>subscribirse</button>
      </div>
      <div class="  text-center grid grid-cols-1 p-1  md:flex flex-auto  ">
        <button onClick={notify}>subscribirse</button>
      </div>
      <div class="  text-center grid grid-cols-1 p-1  md:flex flex-auto   ">
        <button onClick={notify}>subscribirse</button>
      </div>
      <div class="  text-center grid grid-cols-1 p-1  md:flex flex-auto  ">
        <button onClick={notify}>subscribirse</button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Button;
