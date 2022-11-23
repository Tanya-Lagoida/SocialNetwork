import React, { useState } from 'react';
import s from './Dialogs.module.css';
import { DialogItem } from './DialogItem/DialogItem';
import{ Message } from './Message/Message';
import { DialogsPropsType } from './DialogsContainer';
import AddMessageForm from './AddMessageForm';

export const Dialogs = (props: DialogsPropsType) => {

  let dialogsElements = props.dialogs.map((d: { name: string; id: number; avatar: string }) =>
    <DialogItem name={d.name} id={d.id} avatar={d.avatar}/>);
  let messagesElements = props.messages.map((m: { message: string; id: number; }) =>
    <Message message={m.message} id={m.id}/>);


  const [NewMessage, SetNewMessage] = useState('');

  const addNewMessage = (values: any) => {
    props.AddNewMessageContainer(values.newMessageBody)
    // SetNewMessage('')
  };

  type FormDataTypeMessage = {

  }

    return (
    <div className={s.allDialogs}>
      <h2>DIALOGS</h2>
      <div className={s.contacts}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
      </div>
      <AddMessageForm onSubmit={addNewMessage}/>
    </div>
  );
};



