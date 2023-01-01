import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function Button() {
  const [comprar, setComprar] = useState(false);
  const notify = () => toast("Gracias por suscribirse");

  return (
    <div class="flex">
      <button
        
        onClick={() => {
          toast.success("Gracias por su compra");
          setComprar(!comprar);
        }}
      >
        {comprar ? " Compra Aquí" : "Compra Aquí"}
      </button>
      <p></p>
      <div class= "px-40">
      <button   onClick={notify}>subscribirse</button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Button;

  
