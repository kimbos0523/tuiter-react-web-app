import React, {useState} from "react";
import "./index.css"

import {useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {updateProfile} from "../profile/profile-reducer";

const EditProfile = () => {
    const curProfile = useSelector((state) => state.profile);
    const [profile, setProfile] = useState(curProfile);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const editProfile = () => {
        dispatch(updateProfile(profile));
        navigate("/tuiter/profile");
    };

    return (
        <div className="row mt-2">
            {/*Header*/}
            <div className="wd-edit-head row mb-2">
                <div className="wd-edit-left-arrow col-1">
                    <i className="fa fa-arrow-left fa-1x"/>
                </div>
                <div className="wd-edit-head-name col-9">Edit Profile</div>
                <div className="col-2 float-end">
                    <button className="btn btn-dark btn-edit-save" onClick={editProfile}>
                        Save
                    </button>
                </div>
            </div>
            <div className="wd-edit-image row">
                <div className="col-12">
                    <div className="wd-profile-image">
                        <img className="img-fluid wd-banner-picture" src={`/images/${profile.bannerPicture}`}/>
                        <img className="img-fluid wd-profile-picture position-relative" src={`/images/${profile.profilePicture}`}/>
                    </div>
                </div>
            </div>

            {/*EditName*/}
            <div className="mb-3">
                <label htmlFor="profile-first-name" className="form-label">
                    First Name
                </label>
                <input
                    className="form-control"
                    id="profile-first-name"
                    value={profile.firstName}
                    placeholder={profile.firstName}
                    onChange={(event) => {
                        const newFirstName = {
                            ...profile,
                            firstName: event.target.value
                        }
                        setProfile(newFirstName);
                    }}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="profile-last-name" className="form-label">
                    Last Name
                </label>
                <input
                    className="form-control"
                    id="profile-last-name"
                    value={profile.lastName}
                    placeholder={profile.lastName}
                    onChange={(event) => {
                        const newLastName = {
                            ...profile,
                            lastName: event.target.value
                        }
                        setProfile(newLastName);
                    }}
                />
            </div>

            {/*EditBio*/}
            <div className="mb-3">
                <label htmlFor="profile-bio" className="form-label">
                    Bio
                </label>
                <br></br>
                <textarea
                    className="form-control"
                    id="bio"
                    placeholder={profile.bio}
                    value={profile.bio}
                    onChange={(event) => {
                        const newBio = {
                            ...profile,
                            bio: event.target.value
                        }
                        setProfile(newBio);
                    }}
                ></textarea>
            </div>

            {/*<EditLocation/>*/}
            <div className="mb-3">
                <label htmlFor="profile-location" className="form-label">
                    Location
                </label>
                <input
                    className="form-control"
                    id="profile-location"
                    value={profile.location}
                    placeholder={profile.location}
                    onChange={(event) => {
                        const newLocation = {
                            ...profile,
                            location: event.target.value
                        }
                        setProfile(newLocation);
                    }}
                />
            </div>

            {/*<EditWebsite/>*/}
            <div className="mb-3">
                <label htmlFor="profile-website" className="form-label">
                    Website
                </label>
                <input
                    className="form-control"
                    id="profile-website"
                    value={profile.website}
                    placeholder={profile.website}
                    onChange={(event) => {
                        const newWebsite = {
                            ...profile,
                            website: event.target.value
                        }
                        setProfile(newWebsite);
                    }}
                />
            </div>

            {/*<EditDate/>*/}
            <div className="mb-3">
                <label htmlFor="profile-date" className="form-label">
                    Date Of Birth
                </label>
                <input
                    className="form-control"
                    id="profile-date"
                    value={profile.dateOfBirth}
                    placeholder={profile.dateOfBirth}
                    onChange={(event) => {
                        const newDate = {
                            ...profile,
                            dateOfBirth: event.target.value
                        }
                        setProfile(newDate);
                    }}
                />
            </div>
        </div>
    );
};
export default EditProfile;
