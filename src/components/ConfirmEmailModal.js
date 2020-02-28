import React, { useState, useEffect } from "react";

const ConfirmEmailModal = props => {
  const [message] = useState(props.message);
  const [show, setShow] = useState(props.show);
  useEffect(() => {
    setShow(false);
  });
  return (
    <div className={show ? "modal display-block" : "modal display-none"}>
      <section className="modal-main">{message}</section>
    </div>
  );
};
export default ConfirmEmailModal;
