import React from 'react';
import ReactModal from 'react-modal';
import './ImageModal.css';

const ImageModal = ({ image, onClose }) => {
  return (
    <ReactModal isOpen={!!image} onRequestClose={onClose} className="image-modal" overlayClassName="image-overlay">
      <button className="close-button" onClick={onClose}>Close</button>
      <img src={image} alt="Selected" />
    </ReactModal>
  );
};

export default ImageModal;
