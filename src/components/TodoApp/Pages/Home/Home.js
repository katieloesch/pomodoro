import React from "react";
import { Link } from "react-router-dom";

import "./Home.scss";
import TodoForm from "../../components/TodoForm/TodoForm";

const Home = () => {
  const submitNewTodo = (e, formData) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="home">
      <header className="home-header">
        <h1 className="home-header__title">Tasks</h1>
        <div className="home-header__menu">
          <button className="home-header__menu-btn btn-login">
            <Link to="/login">login</Link>
          </button>
          <button className="home-header__menu-btn btn-register">
            <Link to="/register">register</Link>
          </button>
        </div>
      </header>

      <div className="form-container">
        <TodoForm
          type="add-new-todo"
          title="Add New Todo"
          fields={[
            {
              name: "title",
              element: "input",
              type: "text",
              placeholder: "title",
            },
            {
              name: "description",
              element: "textarea",
              rows: 6,
              type: "text",
              placeholder: "description",
            },
          ]}
          defaultVals={{
            title: "",
            description: "",
          }}
          onSubmit={submitNewTodo}
          btnTxt="add Todo"
        />
      </div>
    </div>
  );
};

export default Home;
