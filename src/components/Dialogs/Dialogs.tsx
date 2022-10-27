import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import { NavLink, Redirect, Route } from 'react-router-dom';
import s from './Dialogs.module.css';
import { DialogItem } from './DialogItem/DialogItem';
import{ Message, MessagePropsType } from './Message/Message';
import { DialogsPropsType } from './DialogsContainer';

const Dialogs = (props: DialogsPropsType) => {

  let dialogsElements = props.dialogs.map((d: { name: string; id: number; avatar: string }) =>
    <DialogItem name={d.name} id={d.id} avatar={d.avatar}/>);
  let messagesElements = props.messages.map((m: { message: string; id: number; }) =>
    <Message message={m.message} id={m.id}/>);


  const [NewMessage, SetNewMessage] = useState('');
  const onNewMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    SetNewMessage(e.currentTarget.value);
  };

  const AddNewMessage = () => {
    props.AddNewMessageContainer(NewMessage)
    SetNewMessage('')
  };

  // const onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
  //   if (e.code === 'Enter' && NewMessage.trim() !== '') {
  //     props.AddNewMessageContainer(NewMessage);
  //     SetNewMessage('');
  //   }
  // };

    return (
    <div className={s.allDialogs}>
      <h2>DIALOGS</h2>
      <div className={s.contacts}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
        <div>
          <textarea
            value={NewMessage}
            // onKeyPress={onKeyPressHandler}
            onChange={onNewMessageHandler} />
        </div>

        <div>
          <button onClick={AddNewMessage}>Add message</button>
        </div>
      </div>

    </div>
  );
};
export default Dialogs;