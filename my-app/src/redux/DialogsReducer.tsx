import { ActionsType, AddMessageAC, MessageType } from './state';

export const dialogsReducer = (state: any, action: ActionsType) => {
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

