import React from "react";
import "./FormBtn.scss";

const FormBtn = ({ type, txt = "submit" }) => {
  return (
    <button className="form-btn" type={type}>
      {txt}
    </button>
  );
};

export default FormBtn;
