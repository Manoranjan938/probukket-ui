import { type ReactElement } from "react";
import "./style.css";

interface ButtonProps {
  title: string;
  classes: string;
}

const Button = ({ title, classes }: ButtonProps): ReactElement => {
  return (
    <button type="button" className={classes}>
      {title}
    </button>
  );
};

export default Button;
