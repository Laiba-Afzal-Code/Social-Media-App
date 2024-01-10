import axios from "axios";
import "./register.css";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const username = useRef();
  const email = useRef();
  const password = useRef();
  // const passwordAgain = useRef();

  const hendlebtnClick = async (e) => {
    e.preventDefault();
    const user = {
      username: username.current.value,
      email: email.current.value,
      password: password.current.value,
    };
    try {
      await axios.post("http://localhost:8800/api/auth/register", user);
      navigate("/login");
      console.log(user);
    } catch (error) {
      console.log(error);
    };
  };
  return (
    <>
      <div className="ligin">
        <div className="loginWarpper">
          <div className="loginLeft">
            <h3 className="loginLogo">LifeLink</h3>
            <span className="logintext">
              Connect with friends and the world around you on LifeLink
            </span>
          </div>
          <form className="loginRight" onSubmit={hendlebtnClick}>
            <div className="loginBox">
              <h2 className="loginTitle">Sign In</h2>
              <input
                type="text"
                placeholder="Username"
                required
                ref={username}
              />
              <input type="email" placeholder="Email" required ref={email} />
              <input
                type="password"
                placeholder="Password"
                required
                ref={password}
                minLength={6}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                required
                ref={password}
                minLength={6}
              />
              <button className="logInBtn" type="submit">
                Register Now
              </button>
              <button className="newAccount">Log into Account</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
