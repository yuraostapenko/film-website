import React from 'react';
import Modal from'../Modal/Modal.jsx';
import './Registration.css';

const Registration = ({close, id}) => {
    return (
        <div className='registration'>
         <Modal close={close} id={id}>
      <form>
        <input type='text' placeholder='enter your login'/>
        <input type='email' placeholder='enter your email' />
        <input type='password' placeholder='enter your password'/>
        <input type='submit' value='sign in'/>
      </form>
    </Modal>   
        </div>
    );
};

export default Registration;