import React from "react";
import PostList from "../post-list"
import "./index.css";

const HomeComponent = () => {
    return (
        <>
           <div className={"row mt-2"}>
               <PostList/>
           </div>
        </>
    );
};
export default HomeComponent;