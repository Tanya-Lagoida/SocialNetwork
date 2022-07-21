import React from 'react';
import { addMessageActionCreator } from '../../redux/DialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { DialogType, MessageType } from '../../redux/state';
import { AppStateType } from '../../redux/ReduxStore';
import { Dispatch } from 'redux';

type MapStatePropsType = {
  dialogs: Array<DialogType>
  messages: Array<MessageType>
}

type MapDispatchPropsType = {
  AddNewMessageContainer: (NewMessage: string) => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages
  }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
  return {
    AddNewMessageContainer: (NewMessage: string) => {
      dispatch(addMessageActionCreator(NewMessage))
    }
  }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)