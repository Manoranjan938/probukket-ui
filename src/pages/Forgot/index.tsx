import { type ReactElement } from "react";
import { FiMail } from "react-icons/fi";

import Button from "../../components/Button";
import { Link } from "react-router-dom";

const Forgot = (): ReactElement => {
  return (
    <section className="form_section">
      <div className="form_title">
        <h2>You forgot password?</h2>
      </div>
      <form className="login_form">
        <div className="input-group">
          <label>Email</label>
          <div className="input-section">
            <div className="input-icon">
              <FiMail />
            </div>
            <input type="text" name="" id="" placeholder="Enter you email" />
          </div>
        </div>
        <div className="input-group">
          <Button title="Send me the link" classes="btn blu-btn w-100" />
        </div>
        <Link to="/signin" className="link">
          Sign in
        </Link>
      </form>
    </section>
  );
};

export default Forgot;
