import React from 'react';
import Modal from '../Modal/Modal.jsx';
import './Login.css';

const Login = ({close, id}) => {
    return (
        <div className='login'>
           <Modal close={close} id={id}>
          <form className='loginForm'>
              <input className='loginInput' type="text" placeholder='enter your login'/>
              <input className='loginInput' type="password" placeholder='enter your password'/>
              <input className='loginInput' type="submit" value='enter'/>
          </form>
      </Modal> 
        </div>
    );
};

export default Login;