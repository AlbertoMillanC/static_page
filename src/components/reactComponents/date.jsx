import React, { useEffect, useState } from 'react';

function App() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const updateYear = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 1000);
    return () => clearInterval(updateYear);
  }, []);

  return (
    <div class="container grid byline mt-10">
      <small class="text-zinc-500">Copyright  </small>
      <small class="text-zinc-500">Alberto Millán &copy;{currentYear} </small>
      <small class=" text-zinc-500">🚀 Construido con Astro</small> 
    </div>
  );
}

export default App;
