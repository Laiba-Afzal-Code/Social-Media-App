import "./topbar.css";

export default function Topbar() {
  return (
    <div className="topbarcontainer">
        <div className="topbarLeft">
            <h1 className="logo">Lifelink</h1>
        </div>
        <div className="topbarcenter">
            <div className="searchbar">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search your Friends & Post" className="topbarinput"/>
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarLinks">
                <span className="toplink">Home</span>
                <span className="toplink">TimeLine</span>
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
            <img src="\images\girl1.webp" alt="profile" className="topimg" />
        </div>
    
    </div>
  )
}
