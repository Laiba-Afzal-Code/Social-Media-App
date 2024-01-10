import { useContext, useRef } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const { user, isFatching, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const email = useRef();
  const password = useRef();
  const hendlebtnClick = async (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
      );
      navigate("/home");
  };
  console.log(user);
  console.log(error);

  return (
    <>
      <div className="ligin">
        <div className="loginWarpper">
          <div className="loginLeft">
            <h3 className="loginLogo">SocialLife</h3>
            <span className="logintext">
              Connect with friends and the world around you on LifeLink
            </span>
          </div>
          <form className="loginRight" 
                onSubmit={hendlebtnClick}>
            <div className="loginBox">
              <h2 className="loginTitle">Log In</h2>
              <input type="email" placeholder="Email" required ref={email} />
              <input
                type="password"
                placeholder="Password"
                required
                minLength={6}
                ref={password}
              />
              <button
                className="logInBtn"
                type="submit"
                disabled={isFatching}
              >
                {isFatching ? (
                  <div
                    className="spinner-border spinner-border-sm"
                    role="status"
                  >
                    <span className="visually-hidden">Loading...</span>
                  </div>
                ) : (
                  "Log In"
                )}
              </button>
              <span className="forgotpass">Forgot Password</span>
              <button className="newAccount">
                {isFatching ? (
                  <div
                    className="spinner-border spinner-border-sm"
                    role="status"
                  >
                    <span className="visually-hidden">Loading...</span>
                  </div>
                ) : (
                  "Create new account"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
