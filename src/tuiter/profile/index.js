import React from "react";
import ProfileList from "./profile-list"
import "./index.css";

const ProfileComponent = () => {
    return (
        <>
            <div className={"row mt-2"}>
                <ProfileList/>
            </div>
        </>
    );
};
export default ProfileComponent;