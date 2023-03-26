import React from "react";
import TuitItem from "./tuit-item";
import { useSelector } from "react-redux";
import "./index.css"

const TuitList = () => {
    const tuitsArray = useSelector(state => state.tuits)
    return (
        <ul className="wd-posts list-group">
            {tuitsArray.map(tuit => <TuitItem key={tuit._id} tuit={tuit}/>)}
        </ul>
    );
};
export default TuitList;