import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function Rightbar({ user }) {
  console.log(user);
  const [friends, setFriends] = useState([]);
  const [followed, setFollowed] = useState(false);
  const { user: currentUser, dispatch} = useContext(AuthContext);

  useEffect(() => {
    setFollowed(currentUser.followings.includes(user?._id));
  }, [currentUser, user._id]);
  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get(
          "http://localhost:8800/api/users/friends/" + user._id
        );
        console.log(friendList);
        setFriends(friendList.data);
      } catch (error) {
        console.log(error);
      }
    };
    getFriends();
  }, [user]);
  const FollowHendler = async (e) => {
    // e.preventDefault();
    try {
      if(followed){
        await axios.put("http://localhost:8800/api/users/"+ user._id + "/unfollow", {userId:currentUser._id},);
        dispatch({type: "UNFOLLOW", payload: user._id })
      }else{
        await axios.put("http://localhost:8800/api/users/"+ user._id + "/follow", {userId:currentUser._id},);
        dispatch({type: "FOLLOW", payload: user._id })
      }
    } catch (error) {
      console.log(error);
    };
    setFollowed(!followed);
  };
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
  const ProfileRightbar = () => {
    return (
      <>
        {user.username !== currentUser.username && (
          <button className="rightbarFollowBtn" onClick={FollowHendler}>
            {followed ? "UnFollow " : "Follow "}
            {followed ? <i className="fa-solid fa-minus"></i> : <i className="fa-solid fa-plus"></i>}
            
          </button>
        )}
        <h3 className="rightbarTilte">User Information</h3>
        <div className="rightbarinfo">
          <div className="rightbarInfiItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfiItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>
          <div className="rightbarInfiItem">
            <span className="rightbarInfoKey">Job:</span>
            <span className="rightbarInfoValue">
              {user.job === 1
                ? "doing work"
                : user.job === 2
                ? "Finding"
                : "Not work"}
            </span>
          </div>
          <div className="rightbarInfiItem">
            <span className="rightbarInfoKey">Education:</span>
            <span className="rightbarInfoValue">{user.education}</span>
          </div>
          <div className="rightbarInfiItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">
              {user.relationship === 1
                ? "Single"
                : user.relationship === 2
                ? "Married"
                : " "}
            </span>
          </div>
        </div>
        <h3 className="rightbarUser">User Friends</h3>
        <div className="rightbarFollwings">
          {friends.map((friend) => (
            <Link
            key={friend._id}
              to={"/profile/" + friend.username}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="rightbarFollwing">
                <img
                  src={
                    user.profilePicture
                      ? user.profilePicture
                      : "/images/autouser.avif"
                  }
                  alt="follower"
                  className="FollwerImg"
                />
                <span className="followerName">{user.username}</span>
              </div>
            </Link>
          ))}
        </div>
      </>
    );
  };
  return (
    <>
      <div className="rightbar">
        <div className="rightbarWarpper">
          {user ? <ProfileRightbar /> : <HomeRightbar />}
        </div>
      </div>
    </>
  );
}
