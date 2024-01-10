import { AuthContext } from "../../context/AuthContext";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import axios from "axios";
import { useState, useEffect, useContext } from "react";

export default function Feed({ username }) {
  const [posts, setPost] = useState([]);
  const {user} = useContext(AuthContext);
  useEffect(() => {
    const fetchpost = async () => {
      const res =  username ? await axios.get("http://localhost:8800/api/post/profile/" + username)
        : await axios.get("http://localhost:8800/api/post/timeline/" + user._id);
        // console.log(res);
        setPost(res.data.sort((p1, p2)=>{
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        }));
    };
    fetchpost();
  }, [username, user._id]);
  return (
    <>
      <div className="feed">
        {username === user.username && <Share />}
        {posts.map((p) => {
          return <Post key={p._id} post={p} />;
          // eslint-disable-next-line
        })}
      </div>
    </>
  );
}
