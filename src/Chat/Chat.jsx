import React, { Component } from 'react';
import Mess from '../Mess/Mess.jsx';
import {chatShow} from '../redux/actions/showChatActions';
import {connect} from 'react-redux';
import './Chat.css';

class Chat extends Component {
  state = {
    inputValue: '',
    message: [],
    // message: [
    //   {
    //   userName: 'yura',
    //   userImg: 'https://www.shareicon.net/data/128x128/2016/05/05/760285_face_512x512.png',
    //   textMessage: 'ddaafdsfdsf sdf sdf sadf saf',
    //   key: 111,
    // },
    // {
    //   userName: 'gorg',
    //   userImg: 'https://www.shareicon.net/data/128x128/2016/05/05/760285_face_512x512.png',
    //   textMessage: 'ddaafdsfdsfsdfsdf sdf sdf sdf  sdf sdf sadf saf',
    //   key: 222,
    // }
    // ],
  };

  send = event => {
    event.preventDefault();
    let comment = {
      userName: 'yura',
      userImg: 'https://image.flaticon.com/icons/svg/206/206853.svg',
      textMessage: this.state.inputValue,
      id: Date.now(),
    };
    this.setState(prev => ({
      inputValue: '',
      message: [...prev.message, comment],
    }));
  };

  readInput = (event) => {
    this.setState({
      inputValue: event.target.value,
    })
  };

  

  

  render() {
    return (
      <div className={this.props.showChat ? 'chatShow' : 'chatHidden'}>
        <span className="chatcomm">LAST COMMENTS</span>
        <form className="chatForm">
          <textarea
          onChange = {this.readInput}
          value = {this.state.inputValue}
            spellCheck="true"
            maxLength="100"
            placeholder="enter comments. max lenghts 100 symbols"
            type="text"
            className="chatInput"
          />
          <button onClick={this.send} type="submit" className="chatBtn">
            SEND MESSAGE
          </button>
        </form>
        <div className="chatDiv">
          {this.state.message.map(el => (
            <Mess
              userName={el.userName}
              userImg={el.userImg}
              textMessage={el.textMessage}
              key={Date.now()}
            />
          ))}
        </div>
        <span className="closeChat" onClick={this.props.chatShow}>
          X
        </span>
      </div>
    );
  }
}

// Chat.propTypes ={
//     showChat: PropTypes.bool,
//     showChatHendler: PropTypes.func,

// };

function MSTP (state){
  return {
   showChat: state.showChat,
  }
  }

function MDTP (dispatch) {
      return {
        chatShow: function(){
            dispatch(chatShow())
        }
      }
    }


export default connect(MSTP,MDTP)(Chat);
