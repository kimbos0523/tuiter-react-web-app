import React from "react";
import postsArray from "./posts.json";
import PostItem from "./post-item";

const PostListItem = () => {
    return (
        <ul className="wd-posts list-groups">
            {postsArray.map(post => <PostItem post={post}/>)}
        </ul>
    );
};
export default PostListItem;