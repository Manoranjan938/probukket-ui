import { useEffect, useState, type ReactElement } from "react";

import "./style.css";

const Alert = (): ReactElement => {
  const [width, setWidth] = useState<number>(0);
  const [intervalID, setIntervalID] = useState<any>(null);

  const startTimer: any = () => {
    const interval = setInterval(() => {
      setWidth((prev) => {
        if (prev > 100) {
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

  useEffect(() => {
    startTimer();
  }, []);

  return (
    <div className="alert-wrapper">
      <div onMouseEnter={pauseTimer} className="alert-item success">
        <p>Some message</p>
        <div className="bar" style={{ width: `${width}` }}></div>
      </div>
    </div>
  );
};

export default Alert;
