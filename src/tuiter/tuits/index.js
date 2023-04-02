import React, { useEffect } from "react";
import TuitItem from "./tuit-item";
import { useDispatch, useSelector } from "react-redux";
import { findTuitsThunk } from "../../services/tuits-thunks";
import "./index.css"

const TuitList = () => {
    const {tuits, loading} = useSelector(state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])
    // const tuitsArray = useSelector(state => state.tuits)
    return (
        <ul className="wd-posts list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {tuits.map(tuit => <TuitItem key={tuit._id} tuit={tuit}/>)}
        </ul>
    );
};
export default TuitList;