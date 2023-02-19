import PostItem from "./PostItem.js";
import posts from "./posts.js"

const PostList = () => {
    return(`
      <ul class="wd-posts list-groups">
        ${posts.map(post => {return(PostItem(post));}).join('')}
      </ul> 
    `)
}

export default PostList;