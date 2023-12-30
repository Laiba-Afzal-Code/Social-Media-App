import "./online.css";

export default function Online({user}) {
    console.log(user)
  return (
    <>
      <li className="onlinefriendlist">
        <div className="profileimg">
          <img
            src={user.profilePicture}
            alt="onlnefriends"
            className="onlinefriendImg"
          />
          <span className="rightbarBonline"></span>
        </div>
        <span className="frriendName">{user.username}</span>
      </li>
    </>
  );
}
