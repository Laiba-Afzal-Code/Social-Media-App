import "./closefriends.css"

export default function Closefriends({user}) {
  return (
    <div>
      <li className="sidebarFriends">
                <img src={user.profilePicture} alt="Friends" className="sidelistFriendsImg"/>
                <span className="firendsname">{user.username}</span>
            </li>
    </div>
  )
}
