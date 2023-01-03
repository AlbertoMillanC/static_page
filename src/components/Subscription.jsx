
const Suscripcion = () => {
  const handleClick = () => {
    window.location.href = "https://mi-empresa.auth0.com/login";
  };

  return (
    <div className="text-custom-color rounded-full text-cyan-600 hover:text-cyan-800">
      <button onClick={handleClick}>Suscripción 🔽 </button>
    </div>
  );
};

export default Suscripcion;
