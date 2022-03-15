import React from 'react';
import { addMessageActionCreator } from '../../redux/DialogsReducer';
import Dialogs from './Dialogs';
import { StoreContext } from '../../StoreContext';

export const DialogsContainer = () => {

  return <StoreContext.Consumer>
    {
      (store) => {
        const state = store.getState().dialogsPage

        const AddNewMessageContainer = (NewMessage: string) => {
          store.dispatch(addMessageActionCreator(NewMessage))

        };
        return <Dialogs
        dialogs={state.dialogs}
        messages={state.messages}
        AddNewMessageContainer={AddNewMessageContainer}/>
      }
    }
    </StoreContext.Consumer>
};
