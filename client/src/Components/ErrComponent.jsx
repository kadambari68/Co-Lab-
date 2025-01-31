import React from "react";

const ErrComponent = ({ err }) => {
  const handleClose = () => {
    const error = document.getElementById("error");
    error.style.display = "none";
  };

  return (
    <div
    id="error"
      className="w-fit p-3 mb-2 flex gap-2 mx-auto items-center justify-start rounded-sm"
      style={{
        animation: "popup .3s ease-out forwards",border: '1px solid red',
      }}
    >
      <div className="error__icon mr-2">
        <svg
          fill="none"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m13 13h-2v-6h2zm0 4h-2v-2h2zm-1-15c-1.3132 0-2.61358.25866-3.82683.7612-1.21326.50255-2.31565 1.23915-3.24424 2.16773-1.87536 1.87537-2.92893 4.41891-2.92893 7.07107 0 2.6522 1.05357 5.1957 2.92893 7.0711.92859.9286 2.03098 1.6651 3.24424 2.1677 1.21325.5025 2.51363.7612 3.82683.7612 2.6522 0 5.1957-1.0536 7.0711-2.9289 1.8753-1.8754 2.9289-4.4189 2.9289-7.0711 0-1.3132-.2587-2.61358-.7612-3.82683-.5026-1.21326-1.2391-2.31565-2.1677-3.24424-.9286-.92858-2.031-1.66518-3.2443-2.16773-1.2132-.50254-2.5136-.7612-3.8268-.7612z"
            fill="#ff0000"
          ></path>
        </svg>
      </div>
      <small className="error__title text-red-500">{err}</small>
      <div className="error__close cursor-pointer" onClick={handleClose}>
        <svg
          height="20"
          viewBox="0 0 20 20" 
          width="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z"
            fill="#ff0000"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default ErrComponent;
