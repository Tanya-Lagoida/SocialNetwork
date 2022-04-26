import { ActionsType, SidebarType } from './state';
const initialState = {
  sidebarItems: [
    {
      id: 1,
      name: "Sergej",
      avatar: 'https://i.pinimg.com/236x/5f/61/a0/5f61a0e798a7291ec37bcb79b4f44cad.jpg'
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
    }
  ]
};

type InitialStateType = {
  sidebarItems: Array<SidebarType>
}

export const sidebarReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
  return state;
};
