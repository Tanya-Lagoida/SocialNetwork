import React, { ChangeEvent, useState } from 'react';
import { NavLink, Route } from 'react-router-dom';
import s from './Dialogs.module.css';
import { loremIpsum } from 'react-lorem-ipsum';
import { DialogItem } from './DialogItem/DialogItem';
import Message, { MessagePropsType } from './Message/Message';
import { DialogItemPropsType } from './DialogItem/DialogItem';
import { DialogType, MessageType } from '../../redux/state';

type DialogsType = {
  dialogs: DialogType[];
  messages: MessageType[];
}

const Dialogs = (props: DialogsType) => {

  let dialogsElements = props.dialogs.map((d: { name: string; id: number; avatar: string }) =>
    <DialogItem name={d.name} id={d.id} avatar={d.avatar}/>);
  let messagesElements = props.messages.map((m: { message: string; id: number; }) =>
    <Message message={m.message} id={m.id}/>);


  const [NewMessage, SetNewMessage] = useState('');
  const onNewMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    SetNewMessage(e.currentTarget.value);
  };

  const AddNewMessage = () => {
    return alert(NewMessage);
  };

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