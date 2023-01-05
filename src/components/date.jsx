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
    <div class="container byline">
      <p class="text-zinc-400">Copyright  </p>
      <p class="text-zinc-400">Alberto Millán &copy;{currentYear} </p>
      <small class=" text-zinc-400">🚀 Construido con Astro</small> 
    </div>
  );
}

export default App;
