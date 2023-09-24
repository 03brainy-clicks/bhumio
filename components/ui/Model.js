// "use client";
// import React, { Fragment } from "react";
// import ReactDOM from "react-dom";

// const Modal = ({ children, open, setOpen }) => {
//   const handleOverlayClick = (e) => {
//     if (e.target === e.currentTarget) {
//       setOpen(!open);
//     }
//   };

//   if (!open) return null;

//   return ReactDOM.createPortal(
//     <Fragment>
//       <div
//         onClick={handleOverlayClick}
//         className="z-50 fixed w-screen h-screen bg-[#000000] flex items-center justify-center"
//       >
//         <div>{children}</div>
//       </div>
//     </Fragment>,
//     document.body
//   );
// };

// export default Modal;

import React, { Fragment, useEffect } from "react";
import ReactDOM from "react-dom";

const Modal = ({ children, open, setOpen }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setOpen(!open);
    }
  };

  if (!open) return null;

  const modalElement = (
    <Fragment>
      <div
        onClick={handleOverlayClick}
        className="z-50 fixed w-screen h-screen bg-[#000000] flex items-center justify-center"
      >
        <div>{children}</div>
      </div>
    </Fragment>
  );

  // Attach modal to a React Portal after the component mounts
  useEffect(() => {
    const modalRoot = document.getElementById("modal-root");
    modalRoot.appendChild(modalElement);

    return () => {
      modalRoot.removeChild(modalElement);
    };
  }, [modalElement]);

  return ReactDOM.createPortal(modalElement, document.body);
};

export default Modal;
