import React, { useState } from "react";
import FormInput from "../FormInput/FormInput";
import FormBtn from "../FormBtn/FormBtn";
import "./TodoForm.scss";

const TodoForm = ({ type, title, fields, defaultVals, onSubmit, btnTxt }) => {
  const [formData, setFormData] = useState(defaultVals);

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form
      className={`todo-form ${type}-form`}
      onSubmit={(e) => onSubmit(e, formData)}
    >
      <h3>{title}</h3>

      <div className="form-input-container">
        {fields &&
          fields.map((field) => {
            return (
              <FormInput
                key={`form-input-${field.name}`}
                name={field.name}
                element={field.element}
                type={field.type}
                placeholder={field.placeholder}
                rows={field.rows}
                label={field.label}
                changeHandler={handleFormChange}
                value={formData[field.name]}
              />
            );
          })}
      </div>

      <div className="form-btn-container">
        <FormBtn type="submit" txt={btnTxt} />
      </div>
    </form>
  );
};

export default TodoForm;
