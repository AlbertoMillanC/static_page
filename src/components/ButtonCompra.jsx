import { useState } from "react";


function buttonBuy() {
  const [comprar, setComprar] = useState(false)

  return (
    <div>
      <button>
        onClick={() => setComprar(!comprar)}
        {comprar ? "comprar" : "compra"}
      </button>
    </div>
  );
}

export default buttonBuy;
