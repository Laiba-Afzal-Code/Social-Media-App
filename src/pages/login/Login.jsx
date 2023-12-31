import "./login.css"

export default function Login() {
  return (
    <>
      <div className="ligin">
        <div className="loginWarpper">
            <div className="loginLeft">
                <h3 className="loginLogo">LifeLink</h3>
                <span className="logintext">Connect with friends and the world around you on LifeLink</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <h2 className="loginTitle">Log In</h2>
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Password" />
                    <button className="logInBtn">Log In</button>
                    <span className="forgotpass">Forgot Password</span>
                    <button className="newAccount">Create a New Account</button>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}
