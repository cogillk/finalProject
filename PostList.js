import App from "../App"
import PostItem from "./PostItem"

const PostList = ({posts}) => {
    
    return (
        <div className='postList'>
            {posts.map((post, index) => (
                <PostItem post={post} key={index}/>
            ))}
        </div>
    )
} 

export default PostList; 