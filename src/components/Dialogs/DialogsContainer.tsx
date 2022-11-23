import React from 'react';
import { addMessageActionCreator } from '../../redux/DialogsReducer';
import { Dialogs } from './Dialogs';
import { connect } from 'react-redux';
import { DialogType, MessageType } from '../../redux/state';
import { AppStateType } from '../../redux/ReduxStore';
import { compose, Dispatch } from 'redux';
import { withAuthRedirect } from '../../hoc/WithAuthRedirect';

type MapStatePropsType = {
  dialogs: Array<DialogType>
  messages: Array<MessageType>
}

type MapDispatchPropsType = {
  AddNewMessageContainer: (newMessageBody: string) => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
  }
}



const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
  return {
    AddNewMessageContainer: (newMessageBody: string) => {
      dispatch(addMessageActionCreator(newMessageBody))
    }
  }
}

 export const DialogsContainer = compose<React.ComponentType>(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)


