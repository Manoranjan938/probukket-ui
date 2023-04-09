import { type ReactElement, useState } from "react";
import { FiMail, FiUser } from "react-icons/fi";
import { CiLock } from "react-icons/ci";

import Button from "../../components/Button";
import { Link } from "react-router-dom";

import img from "src/assets/logo.png";
import { HiOutlinePaperAirplane } from "react-icons/hi";

const Signup = (): ReactElement => {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleClick = (): void => {
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      setTimeout((): void => {
        setIsSent(false);
      }, 2500);
    }, 2000);
  };

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
          <span>Already playing with probukket?</span>
          <Link to="/login">
            <Button title="Sign in" classes="small-btn blu-btn" />
          </Link>
        </div>
      </div>

      <section className="form_section">
        <div className="form_title">
          <h2>Let&apos;s Go!</h2>
        </div>
        <form className="login_form">
          <div className="input-group">
            <label>Full Name</label>
            <div className="input-section">
              <div className="input-icon">
                <FiUser />
              </div>
              <input type="text" name="" id="" placeholder="John Mathew" />
            </div>
          </div>
          <div className="input-group">
            <label>Email</label>
            <div className="input-section">
              <div className="input-icon">
                <FiMail />
              </div>
              <input type="text" name="" id="" placeholder="example@site.com" />
            </div>
          </div>
          <div className="input-group">
            <label>Password</label>
            <div className="input-section">
              <div className="input-icon">
                <CiLock />
              </div>
              <input
                type="text"
                name=""
                id=""
                placeholder="Minimum 8 characters"
              />
            </div>
          </div>
          <div className="input-group">
            <Button
              title={
                isSending ? "Sending..." : isSent ? " Sent" : "Play with us"
              }
              classes={
                isSending || isSent
                  ? "btn blu-btn w-100 sending"
                  : "btn blu-btn w-100"
              }
              onClick={handleClick}
            >
              <HiOutlinePaperAirplane />
            </Button>
          </div>
          <Link to="/login" className="redirect-link">
            Signin
          </Link>
        </form>
      </section>
    </>
  );
};

export default Signup;
