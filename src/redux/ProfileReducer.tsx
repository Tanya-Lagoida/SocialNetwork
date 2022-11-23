import { ActionsType, AddPostAC, PostType, SetStatusAC, SetUserProfileAC } from './state';
import { profileAPI } from '../api/api';

const initialState = {
  posts: [
    { id: 1, message: "Hi,how are you?", likesCount: 5 },
    { id: 2, message: "It is me!", likesCount: 11 },
    { id: 3, message: "It is cool!", likesCount: 16 }
  ] as Array<PostType>,
  profile: null,
  status: ""
}

export type InitialStateType = typeof initialState

export const profileReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case  'ADD-POST':
      const newPost: PostType = {
        id: 5,
        message: action.newPostText,
        likesCount: 0
      };

      return {
        ...state,
        posts: [...state.posts, newPost]
      };
    case 'SET_USER_PROFILE':
      return {
        ...state,
        profile: action.profile
      }
    case 'SET_STATUS':
      return {
        ...state,
        status: action.status
      }
    default:
      return state;
  }
};

export const addPostActionCreator = (newPostText: string): AddPostAC => ({ type: 'ADD-POST', newPostText })
export const setUserProfileAC = (profile: any): SetUserProfileAC => ({ type: 'SET_USER_PROFILE', profile })
export const setStatusAC = (status: string): SetStatusAC => ({ type: 'SET_STATUS', status })

export const setUserProfileThunk = (userId: string) => (dispatch: any) => {
  profileAPI.setUserProfile(userId)
    .then(response => {
      dispatch(setUserProfileAC(response.data))
    });
}
export const getUserStatusThunk = (userId: string) => (dispatch: any) => {
  profileAPI.getStatus(userId)
    .then(response => {
      dispatch(setStatusAC(response.data))
    });
}
export const updateStatusThunk = (status: string) => (dispatch: any) => {
  profileAPI.updateStatus(status)
    .then(response => {
      if(response.data.resultCode === 0) {
        dispatch(setStatusAC(status));
      }
    });
}



