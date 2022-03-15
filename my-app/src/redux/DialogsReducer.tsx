import { ActionsType, AddMessageAC, DialogType, MessageType } from './state';
const initialState = {
  dialogs: [
    {
      id: 1,
      name: "Sergej",
      avatar: 'https://i.pinimg.com/236x/5f/61/a0/5f61a0e798a7291ec37bcb79b4f44cad.jpg'
    },
    {
      id: 2,
      name: "Tanya",
      avatar: 'https://i.pinimg.com/236x/60/6d/02/606d029cef1deadc5465beab017e4482.jpg'
    },
    {
      id: 3,
      name: "Sasha",
      avatar: 'https://i.pinimg.com/236x/27/9a/ff/279aff7cf8b03bbd6940157213373e6d.jpg'
    },
    {
      id: 4,
      name: "Nadya",
      avatar: 'https://i.pinimg.com/236x/fc/45/bc/fc45bc384dc480701e1ea4a1fb8966eb.jpg'
    },
    {
      id: 5,
      name: "Pavel",
      avatar: 'https://i.pinimg.com/236x/a7/c6/b9/a7c6b930164a35551774e1ab20ad93d5.jpg'
    },
    {
      id: 6,
      name: "Senya",
      avatar: 'https://i.pinimg.com/236x/12/85/36/128536679d8ce50ebafeeb6dbc564829.jpg'
    }
  ],
  messages: [
    { id: 1, message: "Hi! How are you?" },
    { id: 2, message: "Hi! How are you?" },
    { id: 3, message: "Hi! How are you?" }
  ]
};

export const dialogsReducer = (state: {dialogs: DialogType[], messages: MessageType[]} = initialState, action: ActionsType): {dialogs: DialogType[], messages: MessageType[]} => {
  switch (action.type) {
    case 'ADD-MESSAGE':
      const newMessage: MessageType = {
        id: 4,
        message: action.NewMessage
      };
      state.messages.push(newMessage);
      return state;
    default:
      return state;
  }
};

export const addMessageActionCreator = (NewMessage: string): AddMessageAC => {
  return {
    type: 'ADD-MESSAGE',
    NewMessage: NewMessage
  }
}

