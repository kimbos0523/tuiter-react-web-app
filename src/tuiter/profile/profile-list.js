import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import {useSelector} from "react-redux";

const ProfileList = () => {
    const curProfile = useSelector(state => state.profile)
    console.log("profile-page")
    console.log(curProfile);
    const [profile, useProfile] = useState(curProfile);
    const navigate = useNavigate();
    const navigateEdit = () => {
        navigate('/tuiter/edit-profile');
    }

    return (
        <div className="wd-profile">
            <div className="wd-profile-head">
                <div className="row mb-2">
                    <div className="wd-profile-head-name col-auto float-left">
                        <i className="fa fa-arrow-left fa-1x me-2"/>
                        {`${profile.firstName} ${profile.lastName}`}
                    </div>
                </div>
            </div>
            <div className="wd-profile-image">
                <img className="img-fluid wd-banner-picture" src={`/images/${profile.bannerPicture}`}/>
                <img className="img-fluid wd-profile-picture position-relative" src={`/images/${profile.profilePicture}`}/>
            </div>
            <div className="wd-profile-body">
                <div className="row">
                    <div className="col-10 mb-2">
                        <div className="row wd-profile-name">
                            <div className="col-12">
                                {`${profile.firstName} ${profile.lastName}`}
                            </div>
                        </div>
                        <div className="row wd-profile-handle">
                            <div className="col-12">
                                {profile.handle}
                            </div>
                        </div>
                    </div>
                    <div className="col-2 float-end">
                        <button className="btn btn-light" onClick={navigateEdit}>Edit</button>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col-12">
                        {profile.bio}
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col-4">
                        <i className="fa fa-location-arrow fa-1x me-2"/>
                        {profile.location}
                    </div>
                    <div className="col-4">
                        <i className="fa fa-calendar fa-1x me-2"/>
                        {`Born ${profile.dateOfBirth}`}
                    </div>
                    <div className="col-4">
                        <i className="fa fa-calendar-check fa-1x me-2"/>
                        {`Joined ${profile.dateJoined}`}
                    </div>
                </div>
                <div className="row">
                    <div className="col-3 float-left">
                        {`${profile.followingCount}Following`}
                    </div>
                    <div className="col-3 float-left">
                        {`${profile.followersCount}Followers`}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProfileList;