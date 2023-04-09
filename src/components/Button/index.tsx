import type { ReactNode, ReactElement } from "react";
import "./style.css";

interface ButtonProps {
  title: string;
  classes: string;
  children?: ReactNode;
  onClick?: () => void;
}

const Button = ({
  title,
  classes,
  children,
  onClick,
}: ButtonProps): ReactElement => {
  return (
    <button type="button" className={classes} onClick={onClick}>
      {children ? <div className="btn-icon">{children}</div> : null}
      <span className="btn-title">{title}</span>
    </button>
  );
};

export default Button;
