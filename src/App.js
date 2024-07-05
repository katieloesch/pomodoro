import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import ConfettiExplosion from "react-confetti-explosion";

import { Home, Login, Register } from "./components/TodoApp/Pages";
import { PageNotFound } from "./components/Shared";
import { Pomodoro } from "./components/PomodoroTimer";

function App() {
  const [confetti, setConfetti] = useState(false);

  const startConfetti = () => {
    setConfetti(true);
    setTimeout(() => {
      setConfetti(false);
    }, 4000);
  };
  return (
    <React.Fragment>
      {confetti && (
        <div className="confetti-explosion">
          <ConfettiExplosion />
        </div>
      )}
      <Pomodoro startConfetti={startConfetti} setShowInfoModal="" />
      <div className="todo-app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;
