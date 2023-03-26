import {createSlice} from "@reduxjs/toolkit";

const initialProfile = {
    firstName: "Bo Sung",
    lastName: "Kim",
    handle: "@kimbos",
    profilePicture: "kimbos.png",
    bannerPicture: "programming.png",
    bio: "Student at Northeastern University, Seeking for full-time job, Software Engineer, and renewable enthusiast.",
    website: "youtube.com/webdevtv",
    location: "Boston, MA",
    dateOfBirth: "05/23/1992",
    dateJoined: "9/2016",
    followingCount: 340,
    followersCount: 223,
};

const profileSlice = createSlice({
    name: "profile",
    initialState: initialProfile,
    reducers: {
        updateProfile(state, action) {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.handle = action.payload.handle;
            state.profilePicture = action.payload.profilePicture;
            state.bannerPicture = action.payload.bannerPicture;
            state.bio = action.payload.bio;
            state.website = action.payload.website;
            state.location = action.payload.location;
            state.dateOfBirth = action.payload.dateOfBirth;
            state.dateJoined = action.payload.dateJoined;
            state.followingCount = action.payload.followingCount;
            state.followersCount = action.payload.followersCount;
        },
    },
});

export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer;
