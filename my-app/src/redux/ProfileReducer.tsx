import { ActionsType, AddPostAC, PostType } from './state';

const initialState = {
  posts: [
    { id: 1, message: "Hi,how are you?", likesCount: 5 },
    { id: 2, message: "It is me!", likesCount: 11 },
    { id: 3, message: "It is cool!", likesCount: 16 }
  ]
};

export const profileReducer = (state: {posts: PostType[]} = initialState, action: ActionsType): {posts: PostType[]} => {
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


