import "./register.css"

export default function Register() {
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
                    <h2 className="loginTitle">Sign In</h2>
                    <input type="text" placeholder="Username" />
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Password" />
                    <input type="text" placeholder="Confirm Password" />
                    <button className="logInBtn">Register Now</button>
                    <button className="newAccount">Log into Account</button>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}
