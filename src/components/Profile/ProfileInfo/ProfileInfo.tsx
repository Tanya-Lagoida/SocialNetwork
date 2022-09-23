import React from 'react';
import s from './ProfileInfo.module.css';
import { Preloader } from '../../common/Preloader';
import yes from '../../../images/yes.png';
import no from '../../../images/no.png';
import userPhoto from '../../../images/images.png';


// export type ProfileType = {
//   photos: {large: string}
//   aboutMe: string
//   fullName: string
//   lookingForAJob: boolean
// }

type ProfileInfoType = {
  profile: any
}

const ProfileInfo = (props: ProfileInfoType) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div>
      <div className={s.img}>
        <img
          src='https://www.meme-arsenal.com/memes/99120c6e36030e6bae1a5b1aaa70a94b.jpg'/>
      </div>
      <div>
        {
          <img className={s.avaImage} src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto } alt="" />
        }

        <div>{props.profile.aboutMe}</div>
        <div>{props.profile.fullName}</div>
        <div>lookingForAJob {(props.profile.lookingForAJob)
          ? <img className={s.yesNo} src={yes}/>
          : <img className={s.yesNo} src={no}/>
        }
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;