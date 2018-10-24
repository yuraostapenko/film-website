import React from 'react';
import './Modal.css';

const Modal = ({close, children, id}) => {
    return (
        <div>
            <span className='close' onClick={close} id={id}>x</span>
{children}
        </div>
    );
};

export default Modal;