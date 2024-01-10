import "./profile.css"
import Topbar from '../../components/topbar/Topbar'
import Sidebar from "../../components/sidebar/Sidebar"
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"
import { useEffect, useState } from "react"
import axios from "axios"


export default function Profile() {
    const [user, setUser] = useState({});
    console.log(user);
    useEffect(()=>{
        const fetchUser = async ()=>{
            const res =  await axios.get(`http://localhost:8800/api/users/?username=Newuesrs`);
             setUser(res.data)
        }
        fetchUser()
      }, []);

  return (
    <>
         <Topbar/>
    <div className="profile">
        <Sidebar/>
        <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                <img className="profileCoverImg" src={user.coverPicture ? user.coverPicture : "/images/cover.avif"} alt="Coverimg" />
                <img className="profileUserImg" src={user.profilePicture ? user.profilePicture : "/images/girl2.jpeg"} alt="Userimg" />
                </div>
                <div className="profileInfo">
                    <h1 className="profileUsername">{user.username}</h1>
                    <span className="profileline">{user.desc}</span>
                </div>
            </div>
            <div className="profileRightBottom">
        <Feed username="asoman"/>
        <Rightbar user={user}/>
            </div>
        </div>
    </div>
    </>
  )
}
