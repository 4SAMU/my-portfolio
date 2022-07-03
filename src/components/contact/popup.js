import React, { useState } from "react";
import Modal from "./Modal";
import './Modal.css';
import './Modal';

function Popup() {
    const [openModal, setOpenModal] = useState(false)
    return (
        <div>
            <button onClick={() => setOpenModal(true)}
                className="btn btn-primary">
                Send Message
            </button>

            <Modal
                open={openModal}
                onClose={() => setOpenModal(false)} />
        </div >
    )
}

export default Popup
