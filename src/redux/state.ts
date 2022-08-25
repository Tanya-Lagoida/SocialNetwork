import { UserType } from './UsersReducer';

export type SidebarType = {
  id: number
  name: string
  avatar: string
}
export type MessageType = {
  id: number
  message: string
}
export type StateType = {
  profilePage: {
    posts: PostType[],
    profile: {}
  },
  dialogsPage: {
    dialogs: DialogType[]
    messages: MessageType[]
  },
  sidebarPage: {
    sidebarItems: SidebarType[]
  },
  usersPage: {
    users: UserType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
  }
}
export type PostType = {
  id: number
  message: string
  likesCount: number
}
export type DialogType = {
  id: number
  name: string
  avatar: string
}
export type AuthType = {
  userId: number | null
  email: string | null
  login: string | null
  isAuth: boolean
}

export type AddPostAC = {
  type: 'ADD-POST',
  NewPost: string
}
export type AddMessageAC = {
  type: 'ADD-MESSAGE',
  NewMessage: string
}
export type FollowAC = {
  type: 'FOLLOW',
  userId: number
}
export type UnFollowAC = {
  type: 'UNFOLLOW',
  userId: number
}
export type SetUsersAC = {
  type: 'SET_USERS',
  users: Array<UserType>
}
export type SetCurrentPageAC = {
  type: 'SET_CURRENT_PAGE',
  currentPage: number
}
export type SetTotalUsersCountAC = {
  type: 'SET_TOTAL_COUNT',
  count: number
}
export type ToggleIsFetchingAC = {
  type: 'TOGGLE_IS_FETCHING',
  isFetching: boolean
}
export type SetUserProfileAC = {
  type: 'SET_USER_PROFILE',
  profile: any
}
export type SetUserDataAC = {
  type: 'SET_USER_DATA',
  data: {
    userId: number | null, email: string | null, login: string | null
  }
}

export type FollowingInProgressAC = {
  type: 'FOLLOWING_IN_PROGRESS',
  isFetching: boolean,
  userId: number
}

export type ActionsType =  AddPostAC | AddMessageAC | FollowAC | UnFollowAC | SetUsersAC | SetCurrentPageAC | SetTotalUsersCountAC | ToggleIsFetchingAC | SetUserProfileAC | SetUserDataAC | FollowingInProgressAC










// export const onNewPostHandler = (newText: string) => {
//   state.profilePage.messageForNewPost = newText
// }





