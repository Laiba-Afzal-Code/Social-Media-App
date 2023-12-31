import { useState } from "react";
import "./post.css";
import { Users } from "../../dummyData";

export default function Post({post}) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  const handlelike = ()=>{
    console.log(like)
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }

  return (
    <>
      <div className="post">
        <div className="postWarpper">
          <div className="postTop">
            <div className="topLeft">
              <img
                src={Users.filter((u)=>u.id===post.userId)[0].profilePicture}
                alt="post"
                className="postPersonImg"
              />
              <span className="personName">{Users.filter((u)=>u.id===post.userId)[0].username}</span>
              <span className="postTime">{post.time}</span>
            </div>
            <div className="topRight">
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </div>
          </div>
          <div className="topCenter">
            <span className="postText">
              {post?.desc}
            </span>
            <img src={post.photo} alt="post" className="postPic" />
          </div>
          <div className="postBottom">
            <div className="postBottomLeft">
              <img src="\images\like.png" onClick={handlelike} alt="like" className="likeImg" />
              <img src="\images\heart.png" onClick={handlelike} alt="heart" className="likeImg" />
              <span className="liketext">{like} people like it!</span>
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
