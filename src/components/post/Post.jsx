import { useState, useEffect, useContext } from "react";
import "./post.css";
import axios from 'axios';
import {format} from "timeago.js"
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function Post({post}) {
  const [like, setLike] = useState(post.like.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
const {user:currentUser} = useContext(AuthContext)

// console.log(post)
  useEffect(()=>{
    const fetchUser = async ()=>{
      const res =  await axios.get(`http://localhost:8800/api/users/?userId=${post.userId}`);
     setUser(res.data);
    }
    fetchUser()
  },[post.userId]);

  const handlelike = ()=>{
    try {
      axios.put("http://localhost:8800/api/post/" + post._id + "/like", {userId: user._id})
    } catch (error) {
      console.log(error)
    }
    console.log(like)
    setLike(isLiked ? like-1 : like+1);
    setIsLiked(!isLiked);
  }

  return (
    <>
      <div className="post">
        <div className="postWarpper">
          <div className="postTop">
            <div className="topLeft">
              <Link to={`/profile/${user.username}`}>
              <img
                src={user.profilePicture ? user.profilePicture : "/images/autouser.avif"}
                alt="post"
                className="postPersonImg"
              /></Link>
              <span className="personName">{user.username}</span>
              <span className="postTime">{format(post.createdAt)}</span>
            </div>
            <div className="topRight">
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </div>
          </div>
          <div className="topCenter">
            <span className="postText">
              {post?.desc}
            </span>
            <img src={post.img || "/images/qutes.webp"} alt="post" className="postPic" />
          </div>
          <div className="postBottom">
            <div className="postBottomLeft">
              <img src="\images\like.png" onClick={handlelike} alt="like" className="likeImg" />
              <img src="\images\heart.png" onClick={handlelike} alt="heart" className="likeImg" />
              <span className="liketext">{like}people like it!</span>
            </div>
            <div className="postBottomRight">
              <span className="postComments">{post.comment} comments</span>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
