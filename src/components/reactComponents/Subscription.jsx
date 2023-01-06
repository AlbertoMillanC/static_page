const Suscripcion = () => {
  const handleClick = () => {
    window.location.href = "https://mi-empresa.auth0.com/login";
  };

  return (
    <div className="  text-custom-color text-center rounded-full text-cyan-600 hover:text-cyan-200">
      <button onClick={handleClick} title="Click para ver">
        <div class="  flex ">
          <div class="px-1">Suscripción </div>
          <div class=" py-2 ">
          
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#000000"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.4142 3L7.66142 8.75C7.27357 9.1379 6.72643 9.1379 6.33357 8.75L0.583569 3C-0.194713 2.4118 -0.194713 1.5882 0.583569 1L6.33357 -4.25C6.72643 -4.8621 7.27357 -4.8621 7.66142 -4.25L13.4142 1C14.1947 1.5882 14.1947 2.4118 13.4142 3Z"
                fill="#9ef2cb"               />
            </svg>
          </div>
        </div>
      </button>
    </div>
  );
};

export default Suscripcion;
