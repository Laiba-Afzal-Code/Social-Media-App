import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="\images\gift.png" alt="birthday" className="birthdayImg" />
          <span className="birthdayText">
            <b>Asra Mon</b> and <b>3-Others Friends</b> have birthday today!
          </span>
        </div>
        <img src="\images\qutes.webp" alt="quets" className="quetsadd" />
        <h3 className="addspons">Sponsored</h3>
        <div className="add">
          <img src="\images\asim.jpg" alt="adds" className="addimg" />
          <div className="text">
            <span className="addText">Asim-Jofa</span>
            <span className="addlink">asimjofa.com</span>
          </div>
        </div>
        <div className="add">
          <img src="\images\asim2.jpg" alt="adds" className="addimg" />
          <div className="text">
            <span className="addText">Edenrobe sale</span>
            <span className="addlink">edenrobe.com</span>
          </div>
        </div>
        <h3 className="onlineFriends">Online Friends</h3>
        <ul className="onlineFrriendsbar">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };
  const ProfileRightbar = ()=>{
 
    return(
      <>
    <h3 className="rightbarTilte">User Information</h3>
    <div className="rightbarinfo">
      <div className="rightbarInfiItem">
        <span className="rightbarInfoKey">City:</span>
        <span className="rightbarInfoValue">New York</span>
      </div>
      <div className="rightbarInfiItem">
        <span className="rightbarInfoKey">From:</span>
        <span className="rightbarInfoValue">Madired</span>
      </div>
      <div className="rightbarInfiItem">
        <span className="rightbarInfoKey">Job:</span>
        <span className="rightbarInfoValue">Development</span>
      </div>
      <div className="rightbarInfiItem">
        <span className="rightbarInfoKey">Education:</span>
        <span className="rightbarInfoValue">Graduation in Economics</span>
      </div>
      <div className="rightbarInfiItem">
        <span className="rightbarInfoKey">Relationship:</span>
        <span className="rightbarInfoValue">Single</span>
      </div>
    </div>
    <h3 className="rightbarUser">User Friends</h3>
    <div className="rightbarFollwings">
      <div className="rightbarFollwing">
        <img src="\images\men1.png" alt="follower" className="FollwerImg" />
        <span className="followerName">Herry</span>
      </div>
      <div className="rightbarFollwing">
        <img src="\images\men1.png" alt="follower" className="FollwerImg" />
        <span className="followerName">Lexdura Mora</span>
      </div>
      <div className="rightbarFollwing">
        <img src="\images\men2.jpg" alt="follower" className="FollwerImg" />
        <span className="followerName">Haris khan</span>
      </div>
      <div className="rightbarFollwing">
        <img src="\images\men.webp" alt="follower" className="FollwerImg" />
        <span className="followerName">Rohan Nabeel</span>
      </div>
      <div className="rightbarFollwing">
        <img src="\images\men4.jpg" alt="follower" className="FollwerImg" />
        <span className="followerName">Zyane Zen</span>
      </div>
      <div className="rightbarFollwing">
        <img src="\images\girl3jpg" alt="follower" className="FollwerImg" />
        <span className="followerName">Asra heksa</span>
      </div>
    </div>
    </>
      );
  }
  return (
    <>
      <div className="rightbar">
        <div className="rightbarWarpper">
   {profile ?  <ProfileRightbar/> : <HomeRightbar/>}
        </div>
      </div>
    </>
  );
}
