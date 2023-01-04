const VolverAlComienzo = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button onClick={handleClick}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="#000000"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.4142 21L7.66142 15.25C7.27357 14.8621 6.72643 14.8621 6.33357 15.25L0.583569 21C-0.194713 21.5882 -0.194713 22.4118 0.583569 23L6.33357 28.75C6.72643 29.1379 7.27357 29.1379 7.66142 28.75L13.4142 23C14.1947 22.4118 14.1947 21.5882 13.4142 21Z"
          fill="#00BFFF"
        />
      </svg>
    </button>
  );
};

export default VolverAlComienzo;
