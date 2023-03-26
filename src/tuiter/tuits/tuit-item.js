import React from "react";
import TuitStats from "./tuit-stats";
import {useDispatch} from "react-redux";
import {deleteTuit} from "./tuits-reducer";

const TuitItem = (
    {
        tuit = {
            "userName": "SpaceX",
            "handle": "@spacex",
            "time": "2h",
            "image": "spacex.png",
            "liked": true,
            "replies": "123",
            "retuits": "432",
            "likes": "2345",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better th"
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }

    return(
        <li className="wd-posts list-group-item mb-2">
            <div className="row">
                <div className="col-1">
                    <img className="wd-post-avatar" src={`/images/${tuit.image}`}/>
                </div>
                <div className="col-11">
                    <div className="row mb-3">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-12">
                                    {`${tuit.userName}  `}
                                    <i className="fa fa-check-circle fa-1x me-1"/>
                                    <span className="wd-post-handle me-1">
                                        {tuit.handle}
                                    </span>
                                    <span className="wd-post-time">
                                        &middot; {tuit.time}
                                    </span>
                                    <i className="bi bi-x-lg float-end"
                                       onClick={() => deleteTuitHandler(tuit._id)}></i>
                                </div>
                            </div>
                            <div className="row">
                                <div className="wd-post-comment col-12">
                                    {tuit.tuit}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*icons*/}
                    <TuitStats tuit={tuit}/>
                </div>
            </div>
        </li>
    );
};
export default TuitItem;