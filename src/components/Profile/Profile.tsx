import React from "react";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import ProfileInfo  from './ProfileInfo/ProfileInfo';
import { updateStatusThunk } from '../../redux/ProfileReducer';

export type ProfilePropsType = {
  profile: any
  status: string
  updateStatusThunk: (status: string) => void
  // setUserProfileThunk: (userId: string) => void
}

const Profile = (props:ProfilePropsType) => {

  return (

    <div>
      <ProfileInfo profile={props.profile}
                   status={props.status}
                   updateStatusThunk={props.updateStatusThunk}/>
      <MyPostsContainer />
    </div>
  );
};

export default Profile;