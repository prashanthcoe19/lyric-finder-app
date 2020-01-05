import React from "react";

const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div className={`alert alert-light`}>
        <i class="fas fa-exclamation-triangle" />
        Please Enter Something
      </div>
    )
  );
};
export default Alert;
