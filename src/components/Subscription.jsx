
const Suscripcion = () => {
  const handleClick = () => {
    window.location.href = "https://mi-empresa.auth0.com/login";
  };

  return (
    <div className="text-custom-color text-center rounded-full text-cyan-600 hover:text-cyan-800">
      <button onClick={handleClick}  title="Click para ver">Suscripción 🔽 </button>
    </div>
  );
};

export default Suscripcion;
