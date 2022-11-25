import axios from 'axios';
import { UserType } from '../redux/UsersReducer';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': 'b52a002d-f0a3-465d-96d7-30d5b1e7fca5'
  }

});

export enum ResultCodesEnum {
  Success = 0,
  Error = 1,
  CaptchaIsRequired = 10
}


type AuthAndLoginUsersResponseType<D> = {
  data: D
  resultCode: ResultCodesEnum
  messages: Array<string>
}

type ProfileResponseType = {
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  contacts: {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
  }
  photos: {
    small: string
    large: string
  }
}

export type UserResponseType = {
  items: Array<UserType>
  totalCount: number
  error: string
}

export const usersAPI = {
  getUsers(currentPage: number, pageSize: number) {
    return instance.get<UserResponseType>(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data);
  },
  unFollow(id: number) {
    return instance.delete<AuthAndLoginUsersResponseType<{}>>(`follow/${id}`);
  },
  follow(id: number) {
    return instance.post<AuthAndLoginUsersResponseType<{}>>(`follow/${id}`);
  },
  setUserProfile(userId: string) {
    console.warn('Obsolete method. Please ProfileAPI object.')
    return profileAPI.setUserProfile(userId)
  }

};

export const profileAPI = {
  setUserProfile(userId: string) {
    return instance.get<ProfileResponseType>(`profile/` + userId);
  },
  getStatus(userId: string) {
    return instance.get('profile/status/' + userId);
  },
  updateStatus(status: string) {
    return instance.put<AuthAndLoginUsersResponseType<{}>>('profile/status/', {status: status});
  }
};

export const authAPI = {
  authUsers() {
    return instance.get<AuthAndLoginUsersResponseType<{ id: number, email: string, login: string}>>(`auth/me`);
  },
  loginUser(email: string, password: string, rememberMe: boolean = false) {
    return instance.post<AuthAndLoginUsersResponseType<{ id: number}>>(`auth/login`, {email, password, rememberMe} )
  },
  logout() {
    return instance.delete<AuthAndLoginUsersResponseType<{}>>(`auth/login` )
  },
}











