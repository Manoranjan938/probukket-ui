import { type ReactElement } from "react";
import { FiMail } from "react-icons/fi";

import Button from "../../components/Button";
import { Link } from "react-router-dom";

import img from "src/assets/logo.png";

const Forgot = (): ReactElement => {
  return (
    <>
      <div className="form_header container">
        <div className="logo">
          <img src={img} alt="" />
          <Link to="/" className="nav__logo">
            ProBukket
          </Link>
        </div>
        <div className="header-btn">
          <span>Don&apos;t have account</span>
          <Link to="/signup">
            <Button title="Sign up" classes="small-btn blu-btn" />
          </Link>
        </div>
      </div>
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
          <Link to="/login" className="redirect-link">
            Sign in
          </Link>
        </form>
      </section>
    </>
  );
};

export default Forgot;
