import React from "react";
import { FaTimes } from "react-icons/fa";
import { AppContext, useGlobalContext } from "./context";
const Modal = () => {
  const { isOpenModal, openModal } = useGlobalContext();
  return (
    <div
      className={`${
        isOpenModal ? "modal-overlay show-modal" : "modal-overlay"
      }`}
    >
      <div className="modal-container">
        <h3>modal content</h3>
        <button className="close-modal-btn" onClick={openModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
