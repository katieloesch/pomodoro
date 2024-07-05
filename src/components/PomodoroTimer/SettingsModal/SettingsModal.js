import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import { Backdrop } from "../../Shared";
import { PomodoroSetting } from "../";
import "./SettingsModal.scss";

const Overlay = ({
  settings,
  onCancel,
  updateSettings,
  setTimerId,
  setActiveTimer,
  className,
  style,
  headerClass,
  header,
  contentClass,
  footerClass,
}) => {
  const overlayRef = useRef(null);

  const content = (
    <div className={`modal ${className} style=${style}`} ref={overlayRef}>
      <header className={`modal__header ${headerClass}`}>
        <h2>{header}</h2>
      </header>
      <div className={`modal__content ${contentClass}`}>
        <div className="settings-container">
          {settings &&
            settings.map((setting, index) => (
              <PomodoroSetting
                label={setting.label}
                type={setting.type}
                value={setting.value}
                settings={settings}
                updateSettings={updateSettings}
                id={setting.id}
                key={`setting-${index}`}
                setTimerId={setTimerId}
                setActiveTimer={setActiveTimer}
                bg={setting.bg}
                colour={setting.colour}
              />
            ))}
        </div>
      </div>

      <footer className={`modal__footer ${footerClass}`}>
        <button className="btn-close-modal" onClick={onCancel}>
          done
        </button>
      </footer>
    </div>
  );
  return ReactDOM.createPortal(
    content,
    document.getElementById("modal-settings-hook")
  );
};

const SettingsModal = (props) => {
  const nodeRef = useRef(null);
  return (
    <React.Fragment>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
        nodeRef={nodeRef}
      >
        <Overlay {...props} />
      </CSSTransition>
    </React.Fragment>
  );
};

export default SettingsModal;
