import React from "react";
import ClientModal from "./clientModal";

function Modal({ isOpen, onClose }) {
  return <ClientModal isOpen={isOpen} onClose={onClose} />;
}

export default Modal;
