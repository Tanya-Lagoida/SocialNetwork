import { ActionsType, AddPostAC, PostType } from './state';

export const profileReducer = (state: any, action: ActionsType) => {
  debugger
  switch (action.type) {
    case  'ADD-POST':
      const newPost: PostType = {
        id: 5,
        message: action.NewPost,
        likesCount: 0
      };
      state.posts.push(newPost);
      return state;
    default:
      return state;
  }
};

export const addPostActionCreator = (NewPost: string): AddPostAC => {
  return {
    type: 'ADD-POST',
    NewPost: NewPost
  }
}


