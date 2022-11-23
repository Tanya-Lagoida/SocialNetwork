import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': 'b52a002d-f0a3-465d-96d7-30d5b1e7fca5'
  }

});

export const usersAPI = {
  getUsers(currentPage: number, pageSize: number) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data);
  },
  unFollow(id: number) {
    return instance.delete(`follow/${id}`);
  },
  follow(id: number) {
    return instance.post(`follow/${id}`);
  },
  setUserProfile(userId: string) {
    console.warn('Obsolete method. Please ProfileAPI object.')
    return profileAPI.setUserProfile(userId)
  }

};

export const profileAPI = {
  setUserProfile(userId: string) {
    return instance.get(`profile/` + userId);
  },
  getStatus(userId: string) {
    return instance.get('profile/status/' + userId);
  },
  updateStatus(status: string) {
    return instance.put('profile/status/', {status: status});
  }
};

export const authAPI = {
  authUsers() {
    return instance.get(`auth/me`);
  },
  loginUser(email: string, password: string, rememberMe: boolean = false) {
    return instance.post(`auth/login`, {email, password, rememberMe} )
  },
  logout() {
    return instance.delete(`auth/login` )
  },
}











