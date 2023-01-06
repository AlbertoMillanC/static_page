import React, { useState } from "react";

const Contacto = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="text-custom-color text-center rounded-full text-cyan-600 hover:text-cyan-200">
      <button onMouseOver={() => setShowLinks(!showLinks)} title="Click para ver">
        <div class="  flex ">
          <div class="px-1">Contacto</div>
          <div class=" py-2 ">
            {" "}
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
      {showLinks && (
        <div className=" ">
          <div class="text-zinc-400">Puedes contactarme a través de:</div>
          <ul>
            <li>
              <a
                className="text-custom-color text-cyan-600 hover:text-cyan-300"
                href="https://t.me/Albertomillanc"
                target="_blank"
                rel="noopener noreferrer"
                title="Se abrirá una nueva página"
              >
                Telegram
              </a>
            </li>
            <li>
              <a
                className="text-custom-color text-cyan-600 hover:text-cyan-300"
                href="slack:Alberto Millán"
                target="_blank"
                rel="noopener noreferrer"
                title="Se abrirá una nueva página"
              >
                Slack
              </a>
            </li>
            <li>
              <a
                className=" text-custom-color text-cyan-600 hover:text-cyan-300"
                href="https://wa.me/51+983+824+132"
                target="_blank"
                rel="noopener noreferrer"
                title="Se abrirá una nueva página"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Contacto;
