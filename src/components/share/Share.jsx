import "./share.css"

export default function Share() {
  return (
    <>
      <div className="share">
        <div className="sharewapper">
    <div className="shareTop">
        <img src="\images\girl1.webp" alt="Person" className="shareImg"/>
        <input type="text" placeholder="What's in your Mind Alba" className="shareInput"/>
    </div>
    <hr className="shareHr" />
    <div className="shareBottom">
    <div className="shareOptions">
        <div className="shareOption">
        <i className="fa-regular fa-image"></i>
            <span className="sharetext">Photo & Video</span>
        </div>
        <div className="shareOption">
        <i className="fa-solid fa-face-smile-beam"></i>
            <span className="sharetext">Feelings</span>
        </div>
        <div className="shareOption">
        <i className="fa-solid fa-location-dot"></i>
            <span className="sharetext">Location</span>
        </div>
        <div className="shareOption">
        <i className="fa-solid fa-share-nodes"></i>
            <span className="sharetext">Share</span>
        </div>
    </div>
    </div>
        </div>
      </div>
    </>
  )
}
