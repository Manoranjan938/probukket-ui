import { useEffect, useState, type ReactElement } from "react";
import { useDispatch } from "react-redux";
import { removeAlert } from "src/store/slices/alertSlice";

import "./style.css";

interface AlertProps {
  type: string;
  message: string;
  id: string;
}

const Alert = ({ id, type, message }: AlertProps): ReactElement => {
  const [width, setWidth] = useState<number>(0);
  const [intervalID, setIntervalID] = useState<any>(null);
  const [exit, setExit] = useState<boolean>(false);
  const dispatch = useDispatch();

  const startTimer: any = () => {
    const interval = setInterval(() => {
      setWidth((prev) => {
        if (prev < 100) {
          return prev + 0.5;
        }

        clearInterval(interval);
        return prev;
      });
    }, 20);
    setIntervalID(interval);
  };

  const pauseTimer: any = () => {
    clearInterval(intervalID);
  };

  const closeAlert: any = () => {
    pauseTimer();
    setExit(true);
    setTimeout(() => {
      dispatch(removeAlert(id));
    }, 400);
  };

  useEffect(() => {
    startTimer();
  }, []);

  useEffect(() => {
    if (width === 100) {
      closeAlert();
    }
  }, [width]);

  return (
    <div className="alert-wrapper">
      <div
        onMouseEnter={pauseTimer}
        onMouseLeave={startTimer}
        className={`alert-item ${type === "success" ? "success" : "error"} 
        ${exit ? "exit" : ""}`}
      >
        <p>{message}</p>
        <div className="bar" style={{ width: `${width}%` }}></div>
      </div>
    </div>
  );
};

export default Alert;
