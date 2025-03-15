import React from 'react';
import ReactDOM from 'react-dom';


function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null; // If modal is closed, return nothing

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal">
        <button onClick={onClose} className="close-btn">Close</button>
        {children}
      </div>
    </div>,
    document.getElementById("portal-root") // Renders outside the main root
  );
}

export default Modal;
