import React from 'react';
import PropTypes from 'prop-types';
import './Mess.css';

const Mess = ({userName, userImg, textMessage, id}) => {
  return (
    <div className='mess'>
    <div className="userInfo">
      <img src={userImg} alt="" className="userImg"/>
      <span className="userName">{userName}</span>
    </div>
    <span className="textMessage">{textMessage}</span>
    </div>
  )
};

Mess.propTypes = {
    userName: PropTypes.string,
    userImg: PropTypes.string,
    textMessage: PropTypes.string,
 };

export default Mess;
