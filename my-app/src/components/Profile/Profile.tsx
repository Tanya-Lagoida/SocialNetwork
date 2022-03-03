import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { ActionsType, PostType } from '../../redux/state';

type ProfileType = {
  posts: PostType[];
  dispatch: (action: ActionsType) => void
  // onNewPostHandler: (newText: string) => void
}

const Profile = (props:ProfileType) => {
  return (
    <div>
      <ProfileInfo/>
      <MyPosts posts={props.posts} dispatch={props.dispatch} />
    </div>
  );
};

export default Profile;