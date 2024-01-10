import "./share.css";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

export default function Share() {
  const { user } = useContext(AuthContext);
  const desc = useRef();
  const [file, setFile] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("file", file);
      data.append("name", fileName);
      newPost.img = fileName;
      try {
        await axios.post("http://localhost:8800/api/upload", data);
      } catch (error) {
        console.log(error);
      }
    }

    try {
      await axios.post("http://localhost:8800/api/post/createpost", newPost);
    } catch (error) {}
  };
  return (
    <>
      <div className="share">
        <div className="sharewapper">
          <div className="shareTop">
            <img
              src={
                user.profilePicture ? user.profilePicture : "/images/girl2.jpeg"
              }
              alt="Person"
              className="shareImg"
            />
            <input
              type="text"
              placeholder={"What's in your mind " + user.username + "?"}
              ref={desc}
              className="shareInput"
            />
          </div>
          <hr className="shareHr" />
          {file && (
            <div className="shareimgContainer">
              <img
                className="shareimg"
                src={URL.createObjectURL(file)}
                alt="post"
              />
              <i
                className="fa-solid fa-xmark shareCancle"
                onClick={() => setFile(null)}
              ></i>
            </div>
          )}
          <form className="shareBottom" onSubmit={submitHandler}>
            <div className="shareOptions">
              <label htmlFor="file" className="shareOption">
                <i className="fa-regular fa-image"></i>
                <span className="sharetext">Photo & Video</span>
                <input
                  style={{ display: "none" }}
                  type="file"
                  id="file"
                  accept=".png, .jpeg, .jpg, .svg"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </label>
              <div className="shareOption">
                <i className="fa-solid fa-face-smile-beam"></i>
                <span className="sharetext">Feelings</span>
              </div>
              <div className="shareOption">
                <i className="fa-solid fa-location-dot"></i>
                <span className="sharetext">Location</span>
              </div>
              <button type="submit" className="shareOption btn">
                <i className="fa-solid fa-share-nodes"></i>
                <span className="sharetext">Share</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
