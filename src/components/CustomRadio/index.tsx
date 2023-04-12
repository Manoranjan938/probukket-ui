import { type ReactElement } from "react";

import "./style.css";

const CustomRadio = (): ReactElement => {
  return (
    <>
      <input type="radio" name="option" id="" />
      <div className="option_content">
        <i className="fas fa-user-graduate" />
        <h4>Project</h4>
      </div>
    </>
  );
};

export default CustomRadio;
