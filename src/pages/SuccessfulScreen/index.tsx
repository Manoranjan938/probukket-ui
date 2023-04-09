import React, { type ReactElement } from "react";
import { Link } from "react-router-dom";

import logo from "src/assets/logo.png";
import mail from "src/assets/svgs/sent-email.svg";

import "./style.css";

const SignupSuccess = (): ReactElement => {
  return (
    <div className="success_container">
      <div className="img_section">
        <img src={logo} alt="" />
        <span>ProBukket</span>
      </div>
      <div className="content_section">
        <div className="verify__body__header">
          <span className="title">Check your inbox to setup</span>
        </div>
        <div className="verify__body__content">
          <div className="verify_email_contents">
            <img src={mail} alt="" />
            <p>We have sent you the setup email to your email address.</p>
            <p>
              To complete setup and login, click the verification link in the
              email we&apos;ve sent to
            </p>
            <span>sahoomanoranjan626@gmail.com</span>
          </div>
          <div className="devider" />
          <div className="verify_links">
            <Link to="/" className="redirect-link">
              Go back / Go to home
            </Link>
            <Link to="/login" className="redirect-link">
              Resend verfication email
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupSuccess;
