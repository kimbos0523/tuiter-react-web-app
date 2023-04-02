import React from "react";
import {updateTuitThunk} from "../../services/tuits-thunks";
import { useDispatch, useSelector } from "react-redux";
const TuitStats = (
    {
        tuit = {
            "replies": "4.2K",
            "retuits": "3.5K",
            "liked": false,
            "likes": "37.5K"
        }
    }
) => {
    const dispatch = useDispatch();
    return(
        <div className="wd-post-icons row">
            <div className="wd-post-comments col-3">
                <i className="fa fa-comment fa-1x me-1"></i>
                {tuit.replies}
            </div>
            <div className="wd-post-retweets col-3">
                <i className="fa fa-retweet fa-1x me-1"></i>
                {tuit.retuits}
            </div>
            <div className="wd-post-likes col-3" style={{color: "red"}}>
                Likes: {tuit.likes}
                <i onClick={() => dispatch(updateTuitThunk({
                    ...tuit,
                    likes: tuit.likes + 1
                }))} className="bi bi-heart-fill me-2 text-danger"></i>
            </div>
            {/*<div className="wd-post-likes col-3" style={{color: "red"}}>*/}
            {/*    {tuit.liked ? <i className="fa fa-heart fa-1x icon-like me-1"></i> : <i className="fa fa-heart-o fa-1x me-1"></i>}*/}
            {/*    {tuit.likes}*/}
            {/*</div>*/}
            <div className="wd-post-downloads col-3">
                <i className="fa fa-download fa-1x"></i>
            </div>
        </div>
    );
};
export default TuitStats;