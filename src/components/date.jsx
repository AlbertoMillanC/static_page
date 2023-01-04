import React, { useEffect, useState } from "react";

function App() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const updateDate = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(updateDate);
  }, []);

  return (
    <div>
      <p>
        Copyright © {currentDate.getFullYear()} |{" "}
        {currentDate.toLocaleString("es-CO")}
      </p>
    </div>
  );
}

export default App;
