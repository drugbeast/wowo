import PropTypes from "prop-types";

import Sender from "../../assets/icons/sender.svg?react"
import cn from "./Message.module.css"

Message.propTypes = {
  message: PropTypes.object,
};

function Message({ message }) {
  return (
    <div className={cn.message}>
      <div className={cn.field}>
        <span className={cn.text}>{message.text}</span>
        <span className={cn.username}>({message.login})</span>
      </div>
      <Sender />
    </div>
  )
}

export default Message;
