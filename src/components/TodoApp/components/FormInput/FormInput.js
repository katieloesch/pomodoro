import React from "react";
import "./FormInput.scss";

const FormInput = ({
  name,
  element,
  type,
  placeholder,
  rows = 3,
  label,
  changeHandler,
  value,
}) => {
  const elementJSX =
    element === "input" ? (
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={changeHandler}
        value={value}
      />
    ) : (
      <textarea
        name={name}
        placeholder={placeholder}
        rows={rows}
        onChange={changeHandler}
        value={value}
      />
    );

  if (label) {
    return (
      <label>
        {`${label}: `}
        {elementJSX}
      </label>
    );
  } else {
    return elementJSX;
  }
};

export default FormInput;
