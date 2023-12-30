import Post from "../post/Post"
import Share from "../share/Share"
import "./feed.css"
import { Posts } from "../../dummyData"

export default function Feed() {
  return (
    <>
    <div className="feed">
        <Share/>
        {Posts.map((p) => {
          return <Post key={p.id} post={p} />
          // eslint-disable-next-line
        })}
        
        
    </div>
        
      
    </>
  )
}
