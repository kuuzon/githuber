import React from 'react';
import { AiFillInfoCircle } from 'react-icons/ai';

const Alert = (props) => {
  // Destructuring (can be done in parameter)
  const { alertMessage, alertColor } = props;

  return (
    // OPERATION: Provided Message & Type are not empty, Alert must be displayed as follows:
    alertMessage && alertColor !== "" && (
      <div className={`alert alert-${alertColor} vertical-align`}>
        <AiFillInfoCircle style={{ fontSize: "1.4rem"}} />
        <span style={{ marginLeft: "0.5rem"}}>{alertMessage}</span>
      </div>
    )
  )
}

export default Alert