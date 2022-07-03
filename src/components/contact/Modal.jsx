import React from 'react';
import "./Modal.css";
import '../../index.css';

const Modal = ({ open, onClose }) => {
    if (!open) return null;
    return (

        <div
            onClick={(e) => {
                e.stopPropagation();
            }}
            className='modalContainer'>
            <div className='closeBtn' onClick={onClose}>
                <div className='closeBtn-text'>
                    Close
                </div>
            </div>
            <div className='transaction-header'>
                Email alert
            </div>
            <div className='h1' >Email redirected to your inbox</div>
        </div>

    );
};

export default Modal;