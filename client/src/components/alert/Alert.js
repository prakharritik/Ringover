import React, { useContext } from "react";
import { Context as AuthContext } from "../../context/AuthContext";
import "./Alert.scss";

const Alert = () => {
  const {
    state: { errorMessage },
  } = useContext(AuthContext);
  return errorMessage ? (
    <div className="alert" style={{ backgroundColor: "red" }}>
      <span
        className="closebtn"
        onclick="this.parentElement.style.display='none';"
      >
        ×
      </span>
      {errorMessage}
    </div>
  ) : null;
};

export default Alert;
