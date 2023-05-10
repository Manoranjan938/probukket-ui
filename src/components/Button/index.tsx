import type { ReactNode, ReactElement } from "react";
import "./style.css";

interface ButtonProps {
  title: string;
  classes: string;
  children?: ReactNode;
  onClick?: () => void;
  btnType?: string;
}

const Button = ({
  title,
  classes,
  children,
  onClick,
  btnType,
}: ButtonProps): ReactElement => {
  return (
    <button type="button" className={classes} onClick={onClick}>
      {children ? (
        <div className={btnType ? "btn-icon" : "btn-icon-not-rev"}>
          {children}
        </div>
      ) : null}
      <span className="btn-title">{title}</span>
    </button>
  );
};

export default Button;
