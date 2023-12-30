import "./rightbar.css"
import { Users } from "../../dummyData" 
import Online from "../online/Online"

export default function Rightbar() {
  return (
    <>
      <div className="rightbar">
        <div className="rightbarWarpper">
            <div className="birthdayContainer">
                <img src="\images\gift.png" alt="birthday" className="birthdayImg"/>
                <span className="birthdayText"><b>Asra Mon</b> and <b>3-Others Friends</b> have birthday today!</span>
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
               {Users.map(u=>(
                <Online key={u.id} user={u} />
               ))}
                
            </ul>
        </div>
      </div>
    </>
  )
}
