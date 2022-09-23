import React from "react";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import ProfileInfo  from './ProfileInfo/ProfileInfo';

export type ProfilePropsType = {
  profile: any
  setUserProfileThunk: (userId: string) => void
}

const Profile = (props:ProfilePropsType) => {

  return (

    <div>
      <ProfileInfo profile={props.profile}/>
      <MyPostsContainer />
    </div>
  );
};

export default Profile;