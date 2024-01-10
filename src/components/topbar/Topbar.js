import "./topbar.css";
import {Link, useLocation} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../../context/AuthContext"

export default function Topbar() {
    const {user} = useContext(AuthContext);
    let location = useLocation();
    console.log(user);
  return (
    <div className="topbarcontainer">
        <div className="topbarLeft">
            <Link to="/home"className="logo">SocialLife</Link>
        </div>
        <div className="topbarcenter">
            <div className="searchbar">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search your Friends & Post" className="topbarinput"/>
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarLinks">
                <Link className={`toplink ${ location.pathname === "/home" ? "active" : ""} `} to="/home">Home</Link>
             
                <Link className={`toplink ${ location.pathname === "/login" ? "active" : ""} `} to="/login">TimeLine</Link>
            </div>
            <div className="topbaricons">
                <div className="topbariconitem">
            <i className="fa-solid fa-user"></i>
            <span className="topbariconBadge">1</span>
            </div>
                <div className="topbariconitem">
                <i className="fa-solid fa-comment-dots"></i>
            <span className="topbariconBadge">2</span>
            </div>
                <div className="topbariconitem">
                <i className="fa-solid fa-bell"></i>
            <span className="topbariconBadge">1</span>
            </div>
            </div>
            <Link className={`profile ${ location.pathname === "/profile" ? "active" : ""} `} to={`/profile/${user.username}`}>
            <img src={ user.profilePicture ? user.profilePicture : "/images/girl2.jpeg"} alt="profile" className="topimg" />
            </Link>
        </div>
    </div>
  );
};

