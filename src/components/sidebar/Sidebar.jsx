import Closefriends from "../closefriends/Closefriends"
import "./sidebar.css"
import { Users } from "../../dummyData"

export default function Sidebar() {
  return (
    <>
        <div className="sidebar">
        <div className="sidebarWarpper">
        <ul className="sidebarlist">
            <li className="sidebarlistitem">
            <i className="fa-solid fa-rss"></i>
            <span className="sidebarlisttext">Feed</span>
            </li>
            <li className="sidebarlistitem">
            <i className="fa-solid fa-comment-dots"></i>
            <span className="sidebarlisttext">Chats</span>
            </li>
            <li className="sidebarlistitem">
            <i className="fa-solid fa-circle-play"></i>
            <span className="sidebarlisttext">Video</span>
            </li>
            <li className="sidebarlistitem">
            <i className="fa-solid fa-user-group"></i>
            <span className="sidebarlisttext">Groups</span>
            </li>
            <li className="sidebarlistitem">
            <i className="fa-solid fa-bookmark"></i>
            <span className="sidebarlisttext">Bookmarks</span>
            </li>
            <li className="sidebarlistitem">
            <i className="fa-solid fa-circle-question"></i>
            <span className="sidebarlisttext">Questions</span>
            </li>
            <li className="sidebarlistitem">
            <i className="fa-solid fa-briefcase"></i>
            <span className="sidebarlisttext">Jobs</span>
            </li>
            <li className="sidebarlistitem">
            <i className="fa-solid fa-calendar-days"></i>
            <span className="sidebarlisttext">Events</span>
            </li>
            <li className="sidebarlistitem">
            <i className="fa-solid fa-graduation-cap"></i>
            <span className="sidebarlisttext">Courses</span>
            </li>
        </ul>
        <button className="sidebarbtn">Show More</button>
        <hr className="sidebarHr"/>
        <ul className="sidebarfriendlist">
        {Users.map(u=>(
                <Closefriends key={u.id} user={u} />
               ))}
            
        </ul>
        </div>
        </div>
      
    </>
  )
}
