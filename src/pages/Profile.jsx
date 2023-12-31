import "./profile.css"
import Topbar from '../components/topbar/Topbar'
import Sidebar from "../components/sidebar/Sidebar"
import Feed from "../components/feed/Feed"
import Rightbar from "../components/rightbar/Rightbar"

export default function Profile() {
  return (
    <>
         <Topbar/>
    <div className="profile">
        <Sidebar/>
        <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                <img className="profileCoverImg" src="/images/nature.jpg" alt="Coverimg" />
                <img className="profileUserImg" src="/images/men2.jpg" alt="Userimg" />
                </div>
                <div className="profileInfo">
                    <h1 className="profileUsername">AlbaTross</h1>
                    <span className="profileline">Reset, Refresh, Restart</span>
                </div>
            </div>
            <div className="profileRightBottom">
        <Feed/>
        <Rightbar/>
            </div>
        </div>
    </div>
    </>
  )
}
