import React from "react";
import ReactDOM from "react-dom";

const Modal = props => {
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className="ui dimmer modals visible active">
      <div
        onClick={e => e.stopPropagation()}
        className="ui standerd modal visible active"
      >
        <div className="header">{props.title}</div>
        <div className="content">
          <p>{props.content}</p>
          <div>{props.actions}</div>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
