import { type ReactElement } from "react";

import "./style.css";

interface CustomProps {
  icon?: any;
  title: string;
  subtitle?: string;
  classes: string;
}

const CustomRadio = ({
  classes,
  title,
  subtitle,
  icon,
}: CustomProps): ReactElement => {
  return (
    <>
      <input type="radio" name="option" id="" />
      <div className={classes}>
        <span className="radio_icon">{icon}</span>
        <div className="radio_content">
          <h4>{title}</h4>
          {subtitle ? <span>{subtitle}</span> : null}
        </div>
      </div>
    </>
  );
};

export default CustomRadio;
