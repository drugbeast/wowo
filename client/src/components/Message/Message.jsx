import PropTypes from "prop-types";

import AnotherSender from "../../assets/icons/another-sender.svg?react";
import Sender from "../../assets/icons/sender.svg?react";
import { useAuth } from "../../hooks/use-auth";
import cn from "./Message.module.css";

Message.propTypes = {
  message: PropTypes.object,
};

function Message({ message }) {
  const { user } = useAuth();
  return (
    <div
      className={
        message.email == user.email
          ? [cn.container, cn.user].join(" ")
          : [cn.container, cn.anotherUser].join(" ")
      }
    >
      <div
        className={
          message.email == user.email
            ? [cn.message, cn.user].join(" ")
            : [cn.message, cn.anotherUser].join(" ")
        }
      >
        <div
          className={
            message.email == user.email
              ? [cn.field, cn.user].join(" ")
              : [cn.field, cn.anotherUser].join(" ")
          }
        >
          <span
            className={
              message.email == user.email
                ? [cn.text, cn.user].join(" ")
                : [cn.text, cn.anotherUser].join(" ")
            }
          >
            {message.text}
          </span>
          <span
            className={
              message.email == user.email
                ? [cn.username, cn.user].join(" ")
                : [cn.username, cn.anotherUser].join(" ")
            }
          >
            ({message.email})
          </span>
        </div>
        {message.email == user.email ? <Sender /> : <AnotherSender />}
      </div>
    </div>
  );
}

export default Message;
